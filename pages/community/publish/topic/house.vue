<template>
	<view class="content">
		<view class="nav">
			<view class="status_bar" :style="{backgroundColor: 'rgba(255,66,67,' + opacity + ')'}"></view>
			<view class="col_flex">
				<view class="nav-bar" :style="{backgroundColor: 'rgba(255,66,67,' + opacity + ')'}">
					<image src="/static/my/back.png" mode="" @click="back"></image>
					<view class="">
						<!-- <image src="/static/my/search.png" mode=""></image>
						<image src="/static/my/wShare.png" mode=""></image> -->
					</view>
				</view>
				<view class="stopHeader">
					<view class="left">
						<text>#高级感穿搭法则</text>
						<text>5666条内容</text>
						<text>秀出你的高级感</text>
					</view>
					<view class="right" @click="atten = !atten">
						<text class="attened" v-if="atten">已关注</text>
						<text class="atten" v-else>关注</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="true" :current="current" active-color="#FF4243" @change="change"></u-tabs>
		</view>
		<view class="goodsList">
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
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
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
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
			<!-- 加载更多 -->
			<u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
		<view class="bottom">
			<image src="/static/comm/publish.png" mode=""></image>
			<text>立即发布</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
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
					},
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
				show: false, // 弹窗
				opacity: 0 ,// 导航栏背景透明度
				priceSty: {
					background: '#F9F9FB',
					padding: '0 20rpx'
				},
				atten: false
			};
		},
		// 导航栏背景及字体颜色初始化
		onReady() {
			uni.setNavigationBarColor({
			    frontColor: '#ffffff',
				backgroundColor: 'rgba($color: #fff, $alpha: 0)'
			})
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
		// 监听页面滚动，动态设置导航栏背景
		onPageScroll(e) {
			this.opacity = (e.scrollTop - 80) / 125
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			// 分类
			change(e){
				this.current = e
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
			popupClose(){
				uni.setNavigationBarColor({
				    frontColor: '#ffffff',
					backgroundColor: 'rgba(255,66,67,' + this.opacity + ')'
				})
			},
			popuTouch(e){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding-bottom: 100rpx;
		// 适配自定义导航栏
		.status_bar {
			position: fixed;
			top: 0;
			height: var(--status-bar-height);
			width: 100%;
			z-index: 9999;
		}
		.nav{
			width: 100%;
			height: 400rpx;
			background: url(../../../../static/my/topBg.jpg) no-repeat;
			background-size: 100%;
			.col_flex{
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				height: calc(400rpx - var(--status-bar-height));
			}
			.nav-bar{
				position: fixed;
				top: var(--status-bar-height);
				width: 100%;
				z-index: 999;
				display: flex;
				justify-content: space-between;
				align-content: enter;
				padding: 20rpx;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				view{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					image{
						margin-left: 35rpx;
					}
				}
			}
			.stopHeader{
				margin: 0 20rpx 31rpx;
				padding: 20rpx;
				display: flex;
				justify-content: space-between;
				.left{
					display: flex;
					flex-direction: column;
					text{
						color: #fff;
					}
					>:nth-child(1){
						font-size: 36rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
					>:nth-child(2){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
						padding: 20rpx 0;
					}
					>:nth-child(3){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
				.right{
					
					text{
						display: block;
						width: 140rpx;
						height: 54rpx;
						border-radius: 27rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
					}
					.atten{
						background: #F55454;
					}
					.attened{
						background: #cbcbcb;
					}
				}
			}
		}
		.tabs{
			border-radius: 10px 10px 0px 0px;
			overflow: hidden;
			margin: -20rpx auto;
			padding: 5rpx 10rpx 20rpx;
			background-color: #fff;
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
		}
		
		.bottom{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 98rpx;
			background: #fff;
			z-index: 999;
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: 44rpx;
				height: 44rpx;
			}
			text{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
		
	}
</style>
