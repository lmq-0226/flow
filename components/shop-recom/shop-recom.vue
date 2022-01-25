<template>
	<view class="content">
		<scroll-view class="swiper_scroll" :scroll-y="true" @scrolltolower="onRachBoom" >
			<view>
				<view class="swipers">
					<u-swiper :list="swiperList" height="300" img-mode="widthFix"></u-swiper>
				</view>
				<view class="swiper-item">
					<view class="menus">
						<scroll-view :scroll-x="true" class="scroll-view_H" @scroll="scrollChange" @touchmove.stop.prevent="">
							<view class="items">
								<view class="" v-for="(item,index) in topMenuList" :key="index"
									>
									<image :src="ImgUrl + item.media" mode=""></image>
									<text>{{item.title}}</text>
								</view>
							</view>
							<!-- @click="go('/pages/public/public?category_id=' + item.id)" -->
							 <!-- @click="go('/pages/public/public')" -->
							<view class="items items2">
								<view class="" v-for="(item,index) in botMenuList" :key="index">
									<image :src="ImgUrl + item.media" mode=""></image>
									<text>{{item.title}}</text>
								</view>
							</view>
						</scroll-view>
						<view class="slide" v-if="menuList.length > 10">
							<view class="" :style="'margin-left:' + slideLeft + '%'"></view>
						</view>
					</view>
					<view class="flash">
						<view class="flash_one">
							<view class="one_left" v-for="(item,index) in initClassify.data" :key="index" @click="go('/pages/public/public?category_id=' + item.categoryId)">
								<view class="lettle">
									<view class="title">
										<text :class="item.textColor">{{item.name}}</text>
										<text v-if="item.tags != ''">{{item.tags}}</text>
									</view>
									<text class="sub">{{item.describe}}</text>
								</view>
								<view class="classIfy">
									<view class="" v-for="(elem,cut) in item.images" :key="cut">
										<image :src="ImgUrl + elem.image" mode="widthFix"></image>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="goods">
						<!-- 瀑布流 -->
						<u-waterfall v-model="flowList" ref="uWaterfall">
							<template v-slot:left="{leftList}">
								<view class="demo-warter" v-for="(item, index) in leftList" :key="index"
									@click="go('./goodsDetail/goodsDetail?id=' + item.id)">
									<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
									<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image"
										img-mode="widthFix" :index="index"></u-lazy-load>
									<view class="demo-title">
										{{item.title}}
									</view>
									<view class="num">
										<text>￥{{item.price}}</text>
										<text>{{item.payment}}人付款</text>
									</view>
								</view>
							</template>
							<template v-slot:right="{rightList}">
								<view class="demo-warter" v-for="(item, index) in rightList" :key="index"
									@click="go('./goodsDetail/goodsDetail?id=' + item.id)">
									<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image"
										img-mode="widthFix" :index="index"></u-lazy-load>
									<view class="demo-title">
										{{item.title}}
									</view>
									<view class="num">
										<text>￥{{item.price}}</text>
										<text>{{item.payment}}人付款</text>
									</view>
								</view>
							</template>
						</u-waterfall>
					</view>
					<u-empty v-if="flowList.length <= 0" text="暂无数据" mode="list" margin-top="100" style="padding-bottom: 100rpx;"></u-empty>
				</view>
			</view>
		</scroll-view>
					
	</view>
</template>

<script>
	export default {
		name:"shop-recom",
		props:{
			cid: {
				type: [Number,String],
				default: ''
			},
			menuList: {
				type: Array,
				default: function(){
					return []
				}
			},
			category: {
				type: [Object, String],
				default: {}
			},
			goodsList: {
				type: Array,
				default: function(){
					return []
				}
			}
		},
		data() {
			return {
				swiperList: [],
				// menuList: [],
				slideLeft: 0, // 动态设置slide的margin-left
				scrollWhidth: '', // scroll可视区域的宽
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				scrollTop: 0,
				initClassify: [],
				topMenuList: [],
				botMenuList: [],
				total: 0,
				page: 1
			};
		},
		created() {
			
		},
		mounted() {
			this.$nextTick(()=>{
				
				// this.flowList = this.goodsList
				this.getGoods()
				this.getCategory()
				this.getBanner()
				this.getCateList()
				console.log(this.category)
			})
		},
		methods:{
			// 首页商品触底加载
			onRachBoom(e){
				if(this.flowList.length <= this.total){
					this.page ++
					this.getGoods()
				}
				// this.getGoods()
			},
			// 商品列表
			getGoods(){
				this.request({
					url: 'wanlshop/common/category',
					method: "GET",
					data: {
						id: this.cid,
						page: this.page
					},
				}).then(res => {
					if (res.data.code == 1) {
						this.total = res.data.data.goods.data.total
						console.log(res)
						this.flowList = [...this.flowList, ...res.data.data.goods.data]
					}
				})
			},
			//分类
			getCategory(){
				this.request({
					url: 'wanlshop/page/category',
					method: "GET",
					header: {
						'content-type': 'application/json;charset=UTF-8'
					},
					data: {
						col: this.category.params.colStyle,
						data: JSON.stringify(this.category.data)
					}
				}).then(res => {
					if (res.data.code == 1) {
						this.initClassify = this.category
						this.initClassify.data.forEach((item,index)=>{
							res.data.data.forEach((elem,cut)=>{
								if(index == cut){
									item.name = elem.name
									item.images = elem.list
								}
							})
						})
					}
				})
			},
			// 轮播图
			getBanner(){
				this.request({
					url: 'wanlshop/common/index_adverts',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						res.data.data.forEach(elem=>{
							this.swiperList.push({image:this.ImgUrl + elem.media})
						})
					}
				})
			},
			getCateList(){
				this.request({
					url: 'wanlshop/common/index_adverts',
					data: {
						token: uni.getStorageSync('userInfo').token,
						type: 'menu'
					}
				}).then(res=>{
					if(res.data.code == 1){
						if(res.data.data.length > 10){
							if(res.data.data.length % 2 == 0){
								res.data.data = res.data.data.slice(0,res.data.data.length/2)
								this.botMenuList = res.data.data.slice(res.data.data.length/2)
							}else{
								this.topMenuList = res.data.data.slice(0,(res.data.data.length/2) + 1)
								this.botMenuList = res.data.data.slice((res.data.data.length/2) + 1)
							}
						}else if(5 < res.data.data.length <= 10){
							this.topMenuList = res.data.data.slice(0,5)
							this.botMenuList = res.data.data.slice(5)
						}
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
	@import '@/static/css/public.css';
.content{
	.swiper_scroll{
		height: calc(100vh - 288rpx - var(--status-bar-height));
	}
	.swipers {
		padding: 30rpx 23rpx 0rpx;
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
	
	// 			:not(:first-child):not(:last-child) {
	// 				margin: 0 15rpx;
	// 			}
	
	// 			:nth-child(1) {
	// 				margin-right: 15rpx;
	// 			}
	
	// 			view:last-child {
	// 				margin-left: 15rpx;
	// 			}
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
							// color: #000000;
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
						color: #333;
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
