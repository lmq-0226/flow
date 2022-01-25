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
		<u-button class="pay" :loading="loading" @click="payfor">立即支付</u-button>
		<!-- <view class="pay" @click="pay">
			<text>立即支付</text>
		</view> -->
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				payMethed: 'alipay',
				payInfo: {
					price: 0
				},
				timer: '',
				token: '',
				order_id: '',
				total_amount: 0,
				type: '', // consign 寄卖，sale 拍图， kind 实物鉴定， line 在线鉴定
				pay: '' // buy买， sell 卖
			};
		},
		onLoad(option) {
			this.order_id = option.order_id
			this.pay = option.pay
			this.type = option.type
			// if(option.type == 'consign'){
			if(option.total_amount == 0){
				this.rePay()
			}else{
				this.payInfo.price = option.total_amount
			}
			// }else{
			// 	this.rePay()
			// }
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
			payfor(){
				this.loading = true
				if(this.type == 'consign' && this.pay == 'sell'){
					// 寄卖服务费支付
					this.request({
						url: 'idle/pay/assess_pay',
						data: {
							token: uni.getStorageSync('userInfo').token,
							order_id: this.order_id,
							type: this.payMethed
						}
					}).then(res=>{
						if(res.data.code == 1){
							// if(this.payMethed = 'wechat'){
							if(this.payMethed == 'wechat'){
								this.wxpay(JSON.parse(res.data.data))
							}else if(this.payMethed == 'alipay'){
								this.wxpay(res.data.data)
							}
							// }
						}
					})
				}else if(this.pay == 'buy'){
					// 用户购买拍图、寄卖商品
					this.request({
						url: 'idle/pay/to_pay',
						data: {
							token: uni.getStorageSync('userInfo').token,
							order_id: this.order_id,
							type: this.payMethed
						}
					}).then(res=>{
						if(res.data.code == 1){
							console.log(res, '111111')
							if(this.payMethed == 'wechat'){
								this.wxpay(JSON.parse(res.data.data))
							}else if(this.payMethed == 'alipay'){
								this.wxpay(res.data.data)
							}
						}
					})
				}
				
			},
			// 订单信息
			rePay(){
				this.request({
					url: 'idle/pay/get_pay',
					data: {
						token: uni.getStorageSync('userInfo').token,
						order_id: this.order_id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.payInfo = res.data.data
					}
				})
			},
			// 微信&支付宝支付
			wxpay(e){
				let meth = ''
				if(this.payMethed == 'wechat'){
					meth = 'wxpay'
				}else if(this.payMethed == 'alipay'){
					meth = 'alipay'
				}
				uni.requestPayment({
				    "provider": meth, 
				    "orderInfo": e,
				    success: res=>{
						
						// if(this.type == 'consign'){
						// 	uni.navigateBack({
						// 		delta: 1
						// 	})
						// }else{
							
						// }
					},
				    complete: (all) => {
				    	this.loading = false
						if(this.pay == 'buy'){
							uni.navigateTo({
								url: '/pages/my/buy/idleOrders/idleOrders?order_id=' + this.order_id
							})
							// 寄卖支付服务费
						}if(this.type == 'consign' && this.pay == 'sell'){
							uni.navigateBack({
								delta: 1
							})
						}
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
