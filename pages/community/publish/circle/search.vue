<template>
	<view class="content">
		<view class="item">
			<image src="" mode=""></image>
			<text>#学生党最爱黑色潮鞋合集</text>
		</view>
		<u-empty text="没有搜索到相关圈子" mode="search" margin-top="300"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onNavigationBarSearchInputConfirmed(e) {
			console.log(e.text, '1111')
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 0 30rpx;
		.item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background: #F6F5FA;
			padding: 14rpx 17rpx;
			border-radius: 6rpx;
			margin-bottom: 20rpx;
			image{
				width: 76rpx;
				height: 76rpx;
				background: #FD3B4E;
				border-radius: 6rpx;
				margin-right: 30rpx;
			}
			text{
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
	}
</style>
