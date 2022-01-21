<template>
	<view>
		<view class="tabs">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#FC493D"></u-tabs>
		</view>
		<scroll-view class="swiper-scroll" :scroll-y="true" @scrolltolower="onRachBoom">
			
			<view class="list">
				<view class="item" v-for="(item,index) in orderList" :key="index"
					@click="go('/pages/my/buy/receiving/receiving?order_id=' + item.id)">
					<view class="title">
						<view class="">
							<!-- <image src="/static/avatar3.png" mode=""></image> -->
							<text>{{item.shop.shopname}}</text>
						</view>
						<text
							class="ing">{{item.state == 1 ? '待付款' : (item.state == 2 ? '待发货' : (item.state == 3 ? '待收货' : (item.state == 7 ? '已取消' : (item.state == 6 ? '已完成' : ''))))}}</text>
					</view>
					<view class="goods" v-for="(elem, cut) in item.goods" :key="cut">
						<view class="avatar">
							<image :src="ImgUrl + elem.image" mode=""></image>
						</view>
						<view class="">
							<text>{{elem.title}}</text>
							<text>{{elem.difference + ' ' + '数量' + elem.number}}</text>
							<text>¥{{elem.price}}</text>
						</view>
					</view>
					<view class="bot" v-if="item.state == 1">
						<text @click.stop="cancel(item.id)">取消订单</text>
						<text @click.stop="go('/pages/shop/goodsDetail/confirmOrder/pay?order_id=' + item.id)">立即支付</text>
					</view>
					<view class="bot" v-else-if="item.state == 2">
						<text @click.stop="go('/pages/HM-chat/HM-chat?shop_id=' + item.shop_id)">联系商家</text>
					</view>
					<view class="bot" v-else-if="item.state == 3">
						<text @click.stop="go('./logistics/logistics?id=' + item.id)">查看物流</text>
						<text class="active">确认收货</text>
					</view>
					<view class="bot" v-else-if="item.state == 4">
						<text @click.stop="go('./logistics/logistics?id=' + item.id)">查看物流</text>
						<text class="active" @click.stop="go('/pages/my/buy/comment/comment?order_id=' + item.id)">评价订单</text>
					</view>
					<view class="bot" v-else-if="item.state == 7">
						<text @click.stop="del(item.id)">删除订单</text>
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
				total: 0,
				current: uni.getStorageSync('shop_order_current') || 0,
				list: [
					{
						name: '全部'
					}, {
						name: '待付款'
					}, {
						name: '待发货'
					},{
						name: '待收货'
					},{
						name: '待评价'
					}
				],
				page: 1,
				type: ''
			};
		},
		mounted() {
			this.$nextTick(() => {
				this.getData()
			})
		},
		methods: {
			
			onRachBoom(){
				if(this.orderList.length >= this.total){
					return
				}
				this.type = 1
				this.getData()
				this.page ++
			},
			getData() {
				this.request({
					url: 'wanlshop/order/getOrderList',
					method: 'GET',
					header: {
						token: uni.getStorageSync('userInfo').token
					},
					data: {
						state: this.current,
						page: this.page
					}
				}).then(res => {
					if (res.data.code == 1) {
						if(this.type == 1){
							this.orderList = [...this.orderList, ...res.data.data.data]
						}else{
							this.orderList = res.data.data.data
						}
						this.total = res.data.data.total
					}
				})
			},
			// 取消订单
			cancel(e){
				this.request({
					url: 'wanlshop/order/cancelOrder',
					header: {
						token: uni.getStorageSync('userInfo').token,
						'content-type': 'application/json;charset=UTF-8'
					},
					data: {
						id: e
					}
				}).then(res => {
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: '取消成功',
							type: 'success'
						})
						this.orderList = []
						this.getData()
					}
				})
			},
			// 删除订单
			del(e){
				this.request({
					url: 'wanlshop/order/delOrder',
					header: {
						token: uni.getStorageSync('userInfo').token,
						'content-type': 'application/json;charset=UTF-8'
					},
					data: {
						id: e
					}
				}).then(res => {
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: '删除成功',
							type: 'success'
						})
						this.orderList = []
						this.getData()
					}
				})
			},
			change(e){
				this.current = e
				uni.setStorageSync('shop_order_current', e)
				this.page = 1
				this.orderList = []
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
	.tabs{
		border-bottom: solid 10rpx #F6F5FA;
		position: sticky;
		top: 0;
		background: #fff;
		z-index: 9999;
		/* #ifdef H5 */
		// top: 88rpx;
		/* #endif */
	}
	.swiper-scroll {
		/* #ifdef H5 */
		height: calc(100vh - 88rpx - 90rpx);
		/* #endif */
		/* #ifdef APP-PLUS */
		height: 100vh;
		/* #endif */
	}

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
