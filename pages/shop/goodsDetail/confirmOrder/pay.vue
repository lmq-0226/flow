<template>
	<view class="content">
		<view class="top">
			<text>实付金额</text>
			<view class="price">
				<text>￥</text>
				<text>905.90</text>
			</view>
			<view class="time">
				<text>剩余支付时间</text>
				<u-count-down :timestamp="480" :show-hours="false"  color="#FF4243" separator-color="#FF4243" @end="end"></u-count-down>
				<!-- <text>07:56</text> -->
			</view>
		</view>
		<view class="payMethed">
			<view class="item" @click="payMethed = true">
				<view class="left">
					<image src="/static/shop/zfb.png" mode=""></image>
					<text>支付宝支付</text>
				</view>
				<view class="right">
					<image v-if="payMethed" src="/static/login/radio_on.png" mode=""></image>
					<image v-else src="/static/login/radio.png" mode=""></image>
				</view>
			</view>
			<view class="item" @click="payMethed = false">
				<view class="left">
					<image src="/static/shop/wx.png" mode=""></image>
					<text>微信支付</text>
				</view>
				<view class="right">
					<image v-if="!payMethed" src="/static/login/radio_on.png" mode=""></image>
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
				payMethed: true
			};
		},
		onLoad() {
			
		},
		methods:{
			end(e){
				console.log(e)
			},
			pay(){
				uni.showToast({
					title: '支付成功',
					icon: 'none'
				})
				uni.navigateTo({
					url: '/pages/my/buy/idleOrders/idleOrders',
				})
				// this.$refs.uToast.show({
				// 	title: '支付成功',
				// 	url: '/pages/my/buy/idleOrders/idleOrders',
				// 	params: {
				// 		id: 1,
				// 		menu: 3
				// 	}
				// })
			}
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
