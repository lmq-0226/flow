<template>
	<view class="content">
		<view class="tabs">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#FC493D"></u-tabs>
		</view>
		<view class="list" v-if="true">
			<view class="item" v-for="(item,index) in 5" :key="index">
				<view class="desc">
					<image src="/static/pub/ch.png" mode=""></image>
					<view class="">
						<text>阿迪达斯2021新款运动鞋网面拼接黑色...</text>
						<text>¥399</text>
						<text>12人想要</text>
					</view>
				</view>
				<view class="btns">
					<text>更多</text>
					<view class="">
						<text>降价</text>
						<text>编辑</text>
					</view>
				</view>
			</view>
		</view>
		<u-empty v-else text="暂无数据" mode="data" margin-top="400"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list: [
					{
						name: '全部'
					}, {
						name: '草稿'
					}, {
						name: '已下架'
					}
				],
			};
		},
		onLoad() {
			
		},
		methods:{
			change(e){
				this.current = e
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.tabs{
			border-bottom: solid 10rpx #F6F5FA;
			position: sticky;
			top: 0;
			background: #fff;
			z-index: 999;
		}
		.list{
			
			.item{
				padding: 0 30rpx;
				border-bottom: solid 10rpx #F6F5FA;
				.desc{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 28rpx 6rpx;
					border-bottom: solid 1px #F2F2F6;
					image{
						width: 164rpx;
						height: 164rpx;
						margin-right: 23rpx;
					}
					view{
						height: 164rpx;
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
							font-weight: bold;
							color: #FF4243;
						}
						>:nth-child(3){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9094A6;
						}
					}
				}
				.btns{
					padding: 13rpx 0rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					>text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
					view{
						text{
							display: inline-block;
							width: 130rpx;
							height: 54rpx;
							border: 1px solid #9393A7;
							border-radius: 8rpx;
							text-align: center;
							line-height: 54rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #686879;
							margin-left: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
