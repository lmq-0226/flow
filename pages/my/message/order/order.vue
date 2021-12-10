<template>
	<view class="content">
		<view class="userList">
			<view class="item">
				<image src="" mode=""></image>
				<view class="">
					<text>交易关闭</text>
					<text>NIKE AIR 空军一号</text>
					<text>9月21日</text>
				</view>
			</view>
			<view class="item">
				<image src="" mode=""></image>
				<view class="">
					<text>已发货</text>
					<text>NIKE AIR 空军一号</text>
					<text>9月21日</text>
				</view>
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
				padding: 28rpx 0;
				display: flex;
				justify-content: flex-start;
				border-bottom: solid 1px #F1F1F6;
				image{
					width: 100rpx;
					height: 100rpx;
					min-width: 100rpx;
					border-radius: 10rpx;
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
		}
	}
</style>
