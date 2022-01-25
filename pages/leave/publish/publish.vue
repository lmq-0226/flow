<template>
	<view class="content">
		<view class="pub">
			<view class="pubDetail">
				<view class="imgs">
					<view class="" v-for="(item,index) in images" :key="index" @click="pvew(index)">
						<image :src="ImgUrl + item" mode="heightFix"></image>
						<image src="/static/my/close2.png" mode="" @click.stop="del(index)"></image>
						<text v-if="index == 0 && type == 'sale'">封面</text>
					</view>
					<image src="/static/leave/upload.png" mode="" @click="upload()"></image>
				</view>
				<!-- 平台寄卖 -->
				<view class="" v-if="type == 'consign'">
					<u-input :custom-style="customStyle" v-model="name" type="text" placeholder="输入寄卖商品名称~" :clearable="false" />
					<u-input :custom-style="customStyle" v-model="content" type="textarea" placeholder="给鉴定师多一些对商品的描述..." :clearable="false" />
				</view>
				<!-- 拍图售卖 -->
				<view class="" v-else>
					<u-input :custom-style="customStyle" v-model="name" type="text" placeholder="填写标题" :clearable="false" />
					<u-input :custom-style="customStyle" v-model="content" type="textarea" placeholder="买家都关心品牌型号、入手渠道、转售原因..." :clearable="false" />
				</view>
				<view class="area" @click="getLoacltion">
					<image src="/static/my/location.png" mode=""></image>
					<text>{{area}}</text>
				</view>
			</view>
			<view class="classify" :style="'height: '+ classHeight +';overflow: hidden;'">
				<view class="lettle">
					<view class="">
						<image src="/static/leave/classify.png" mode=""></image>
						<text>{{classStatus ? classListTitle[0] : classListTitle.join('/')}}</text>
					</view>
					<image v-if="classStatus" src="/static/leave/on.png" mode="" @click="classStatus = false,classHeight = '88rpx'"></image>
					<image v-else src="/static/leave/down.png" mode="" @click="classStatus = true,classHeight = '100%'"></image>
				</view>
				<view class="classitem" v-for="(item,index) in classList" :key="index">
					<text class="title" v-if="index > 0">{{item.lettle}}</text>
					<text v-for="(elem,cut) in item.class" :key="cut" :class="activeList.indexOf(elem) > -1 ? 'active' : ''" @click="select(index,elem)">{{elem}}</text>
				</view>
			</view>
			<view class="classify price" :style="'height: '+ priceHeight +';overflow: hidden;'">
				<view class="lettle">
					<view class="">
						<image src="/static/leave/money.png" mode=""></image>
						<text>价格</text>
					</view>
					<image v-if="priceStatus" src="/static/leave/on.png" mode="" @click="priceStatus = false,priceHeight = '88rpx'"></image>
					<image v-else src="/static/leave/down.png" mode="" @click="priceStatus = true,priceHeight = '100%'"></image>
				</view>
				<view class="num">
					<view class="">
						<text>售价 ¥</text>
						<u-input v-model="price" type="number" :clearable="false" placeholder="请输入售价"/>
					</view>
				</view>
				<view class="num" v-if="type == 'sale'">
					<view class="">
						<text>原价 ¥</text>
						<u-input v-model="original_price" type="number" :clearable="false" placeholder="请输入原价"/>
					</view>
				</view>
				<view class="num" v-if="type == 'sale'">
					<view class="">
						<text>运费 ¥</text>
						<u-input v-model="express_fee" type="text" :focus="express_type == 3 ? true : false" :disabled="express_type != 3" :clearable="false" placeholder="请输入运费"/>
					</view>
					<view class="">
						<text :class="express_type == 1 ? 'active' : ''" @click="express_type = 1,express_fee = '0.00'">包邮</text>
						<!-- <text :class="express_type == 2 ? 'active' : ''" @click="express_type = 2,express_fee = ''">距离估算</text> -->
						<text :class="express_type == 3 ? 'active' : ''" @click="express_type = 3,express_fee = ''">固定运费</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="" @click="publish(4)">
				<image src="/static/leave/draft.png" mode=""></image>
				<text>存草稿</text>
			</view>
			<!-- <text v-if="type == 1" @click="go('./affirm/affirm?type=' + type)">立即发布</text> -->
			<text @click="publish(1)">立即发布</text>
		</view>
		<u-modal v-model="show" content="是否重新编辑草稿箱数据？" :show-cancel-button="true" @confirm="go('/pages/my/released/released?current=1&type=' + type)"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import permision from "@/utils/permission.js"
	export default {
		data() {
			return {
				show: false,
				type: '', // consign是寄卖 sale是拍卖
				customStyle: {
					background: '#F6F5FA',
					marginTop: '20rpx',
					paddingLeft: '20rpx',
					borderRadius: '10rpx'
				},
				classList: [
					// {
					// 	lettle: '分类',class:['运动鞋', '帆布鞋', '高跟鞋', '平底鞋', '皮鞋']
					// },
					// {
					// 	lettle: '来源',class:['代购', '他人赠送', '线下专柜']
					// },
					// {
					// 	lettle: '状态',class:['全新', '几乎全新', '轻微使用痕迹', '明显使用痕迹']
					// }
				],
				classListTitle: [],
				classHeight: '100%', // 分类动态高度
				priceHeight: '100%', // 价格动态高度
				classStatus: true, // 下拉框状态
				priceStatus: true,
				activeList: ['', ''] ,// 分类、来源、状态id
				// form: {
				token: uni.getStorageSync('userInfo').token,
				image: '',
				images: [], // 本地图片列表
				name: '', // 名称
				content: '', // 描述
				price: '', // 售价
				original_price: '', // 原价
				express_fee: '' ,// 运费
				source: '', // 来源
				state: '', // 成色
				brand_id: '', // 品牌id
				category_id: '', // 分类id
				express_type: 2, // 1包邮/2距离估算/3固定运费
				status: 1,// 1=在售 4=存草稿
				area: '未知',
				site: ''
				// }
			};
		},
		onLoad(option) {
			console.log(option)
			this.getConfig()
			this.type = option.type
			if(option.site){
				this.site = option.site
			}
			// 先获取闲置发布草稿箱 如果是1就是编辑进来的，就不请求草稿箱
			if(option.current != 1){
				this.getDraft(option.type)
			}
			this.category_id = option.category_id
			this.brand_id = option.brand_id
			if(option.id){
				this.id = option.id
			}
		},
		onShow() {
			if(this.id){
				this.getDetail(this.id)
			}
		},
		methods:{
			getConfig(){
				// 来源
				this.request({
					url: 'idle/goods/config',
					data: {
						token: uni.getStorageSync('userInfo').token,
						name: 'comefrom'
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.classList.push({
							lettle: '来源',
							class: res.data.data.info
						})
						this.classListTitle.push('来源')
						// 状态
						this.request({
							url: 'idle/goods/config',
							data: {
								token: uni.getStorageSync('userInfo').token,
								name: 'condition'
							}
						}).then(res=>{
							if(res.data.code == 1){
								this.classList.push({
									lettle: '状态',
									class: res.data.data.info
								})
								this.classListTitle.push('状态')
							}
						})
					}
				})
				
			},
			// 编辑时获取详情
			getDetail(e){
				this.request({
					url: 'idle/goods/detail',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: e
					}
				}).then(res=>{
					if(res.data.code == 1){
						// Object.keys(this.form).forEach(key => {
						// 	this.form[key] = res.data.data[key]
						// })
						this.name = res.data.data.name
						this.content = res.data.data.content
						this.price = res.data.data.price
						this.original_price = res.data.data.original_price
						this.express_fee = res.data.data.express_fee
						this.express_type = res.data.data.express_type
						this.brand_id = res.data.data.brand_id
						this.category_id = res.data.data.category_id
						this.images = res.data.data.images.split(',')
						this.activeList[0] = res.data.data.source
						this.activeList[1] = res.data.data.state
					}
				})
			},
			// 选择来源和状态
			select(e,n){
				// this.$set解决数组添加dom不更新
				this.$set(this.activeList,e,n)
			},
			upload(){
				if(this.images.length >= 6){
					this.$refs.uToast.show({
						title: '最多上传6张图片',
						type: 'warning'
					})
					return
				}
				uni.chooseImage({
				    count: 6 - this.images.length, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: res =>{
						// this.imgs = [...this.imgs, ...res.tempFilePaths]
						res.tempFilePaths.forEach(elem=>{
							this.uploadFile(elem)
						})
				    }
				})
			},
			// 提交发布
			publish(e){
				this.status = e // 存草稿/发布
				this.source = this.activeList[0]
				this.state = this.activeList[1]
				this.token = uni.getStorageSync('userInfo').token
				this.image = this.images[0]
				if(this.images.length <= 0){
					uni.showToast({
						title: '请上传宝贝图片',
						icon: 'none'
					})
					return
				}
				if(this.name == ''){
					uni.showToast({
						title: '请填写宝贝标题',
						icon: 'none'
					})
					return
				}
				if(this.content == ''){
					uni.showToast({
						title: '请填写宝贝描述',
						icon: 'none'
					})
					return
				}
				if(this.source == ''){
					uni.showToast({
						title: '请选择宝贝来源',
						icon: 'none'
					})
					return
				}
				if(this.state == ''){
					uni.showToast({
						title: '请选择宝贝状态',
						icon: 'none'
					})
					return
				}
				if(this.state == ''){
					uni.showToast({
						title: '请选择宝贝状态',
						icon: 'none'
					})
					return
				}
				if(this.price == ''){
					uni.showToast({
						title: '请填写宝贝售价',
						icon: 'none'
					})
					return
				}
				if(this.type != 'consign'){
					if(this.original_price == ''){
						uni.showToast({
							title: '请填写宝贝原价',
							icon: 'none'
						})
						return
					}
					if(this.express_fee == ''){
						uni.showToast({
							title: '请填写宝贝运费',
							icon: 'none'
						})
						return
					}
				}
				if(this.type == 'consign'){
					this.conPush()
				}else{
					this.aucPush()
				}
				
			},
			// 拍卖
			aucPush(){
				// 编辑
				if(this.id && this.site == ''){
					this.request({
						url: 'idle/goods/edit',
						data: {
							id: this.id,
							token: uni.getStorageSync('userInfo').token,
							image: this.image,
							images: this.images, // 本地图片列表
							name: this.name, // 名称
							content: this.content, // 描述
							price: this.price, // 售价
							original_price: this.original_price, // 原价
							express_fee: this.express_fee,// 运费
							source: this.source, // 来源
							state: this.state, // 成色
							brand_id: this.brand_id, // 品牌id
							category_id: this.category_id, // 分类id
							express_type: this.express_type, // 1包邮/2距离估算
							status: this.status // 1=在售 4=存草稿
						}
					}).then(res=>{
						if(res.data.code == 1){
							uni.navigateBack({
								delta: 1
							})
						}
					})
					// 发布新增
				}else{
					this.request({
						url: 'idle/goods/add',
						data: {
							token: uni.getStorageSync('userInfo').token,
							image: this.image,
							images: this.images, // 本地图片列表
							name: this.name, // 名称
							content: this.content, // 描述
							price: this.price, // 售价
							original_price: this.original_price, // 原价
							express_fee: this.express_fee,// 运费
							source: this.source, // 来源
							state: this.state, // 成色
							brand_id: this.brand_id, // 品牌id
							category_id: this.category_id, // 分类id
							express_type: this.express_type, // 1包邮/2距离估算
							status: this.status // 1=在售 4=存草稿
						}
					}).then(res=>{
						if(res.data.code == 1){
							this.go('/pages/my/released/released?type=sale')
						}
					})
				}
			},
			// 寄卖
			conPush(){
				// console.log(this.id, this.site)
				// return
				// 编辑
				if(this.id && this.site == ''){
					this.request({
						url: 'idle/goods/edit',
						data: {
							id: this.id,
							token: uni.getStorageSync('userInfo').token,
							image: this.image,
							images: this.images, // 本地图片列表
							name: this.name, // 名称
							content: this.content, // 描述
							price: this.price, // 售价
							original_price: this.price, // 原价
							express_fee: this.express_fee,// 运费
							source: this.source, // 来源
							state: this.state, // 成色
							brand_id: this.brand_id, // 品牌id
							category_id: this.category_id, // 分类id
							express_type: this.express_type, // 1包邮/2距离估算
							status: this.status,// 1=在售 4=存草稿
							goods_type: "consign"
						}
					}).then(res=>{
						if(res.data.code == 1){
							uni.navigateBack({
								delta: 1
							})
						}
					})
					// 发布新增
				}else{
					this.request({
						url: 'idle/goods/add',
						data: {
							token: uni.getStorageSync('userInfo').token,
							image: this.image,
							images: this.images, // 本地图片列表
							name: this.name, // 名称
							content: this.content, // 描述
							original_price: this.price, // 售价
							express_fee: this.express_fee,// 运费
							source: this.source, // 来源
							state: this.state, // 成色
							brand_id: this.brand_id, // 品牌id
							category_id: this.category_id, // 分类id
							status: this.status,// 1=在售 4=存草稿
							goods_type: "consign"
						}
					}).then(res=>{
						if(res.data.code == 1){
							this.go('/pages/my/released/released?type=consign')
							// this.go('../detail/detail?status=0&order_id=' + this.type)
						}
					})
				}
			},
			uploadFile(e){
				uni.uploadFile({
					url: 'http://app.51liuxiang.com/api/common/upload', //仅为示例，非真实的接口地址
					filePath: e,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('userInfo').token
					},
					success: res => {
						this.images.push(JSON.parse(res.data).data.url)
						
					},
					complete: all => {
						console.log(all)
					}
				})
			},
			async getLoacltion(){
				let systom = uni.getSystemInfoSync()
				// #ifdef APP-PLUS
				// android和ios位置权限判断
				if(systom.platform == 'android'){
					var result = await  permision.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION')
					console.log(result)
					if (result == 1) {
					   // "已获得授权"
						uni.getLocation({
						    type: 'gcj02',
							geocode: true,
							isHighAccuracy: true,
						    success: res => {
						        console.log(res)
								this.area = res.address.district
						    }
						})
					} else if (result == 0) {
					    // "未获得授权"
					} else {
					    // "被永久拒绝权限"
						// permision.gotoAppPermissionSetting()
					}
				}else{
					var result = permision.judgeIosPermission("location")
					if(result){
						uni.getLocation({
						    type: 'wgs84',
							geocode: true,
							isHighAccuracy: true,
						    success: res => {
						        console.log(res)
						    }
						})
					}else{
						permision.gotoAppPermissionSetting()
					}
				}
				// #endif
			},
			getDraft(e){
				this.request({
					url: 'idle/goods/list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						status: 4,
						type: e,
					}
				}).then(res=>{
					if(res.data.code == 1){
						if(res.data.data.list.length >= 1){
							this.show = true
						}
					}
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			// 图片预览
			pvew(e){
				let arr = []
				this.images.forEach(elem=>{
					arr.push(this.ImgUrl + elem)
				})
				let timer = setTimeout(()=>{
					uni.previewImage({
						current: e,
						urls: arr
					})
				}, 50)
				
				
			},
			del(e){
				this.images.splice(e, 1)
				
				this.$refs.uToast.show({
					title: '删除成功!',
					type: 'success'
				})
				console.log(this.images)
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding-bottom: 100rpx;
		.pub{
			padding: 36rpx;
			.pubDetail{
				padding-bottom: 30rpx;
				border-bottom: solid 1px  #F7F7FB;
				.imgs{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					view{
						position: relative;
						margin-right: 17rpx;
						>:nth-child(1){
							height: 164rpx;
						}
						>:nth-child(2){
							position: absolute;
							top: 0;
							right: 0;
							width: 35rpx;
							height: 35rpx;
						}
						text{
							position: absolute;
							padding: 8rpx 14rpx;
							background: #F55454;
							border-radius: 6rpx;
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							top: 0;
							left: 0;
						}
					}
					>image{
						width: 164rpx;
						height: 164rpx;
					}
				}
				.area{
					
					padding: 4rpx 9rpx;
					background: #F6F5FA;
					border-radius: 6rpx;
					margin-top: 20rpx;
					display: inline-flex;
					justify-content: center;
					align-items: center;
					image{
						width: 40rpx;
						height: 40rpx;
					}
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #1D1D20;
					}
				}	
			}
			.classify{
				
				.lettle{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0 14rpx;
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						text{
							margin-left: 10rpx;
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #1D1D20;
						}
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
				.classitem{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-wrap: wrap;
					.title{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #1D1D20;
						margin-right: 25rpx;
					}
					>:not(.title){
						padding: 18rpx 28rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
						border: 3rpx solid #EDEDF2;
						border-radius: 10rpx;
						margin: 12rpx 12rpx 0rpx 0;
					}
				}
				.active{
					background: linear-gradient(-34deg, #EE4647 0%, #FF7F7C 100%);
					border-radius: 10rpx;
					color: #fff !important;
				}
			}
			.price{
				.num{
					margin-top: 12rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					>:nth-child(1){
						display: flex;
						justify-content: flex-start;
						align-items: center;
						text{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #1D1D20;
						}
						/deep/ .u-input{
							flex: unset;
							// width: 106rpx !important;
							min-width: 106rpx;
							width: 180rpx;
							background: #F6F5FA;
							border-radius: 10rpx;
							padding: 0 20rpx !important;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
					>:nth-child(2){
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text{
							display: inline-block;
							padding: 10rpx 20rpx;
							border: 3rpx solid #EDEDF2;
							border-radius: 10rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #686879;
							margin-left: 12rpx;
						}
						
					}
				}
			}
		}
		.bottom{
			width: 100%;
			height: 98rpx;
			border-top: solid 1px #f2f2f2;
			position: fixed;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			background: #fff;
			view{
				text-align: center;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					display: block;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
				}
			}
			>text{
				display: block;
				width: 557rpx;
				height: 74rpx;
				text-align: center;
				line-height: 74rpx;
				background: #F55454;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
</style>
