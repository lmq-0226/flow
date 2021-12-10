<template>
	<view class="content">
		<view class="swipers">
			<u-swiper :list="swiperList" :height="swiperList.length > 0 ? 300 : 0"></u-swiper>
		</view>
		<view class="new">
			<view class="goods">
				<view class="title">
					<text>每周上新</text>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
				<view class="items">
					<view class="item" v-for="(item,index) in 4" :key="index">
						<image src="/static/pub/bbt.png" mode=""></image>
						<text>S级·全新</text>
						<view class="">
							<text>¥899</text>
							<text>/省¥2590</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="true" :current="current" active-color="#FF4243" @change="change"></u-tabs>
		</view>
		<view class="sort">
			<view v-for="(item,index) in sortList" :key="index" :class="sortIndex == index ? 'active' : ''" @click="changeSort(index)">
				<text>{{item.text}}</text>
				<image :src="item.url" mode=""></image>
			</view>
		</view>
		<view class="goodsList">
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
							<text>/市场价¥17959</text>
						</view>
						<view class="grade">
							<text>S级</text>
							<text>·全新</text>
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
							<text>/市场价¥17959</text>
						</view>
						<view class="grade">
							<text>S级</text>
							<text>·全新</text>
						</view>
					</view>
				</template>
			</u-waterfall>
			<!-- 加载更多 -->
			<u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
		<!-- 筛选弹框 -->
		<u-popup v-model="show" mode="right" width="670" :safe-area-inset-bottom="true" @touchmove.native.stop.prevent>
			<view class="popup">
				<image class="close" src="/static/login/clear.png" mode="" @click="show = false"></image>
				<scroll-view scroll-y="true" style="height: 100%;">
					<view class="item">
						<text class="title">价格区间</text>
						<view class="range">
							<u-input v-model="lowP" type="number" input-align="center" :custom-style="priceSty" :clearable="false" placeholder="最低价"/>
							<text></text>
							<u-input v-model="highP" type="number" input-align="center" :custom-style="priceSty" :clearable="false" placeholder="最高价"/>
						</view>
					</view>
					<view class="item">
						<!-- <text class="title">使用人群</text> -->
						<u-collapse 
							:head-style="{fontSize: '24rpx',fontWeight: 'bold',color: '#000000',padding: '30rpx 0'}"
							:accordion='false'
						>
							<u-collapse-item v-for="(item,index) in itemList" :title="item.head" :open="true">
								<view class="list">
									<view class="" v-for="(elem,cut) in item.item" :key="cut">
										{{elem.text}}
									</view>
								</view>
							</u-collapse-item>
						</u-collapse>
					</view>
				</scroll-view>
				<view class="btns">
					<text>重置</text>
					<text>确定</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				swiperList: [
					{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
				tabList: [
					{
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
					}
				],
				sortIndex: 0,
				show: false,
				sortList: [
					{text: '综合', url: ''},
					{text: '成色', url: require('@/static/updown.png')},
					{text: '价格', url: require('@/static/updown.png')},
					{text: '尺码', url: ''},
					{text: '筛选', url: require('@/static/filter.png')}
				],
				opacity: 0 ,// 导航栏背景透明度
				lowP: '',
				highP: '',
				priceSty: {
					background: '#F9F9FB',
					padding: '0 20rpx'
				},
				itemList: [
					{
					head: "使用人群",
					item: [
						{id: 1, text: '老人'},
						{id: 2, text: '妇女'},
						{id: 3, text: '成人'},
						{id: 4, text: '儿童'}
					]
					},{
						head: "商品尺码",
						item: [
							{id: 1, text: 'L'},
							{id: 2, text: 'S'},
							{id: 3, text: 'XL'},
							{id: 4, text: 'XXL'},
							{id: 5, text: '38'},
							{id: 6, text: '39'},
							{id: 7, text: '40'},
							{id: 8, text: '41'}
						]
						
					},{
						head: "商品成色",
						item: [
							{id: 1, text: 'S'},
							{id: 2, text: 'A'},
							{id: 3, text: 'B'},
							{id: 4, text: 'C'},
							{id: 5, text: 'D'}
						]
					},{
						head: "商品分类",
						item: [
							{id: 1, text: '板鞋'},
							{id: 2, text: 'T恤'},
							{id: 3, text: '运动鞋'},
							{id: 4, text: '棉服'},
							{id: 5, text: '卫衣'},
							{id: 6, text: '双肩包'},
							{id: 8, text: '41'}
						]
					},{
						head: "商品分类",
						item: [
							{id: 1, text: '板鞋'},
							{id: 2, text: 'T恤'},
							{id: 3, text: '运动鞋'},
							{id: 4, text: '棉服'},
							{id: 5, text: '卫衣'},
							{id: 6, text: '双肩包'},
							{id: 8, text: '41'}
						]
					}
				],
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
			};
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
		onLoad() {
			this.addRandomData()
		},
		methods:{
			change(index) {
				this.current = index;
			},
			// 排序
			changeSort(e){
				this.sortIndex = e
				if(e == 4){
					this.show = true
				}
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
	.content{
		.new{
			 background: #F6F5FA;
			 padding: 16rpx 20rpx 30rpx;
			 .goods{
				 padding: 30rpx 25rpx;
				 background: #FFFFFF;
				 border-radius: 10rpx;
				 .title{
					 display: flex;
					 justify-content: space-between;
					 align-items: center;
					 text{
						 font-size: 28rpx;
						 font-family: PingFang SC;
						 font-weight: bold;
						 color: #000000;
					 }
					 image{
						 width: 44rpx;
						 height: 44rpx;
					 }
				 }
				 .items{
					 display: flex;
					 justify-content: space-between;
					 margin-top: 25rpx;
					 .item{
						 width: 160rpx;
						 text-align: center;
						 image{
							 width: 160rpx;
							 height: 160rpx;
						 }
						 >text{
							 font-size: 20rpx;
							 font-family: PingFang SC;
							 font-weight: bold;
							 color: #26262F;
						 }
						 view{
							 >:nth-child(1){
								 font-size: 22rpx;
								 font-family: PingFang SC;
								 font-weight: bold;
								 color: #FF4243;
							 }
							 >:nth-child(2){
								 font-size: 18rpx;
								 font-family: PingFang SC;
								 font-weight: 500;
								 color: #9094A6;
							 }
						 }
					 }
				 }
			 }
		 }
		.sort{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 30rpx;
			view{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9094A6;
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
			.active{
				text{
					color: #000000;
					font-weight: bold;
				}
			}
		}
		.popup{
			padding: 80rpx 30rpx 120rpx;
			position: relative;
			touch-action: none;
			.close{
				width: 44rpx;
				height: 44rpx;
				z-index: 999;
				position: fixed;
				top: 60rpx;
				right: 40rpx;
			}
			.item{
				.title{
					display: block;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					padding: 30rpx 0;
				}
				.range{
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						display: inline-block;
						width: 26rpx;
						height: 2px;
						background: #a5a5a5;
						margin: 0 30rpx;
					}
				}
				.list{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					:nth-child(3n+2){
						margin: 0 5% 19rpx;
					}
					view{
						display: flex;
						justify-content: center;
						align-items: center;
						width: 30%;
						padding: 14rpx 0;
						margin-bottom: 19rpx;
						background: #F9F9FB;
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
			}
			.btns{
				border-top: solid 1px #f8f8f8;
				width: calc(100% - 60rpx);
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: fixed;
				background-color: #fff;
				padding: 20rpx 0;
				bottom: 0;
				text{
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
				}
				>:nth-child(1){
					width: 160rpx;
					height: 74rpx;
					border: 2rpx solid #E8E8E8;
					border-radius: 6rpx;
					color: #000000;
				}
				>:nth-child(2){
					width: 427rpx;
					height: 74rpx;
					border-radius: 6rpx;
					background: #F35455;
					color: #fff;
				}
			}
		}
		.goodsList{
			// padding: 0 10rpx;
			background: #F6F5FA;
			.demo-warter {
				border-radius: 8px;
				margin: 5px;
				background-color: #ffffff;
				padding: 8px;
				position: relative;
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
					justify-content: flex-start;
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
			}
		}
	}
</style>
