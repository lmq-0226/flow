<template>
	<view class="content">
		<view class="userList">
			<view class="item" v-for="(item,index) in 4" :key="index">
				<view class="left">
					<image src="" mode=""></image>
					<view class="">
						<text>李明</text>
						<text>赞了您的发布</text>
						<text>9月21日</text>
					</view>
				</view>
				<image src="" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.userList{
			padding: 0 30rpx;
			.item{
				display: flex;
				justify-content: space-between;
				padding: 28rpx 0;
				border-bottom: solid 1px #F1F1F6;
				.left{
					display: flex;
					justify-content: flex-start;
					image{
						width: 100rpx;
						height: 100rpx;
						min-width: 100rpx;
						border-radius: 50%;
						margin-right: 21rpx;
						background: #ccc;
					}
					view{
						width: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						text{
							display: block;
						}
						>:nth-child(1){
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #6A6F7B;
							margin: 5rpx 0;
						}
						>:nth-child(3){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #6A6F7B;
						}
					}
				}
				>image{
					width: 100rpx;
					height: 100rpx;
					min-width: 100rpx;
					background: #F0F0F0;
					border-radius: 10rpx;
				}
			}
		}
	}
</style>
