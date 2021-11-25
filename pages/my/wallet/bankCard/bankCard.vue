<template>
	<view class="content">
		<view class="cardList">
			<view class="item">
				<view class="type">
					<image src="/static/my/card.png" mode=""></image>
					<text>中国建设银行</text>
					<text></text>
					<text>储蓄卡</text>
				</view>
				<view class="number">
					<text>**** **** **** 9528</text>
				</view>
			</view>
		</view>
		<view class="add" @click="go('./addCard')">
			<image src="/static/my/add2.png" mode=""></image>
			<text>添加银行卡</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			console.log(1)
		},
		onShow() {
			console.log(2)
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

<style lang="scss">
	.content{
		padding: 20rpx 40rpx;
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.cardList{
			.item{
				width: 100%;
				height: 170rpx;
				padding: 30rpx;
				margin-bottom: 20rpx;
				background: #5468FF;
				border-radius: 10px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.type{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 48rpx;
						height: 48rpx;
					}
					text{
						margin-left: 15rpx;
					}
					>:nth-child(2){
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
					>:nth-child(3){
						display: inline-block;
						width: 1rpx;
						height: 20rpx;
						background: #FFFFFF;
					}
					>:nth-child(4){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
					}
				}
				.number{
					width: 100%;
					text-align: center;
					text{
						font-size: 38rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
				}
			}
		}
		.add{
			width: 100%;
			height: 90rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #F35455;
			border-radius: 45rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #F35455;
			background: #fff;
			image{
				width: 44rpx;
				height: 44rpx;
			}
		}
	}
</style>
