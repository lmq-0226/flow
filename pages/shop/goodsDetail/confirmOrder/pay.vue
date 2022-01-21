<template>
	<view class="content">
		<view class="top">
			<text>实付金额</text>
			<view class="price">
				<text>￥</text>
				<text>{{payInfo.price}}</text>
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
		<view class="pay" @click="pay">
			<text>立即支付</text>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '',
				payMethed: 'wechat',
				payInfo: {
					price: 0
				},
				timer: '',
				token: '',
				order_id: ''
			};
		},
		onLoad(option) {
			if(option.order_id){
				this.rePay(option.order_id)
			}else{
				this.type = option.type || ''
				this.payInfo = JSON.parse(option.data)
				this.order_id = this.payInfo.order_id
				this.token = option.token
			}
		},
		onShow() {
			// var timestamp = Date.parse(new Date())
			// this.timer = this.payInfo.createtime + 600 - timestamp/1000
			// if(this.timer <= 0){
			// 	this.timer = 0
			// 	uni.navigateTo({
			// 		url: '/pages/my/buy/idleOrders/idleOrders',
			// 	})
			// }
		},
		methods:{
			end(e){
				console.log(e)
			},
			pay(){
				// if(this.payMethed == 'alipay'){
				// 	this.$refs.uToast.show({
				// 		title: '该功能为开启',
				// 		type: 'warning'
				// 	})
				// 	return
				// }
				// 订单支付
				this.request({
					url: 'wanlshop/pay/payment',
					header: {
						'token': uni.getStorageSync('userInfo').token,
					},
					data: {
						order_type: 'goods',
						type: this.payMethed, // 余额支付
						method: 'app',
						code: '',
						order_id: this.order_id,
						token: this.token
					}
				}).then(res=>{
					if(res.data.code == 1){
						if(this.payMethed == 'balance'){
							// 商品支付
							uni.navigateTo({
								url: '/pages/my/buy/receiving/receiving?type=pay&order_id=' + this.order_id,
							})
						}else{
							this.wxpay(JSON.parse(res.data.data))
						}
						
						
					}
				})
				// this.$refs.uToast.show({
				// 	title: '支付成功',
				// 	url: '/pages/my/buy/idleOrders/idleOrders',
				// 	params: {
				// 		id: 1,
				// 		menu: 3
				// 	}
				// })
			},
			// 微信支付
			wxpay(e){
				let str = this.payMethed == 'wechat' ? 'wxpay' : 'alipay'
				uni.requestPayment({
				    "provider": str, 
				    "orderInfo": e,
				    success: res=>{
						uni.showToast({
							title: '支付成功',
							icon: 'none'
						})
					},
				    complete: (all) => {
						console.log(all)
				    	this.loading = false
						if(this.type == ''){
							// 商品支付
							uni.navigateTo({
								url: '/pages/my/buy/receiving/receiving?type=pay&order_id=' + this.order_id,
							})
						}else{
							// 寄卖支付
							uni.navigateTo({
								url: '/pages/leave/detail/detail?status=2',
							})
						}
				    }
				})
			},
			// 订单信息
			rePay(e){
				this.request({
					url: 'wanlshop/pay/getPay',
					header: {
						'token': uni.getStorageSync('userInfo').token,
					},
					data: {
						order_id: e,
						order_type: 'goods'
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.payInfo.price = res.data.data.price
						this.order_id = res.data.data.order_id
						this.token = res.data.data.token
					}
				})
			},
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
