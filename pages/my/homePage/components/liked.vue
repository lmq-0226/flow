<template>
	<view class="content">
		<view class="all">
			<text :class="praise == 1 ? 'active' : ''" @click="praise = 1">全部 0</text>
			<text :class="praise == 2 ? 'active' : ''" @click="praise = 2">视频 0</text>
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
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="go('./goodsDetail/goodsDetail')">
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
			<u-loadmore v-if="flowList.length > 0" bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
			<!-- 返回顶部 -->
			<u-back-top :scroll-top="scrollTop" top="1000" :duration="300"></u-back-top>
		</view>
		<!-- 数据为空 -->
		<u-empty v-if="flowList.length <= 0" text="是没有您喜欢的动态吗~" margin-top="200" mode="data"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadStatus: 'loadmore', // 加载更多状态
				praise: 1,
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
			};
		},
		created() {
			// this.addRandomData()
			console.log('praise 赞过组件')
		},
		methods:{
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
		},
		
	}
</script>

<style lang="scss" scoped>
	.content{
		.all{
			width: 100%;
			padding: 0 36rpx;
			height: 75rpx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			text{
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #686879;
				padding: 11rpx 19rpx;
			}
			.active{
				
				background: #F8F8F8;
				border-radius: 6rpx;
				color: #000000;
			}
		}
		.goods{
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
	}
</style>
