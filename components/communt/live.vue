<template>
	<view>
		<scroll-view :scroll-y="true" class="scroll-Y">
			<view class="goods">
				<!-- 瀑布流 -->
				<u-waterfall v-model="flowList" ref="uWaterfall">
					<template v-slot:left="{leftList}">
						<view class="demo-warter" v-for="(item, index) in leftList" :key="index"
							@click="go('/pages/community/live/live?id=5')">
							<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
							<u-lazy-load threshold="-450" border-radius="10"
								:image="ImgUrl + item.video_url + '?x-oss-process=video/snapshot,t_1000,f_jpg'"
								img-mode="widthFix" :index="index"></u-lazy-load>
							<!-- <view class="demo-title">
								{{item.title}}
							</view> -->
							<view class="bot">
								<view class="avatar" v-if="item.user">
									<image :src="ImgUrl + item.user.avatar" mode=""></image>
									<text>{{item.user.nickname}}</text>
								</view>
								<view class="avatar" v-if="item.shop">
									<image :src="ImgUrl + item.shop.avatar" mode=""></image>
									<text>{{item.shop.shopname}}</text>
								</view>
								<view class="">
									<image src="/static/comm/praise.png" mode=""></image>
									<text>{{item.likes}}</text>
								</view>
							</view>
						</view>
						
					</template>
					<template v-slot:right="{rightList}">
						<view class="demo-warter" v-for="(item, index) in rightList" :key="index"
							@click="go('/pages/community/live/live?id=5')">
							<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
							<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.images[0]"
								img-mode="widthFix" :index="index"></u-lazy-load>
							<!-- <view class="demo-title">
								{{item.title}}
							</view> -->
							<view class="bot">
								<view class="avatar" v-if="item.user">
									<image :src="ImgUrl + item.user.avatar" mode=""></image>
									<text>{{item.user.nickname}}</text>
								</view>
								<view class="avatar" v-if="item.shop">
									<image :src="ImgUrl + item.shop.avatar" mode=""></image>
									<text>{{item.shop.shopname}}</text>
								</view>
								<view class="">
									<image src="/static/comm/praise.png" mode=""></image>
									<text>{{item.likes}}</text>
								</view>
							</view>
						</view>
					</template>
				</u-waterfall>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'live',
		data() {
			return {
				navCheck: 1,
				navList: ['关注', '发现', '直播'],
				// navList: ['发现'],
				classCurrent: 0,
				navClassList: [{
						id: 1,
						text: '推荐'
					},
					{
						id: 2,
						text: '球鞋'
					},
					{
						id: 3,
						text: '穿搭'
					},
					{
						id: 4,
						text: '评论区'
					},
					{
						id: 5,
						text: '手表'
					},
					{
						id: 6,
						text: '美妆'
					},
					{
						id: 7,
						text: '玩具'
					}
				],
				tabsShow: true,
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				list: [],
				scrollTop: 0,
				last_page: 0,
				page: 1
			};
		},
		mounted() {
			this.$nextTick(() => {
				this.getData()
			})
		},
		methods: {
			getData() {
				this.loadStatus = 'loading';
				this.request({
					url: 'wanlshop/find/find/getList',
					header: {
						token: uni.getStorageSync('userInfo').token
					},
					data: {
						type: 'video',
						page: 1
					}
				}).then(res => {
					if (res.data.code == 1) {
						this.flowList = res.data.data.data
						this.last_page = res.data.data.last_page
						if (this.page >= this.last_page) {
							this.loadStatus = 'nomore';
						} else {
							this.loadStatus = 'loadmore'
						}
					}
					uni.stopPullDownRefresh();
				})
			},
			go(e){
				console.log(e)
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss">
	.scroll-Y {
		/* #ifdef H5 */
		height: calc(100vh - 186rpx);
		/* #endif */
		/* #ifdef APP-PLUS */
		height: calc(100vh - 80rpx - var(--status-bar-height));
		/* #endif */
		background-color: #F6F5FA;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;

		.videoPb {
			position: absolute;
			width: 44rpx;
			height: 44rpx;
			z-index: 10;
			top: 40rpx;
			right: 40rpx;
		}

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

		.bot {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 17rpx;

			view {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				image {
					width: 44rpx;
					height: 44rpx;
				}

				text {
					font-size: 18rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #535960;
				}
			}

			.avatar {
				image {
					width: 34rpx;
					height: 34rpx;
					border-radius: 50%;
					background: #ccc;
					margin-right: 14rpx;
				}

				text {
					font-size: 20rpx;
				}
			}
		}
	}

	.goods {
		background-color: #F6F5FA;
	}
</style>
