<template>
	<view class="content">
		<view class="swipers">
			<u-swiper :list="swiperList" height="200"></u-swiper>
		</view>
		<view class="integral">
			<view class="" @click="go('/pages/my/integral/integral')">
				<text>累计2000+</text>
				<text>积分兑换</text>
			</view>
			<view class="" @click="go('/pages/my/wallet/withdrawal/withdrawal')">
				<text>累计1000+</text>
				<text>我要提现</text>
			</view>
		</view>
		<view class="activity">
			<view class="title">
				<text>热门活动</text>
				<text></text>
			</view>
			<view class="item" v-for="(item,index) in 3" :key="index">
				<image src="" mode=""></image>
				<view class="">
					<text>球鞋潮玩合影</text>
					<text>发布球鞋动态，轻松赢得优惠券！</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
			};
		},
		onLoad() {
			
		},
		methods:{
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
		background: #F2F1F6;
	}
</style>
<style lang="scss" scoped>
	.content{
		padding: 30rpx 20rpx;
		.integral{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;
			view{
				width: 48%;
				height: 185rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				>:nth-child(1){
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					padding: 11rpx;
					background: #F35455;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					margin-top: 20rpx;
				}
			}
		}
		.activity{
			margin-top: 20rpx;
			padding: 0 20rpx 20rpx;
			background: #fff;
			.title{
				padding: 36rpx 0;
				text-align: center;
				>:nth-child(1){
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					display: block;
					width: 132rpx;
					height: 12rpx;
					background: linear-gradient(90deg, #FC493D 0%, #FFFFFF 100%);
					margin: -10rpx auto 0;
				}
			}
			.item{
				width: 100%;
				padding: 20rpx;
				margin-bottom: 30rpx;
				background: #F6F5FA;
				border-radius: 10rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 136rpx;
					height: 136rpx;
					background: #E1E0E6;
					border-radius: 10rpx;
					margin-right: 48rpx;
				}
				view{
					height: 136rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					>:nth-child(1){
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
					}
				}
			}
		}
	}
</style>
