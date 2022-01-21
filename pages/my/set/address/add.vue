<template>
	<view class="content">
		<view class="form">
			<view class="write">
				<u-field
					v-show="focus"
					v-model="subData.name"
					label="收货人"
					placeholder="请输入姓名"
				>
				</u-field>
				<u-field
					v-show="focus"
					v-model="subData.mobile"
					label="手机号码"
					type="number"
					:maxlength="11"
					placeholder="请输入手机号码"
				>
				</u-field>
				<u-field
					v-model="subData.province +  subData.city + subData.district"
					label="所在地区"
					placeholder="请选择所在地区"
					right-icon="arrow-right"
					:disabled="true"
					@click="show = true"
				>
				</u-field>
				<u-field
					v-model="subData.address"
					label="详细地址"
					type="textarea"
					placeholder="支持智能联想,输入小区名试试~"
					@input="changeInput"
					@focus="focus = false"
					@blur="focusHide"
					:disabled="subData.formatted_address.length <= 0"
				>
				</u-field>
			</view>
			<scroll-view :scroll-y="true" v-show="!focus" class="address_scroll">
				<view class="address_item" v-for="(item,index) in areaList" :key="index" @tap="checkAddress(item)">
					<text>{{item.name}}</text>
					<view>{{item.address}}</view>
				</view>
			</scroll-view>
			<view class="default" v-show="focus">
				<text>默认地址</text>
				<u-switch v-model="checked" size="35" active-color="#F35455"></u-switch>
			</view>
		</view>
		
		<view class="save" @click="send" v-show="focus">
			保存
		</view>
		<u-picker 
			v-model="show" 
			mode="region" 
			@confirm="getArea" 
			:default-region='defArea' 
			:safe-area-inset-bottom="true"
		></u-picker>
		<u-modal v-model="delShow" content="确定删除该地址吗？" :show-cancel-button="true" @confirm="del"></u-modal>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				type: '', // 新增/编辑
				
				subData: {
					adcode: "",
					address: "",
					address_name: "",
					city: "",
					citycode: "",
					country: "中国",
					default: 0,
					district: "",
					formatted_address: "",
					location: "",
					mobile: "",
					name: "",
					province: ""
				},
				show: false, // 地区选择器
				checked: false ,// 默认地址开关
				defArea: [],
				delShow: false,
				areaObj: {},
				focus: true,
				areaList: []
			};
		},
		onReady() {
			
		},
		// 编辑》删除地址
		onNavigationBarButtonTap() {  
			this.delShow = true
		},
		onLoad(option) {
			this.type = option.type
			if(option.type == 'edit'){
				this.subData.id = option.id
				this.subData = JSON.parse(option.detail)
				this.id = JSON.parse(option.detail).id
				this.setDetail(JSON.parse(option.detail))
			}
			var timer = setTimeout(()=>{
				this.setNview()
				clearTimeout(timer)
			},100)
		},
		methods:{
			del(){
				this.request({
					url: 'wanlshop/address/deladdress',
					header: {
						"Content-Type": "application/json;charset=UTF-8",
						"token": uni.getStorageSync('userInfo').token,
					},
					data: {
						id: this.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.showToast({
							title: '删除成功',
							icon: 'none'
						})
						uni.navigateBack({
							delta: 1
						})
					}
				})
			},
			getArea(e){
				if(e.city.label == '市辖区'){
					this.subData.city = e.province.label
				}else{
					this.subData.city = e.city.label
				}
				this.subData.citycode = e.city.value
				this.subData.province = e.province.label
				this.subData.district = e.area.label
				this.subData.formatted_address = e.province.label + e.city.label + e.area.label
				this.defArea = [e.province.label, e.city.label, e.area.label]
				uni.request({
					url: 'https://restapi.amap.com/v3/geocode/geo',
					method: 'GET',
					data: {
						'address': this.subData.formatted_address,
						'key': 'd210b1ae26368deb246f4420f81cd6ce'
					},
					success: res => {
						if(res.data.status == 1){
							this.areaObj = res.data.geocodes[0]
							this.subData.address = ''
							this.subData.address_name = ''
						}
					},
					fail: () => {},
					complete: () => {}
				})
			},
			changeInput(e){
				uni.request({
					url: 'https://restapi.amap.com/v3/assistant/inputtips',
					method: 'GET',
					data: {
						'key': 'd210b1ae26368deb246f4420f81cd6ce',
						'keywords': e,
						'location': this.areaObj.location,
						'city': this.areaObj.adcode
					},
					success: res => {
						console.log(res)
						if(res.data.status == 1){
							let addressList = [];
							res.data.tips.forEach(item => {
								if (item.address.length == 0) {
									item.address = '暂未收录地址';
									item.location = '113.294701,22.666562';
								}
								addressList.push(item);
							});
							this.areaList = addressList;
						}
					},
					fail: () => {},
					complete: () => {}
				})
			},
			checkAddress(e){
				this.subData.adcode = e.adcode
				this.subData.address = e.address
				this.subData.address_name = e.name
				this.subData.location = e.location
			},
			// 提交地址
			send(){
				if(this.checked){
					this.subData.default = 1
				}else{
					this.subData.default = 0
				}
				this.request({
					url: 'wanlshop/address/address',
					header: {
						"Content-Type": "application/json;charset=UTF-8",
						"token": uni.getStorageSync('userInfo').token,
					},
					data: {
						data: this.subData,
						type: this.type
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						uni.navigateBack({
							delta: 1
						})
					}
				})
			},
			// 动态设置titleNview
			setNview(){
				// #ifdef APP-PLUS
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				var currentWebview = page.$getAppWebview();
				var tn = currentWebview.getStyle().titleNView;
				if(this.type == 'edit'){
					tn.tags[0].text = '编辑地址'
				}else{
					tn.tags[0].text = '新增地址'
					tn.buttons = []
				}
				currentWebview.setStyle({
				    titleNView: tn
				})
				// #endif
				// #ifdef H5
				if(this.type == 'edit'){
					uni.setNavigationBarTitle({
						title: '编辑地址'
					})
				}else{
					uni.setNavigationBarTitle({
						title: '新增地址'
					})
				}
				// #endif
			},
			// 编辑设置默认值
			setDetail(e){
				this.subData = e
				let str = e.province + '-' + e.city + '-' + e.district
				this.defArea = str.split('-') 
				console.log(this.defArea)
				this.checked = e.default == 1 ? true : false
			},
			focusHide(){
				let timer = setTimeout(()=>{
					this.focus = true
				}, 10)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 50rpx;
		.form{
			width: 100%;
			.write{
				border-top: solid 10rpx #F6F5FA;
				border-bottom: solid 10rpx #F6F5FA;
				padding: 0 30rpx;
				/deep/ .u-label-text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #333333;
				}
				/deep/ .uni-input-input{
					font-size: 30rpx;
					font-weight: bold;
				}
			}
			.address_scroll{
				.address_item{
					padding: 10rpx 20rpx;
					text{
						display: block;
					}
					>:nth-child(1){
						font-size: 24rpx;
						
					}
					>:nth-child(2){
						margin-top: 5rpx;
						font-size: 28rpx;
					}
				}
			}
			
			.default{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 37rpx 30rpx;
				border-bottom: solid 1px #F7F7FB;
			}
		}
		.save{
			width: 690rpx;
			height: 74rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #F35455;
			border-radius: 6rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
		}
	}
</style>
