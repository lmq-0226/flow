<template>
	<view class="content">
		<view class="tabs">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#FC493D"></u-tabs>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in 3" :key="item.id" @click="go('./detail/detail')">
				<view class="title">
					<view class="">
						<image src="/static/avatar3.png" mode=""></image>
						<text>EVISU官方旗舰店</text>
					</view>
					<text class="ing">退货</text>
				</view>
				<view class="goods">
					<view class="avatar">
						<image src="/static/pub/bbt.png" mode=""></image>
					</view>
					<view class="">
						<text>adidas / 阿迪达斯</text>
						<text>白色 XXL 数量x1</text>
						<text>¥199</text>
					</view>
				</view>
				<view class="state">
					<view class="">
						<text>审核</text>
						<text>等待客服处理</text>
					</view>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
				<view class="bot">
					<text>删除记录</text>
					<text>填写货运单号</text>
					<text>查看详情</text>
				</view>
			</view>
		</view>
		<u-empty v-if="identList.length <= 0" margin-top="400" text="暂无数据" mode="data"></u-empty>
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
						name: '处理中'
					}
				],
				identList: [1]
			};
		},
		onLoad() {
			
		},
		methods:{
			change(e){
				this.current = e
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss"scoped>
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
				padding: 0 36rpx 0;
				border-bottom: solid 10rpx #F6F5FA;
				.title{
					padding: 19rpx 8rpx;
					border-bottom: solid 1px #F2F2F6;
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						image{
							width: 34rpx;
							height: 34rpx;
							border-radius: 6rpx;
							margin-right: 12rpx;
						}
						text{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
					>text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #86868F;
					}
					.ing{
						color: #FF4243;
					}
				}
				.goods{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 28rpx 0;
					position: relative;
					.avatar{
						margin-right: 20rpx;
						image{
							width: 164rpx;
							height: 164rpx;
						}
					}
					view{
						height: 164rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						>:nth-child(1),>:nth-child(3){
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9094A6;
						}
					}
					.status{
						position: absolute;
						right: -62rpx;
						image{
							width: 174rpx;
							height: 174rpx;
						}
					}
				}
				.state{
					margin: 10rpx 0;
					padding: 15rpx 13rpx 15rpx 30rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #F6F5FA;
					border-radius: 10rpx;
					view{
						>:nth-child(1){
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
							margin-right: 38rpx;
						}
						>:nth-child(2){
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #6A6A79;
						}
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
				.bot{
					padding: 12rpx 0;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text{
						display: inline-block;
						padding: 15rpx 18rpx;
						text-align: center;
						border: 1px solid #9393A7;
						border-radius: 8rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
					.active{
						background: #F55454;
						color: #fff;
						border: 1px solid #F55454;
					}
					>:nth-child(2){
						margin: 0 20rpx;
					}
				}
			}
		}
	}
</style>
