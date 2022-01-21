<template>
	<view class="content">
		<view class="tabs">
			<u-tabs :list="list" :is-scroll="false" :current="cut" @change="change" active-color="#FC493D"></u-tabs>
		</view>
		<scroll-view class="swiper_scrol" :scroll-y="true">
			<view class="list">
				<view class="item" v-for="(item,index) in dataList" :key="index"
					@click="goDetail(item)">
					<view class="desc">
						<image :src="ImgUrl + item.image" mode=""></image>
						<view class="">
							<text>{{item.content}}</text>
							<text>¥{{item.price}}</text>
							<text>{{item.like_nums}}人想要</text>
						</view>
					</view>
					<view class="btns">
						<!-- <text>更多</text> -->
						<!-- <text>删除</text> -->
						<text @click.stop="back(item.id)">编辑</text>
						<!-- <text v-else @click.stop="go('/pages/leave/publish/publish?type=2&id=' + item.id)">编辑</text> -->
						<view class="">

							<!-- <text>详情</text> -->
						</view>
					</view>
				</view>
			</view>
			<u-empty v-if="dataList.length <= 0" text="暂无数据" mode="list"></u-empty>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		name: "consign",
		props: {
			current:{
				type:[Number,String],
				value:0
			},
			pCut:{
				type:[Number,String],
				value:0
			}
		},
		data() {
			return {
				list: [{
					name: '在售'
				}, {
					name: '已售'
				}, {
					name: '已下架'
				}, {
					name: '草稿'
				}],
				status: 1,
				dataList: [],
				cut: 0
			};
		},
		mounted() {
			this.$nextTick(() => {
				if(this.current == 1){
					this.cut = 3
					this.status = 4
				}
				this.getData()
			})
		},
		methods: {
			getData() {
				this.request({
					url: 'idle/goods/list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						status: this.status,
						page_index: 1,
						page_size: 10,
						type: 'consign'
					}
				}).then(res => {
					if (res.data.code == 1) {
						this.dataList = res.data.data.list
					}
				})
			},
			change(e) {
				this.cut = e
				this.status = e + 1
				
				this.getData()
			},
			go(e) {
				uni.navigateTo({
					url: e
				})
			},
			goDetail(e){
				if(e.status == 4){
					this.go('/pages/leave/leaveShop/goodsDetail/goodsDetail?id=' + e.id)
				}else if(e.status == 1){
					this.go('/pages/leave/detail/detail?order_id=' + e.id)
				}
			},
			// 回退
			back(e) {
				if (this.pCut == 1) {
					var pages = getCurrentPages();
					var prevPage = pages[pages.length - 2]; //上一个页面
					prevPage.$vm.id = e
					uni.navigateBack({
						delta: 1
					})
				} else {
					this.go('/pages/leave/publish/publish?type=consign&current=1&id=' + e)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper_scrol {
		/* #ifdef H5 */
		height: calc(100vh - 88rpx - 90rpx);
		/* #endif */
		/* #ifdef APP-PLUS */
		height: 100vh;
		/* #endif */
	}

	.list {

		.item {
			padding: 0 30rpx;
			border-bottom: solid 10rpx #F6F5FA;
			background: #fff !important;
			.desc {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 28rpx 6rpx;
				border-bottom: solid 1px #F2F2F6;

				image {
					width: 164rpx;
					height: 164rpx;
					min-width: 164rpx;
					margin-right: 23rpx;
					border-radius: 10rpx;
				}

				view {
					height: 164rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					>:nth-child(1) {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
						overflow: hidden;
						-webkit-line-clamp: 2;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}

					>:nth-child(2) {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FF4243;
					}

					>:nth-child(3) {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
					}
				}
			}

			.btns {
				padding: 13rpx 0rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;

				// >text{
				// 	font-size: 24rpx;
				// 	font-family: PingFang SC;
				// 	font-weight: 500;
				// 	color: #686879;
				// }
				text {
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

				// view{

				// }
			}
		}
	}
</style>
