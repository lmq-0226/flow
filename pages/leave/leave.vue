<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="nav_bar">
			<view class="nav_left" @click="go('./leaveShop/leaveShop')">
				<view class="left_top">
					<text>流象闲置</text>
					<image src="/static/shop/leave_go.png" mode=""></image>
				</view>
				<view class="left_bot">
					<text>验货保障</text>
				</view>
			</view>
			<view class="nav_right" @click="go('/pages/leave/classify/classify')">
				<text>ALL</text>
				<text>分类</text>
			</view>
		</view>
		<view class="search">
			<!-- @click="go('/pages/search/search')" -->
			<view class="nav_search" >
				<input type="text" value="" placeholder="热门搜索" confirm-type="search" @confirm="search"/>
				<image src="/static/shop/camera.png" mode="" @click.stop="scan"></image>
			</view>
		</view>

		<view class="swipers">
			<u-swiper :list="swiperList" name="cdn_imageurl" height="300"></u-swiper>
		</view>
		<view class="menus" :style="{'margin-bottom': cateList.length <= 5 ? '45rpx' : ''}">
			<scroll-view scroll-x="true" class="scroll-view_H" @scroll="scrollChange">
				<view class="items">
					<view class="" v-for="(item,index) in cateList" :key="index" @click="more(item)">
						<image :src="ImgUrl + item.imageurl" mode=""></image>
						<text>{{item.title}}</text>
					</view>
				</view>
				<!-- <view class="items items2">
					<view class="" v-for="(item,index) in recommendCateList" :key="index" @click="go('/pages/public/public')">
						<image :src="ImgUrl + item.image" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</view> -->
			</scroll-view>
			<view class="slide" v-if="cateList.length > 5">
				<view class="" :style="'margin-left:' + slideLeft + '%'">
					
				</view>
			</view>
		</view>
		 <!-- @click="go('/pages/public/public')" -->
		<view class="flash">
			<view class="flash_one" >
				<view class="one_left" v-for="(item,index) in center.data" :key="index" @click="more(item)">
					<view class="lettle">
						<view class="title" style="margin-bottom: 10rpx;">
							<text>{{item.title}}</text>
							<!-- <text>逛潮流好物</text> -->
						</view>
						<!-- <text class="sub">品牌闪购</text> -->
					</view>
					<view class="classIfy">
						<!-- <view class="" v-for="(item,index) in 2" :key="index"> -->
							<image :src="ImgUrl + item.imageurl" :style="{width: center.width + 'rpx', height: center.height + 'rpx'}" mode=""></image>
						<!-- </view> -->
					</view>
				</view>
				<!-- <view class="one_right">
					<view class="title">
						<text>大家都在买</text>
						<text>品牌闪购</text>
					</view>
					<view class="classIfy">
						<view class="" v-for="(item,index) in 2" :key="index">
							<image src="" mode=""></image>
						</view>
					</view>
				</view> -->
			</view>
			<view class="flash_three">
				<view class="one_right" v-for="(item,index) in bottom.data" :key="index" @click="more(item)">
					<view class="title">
						<text></text>
						<text>{{item.title}}</text>
					</view>
					<view class="classIfy">
						<view class="">
							<image :src="ImgUrl + item.imageurl" :style="{width: bottom.width + 'rpx', height: bottom.height + 'rpx'}" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		
		</view>
		<view class="tabs">
			<u-tabs style="background-color: #F6F5FA;" :list="tabList" :is-scroll="true" :current="current" active-color="#FF4243" @change="change"></u-tabs>
		</view>
		<view class="goods" :style="{'padding-top': flowList.length <= 0 ? '100rpx' : ''}">
			<u-empty text="暂无商品" mode="data" v-if="flowList.length <= 0" style="padding-bottom: 100rpx;"></u-empty>
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}"> 
				<!-- @click="go('/pages/leave/leaveShop/goodsDetail/goodsDetail?id=' + item.id)" -->
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="next(item)">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.name}}
						</view>
						<view class="num">
							<text>¥{{item.price}}</text>
							<text>{{item.like_nums}}人想要</text>
						</view>
						<!-- <view class="num">
							<text>¥{{item.price}}</text>
							<text>/市场价¥{{item.original_price}}</text>
						</view>
						<view class="grade">
							<text>S级</text>
							<text>·全新</text>
						</view> -->
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="next(item)">
						<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.name}}
						</view>
						<view class="num">
							<text>¥{{item.price}}</text>
							<text>{{item.like_nums}}人想要</text>
						</view>
					</view>
				</template>
			</u-waterfall>
		</view>
		<view class="bottom" @click="popupShow = true,authenModel = true">
			<text>卖</text>
			<text>闲置</text>
		</view>
		<u-popup v-model="popupShow" mode="bottom" @touchmove.native.stop.prevent>
			<view class="popupShow">
				<view class="item" @click="go('/pages/leave/classify/classify?type=consign')">
					<view class="left">
						<view class="desc">
							<text>平台寄卖</text>
							<text>推荐</text>
						</view>
						<text>平台寄卖 平台寄卖</text>
					</view>
					<image src="/static/shop/right3.png" mode=""></image>
				</view>
				<view class="item" @click="go('/pages/leave/classify/classify?type=sale')">
					<view class="left">
						<view class="desc">
							<text>拍图售卖</text>
						</view>
						<text>拍图售卖 拍图售卖</text>
					</view>
					<image src="/static/shop/right3.png" mode=""></image>
				</view>
				<image src="/static/shop/close.png" mode="" @click="popupShow = false"></image>
			</view>
		</u-popup>
		<!-- @cancel="popupShow = false" -->
		<u-modal v-model="authenModel" title="实名认证" content="认证后可以继续进行操作" :show-cancel-button="true" @confirm="go('/pages/my/set/authen/authen')"></u-modal>
		<!-- 加载更多 -->
		<!-- <u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore> -->
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" top="1200" :duration="300"></u-back-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leaveShow: false,
				type: 1, // 1 寄卖 2 售卖
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
				swiperList: [],
				slideLeft: 0, // 动态设置slide的margin-left
				scrollWhidth: '' ,// scroll可视区域的宽
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				list: [],
				scrollTop: 0,
				popupShow: false,
				authenModel: false ,// 提示认证弹窗
				cateList: [], // 菜单上
				center: [],
				bottom: {}
			}
		},
		onLoad() {
			this.getData()
			// scroll可视区域的宽
			setTimeout(()=>{
				let obj = uni.createSelectorQuery().select('.scroll-view_H')
				obj.boundingClientRect(data =>{ 
					this.scrollWhidth = data.width
				}).exec()
			}, 100)
			// this.addRandomData()
		},
		onHide() {
			this.popupShow = false
			this.authenModel = false
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		// 触底加载更多，切换加载更多loading
		onReachBottom() {
			this.loadStatus = 'loading';
			// // 模拟数据加载
			setTimeout(() => {
			// 	this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			// 首页数据
			getData(){
				this.request({
					url: 'idle/index/init',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.tabList = res.data.data.recommendCateList
						this.flowList = this.tabList[0].goods_list || []
						this.cateList = res.data.data.top.data
						this.center = res.data.data.center
						this.bottom = res.data.data.bottom
						this.swiperList = res.data.data.advert.data
					}
				})
			},
			change(index) {
				this.current = index;
				this.$refs.uWaterfall.clear()
				this.flowList = this.tabList[index].goods_list
				console.log(this.flowList)
			},
			scan(){
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				})
			},
			search(e){
				console.log(e.detail.value)
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
			},
			next(e){
				if(e.goods_type == 'consign'){
					this.go('/pages/leave/leaveShop/goodsDetail/goodsDetail?id=' + e.id)
				}else{
					this.go('/pages/my/released/goodsDetail/goodsDetail?id=' + e.id)
				}
			},
			more(e){
				console.log(e)
				if(e.state == 1){
					this.go('/pages/leave/goodsList/brandList/brandList?brand_id=' + e.link_id)
				}else if(e.state == 2){
					this.go('/pages/leave/goodsList/goodsList?category_id=' + e.link_id)
				}else if(e.state == 3){
					this.go('/pages/my/released/goodsDetail/goodsDetail?id=' + e.link_id)
				}else if(e.state == 4){
					this.go('/pages/serve/consult/detail?id=' + e.link_id)
				}else if(e.state == 5){
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background: #fff;
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
			background-color: #F6F5FA !important;
			border-bottom: solid 1px #F2F2F2;
			/deep/ .u-tabs{
				background-color: #F6F5FA !important;
			}
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
						width: 100rpx;
						display: inline-flex;
						flex-direction: column;
						align-items: center;
						image {
							width: 100rpx;
							height: 100rpx;
							background: #E9E9EB;
							border-radius: 10rpx;
							margin-bottom: 10rpx;
						}
						text {
							display: block;
							text-align: center;
							width: 100rpx;
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
							overflow: hidden;
							-webkit-line-clamp: 1;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
						}
					}
					>:not(:first-child) {
						// margin: 0 15rpx;
						margin-left: 47rpx;
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
				width: 100%;
				background: linear-gradient(0deg, #FDFDFD 0%, #FFF8F8 100%);
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				.classIfy{
					display: flex;
					justify-content: space-between;
					align-items: center;
					image{
						border-radius: 10rpx;
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
				.classIfy{
					image{
						// width: 160rpx;
						// height: 160rpx;
						border-radius: 10rpx;
					}
				}
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
					font-size: 26rpx;
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
			.grade{
				position: absolute;
				top: 10rpx;
				left: 10rpx;
				width: 107rpx;
				height: 34rpx;
				background: #3F3E4A;
				border-radius: 8rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				>:nth-child(1){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFE1BD;
				}
				>:nth-child(2){
					font-size: 20rpx;
					color: #FEFEFE;
				}
			}
		}
		.goods{
			background-color: #F6F5FA;
		}
		.bottom{
			position: fixed;
			bottom: 33rpx;
			left: 50%;
			transform: translateX(-50%);
			/* #ifdef H5 */
			bottom: 133rpx;
			/* #endif */
			width: 196rpx;
			height: 80rpx;
			background: #FFFFFF;
			box-shadow: 0px 0px 8rpx 0px rgba(155, 153, 161, 0.33);
			border-radius: 40rpx;
			text-align: center;
			line-height: 80rpx;
			>:nth-child(1){
				font-size: 40rpx;
				font-family: FZZhengHeiS-EB-GB;
				font-weight: bold;
				color: #FD3F4D;
			}
			text{
				font-size: 30rpx;
				font-family: FZZhengHeiS-EB-GB;
				font-weight: bold;
				color: #000;
			}
		}
		.popupShow{
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			height: 100vh;
			background: linear-gradient(0deg, #F6F5FA 0%, #FAF0F0 19%, #FFD4D5 100%);
			>image{
				width: 80rpx;
				height: 80rpx;
				margin: 70rpx 0 103rpx;
			}
			.item{
				width: 670rpx;
				height: 180rpx;
				margin: 0 auto 26rpx;
				background: #FFFFFF;
				border-radius: 20rpx;
				padding: 48rpx 75rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					.desc{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						>:nth-child(1){
							font-size: 36rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							padding: 4rpx 8rpx;
							background: #FD3750;
							border-radius: 13rpx;
						}
					}
					>text{
						display: block;
						margin-top: 10rpx;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>
