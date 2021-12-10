<template>
	<view class="content">
		<text class="title">推荐圈子</text>
		<view class="items">
			<view class="" v-for="(item,index) in 15" :key="index">
				<image src="" mode=""></image>
				<text>穿搭研究所</text>
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
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url: './search'
			})
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 0 30rpx;
		.title{
			display: block;
			padding: 40rpx 0 20rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #000000;
		}
		.items{
			view{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 12rpx 0;
				border-bottom: solid 1px #F1F2FB;
				image{
					width: 76rpx;
					height: 76rpx;
					background: #F5F5F5;
					border-radius: 10rpx;
					margin-right: 30rpx;
				}
				text{
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #000000;
				}
			}
		}
	}
</style>
