<template>
	<view class="content">
		<view class="top">
			<text>流象客户服务中心</text>
			<text>热线服务时间：08:00~22:00，在线服务时间：09:00~22:00</text>
		</view>
		<view class="middle">
			<text class="title">{{list[current].name}}</text>
			<u-tabs :list="list" :is-scroll="false" :current="current" bar-width="50" font-size="28" active-color="#FD414E" @change="change"></u-tabs>
			<view class="items">
				<view class="item">
					<text>如何修改收货地址</text>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
				<view class="item">
					<text>下单后订单卖家一直没有发货</text>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
				<view class="item">
					<text>下单后多久可以收到商品</text>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
				<view class="item">
					<text>尺码不合适，如何退换货</text>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="bottom">
			<text>专属热线</text>
			<text @click="go('/pages/HM-chat/HM-chat')">在线客服</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '常见问题'
				}, {
					name: '订单问题'
				}, {
					name: '售后问题'
				},{
					name: '账户问题'
				}],
				current: 0
			};
		},
		onLoad() {
			
		},
		methods:{
			change(index) {
				this.current = index;
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
		.top{
			width: 100%;
			height: 160rpx;
			background: #FD414E;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10rpx 0 40rpx;
			text{
				display: block;
			}
			>:nth-child(1){
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
			>:nth-child(2){
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
		.middle{
			width: 710rpx;
			height: 831rpx;
			margin: 20rpx auto 0;
			background: #FFFFFF;
			border-radius: 10rpx;
			// padding: 0 36rpx;
			.title{
				display: block;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				padding: 40rpx 36rpx 10rpx;
			}
			.items{
				padding: 0 36rpx;
				border-top: solid 1px #F6F5FA;
				.item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 92rpx;
					border-bottom: solid 1px #F6F5FA;
					text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
		}
		.bottom{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 98rpx;
			padding: 0 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			text{
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: 345rpx;
				height: 74rpx;
				border-radius: 12rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
			}
			>:nth-child(1){
				border: 2px solid #E8E8E8;
				color: #000000;
			}
			>:nth-child(2){
				background: #F55454;
				color: #FFFFFF;
			}
		}
	}
</style>
