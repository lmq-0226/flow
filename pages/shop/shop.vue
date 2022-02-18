<template>
	<view class="content">
		<view class="nav">
			<view class="status_bar"></view>
			<view class="nav_bar">
				 <!--  @click="go('./newPro/newPro')" -->
				<view class="nav_left">
					<view class="left_top">
						<text>保障全新正品</text>
						<image src="/static/shop/leave_go.png" mode=""></image>
					</view>
					<view class="left_bot">
						<text>正品保障</text>
					</view>
				</view>
				<view class="nav_right" @click="go('./classify/classify')">
					<text>ALL</text>
					<text>分类</text>
				</view>
			</view>
			<view class="search">
				<view class="nav_search" @click="go('/pages/search/search')">
					<input type="text" value="" placeholder="热门搜索" disabled />
					<image src="/static/shop/camera.png" mode="" @click.stop="scan"></image>
				</view>
			</view>
			<view class="tabs">
				<u-tabs :list="tabList" :is-scroll="true" :current="current" active-color="#FF4243" @change="change">
				</u-tabs>
			</view>
		</view>
		
		<!-- 主题内容，全屏选项卡 -->
		<swiper class="swipers" :current="current" @change="change($event.detail.current)" v-if="refreshNull">
			<swiper-item v-for="(item,index) in tabList">
				<!-- 推荐组件 -->
				<shop-recom :menuList="item.childlist" :goodsList="item.goods_list" :cid="item.id" :category="category" v-if="index == 0" ref="shoprecom"></shop-recom>
				<!-- 其他菜单组件 -->
				<shop-other :menuList="item.childlist" :goodsList="item.goods_list" :cid="item.id" v-else ref="shopother"></shop-other>
			</swiper-item>
		</swiper>
		<!-- 加载更多 -->
		<!-- <u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore> -->
		<!-- 返回顶部 -->
		<view class="null" v-else>
			<u-empty text="无法连接到网络" mode="wifi" margin-top="300"></u-empty>
			<text @click="refresh">点击刷新</text>
		</view>
		<u-back-top :scroll-top="scrollTop" top="1200" :duration="300"></u-back-top>
	</view>
</template>

<script>
	import shopRecom from '@/components/shop-recom/shop-recom.vue'
	import shopOther from '@/components/shop-other/shop-other.vue'
	import {throttle} from '@/utils/throttle.js'
	export default {
		components: {
			'shop-recom': shopRecom,
			'shop-other': shopOther
		},
		data() {
			return {
				current: 0,
				tabList: [],
				swiperList: [],
				menuList: [],
				slideLeft: 0, // 动态设置slide的margin-left
				scrollWhidth: '', // scroll可视区域的宽
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				list: [],
				scrollTop: 0,
				initClassify: [],
				cid: '',
				type: 0,
				category: {},
				refreshNull: false
			}
		},
		onReady() {
			// // #ifdef APP-PLUS
			// // 通过 id 获取 nvue 子窗体
			// const subNVue = uni.getSubNVueById('privacy')
			// // 打开 nvue 子窗体  
			// subNVue.show('fade-in', 300, function() {
			// 	// 打开后进行一些操作...  
			// });
			// // #endif
		},
		onShow() {
			// 关闭 nvue 子窗体  
			// subNVue.hide('fade-out', 300)
		},
		created() {
			
		},
		onLoad() {
			this.getData()
			// this.addRandomData()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		// 触底加载更多，切换加载更多loading
		onReachBottom() {
			// this.loadStatus = 'loading';
			// // 模拟数据加载
			// setTimeout(() => {
			// 	this.addRandomData();
			// 	this.loadStatus = 'loadmore';
			// }, 1000)
			uni.$emit('onReachBottom');
		},
		// 监听下拉刷新事件
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			// 无网络刷新
			refresh: throttle(function(){
				this.getData()
			}, 3000),
			getData() {
				this.request({
					url: 'wanlshop/common/init',
					data: {
						// version: '1.1.2'
					}
				}).then(res => {
					if (res.data.code == 1) {
						this.refreshNull = true
						this.tabList = res.data.data.modulesData.categoryModules
						this.tabList.unshift({
							childlist: res.data.data.modulesData.homeModules.item[1].data,
							id: '',
							image: "/assets/addons/wanlshop/img/category/category_nvzhuang3x.jpg",
							name: "推荐",
							pid: 0,
							spacer: ""
						})
						this.tabList.forEach(elem=>{
							elem.goods_list = []
						})
						this.cid = this.tabList[0].id
						this.category = res.data.data.modulesData.homeModules.item[2]
					}
				})

			},
			// 商品列表
			getGoods(){
				this.request({
					url: 'wanlshop/common/category',
					method: "GET",
					data: {
						id: this.cid,
						page: 1
					},
				}).then(res => {
					if (res.data.code == 1) {
						this.tabList.forEach(elem=>{
							if(elem.id == this.cid){
								elem.goods_list = res.data.data.goods.data
							}
						})
					}
				})
			},
			
			change(index) {
				this.current = index;
				this.menuList = this.tabList[index].childlist
			},
			swiperChange(e){
				console.log(e.detail.current)
			},
			scan() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				})
			},
			// menus --> scrol滚动
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
			// 模拟数据请求
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					// 产生 0 到 this.list.length - 1 的一个整数型随机数  
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					// 唯一码
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			go(e) {
				uni.navigateTo({
					url: e
				})
			}
		},
		computed: {
			
		},
		watch: {
			current(newVal,oldVal){
				this.cid = this.tabList[newVal].id
				// if(newVal != 0){
					// this.getGoods()
				// }
				
			},
			show(newVal,oldVal){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.content {
		// max-height: calc(100vh - 100rpx);
		// overflow: hidden;
		// .nav {
		.nav{
			position: sticky;
			top: 0;
			z-index: 999999;
			background: #fff;
		}
		.nav_bar {
			padding: 0 30rpx 20rpx;
			position: sticky;
			position: -webkit-sticky;
			top: var(--status-bar-height);
			z-index: 9999;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: solid 1px #f8f8f8;

			.nav_left {
				.left_top {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					text {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}

					image {
						width: 44rpx;
						height: 44rpx;
					}
				}

				.left_bot {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;

					text {
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #86868F;
						letter-spacing: 20rpx;
					}
				}
			}

			.nav_right {
				text {
					display: block;
					text-align: center;
				}

				>:nth-child(1) {
					font-size: 30rpx;
					font-family: FZLanTingHei-HN-GBK;
					font-weight: bold;
					color: #000000;
				}

				>:nth-child(2) {
					font-size: 18rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
		}

		.search {
			padding: 0 30rpx;

			.nav_search {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				padding: 19rpx 23rpx;
				background: #F6F5FA;
				border-radius: 10rpx;

				image {
					width: 44rpx;
					height: 44rpx;
				}

				input {
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					background: url(../../static/shop/search.png) no-repeat left center;
					background-size: 44rpx;
					padding-left: 55rpx;
					width: calc(100% - 145rpx);
				}
			}
		}

	
		// }
		
		.tabs {
			border-bottom: solid 1px #F2F2F2;
			// position: sticky;
			// top: 0;
			background: #fff;
		}


		.swipers {
			height: calc(100vh - 288rpx - var(--status-bar-height));
			// padding: 30rpx 23rpx 0rpx;
			background: #fff;
		}
		
		.null{
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			text{
				display: block;
				padding: 10rpx 20rpx;
				border: solid 1px #ccc;
				border-radius: 10rpx;
				font-size: 24rpx;
				color: #333;
			}
		}
	}
</style>
