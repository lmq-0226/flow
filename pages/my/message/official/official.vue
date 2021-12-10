<template>
	<view class="content">
		<view class="items">
			<view class="item">
				<text>NIKE推出全新Sp阿册Jam系列</text>
				<text>5小时前</text>
			</view>
			<view class="item">
				<text>NIKE运动研究实验室在勒布朗·詹姆斯创新中心全新升级</text>
				<text>2天前</text>
			</view>
			<view class="item">
				<text>NIKE推出全新Sp阿册Jam系列LEBRONXIX</text>
				<text>10月11日</text>
			</view>
			<view class="item">
				<text>NIKE运动研究实验室在勒布朗·詹姆斯创新中心全新升级 运动研究实验室在勒布朗·詹姆斯创新中心全新升级</text>
				<text>2天前</text>
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
		.items{
			padding: 0 30rpx;
			.item{
				width: 100%;
				padding: 30rpx 0;
				border-bottom: solid 1px #F1F1F6;
				text{
					display: block;
				}
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
					color: #5F646A;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
