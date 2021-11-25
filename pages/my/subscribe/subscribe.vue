<template>
	<view class="content">
		<view class="list">
			<text class="title">订阅品牌</text>
			<view class="item" @click.stop="go('./store/store')">
				<view class="left">
					<image src="/static/pub/ttq.png" mode=""></image>
					<view class="">
						<text>EVISU</text>
						<text>12563人订阅·1524款商品</text>
					</view>
				</view>
				<view v-if="false" class="right on">
					<text class="">+订阅</text>
				</view>
				<view v-else class="right">
					<text >已订阅</text>
				</view>
			</view>
		</view>
		<view class="list">
			<text class="title">推荐品牌</text>
			<view class="item" @click.stop="go('./store/store')">
				<view class="left">
					<image src="/static/pub/ttq.png" mode=""></image>
					<view class="">
						<text>EVISU</text>
						<text>12563人订阅·1524款商品</text>
					</view>
				</view>
				<view v-if="true" class="right on">
					<text class="">+订阅</text>
				</view>
				<view v-else class="right">
					<text >已订阅</text>
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
		background-color: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		padding: 0 20rpx;
		.list{
			.title{
				display: block;
				padding: 25rpx 21rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			.item{
				padding: 27rpx 18rpx;
				background: #FFFFFF;
				border-radius: 6rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 80rpx;
						height: 80rpx;
						margin-right: 20rpx;
					}
					view{
						height: 80rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						>:nth-child(1){
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #686879;
						}
					}
				}
				.right,.on{
					width: 110rpx;
					height: 44rpx;
					border: 1px solid #686879;
					border-radius: 5rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					text{
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879
					}
				}
				.on{
					border: 1px solid #F35455;
					text{
						color: #F35455;
					}
				}
			}
		}
	}
</style>
