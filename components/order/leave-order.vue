<template>
	<!-- 闲置订单详情 -->
	<view>
		<!-- <view class="tabs">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#FC493D"></u-tabs>
		</view> -->
		<scroll-view class="swiper-scroll" :scroll-y="true">
			<view class="list">
				<view class="item" v-for="(item,index) in orderList" :key="item.id"
					@click="go('/pages/my/buy/idleOrders/idleOrders?type=1&order_id=' + item.id)">
					<view class="title">
						<view class="">
							<image :src="ImgUrl + item.seller.avatar" mode=""></image>
							<text>{{item.seller.nickname}}</text>
						</view>
						<text
							class="ing">{{item.state_text}}</text>
					</view>
					<view class="goods">
						<view class="avatar">
							<image :src="ImgUrl + item.idlegoods.image" mode=""></image>
						</view>
						<view class="">
							<text>{{item.idlegoods.name}}</text>
							<text></text>
							<text>¥{{item.idlegoods.price}}</text>
						</view>
					</view>
					<view class="bot" >
						<text v-if="item.state == 7" @click.stop="cancel(item.id)">删除订单</text>
						<text v-else-if="item.state == 2" @click.stop="report(item.id)">申请退款</text>
						<text v-else-if="item.state == 3" @click.stop="go('/pages/my/sell/logistics/logistics?order_id=' + item.id)">查询物流</text>
						<text 
							v-else-if="item.state == 1" 
							@click.stop="go('/pages/leave/leaveShop/confirmOrder/pay?order_id=' + item.id + '&type=' + item.type + '&pay=buy&total_amount=0')"
						>立即支付</text>
						
						<text v-else-if="item.state == 2" @click.stop="go('/pages/HM-chat/HM-chat')">联系商家</text>
					</view>
				</view>
			</view>
			<u-empty v-if="orderList.length <= 0" text="暂无数据" mode="order"></u-empty>
		</scroll-view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		name: "shop-order",
		data() {
			return {
				orderList: [],
				current: 0,
				list: [
					{
						name: '全部'
					}, {
						name: '待付款'
					}, {
						name: '待发货'
					},{
						name: '待收货'
					}
				],
			};
		},
		mounted() {
			this.$nextTick(() => {
				this.getData()
			})
		},
		methods: {
			// 获取列表
			getData() {
				this.request({
					url: 'idle/order/order_list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						page_index: 1,
						page_size: 10
					}
				}).then(res => {
					if (res.data.code == 1) {
						this.orderList = res.data.data.list
					}
				})
			},
			// 取消订单
			cancel(e){
				uni.showModal({
					title: '是否取消订单',
					success: res => {
						if (res.confirm) {
							this.request({
								url: 'idle/order/cancel',
								data: {
									token: uni.getStorageSync('userInfo').token,
									id: e
								}
							}).then(res=>{
								if(res.data.code == 1){
									this.$refs.uToast.show({
										title: '取消成功',
										type: 'success'
									})
									this.getData()
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
				
			},
			// 申请退款
			report(e){
				uni.showModal({
					title: '是否申请退款？',
					success: (res) => {
						if(res.confirm){
							this.request({
								url: 'idle/order/apply_refund',
								data: {
									token: uni.getStorageSync('userInfo').token,
									id: e,
									reason: 0,
									refund_content: ''
								}
							}).then(res=>{
								if(res.data.code == 1){
									this.$refs.uToast.show({
										title: '申请成功',
										type: 'success'
									})
									this.getData()
								}
							})
						}
					}
				})
			},
			del(e){
				uni.showModal({
					title: '是否删除订单',
					success: res => {
						if (res.confirm) {
							this.request({
								url: 'idle/order/del',
								data: {
									token: uni.getStorageSync('userInfo').token,
									id: e
								}
							}).then(res=>{
								if(res.data.code == 1){
									this.$refs.uToast.show({
										title: '删除成功',
										type: 'success'
									})
									this.getData()
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			change(e){
				this.current = e
				this.getData()
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper-scroll {
		height: calc(100vh - 88rpx - 90rpx);
	}

	.list {
		.item {
			padding: 0 36rpx 0;
			border-bottom: solid 10rpx #F6F5FA;
			background: #fff;
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
						border-radius: 10rpx;
					}
				}

				view {
					height: 164rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					>:nth-child(1),
					>:nth-child(3) {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}

					>:nth-child(2) {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
					}
				}

				.status {
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
				justify-content: flex-end;
				align-items: center;

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

				.active {
					background: #F55454;
					color: #fff;
					border: 1px solid #F55454;
				}

				>:nth-child(2) {
					margin: 0 20rpx;
				}
			}
		}
	}
</style>
