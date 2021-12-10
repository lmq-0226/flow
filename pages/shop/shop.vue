<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="nav_bar">
			<view class="nav_left" @click="go('./newPro/newPro')">
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
				<input type="text" value="" placeholder="热门搜索" disabled/>
				<image src="/static/shop/camera.png" mode="" @click.stop="scan"></image>
			</view>
		</view>
		
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="true" :current="current" active-color="#FF4243" @change="change"></u-tabs>
		</view>
		<view class="swipers">
			<u-swiper :list="swiperList" height="300"></u-swiper>
		</view>
		<view class="menus">
			<scroll-view scroll-x="true" class="scroll-view_H" @scroll="scrollChange">
				<view class="items" @click="go('/pages/public/public')">
					<view class="" v-for="(item,index) in 7" :key="index">
						<image src="" mode=""></image>
						<text>新品发售</text>
					</view>
				</view>
				<view class="items items2" @click="go('/pages/public/public')">
					<view class="" v-for="(item,index) in 6" :key="index">
						<image src="" mode=""></image>
						<text>新品发售</text>
					</view>
				</view>
			</scroll-view>
			<view class="slide">
				<view class="" :style="'margin-left:' + slideLeft + '%'"></view>
			</view>
		</view>
		<view class="flash" @click="go('/pages/public/public')">
			<view class="flash_one">
				<view class="one_left">
					<view class="lettle">
						<view class="title">
							<text>品牌闪购</text>
							<text>逛潮流好物</text>
						</view>
						<text class="sub">品牌闪购</text>
					</view>
					<view class="classIfy">
						<view class="" v-for="(item,index) in 2" :key="index">
							<image src="" mode=""></image>
						</view>
					</view>
				</view>
				<view class="one_right">
					<view class="title">
						<text>大家都在买</text>
						<text>品牌闪购</text>
					</view>
					<view class="classIfy">
						<view class="" v-for="(item,index) in 2" :key="index">
							<image src="" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="flash_two">
				<view class="one_right">
					<view class="title">
						<text>品牌闪购</text>
						<text>品牌闪购</text>
					</view>
					<view class="classIfy">
						<view class="" v-for="(item,index) in 2" :key="index">
							<image src="" mode=""></image>
						</view>
					</view>
				</view>
				<view class="one_right">
					<view class="title">
						<text>品牌闪购</text>
						<text>品牌闪购</text>
					</view>
					<view class="classIfy">
						<view class="" v-for="(item,index) in 2" :key="index">
							<image src="" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="flash_three">
				<view class="one_right" v-for="(item,index) in 4" :key="index">
					<view class="title">
						<text>品牌闪购</text>
						<text>品牌闪购</text>
					</view>
					<view class="classIfy">
						<view class="">
							<image src="" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="goods">
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="go('./goodsDetail/goodsDetail')">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="num">
							<text>¥899</text>
							<text>156人付款</text>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="go('./goodsDetail/goodsDetail')">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="num">
							<text>¥899</text>
							<text>156人付款</text>
						</view>
					</view>
				</template>
			</u-waterfall>
		</view>
		<!-- 加载更多 -->
		<u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" top="1200" :duration="300"></u-back-top>
		<!-- <u-modal v-model="show" :show-cancel-button="true" confirm-text="升级"
				title="发现新版本" 
			>
			<view class="u-update-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				current: 0,
				tabList: [{
						name: '推荐'
					}, {
						name: '电影'
					}, {
						name: '电视剧'
					}, {
						name: '小视频'
					}, {
						name: '游戏'
					}, {
						name: '校园'
					}, {
						name: '影视'
					}, {
						name: '音乐'
					}],
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
				slideLeft: 0, // 动态设置slide的margin-left
				scrollWhidth: '' ,// scroll可视区域的宽
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				list: [
					{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						price: 385,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						price: 784,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					},
					{
						price: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
					},
					{
						price: 2341,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
					},
					{
						price: 661,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
					},
					{
						price: 1654,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 1678,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 924,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
				],
				scrollTop: 0
			}
		},
		onReady() {
			// #ifdef APP-PLUS
			// 通过 id 获取 nvue 子窗体
			const subNVue = uni.getSubNVueById('privacy')  
			// 打开 nvue 子窗体  
			subNVue.show('fade-in', 300, function(){  
			    // 打开后进行一些操作...  
			});  
			// #endif
		},
		onShow() {
			// 关闭 nvue 子窗体  
			// subNVue.hide('fade-out', 300)
		},
		onLoad() {
			// scroll可视区域的宽
			setTimeout(()=>{
				let obj = uni.createSelectorQuery().select('.scroll-view_H')
				obj.boundingClientRect(data =>{ 
					this.scrollWhidth = data.width
				}).exec()
			}, 100)
			this.addRandomData()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		// 触底加载更多，切换加载更多loading
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		// 监听下拉刷新事件
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			change(index) {
				this.current = index;
			},
			scan(){
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				})
			},
			// scrol滚动
			scrollChange(e){
				// scroll的宽-可视区域的宽
				var whidth = e.detail.scrollWidth - this.scrollWhidth
				this.slideLeft = e.detail.scrollLeft/whidth/2*100 // 计算slide的margin-left的比例
			},
			// 模拟数据请求
			addRandomData() {	
				for(let i = 0; i < 10; i++) {
					// 产生 0 到 this.list.length - 1 的一个整数型随机数  
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					// 唯一码
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		// .nav {
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
		.search{
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
		}
		.swipers {
			padding: 23rpx 30rpx;
		}
		.menus {
			padding: 0 30rpx;
			.scroll-view_H {
				width: 100%;
				overflow: hidden;
				.items {
					white-space: nowrap;
					view {
						display: inline-flex;
						flex-direction: column;
						// width: 150rpx;
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
					:not(:first-child):not(:last-child) {
						margin: 0 15rpx;
					}
					:nth-child(1) {
						margin-right: 15rpx;
					}
					view:last-child {
						margin-left: 15rpx;
					}
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
			view{
				width: 36rpx;
				height: 6rpx;
				background: #FF4243;
				border-radius: 3rpx;
			}
		}
		.flash{
			padding: 0 20rpx 20rpx;
			.flash_one,.flash_two,.flash_three{
				padding: 20rpx;
				width: calc(100% );
				background: linear-gradient(0deg, #FDFDFD 0%, #FFF8F8 100%);
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				.classIfy{
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						width: 160rpx;
						height: 160prx;
						max-height: 160rpx;
						overflow: hidden;
						background: #c3c3c3;
						border-radius: 10rpx;
						image{
							width: 100%;
						}
					}
				}
				.one_left{
					width: 49%;
					.lettle{
						.title{
							display: flex;
							justify-content: space-between;
							align-items: center;
							>:nth-child(1){
								font-size: 32rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #000000;
							}
							>:nth-child(2){
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
						.sub{
							display: block;
							margin: 5rpx 0 10rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FD643E;
						}
					}
				}
				.one_right{
					width: 49%;
					.title{
						text{
							display: block;
						}
						>:nth-child(1){
							font-size: 32rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							margin: 5rpx 0 10rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FD643E;
						}
					}
				}
			}
			.flash_three{
				>:nth-child(1){
					.title{
						>:nth-child(2){
							color: #FA1E97;
						}
					}
				}
				>:nth-child(3){
					.title{
						>:nth-child(2){
							color: #6767D0;
						}
					}
				}
				>:nth-child(4){
					.title{
						>:nth-child(2){
							color: #0AC0AA;
						}
					}
				}
			}
		}
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
			.num{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				>:nth-child(1){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FF4243;
				}
				>:nth-child(2){
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9094A6;
				}
			}
		}
		.goods{
			background-color: #F6F5FA;
		}
	}
</style>
