<template>
	<view class="content">
		<view class="top">
			<text>200</text>
			<text @click="go('/pages/my/integral/integral')">去使用</text>
		</view>
		<view class="detail">
			<text class="title">积分明细</text>
			<view class="item" v-for="(item,index) in 5" :key="index">
				<view class="">
					<text>邀请</text>
					<text>2021-08-09 10:52</text>
				</view>
				<text>200</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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

<style lang="scss" scoped>
	.content{
		.top{
			padding: 50rpx 75rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 320rpx;
			border-bottom: solid 10rpx #F6F5FA;
			>:nth-child(1){
				font-size: 60rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #333333;
			}
			>:nth-child(2){
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F35455;
				border-radius: 10rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
		.detail{
			padding: 30rpx;
			.title{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			.item{
				padding: 27rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: solid 1px #F7F7FB;
				view{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					>:nth-child(1){
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #00001D;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #A1A1B6;
					}
				}
				>text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #00001D;
				}
			}
		}
	}
</style>
