<template>
	<view class="content">
		<view class="top">
			<view class="address" @click="go('/pages/my/set/address/address')" v-if="type == 2">
				<view class="" v-if="address_id != ''">
					<text>回寄地址: {{addressDetail.formatted_address + addressDetail.address + addressDetail.address_name}}</text>
					<text>{{addressDetail.name}}  {{addressDetail.mobile}}</text>
				</view>
				<text v-else>请设置默认地址</text>
				<image src="/static/serve/right.png" mode=""></image>
			</view>
			<view class="pubDetail">
				<view class="imgs">
					<view class="" v-for="(item,index) in images" :key="index" @click="pvew(index)">
						<image :src="ImgUrl + item" mode="heightFix"></image>
						<image src="/static/my/close2.png" mode="" @click.stop="del(index)"></image>
						<text v-if="index == 0 && type == 'sale'">封面</text>
					</view>
					<image src="/static/leave/upload.png" mode="" @click="upload()"></image>
				</view>
			</view>
			<view class="brand">
				<text>{{brand_name}}</text>
				<text>{{category_name}}</text>
			</view>
			<view class="authen">
				<text>鉴定师</text>
				<view class="">
					<text>{{authen.name}}</text>
					<image :src="ImgUrl + authen.image" mode=""></image>
				</view>
			</view>
			<view class="money">
				<text>鉴定费</text>
				<text>¥{{authen.price}}</text>
			</view>
		</view>
		<view class="bottom">
			<view class="agree" @click="consent = !consent">
				<image v-if="consent" src="/static/login/radio_on.png" mode=""></image>
				<image v-else src="/static/login/radio.png" mode=""></image>
				<text>我已阅读并同意</text>
				<text class="bold" @click.stop="go('/pages/public/richtext')">《流象在线鉴定服务协议》</text>
			</view>
			<view class="pay">
				<view class="total">
					<view class="">
						<text>合计</text>
						<text>¥</text>
					</view>
					<text>{{authen.price}}</text>
				</view>
				<u-button class="uButton" :loading="loading" @click="submit">提交订单</u-button>
			</view>
			
		</view>
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				token: uni.getStorageSync('userInfo').token,
				category_id: '', // 分类id
				category_name: '', //分类名称
				brand_id: '', // 品牌id
				brand_name: '', // 品牌名称
				type: '', // 1=在线鉴定,2=实物鉴定
				images: [], // 图集
				addressDetail:{},
				authen: {},
				address_id: '', // 回寄地址
				consent: true
			};
		},
		onShow() {
			this.getAddress()
		},
		onLoad(option) {
			this.type = option.type == 'line' ? 1 : 2
			this.category_id = option.category_id
			this.category_name = option.category_name
			this.brand_id = option.brand_id
			this.brand_name = option.brand_name
			this.authen = JSON.parse(option.authen)
		},
		methods: {
			submit(){
				if(this.images.length <= 0){
					this.$refs.uToast.show({
						title: '请上传需鉴定商品图片',
						type: 'warning'
					})
					return
				}
				if(this.type == 2 && this.address_id == ''){
					this.$refs.uToast.show({
						title: '请设置默认地址',
						type: 'warning'
					})
					return
				}
				if(!this.consent){
					this.$refs.uToast.show({
						title: '请阅读并同意服务协议',
						type: 'warning'
					})
					return
				}
				this.loading = true
				this.request({
					url: 'service/order/add',
					data: {
						token: this.token,
						category_id: this.category_id, // 分类id
						category_name: this.category_name, //分类名称
						brand_id: this.brand_id, // 品牌id
						brand_name: this.brand_name, // 品牌名称
						gemmologist_id: this.authen.id, // 鉴定师id
						type: this.type, // 1=在线鉴定,2=实物鉴定
						images: this.images.join(','), // 图集
						address_id: this.address_id // 回寄地址
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.loading = false
						this.go('./pay?payInfo=' + JSON.stringify(res.data.data.payInfo))
					}
				})
			},
			getAddress(){
				this.request({
					url: 'wanlshop/address/getaddress',
					data: {
						token: this.token
					}
				}).then(res=>{
					if(res.data.code == 1){
						let list = res.data.data.data
						list.forEach(elem=>{
							if(elem.default == 1){
								this.addressDetail = elem
								this.address_id = elem.id
							}
						})
					}
				})
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
							// uni.compressImage({
							// 	src: elem,
							// 	quality: 80,
							// 	success: res => {
							// 		console.log(res.tempFilePath)
							// 	}
							// })
							this.uploadFile(elem)
						})
						
				    }
				})
			},
			uploadFile(e){
				uni.uploadFile({
					url: 'http://app.51liuxiang.com/api/common/upload', //仅为示例，非真实的接口地址
					filePath: e,
					name: 'file',
					formData: {
						'token': this.token
					},
					success: res => {
						this.images.push(JSON.parse(res.data).data.url)
						
					},
					complete: all => {
						console.log(all)
					}
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
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>
<style>
	page{
		background: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		// height: 100vh;
		// /* #ifdef H5 */
		// height: calc(100vh - 88rpx);
		// /* #endif */
		// display: flex;
		// flex-direction: column;
		// justify-content: space-between;
		
		.top{
			padding: 36rpx;
		}
		.address{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 36rpx;
			background: #F6F5FA;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			>text{
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			view{
				width: 550rpx;
				text{
					display: block;
				}
				>:nth-child(1){
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					line-height: 36rpx;
					margin-bottom: 20rpx;
					overflow: hidden;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #717181;
				}
			}
			image{
				width: 44rpx;
				height: 44rpx;
			}
		}
		.pubDetail{
			// padding-bottom: 30rpx;
			padding: 14rpx;
			border-bottom: solid 1px  #F7F7FB;
			background: #fff;
			border-radius: 10rpx;
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
		}
		
		.brand{
			background: #FFFFFF;
			border-radius: 10rpx;
			padding: 26rpx 36rpx;
			margin-top: 17rpx;
			text{
				display: block;
			}
			>:nth-child(1){
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			>:nth-child(2){
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #6A6A79;
				margin-top: 14rpx;
			}
		}
		
		.authen{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx 30rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			margin-top: 17rpx;
			>text{
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			view{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				text{
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				image{
					width: 50rpx;
					height: 50rpx;
					margin-left: 15rpx;
					border-radius: 50%;
				}
			}
		}
		
		.money{
			padding: 30rpx;
			background: #fff;
			border-radius: 10rpx;
			margin-top: 17rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text{
				font-weight: bold;
			}
			>:nth-child(1){
				font-size: 26rpx;
				color: #000000;
			}
			>:nth-child(2){
				font-size: 24rpx;
				color: #FF4243;
			}
		}
		
		.bottom{
			width: 100%;
			position: fixed;
			bottom: 0;
			.agree{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-left: 36rpx;
				margin-bottom: 21rpx;
				image{
					width: 36rpx;
					height: 36rpx;
				}
				text{
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #5C5C65;
				}
				.bold{
					color: #000;
					font-weight: bold;
				}
			}
			.pay{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 12rpx 36rpx;
				background: #fff;
				.total{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					view{
						margin-right: 5rpx;
						text{
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
						>:nth-child(2){
							color: #FF4243;
						}
					}
					>text{
						font-size: 36rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FF4243;
						font-weight: bold;
					}
				}
				.uButton{
					width: 220rpx;
					height: 74rpx;
					text-align: center;
					line-height: 74rpx;
					background: #F55454;
					border-radius: 6rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
					margin: 0;
				}
			}
			
		}
		
		
	}
</style>
