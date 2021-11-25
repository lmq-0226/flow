<template>
	<view class="content">
		<view class="context">
			<view class="top">
				<view class="left">
					<view class="">
						<text>交易保障</text>
						<text>平台交易·支持退货</text>
					</view>
					<text>鉴定鉴定鉴定鉴定鉴定鉴定鉴定鉴定鉴定</text>
				</view>
				<image src="/static/shop/right2.png" mode=""></image>
			</view>
		</view>
		<view class="pro">
			<view class="left">
				<view class="">
					<view class="">
						<text>证书查询</text>
						<text>安全放心</text>
					</view>
					<text>在线/实物/培训证书</text>
				</view>
			</view>
			<view class="mid_line">
				
			</view>
			<view class="right">
				
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
		.context{
			padding: 20rpx;
			background: #F6F5FA;
			.top{
				padding: 30rpx 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
				border-radius: 6rpx;
				.left{
					view{
						margin-bottom: 20rpx;
						>:nth-child(1){
							display: inline-block;
							margin-right: 15rpx;
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							padding: 5rpx 12rpx;
							background: linear-gradient(90deg, #FD3750 0%, #FC653F 100%);
							border-radius: 6rpx;
						}
						>:nth-child(2){
							font-size: 32rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
					>text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>
