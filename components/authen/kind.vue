<template>
	<view>
		<view class="tabs">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#FC493D"></u-tabs>
		</view>
		<scroll-view class="swiper-scroll" scroll-y="true" @scrolltolower="onRachBoom" >
			<view class="swiper-item">
				<view class="list">
					<view class="item" v-for="(item,index) in identList" :key="item.id" @click="next(item)">
						<view class="title">
							<view class="">
								<image src="/static/avatar3.png" mode=""></image>
								<text>鉴定师：{{item.name}}</text>
							</view>
							<text class="ing">{{item.state_text}}</text>
						</view>
						<view class="goods">
							<view class="avatar">
								<image :src="ImgUrl + item.image" mode=""></image>
							</view>
							<view class="">
								<text>{{item.category_name}} / {{item.brand_name}}</text>
								<text>¥{{item.price}}</text>
								<text>{{item.state_text}}</text>
							</view>
							<view class="result">
								<image v-if="item.status == 1" src="/static/my/true.png" mode=""></image>
								<image v-else-if="item.status == 0" src="/static/my/fake.png" mode=""></image>
							</view>
						</view>
						<view class="bot">
							<text>{{item.time}}</text>
							<view class="">
								<text class="active" v-if="item.state == 1" @click.stop="go('/pages/serve/authen/publish/pay?type=recx&id=' + item.id)">去支付</text>
								<text class="active" v-else-if="item.state == 2" @click.stop="go('/pages/leave/detail/shipments/shipments?type=serve&order_id=' + item.id)">去发货</text>
								<!-- <text @click="go('/pages/public/callCenter')">联系客服</text>
								<text>查看物流</text>
								<text @click="go(item.url + '?status=' + item.status)">查看详情</text> -->
								<!-- : '/pages/serve/authen/aller/identDetail' -->
							</view>
						</view>
					</view>
				</view>
				<u-empty v-if="identList.length <= 0" margin-top="400" text="暂无数据" mode="data"></u-empty>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "authen",
		data() {
			return {
				current: 0,
				list: [{
					name: '全部'
				}, {
					name: '进行中'
				}, {
					name: '已完成'
				}, {
					name: '已退款'
				}],
				identList: [],

			};
		},
		onShow() {
			
		},
		mounted() {
			this.$nextTick(()=>{
				this.getData()
			})
		},
		methods: {
			onRachBoom(e){
				console.log(e)
			},
			getData() {
				this.request({
					url: 'service/order/list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						page_index: 1,
						page_size: 10,
						type: 2,
						keywork: ''
					}
				}).then(res => {
					if (res.data.code == 1) {
						this.identList = res.data.data.list
						this.identList.forEach(elem=>{
							elem.image = elem.images.split(',')[0]
						})
					}
				})
			},
			change(e) {
				this.current = e
			},
			next(e) {
				this.go('/pages/my/identify/payIdentDetail?id=' + e.id)
			},
			go(e) {
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabs {
		border-bottom: solid 10rpx #F6F5FA;
		position: sticky;
		top: 0;
		background: #fff;
		z-index: 999;

	}

	.swiper-scroll {
		/* #ifdef H5 */
		height: calc(100vh - 88rpx - 90rpx);
		/* #endif */
		/* #ifdef APP-PLUS */
		height: calc(100vh - 88rpx - 90rpx - var(--status-bar-height));
		/* #endif */
		.list {
			.item {
				padding: 0 36rpx 0;
				border-bottom: solid 10rpx #F6F5FA;
				background: #fff !important;
				.title {
					padding: 19rpx 8rpx;
					border-bottom: solid 1px #F2F2F6;
					display: flex;
					justify-content: space-between;
					align-items: center;

					view {
						display: flex;
						justify-content: flex-start;
						align-items: center;

						image {
							width: 34rpx;
							height: 34rpx;
							border-radius: 6rpx;
							margin-right: 12rpx;
						}

						text {
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}

					>text {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #86868F;
					}

					.ing {
						color: #FF4243;
					}
				}

				.goods {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 28rpx 0;
					position: relative;

					.avatar {
						margin-right: 20rpx;

						image {
							width: 164rpx;
							height: 164rpx;
						}
					}

					view {
						height: 164rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						>:nth-child(1),
						>:nth-child(2) {
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}

						>:nth-child(3) {
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #FF4243;
						}
					}

					.result {
						position: absolute;
						right: -62rpx;

						image {
							width: 174rpx;
							height: 174rpx;
						}
					}
				}

				.bot {
					padding: 12rpx 0;
					border-top: solid 1px #F2F2F6;
					display: flex;
					justify-content: space-between;
					align-items: center;

					>text {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}

					view {
						text {
							display: inline-block;
							width: 130rpx;
							height: 54rpx;
							text-align: center;
							line-height: 54rpx;
							border: 1px solid #9393A7;
							border-radius: 4rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #686879;
						}
						.active{
							background: #F43530;
							color: #fff;
							border: #fff;
						}
						>:nth-child(2) {
							margin: 0 20rpx;
						}
					}
				}
			}
		}
	}
</style>
