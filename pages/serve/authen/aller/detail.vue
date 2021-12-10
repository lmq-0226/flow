<template>
	<view class="content">
		<view class="top">
			<view class="user">
				<image src="" mode=""></image>
				<view class="nick">
					<text>celia张</text>
					<view class="">
						<u-rate :count="5" v-model="value" size="20rpx" active-color="#FEA713"></u-rate>
						<text>5.0分</text>
					</view>
				</view>
			</view>
			<view class="warp">
				<view :class="['msg',show ? '' : 'active']">
					<text class="btn" @click="show = !show">{{show ? '展开' : '收起'}}</text>
					<text class="desc">擅长品类：箱包、饰品、腕表、服装、鞋履、配饰、玉石入驻鉴定师 曾任职某典当行高级典当师职位，曾任职某典当行高擅长品类：箱包、饰品、腕表、服装、鞋履、配饰、玉石入驻鉴定师 曾任职某典当行高级典当师职位，曾任职某典当行高</text>
					<!-- #ifdef APP-PLUS -->
					<text style="display: inline-block; width: 66rpx;"></text>
					<!-- #endif -->
				</view>
			</view>
		</view>
		<view class="goods">
			<text class="title">累计鉴定2.81万单</text>
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="go('./identDetail')">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
						<text class="true" v-if="true">鉴别为真</text>
						<text class="false" v-else>鉴别为假</text>
						
						<view class="bot">
							<text>CELINE/思琳</text>
							<text>配饰</text>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="go('./identDetail')">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
						<text class="true" v-if="false">鉴别为真</text>
						<text class="false" v-else>鉴别为假</text>
						<view class="bot">
							<text>CELINE/思琳</text>
							<text>配饰</text>
						</view>
					</view>
				</template>
			</u-waterfall>
		</view>
		<view class="bottom">
			<view class="left">
				<image src="/static/serve/service.png" mode=""></image>
				<text>等待人数(4)</text>
			</view>
			<view class="right">
				立即鉴定
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 5,
				show: true,
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
				]
			};
		},
		onLoad() {
			this.addRandomData()
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
		watch:{
			
		},
		methods:{
			getRem() {
				const defaultRem = 16;
				let winWidth = window.innerWidth;
				let rem = (winWidth / 375) * defaultRem;
				return rem;
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
<style>
	page{
		background-color: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		padding-bottom: 100rpx;
		.top{
			background: #fff;
			padding: 30rpx;
			border-radius: 0 0 30rpx 30rpx;
			.user{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 106rpx;
					height: 106rpx;
					border-radius: 50%;
					background: #ccc;
					margin-right: 25rpx;
				}
				.nick{
					height: 106rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					>text{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					view{
						text{
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
							margin-left: 10rpx;
						}
					}
				}
				
			}
			.warp{
				display: flex;
				margin-top: 30rpx;
				.msg{
					overflow: hidden;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					position: relative;
					.desc{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
						line-height: 32rpx;
					}
					.btn{
						/* #ifdef H5 */
						float: right;
						clear: both;
						/* #endif */
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000;
						width: 66rpx;
						height: 35rpx;
						/* #ifdef APP-PLUS */
						position: absolute;
						bottom: 0;
						right: 0;
						background: #fff;
						/* #endif */
					}
				}
				.msg::before{
					content: '';
					float: right;
					width: 0;
					height: calc(100% - 35rpx);
					background: red;
				}
				.active{
					-webkit-line-clamp: 999;
				}
				
			}
			
		}
		.goods{
			.title{
				display: block;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				padding: 30rpx 18rpx;
			}
			.demo-warter {
				border-radius: 10rpx;
				overflow: hidden;
				margin: 10rpx;
				background-color: #ffffff;
				// padding: 25rpx 16rpx;
				position: relative;
				>text{
					position: absolute;
					top: 0;
					left: 0;
					z-index: 9;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					padding: 7rpx 10rpx;
					border-radius: 10rpx 0 10rpx 0;
				}
				.true{
					background: #F55454;
				}
				.false{
					background: #9392A0;
				}
				.bot{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 28rpx 30rpx;
					background: #fff;
					text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
			}
		}
		.bottom{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 98rpx;
			background: #fff;
			border-top: solid 1px #f2f2f2;
			z-index: 999;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20rpx;
			.left{
				text-align: center;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					display: block;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			.right{
				width: 560rpx;
				min-width: 560rpx;
				height: 74rpx;
				background: #F35455;
				border-radius: 6rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
</style>
