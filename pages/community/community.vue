<template>
	<view :class="[!tabsShow ? 'hide' : '', 'content']">
		<view class="status_bar"></view>
		<view class="nav">
			<image src="/static/comm/add.png" mode="" @click="go('./publish/publish')"></image>
			<view class="">
				<text v-for="(item,index) in navList" :key="index" @click="change(index)" :class="navCheck == index ? 'navChecked' : ''">{{item}}</text>
			</view>
			<image src="/static/comm/search.png" mode=""></image>
		</view>
		<view class="navClass">
			<view class="tabs">
				<u-tabs v-if="tabsShow" :list="navClassList" :gutter="20" name="text" :is-scroll="true" :current="classCurrent" active-color="#FF4243" @change="navClassChange"></u-tabs>
			</view>
			<view class="select">
				<u-dropdown :menu-icon-size="44" menu-icon="/static/comm/down.png" duration="300" @open="tabsShow = false" @close="tabsShow = true">
					<u-dropdown-item>
						<view class="slot-content">
							<scroll-view scroll-y="true">
								<view class="items" v-for="(item,index) in 5" :key="index">
									<view class="lettle">
										<text>穿搭</text>
									</view>
									<view class="item">
										<text v-for="(elem,cut) in 5" :key="cut">穿搭</text>
									</view>
								</view>
							</scroll-view>
						</view>
					</u-dropdown-item>
				</u-dropdown>
			</view>
		</view>
		<view class="goods">
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="go(item.type == 'video' ? './detail/videoList' : './detail/detail')">
						<image v-if="item.type == 'video'" class="videoPb" src="/static/comm/video_play.png" mode=""></image>
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="bot">
							<view class="avatar">
								<image src="" mode=""></image>
								<text>珂珂</text>
							</view>
							<view class="">
								<image src="/static/comm/praise.png" mode=""></image>
								<text>1542</text>
							</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="go(item.type == 'video' ? './detail/videoList' : './detail/detail')">
						<image v-if="item.type == 'video'" class="videoPb" src="/static/comm/video_play.png" mode=""></image>
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="bot">
							<view class="avatar">
								<image src="" mode=""></image>
								<text>珂珂</text>
							</view>
							<view class="">
								<image src="/static/comm/praise.png" mode=""></image>
								<text>1542</text>
							</view>
						</view>
					</view>
				</template>
			</u-waterfall>
		</view>
		<!-- 加载更多 -->
		<u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" top="1200" :duration="300"></u-back-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navCheck: 1,
				navList: ['关注','发现','直播'],
				classCurrent: 0,
				navClassList:[
					{id: 1, text: '推荐'},
					{id: 2, text: '球鞋'},
					{id: 3, text: '穿搭'},
					{id: 4, text: '评论区'},
					{id: 5, text: '手表'},
					{id: 6, text: '美妆'},
					{id: 7, text: '玩具'}
				],
				tabsShow: true,
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				list: [
					{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
						type: 'video'
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
						type: 'video'
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
				scrollTop: 0,
			};
		},
		onLoad() {
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
			}, 2000)
		},
		methods:{
			change(e){
				// 默认选中
				var check = this.navList[this.navCheck]
				// 重复点击当前选中 return
				if(this.navList[e] == check){
					return
				}
				// 当前选中 
				this.$set(this.navList,this.navCheck,this.navList[e])
				this.$set(this.navList,e,check)
			},
			navClassChange(e){
				this.classCurrent = e
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
		.nav{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 28rpx 20rpx;
			position: sticky;
			top: var(--status-bar-height);
			z-index: 99999;
			background-color: #fff;
			border-bottom: solid 1px #f8f8f8;
			image{
				width: 44rpx;
				height: 44rpx;
			}
			view{
				width: 255rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
				}
				.navChecked{
					font-size: 34rpx;
					font-weight: bold;
					color: #FF4243;
				}
			}
		}
		.navClass{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			background: #fff;
			z-index: 777;
			// position: sticky;
			// top: 0;
			.tabs{
				width: 90%;
				height: 88rpx;
				background: #fff;
				z-index: 888;
			}
			.select{
				// image{
				// 	width: 44rpx;
				// 	height: 44rpx;
				// }
				/deep/ .u-dropdown__content{
					position: fixed;
					top: 160rpx !important;
					height: 100vh !important;
					/* #ifdef APP-PLUS */
					top: 200rpx !important;
					/* #endif */
					width: 750rpx;
					right: -30rpx;
					background-color: #fff;
				}
				/deep/ .u-dropdown__content__mask{
					position: fixed;
					top: 160rpx !important;
					/* #ifdef APP-PLUS */
					top: 200rpx !important;
					/* #endif */
					width: 750rpx;
					right: -30rpx;
				}
				.slot-content{
					background-color: #fff;
					padding: 0 30rpx 30rpx;
					scroll-view{
						height: 800rpx;
						.items{
							.lettle{
								padding: 50rpx 0 30rpx;
								text{
									font-size: 28rpx;
									font-family: PingFang SC;
									font-weight: bold;
									color: #000000;
								}
							}
							.item{
								display: flex;
								justify-content: flex-start;
								flex-wrap: wrap;
								text{
									display: inline-block;
									width: 160rpx;
									height: 80rpx;
									text-align: center;
									line-height: 80rpx;
									background: #F6F5FA;
									border-radius: 6rpx;
									font-size: 24rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #1C1F2F;
									margin-bottom: 17rpx;
								}
								>:not(:nth-child(4n)){
									margin-right: 16rpx;
								}
							}
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
			.videoPb{
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
			.bot{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 17rpx;
				view{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 44rpx;
						height: 44rpx;
					}
					text{
						font-size: 18rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #535960;
					}
				}
				.avatar{
					image{
						width: 34rpx;
						height: 34rpx;
						border-radius: 50%;
						background: #ccc;
						margin-right: 14rpx;
					}
					text{
						font-size: 20rpx;
					}
				}
			}
		}
		.goods{
			background-color: #F6F5FA;
		}
	}
	.hide{
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		overflow-y: hidden;
	}
</style>
