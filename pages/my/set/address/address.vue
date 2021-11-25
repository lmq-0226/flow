<template>
	<view class="content">
		<view class="items">
			<view class="item" v-for="(item,index) in 2" :key="index" @click="status = index">
				<view class="left">
					<text>江苏省苏州市姑苏区锦沧名苑附近</text>
					<view class="">
						<text class="default" v-if="status == index">默认</text>
						<text>小明 15648923574</text>
					</view>
				</view>
				<image src="/static/my/edit.png" mode="" @click.stop="go('./add?type=edit')"></image>
			</view>
		</view>
		
		<view class="add" @click="go('./add?type=add')">
			添加新地址
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 0
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

<style lang="scss" scoped>
	.content{
		padding: 0 30rpx 30rpx;
		min-height: 100vh;
		/* #ifdef H5 */
		min-height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.item{
			padding: 40rpx 0;
			border-bottom: solid 1px #F7F7FB;
			display: flex;
			justify-content: space-between;
			align-items: center;
			image{
				width: 58rpx;
				height: 58rpx;
			}
			.left{
				width: 90%;;
				>text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #030303;
				}
				view{
					margin-top: 13rpx;
					text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
					.default{
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
						padding: 3rpx 7rpx;
						background-color: #000;
						border-radius: 8rpx;
						margin-right: 17rpx;
					}
				}
			}
		}
		.add{
			margin-top: 30rpx;
			width: 100%;
			height: 74rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #F35455;
			border-radius: 6rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
		}
	}
</style>
