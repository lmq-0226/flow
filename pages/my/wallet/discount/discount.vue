<template>
	<view class="content">
		<view class="item" v-for="(item,index) in 2" :key="index">
			<view class="top">
				<view class="top-left">
					<view class="">
						<text>￥</text>
						<text>389</text>
					</view>
					<text>新客优惠券-满15000可用</text>
				</view>
				<view class="top-right">
					<text>去使用</text>
				</view>
			</view>
			<view class="impose">
				<u-collapse :head-style="{fontSize: '22rpx',color: '#686879',padding: '30rpx'}">
					<u-collapse-item title="使用期限：2021-10-14至2021-11-13" :open="false">
						<view class="list" >
							<text v-for="(item,index) in 3" :key="index">{{'(' +  index +')'}}</text>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					
				]
			};
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
		padding: 20rpx 22rpx;
		.item{
			margin-bottom: 20rpx;
			background: url(../../../../static/my/disBg.png) no-repeat;
			background-size: 100%;
			.top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 40rpx 0;
				margin: 0 30rpx;
				height: 186rpx;
				border-bottom: dashed 1px #E2E2E9;
				.top-left{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					view{
						text{
							font-weight: bold;
							color: #F35455;
						}
						>:nth-child(1){
							font-size: 36rpx;
						}
						>:nth-child(2){
							font-size: 60rpx;
						}
					}
					>text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #00001D;
					}
				}
				.top-right{
					width: 129rpx;
					height: 55rpx;
					border: 1px solid #F35455;
					border-radius: 28rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #F35455;
					}
				}
			}
			.impose{
				.list{
					padding: 0 30rpx 30rpx;
					background-color: #fff;
					text{
						display: block;
						font-size: 22rpx;
						color: #686879;
					}
				}
			}
		}
	}
</style>
