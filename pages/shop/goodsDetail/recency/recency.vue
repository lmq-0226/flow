<template>
	<view class="content">
		<view class="goods">
			<image src="/static/pub/bql.png" mode=""></image>
			<view class="">
				<text>[普通发货] EVISU 老虎达摩拼图印花T恤 男款</text>
				<text>¥899</text>
			</view>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in 20" :key="index">
				<view class="">
					<image src="/static/avatar3.png" mode=""></image>
					<text>细*丫-*-*-*-*---*-*-*-*-**-*-</text>
				</view>
				<text>黑色 XL</text>
				<text>¥899</text>
				<text>5天前</text>
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
		.goods{
			padding: 28rpx 36rpx;
			border-bottom: solid 1px #F1F2FB;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			position: sticky;
			top: 0;
			/* #ifdef H5 */
			top: 88rpx;
			/* #endif */
			z-index: 999;
			background: #fff;
			image{
				width: 120rpx;
				height: 120rpx;
				background: #FFFFFF;
				border: 1px solid #F4F4F7;
				border-radius: 10rpx;
				margin-right: 25rpx;
			}
			view{
				height: 120rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				>:nth-child(1){
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
		}
		.list{
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 25rpx 36rpx;
				text{
					display: inline-block;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #242535;
					overflow: hidden;
					-webkit-line-clamp: 1;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
				view{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					width: 25%;
					image{
						min-width: 30rpx;
						min-height: 30rpx;
						max-width: 30rpx;
						max-height: 30rpx;
						margin-right: 15rpx;
					}
				}
				>:nth-child(2),>:nth-child(3){
					width: 20%;
				}
				>:nth-last-child(1){
					width: 28%;
					color: #9094A6;
					text-align: right;
				}
			}
		}
	}
</style>
