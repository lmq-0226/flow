<template>
	<view class="content">
		<scroll-view class="swiper_scroll" :scroll-y="true" @scrolltolower="onRachBoom">
			<view class="swiper-item">
				<view class="menus">
					<scroll-view scroll-x="true" class="scroll-view_H" @scroll="scrollChange"
						@touchmove.stop.prevent="">
						<view class="items">
							<view class="" v-for="(elem,cut) in topMenuList" :key="cut"
								@click="go('/pages/public/public?category_id=' + elem.id)">
								<image :src="ImgUrl + elem.image" mode=""></image>
								<text>{{elem.name}}</text>
							</view>
						</view>
						<view class="items items2">
							<view class="" v-for="(item,index) in botMenuList" :key="index"
								 @click="go('/pages/public/public?category_id=' + item.id)"
							>
								<image :src="ImgUrl + item.image" mode=""></image>
								<text>{{item.name}}</text>
							</view>
						</view>
					</scroll-view>
					<view class="slide" v-if="menuList.length > 10">
						<view class="" :style="'margin-left:' + slideLeft + '%'"></view>
					</view>
				</view>
				<view class="goods">
					<!-- 瀑布流 -->
					<u-waterfall v-model="flowList" :ref="'uWaterfall' + cid">
						<template v-slot:left="{leftList}">
							<view class="demo-warter" v-for="(elem, cut) in leftList" :key="cut"
								@click="go('./goodsDetail/goodsDetail?id=' + elem.id)">
								<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
								<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + elem.image"
									img-mode="widthFix" :index="cut"></u-lazy-load>
								<view class="demo-title">
									{{elem.title}}
								</view>
								<view class="num">
									<text>￥{{elem.price}}</text>
									<text>{{elem.payment}}人付款</text>
								</view>
							</view>
						</template>
						<template v-slot:right="{rightList}">
							<view class="demo-warter" v-for="(elem, cut) in rightList" :key="cut"
								@click="go('./goodsDetail/goodsDetail?id=' + elem.id)">
								<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + elem.image" img-mode="widthFix"
									:index="cut"></u-lazy-load>
								<view class="demo-title">
									{{elem.title}}
								</view>
								<view class="num">
									<text>￥{{elem.price}}</text>
									<text>{{elem.payment}}人付款</text>
								</view>
							</view>
						</template>
					</u-waterfall>
				</view>
				<u-empty v-if="flowList.length <= 0" text="暂无数据" mode="list" margin-top="300"></u-empty>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "shop-other",
		props: {
			cid: {
				type: [Number, String],
				default: ''
			},
			menuList: {
				type: Array,
				default: function() {
					return []
				}
			},
			goodsList: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				slideLeft: 0, // 动态设置slide的margin-left
				scrollWhidth: '', // scroll可视区域的宽
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				topMenuList: [],
				botMenuList: []
			};
		},
		mounted() {
			this.$nextTick(() => {
				if(this.menuList.length >= 10){
					if(this.menuList.length % 2 == 0){
						this.topMenuList = this.menuList.slice(0,this.menuList.length/2)
						this.botMenuList = this.menuList.slice(this.menuList.length/2)
					}else{
						this.topMenuList = this.menuList.slice(0,(this.menuList.length/2) + 1)
						this.botMenuList = this.menuList.slice((this.menuList.length/2) + 1)
					}
				}else if(5 < this.menuList.length <= 10){
					this.topMenuList = this.menuList.slice(0,5)
					this.botMenuList = this.menuList.slice(5)
				}
				// this.flowList = this.goodsList
				this.getGoods()
				console.log(this.cid)
			})
		},
		methods: {
			onRachBoom(e) {
				console.log(e, '111')
				// this.getGoods()
			},
			// 商品列表
			getGoods() {
				this.request({
					url: 'wanlshop/common/category',
					method: "GET",
					data: {
						id: this.cid,
						page: 1
					},
				}).then(res => {
					if (res.data.code == 1) {
						this.flowList = res.data.data.goods.data
					}
				})
			},
			scrollChange(e) {
				// scroll可视区域的宽
				let obj = uni.createSelectorQuery().select('.scroll-view_H')
				obj.boundingClientRect(data => {
					this.scrollWhidth = data.width
				}).exec()
				// scroll的宽-可视区域的宽
				var whidth = e.detail.scrollWidth - this.scrollWhidth
				this.slideLeft = e.detail.scrollLeft / whidth / 2 * 100 // 计算slide的margin-left的比例
			},
			go(e) {
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.swiper_scroll{
			height: calc(100vh - 288rpx - var(--status-bar-height));
			background: #F6F5FA;
		}
		.menus {
			padding: 30rpx 30rpx 10rpx;
			background: #fff;

			.scroll-view_H {
				width: 100%;
				overflow: hidden;

				.items {
					white-space: nowrap;

					view {
						display: inline-flex;
						flex-direction: column;
						align-items: center;

						width: 20%;
						image {
							width: 104rpx;
							height: 104rpx;
							background: #E9E9EB;
							border-radius: 5rpx;
							margin-bottom: 10rpx;
						}

						text {
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
					}

					// :not(:first-child):not(:last-child) {
					// 	margin: 0 15rpx;
					// }

					// :nth-child(1) {
					// 	margin-right: 15rpx;
					// }

					// view:last-child {
					// 	margin-left: 15rpx;
					// }
				}

				.items2 {
					margin-top: 20rpx;
				}
			}
		}

		.slide {
			margin: 20rpx auto;
			width: 72rpx;
			height: 6rpx;
			background: #F6F5FA;
			border-radius: 3rpx;

			view {
				width: 36rpx;
				height: 6rpx;
				background: #FF4243;
				border-radius: 3rpx;
			}
		}

		.flash {
			padding: 0 20rpx 20rpx;
			background: #fff;

			.flash_one,
			.flash_two,
			.flash_three {
				width: calc(100%);
				background: linear-gradient(0deg, #FDFDFD 0%, #FFF8F8 100%);
				border-radius: 10rpx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.classIfy {
					display: flex;
					justify-content: space-between;
					align-items: center;

					view {
						width: 160rpx;
						height: 160prx;
						max-height: 160rpx;
						overflow: hidden;
						background: #c3c3c3;
						border-radius: 10rpx;

						image {
							width: 100%;
						}
					}
				}

				.one_left {
					width: 50%;
					border: solid 1px #F6F5FA;
					padding: 20rpx;

					.lettle {
						.title {
							display: flex;
							justify-content: space-between;
							align-items: center;

							>:nth-child(1) {
								font-size: 32rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #000000;
							}

							>:nth-child(2) {
								display: inline-block;
								font-size: 22rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #FFFFFF;
								padding: 5rpx 20rpx;
								background: linear-gradient(90deg, #FD3750 0%, #FC653F 100%);
								border-radius: 16rpx;
							}
						}

						.sub {
							display: block;
							margin: 5rpx 0 10rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FD643E;
						}
					}
				}

				.one_right {
					width: 49%;

					.title {
						text {
							display: block;
						}

						>:nth-child(1) {
							font-size: 32rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}

						>:nth-child(2) {
							margin: 5rpx 0 10rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FD643E;
						}
					}
				}
			}

			.flash_one {
				>:nth-child(3) {
					width: 25%;
				}

				>:nth-child(4) {
					width: 25%;
				}
			}

			.flash_three {
				>:nth-child(1) {
					.title {
						>:nth-child(2) {
							color: #FA1E97;
						}
					}
				}

				>:nth-child(3) {
					.title {
						>:nth-child(2) {
							color: #6767D0;
						}
					}
				}

				>:nth-child(4) {
					.title {
						>:nth-child(2) {
							color: #0AC0AA;
						}
					}
				}
			}
		}



		.goods {
			background-color: #F6F5FA;

			.demo-warter {
				border-radius: 8px;
				margin: 5px;
				background-color: #ffffff;
				padding: 8px;
				position: relative;

				.demo-title {
					margin-top: 14rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					overflow: hidden;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}

				.num {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 20rpx;

					>:nth-child(1) {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FF4243;
					}

					>:nth-child(2) {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
					}
				}
			}
		}

	}
</style>
