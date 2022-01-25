<template>
	<view class="content">
		<view class="top">
			<text>实付金额</text>
			<view class="price">
				<text>￥</text>
				<text>{{payInfo.total_amount}}</text>
			</view>
			<!-- <view class="time">
				<text>剩余支付时间</text>
				<u-count-down :timestamp="timer" :show-hours="false"  color="#FF4243" separator-color="#FF4243" @end="end"></u-count-down>
			</view> -->
		</view>
		<view class="payMethed">
			<view class="item" @click="payMethed = 'alipay'">
				<view class="left">
					<image src="/static/shop/zfb.png" mode=""></image>
					<text>支付宝支付</text>
				</view>
				<view class="right">
					<image v-if="payMethed == 'alipay'" src="/static/login/radio_on.png" mode=""></image>
					<image v-else src="/static/login/radio.png" mode=""></image>
				</view>
			</view>
			<view class="item" @click="payMethed = 'wechat'">
				<view class="left">
					<image src="/static/shop/wx.png" mode=""></image>
					<text>微信支付</text>
				</view>
				<view class="right">
					<image v-if="payMethed == 'wechat'" src="/static/login/radio_on.png" mode=""></image>
					<image v-else src="/static/login/radio.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="pay" @click="getPayInfo">
			<text>立即支付</text>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payMethed: 'wechat',
				payInfo: {
					price: 0
				},
				orderInfo: {},
				timer: '',
				token: '',
				order_id: '',
				type:'',
				id: ''
			};
		},
		onLoad(option) {
			if(option.payInfo){
				this.payInfo = JSON.parse(option.payInfo)
			}else if(option.type){
				this.type = option.type
				this.id = option.id
				this.getDetail()
			}
		},
		methods:{
			getDetail(){
				this.request({
					url: 'service/order/detail',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.payInfo = res.data.data.payInfo
					}
				})
			},
			getPayInfo(){
				this.request({
					url: 'idle/pay/service_pay',
					data: {
						token: uni.getStorageSync('userInfo').token,
						order_id: this.payInfo.order_id,
						type: this.payMethed
					}
				}).then(res=>{
					if(res.data.code == 1){
						if(this.payMethed == 'wechat'){
							this.wxpay(JSON.parse(res.data.data))
						}else if(this.payMethed == 'alipay'){
							this.wxpay(res.data.data)
						}
					}
				})
			},
			// 微信支付
			wxpay(e){
				let str = this.payMethed == 'wechat' ? 'wxpay' : 'alipay'
				uni.requestPayment({
				    "provider": str, 
				    "orderInfo": e,
				    success: res=>{
						this.$refs.uToast.show({
							title: '支付成功',
							type: 'success',
							duration: 1000,
							callback: ()=>{
								this.loading = false
								if(this.type == 'recx'){
									uni.navigateBack({
										delta: 1
									})
								}else{
									uni.navigateTo({
										url: '/pages/my/identify/identify'
									})
								}
							}
						})
					},
					fail: (err) => {
						this.$refs.uToast.show({
							title: '支付失败',
							type: 'error',
							duration: 1000,
							callback: ()=>{
								this.loading = false
								if(this.type == 'recx'){
									uni.navigateBack({
										delta: 1
									})
								}else{
									uni.navigateTo({
										url: '/pages/my/identify/identify'
									})
								}
							}
						})
					},
					complete: (all) => {
						console.log(all, '111111')
					}
				})
			},
			// // 微信支付
			// wxpay(e){
			// 	uni.requestPayment({
			// 	    "provider": "wxpay", 
			// 	    "orderInfo": e,
			// 	    success: res=>{
			// 			// uni.navigateTo({
			// 			// 	url: '/pages/my/identify/identify'
			// 			// })
			// 		},
			// 	    complete: (all) => {
			// 	    	this.loading = false
						
			// 	    }
			// 	})
			// },
		}
	}
</script>

<style lang="scss" scoped>
.content{
		width: 100%;
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		padding: 40rpx 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.top{
			text-align: center;
			>text{
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #000000;
			}
			.price{
				padding: 20rpx 0;
				text{
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(1){
					font-size: 36rpx;
				}
				>:nth-child(2){
					font-size: 72rpx;
				}
			}
			.time{
				text{
					color: #000000;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					margin-right: 8rpx;
				}
			}
		}
		.payMethed{
			height: 50%;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 0;
				.left{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 40rpx;
						height: 40rpx;
						margin-right: 23rpx;
					}
					text{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
				.right{
					width: 44rpx;
					height: 44rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.pay{
			width: 100%;
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
</style>
