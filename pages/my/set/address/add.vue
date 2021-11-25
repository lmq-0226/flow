<template>
	<view class="content">
		<view class="form">
			<view class="write">
				<u-field
					v-model="name"
					label="收货人"
					placeholder="请输入姓名"
				>
				</u-field>
				<u-field
					v-model="tell"
					label="手机号码"
					type="number"
					:maxlength="11"
					placeholder="请输入手机号码"
				>
				</u-field>
				<u-field
					v-model="area"
					label="所在地区"
					placeholder="请选择所在地区"
					right-icon="arrow-right"
					:disabled="true"
					@click="show = true"
					
				>
				</u-field>
				<u-field
					v-model="address"
					label="详细地址"
					placeholder="请输入道路、小区、门牌号等"
				>
				</u-field>
			</view>
			<view class="default">
				<text>默认地址</text>
				<u-switch v-model="checked" size="35" active-color="#F35455"></u-switch>
			</view>
		</view>
		
		<view class="save">
			保存
		</view>
		<u-picker v-model="show" mode="region" @confirm="getArea" :default-region='["江苏省", "苏州市", "相城区"]' :safe-area-inset-bottom="true"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '', // 新增/编辑
				name: '', // 姓名
				tell: '', // 手机号
				area: '', // 地区
				address: '', // 详细地址
				show: false, // 地区选择器
				checked: false ,// 默认地址开关
				defArea: ["13", "1303", "130304"]
			};
		},
		onReady() {
			
		},
		// 编辑》删除地址
		onNavigationBarButtonTap() {  
			console.log("点击了自定义按钮");  
		}  ,
		onLoad(option) {
			this.type = option.type
			var timer = setTimeout(()=>{
				this.setNview()
				clearTimeout(timer)
			},100)
			
		},
		methods:{
			del(){
				console.log(111)
			},
			getArea(e){
				this.area = e.area.label + '-' + e.city.label + '-' + e.province.label
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
