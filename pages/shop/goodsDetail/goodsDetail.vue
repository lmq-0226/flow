<template>
	<view class="content">
		<view class="tabs" :style="{'opacity': opacity}">
			<u-tabs :list="list" :is-scroll="false" :current="cut" @change="changeCut" active-color="#FC493D"></u-tabs>
		</view>
		<imgsBanner :imgList='imgList' :currentImg='current'></imgsBanner>
		<view class="goodsInfo">
			<view class="detail">
				<view class="price">
					<view class="p_left">
						<view class="">
							<text>¥</text>
							<text>899</text>
						</view>
						<view class="">
							<text>券后价¥</text>
							<text>849</text>
						</view>
					</view>
					<text>156人付款</text>
				</view>
				<view class="coupon">
					<text>商品有优惠劵可领取，立减50元</text>
					<view class="" @click="disPopup = true">
						<text>领券</text>
						<image src="/static/shop/right.png" mode=""></image>
					</view>
				</view>
				<view class="desc">
					<text>EVISU福神 老虎达摩拼图印花T恤 男款EVISU福神 老虎达摩拼图印花T恤 男款</text>
				</view>
			</view>
			<view class="ident">
				<view class="">
					<text>先鉴别后发货 全新正品 假一赔十</text>
					<image src="/static/shop/right2.png" mode=""></image>
				</view>
				<view class="" @click="plaPopup = true">
					<text>7天无理由退货·超时赔付·次日达·防伪包装·逐件查验</text>
					<image src="/static/shop/leave_go.png" mode=""></image>
				</view>
			</view>
			<view class="store" @click="go('/pages/my/subscribe/store/store')">
				<view class="s_left">
					<image src="" mode=""></image>
					<view class="">
						<text>流象自营</text>
						<text>12563人订阅·1524款商品</text>
					</view>
				</view>
				<view class="s_right">
					<image src="/static/shop/service.png" mode=""></image>
					<image src="/static/my/right.png" mode=""></image>
				</view>
			</view>
			<view class="adver">
				<text>广告位</text>
			</view>
			<view class="recency">
				<view class="title">
					<text>最近购买(636)</text>
					<view class="" @click="go('./recency/recency')">
						<text>全部</text>
						<image src="/static/my/right.png" mode=""></image>
					</view>
				</view>
				<view class="list">
					<view class="item" v-for="(item,index) in 4" :key="index">
						<view class="">
							<image src="" mode=""></image>
							<text>故*事</text>
						</view>
						<text>黑色 XL</text>
						<text>¥899</text>
						<text>9月30日</text>
					</view>
				</view>
			</view>
			<view class="comment">
				<view class="title">
					<text>评价(210)</text>
					<view class="" @click="go('./evaluate/evaluate')">
						<text>全部</text>
						<image src="/static/my/right.png" mode=""></image>
					</view>
				</view>
				<view class="item" v-for="(item,index) in 2" :key="index">
					<view class="user">
						<image src="" mode=""></image>
						<view class="nickname">
							<text>北**海</text>
							<text>刚刚</text>
						</view>
					</view>
					<text>非常好看哦，首先包装就很到位，防尘袋和外盒子装着的，衣服版型很正！！我以为对小个子来说会很大，但是垫肩的设计穿上直接成...</text>
				</view>
			</view>
			<view class="goodsDetail">
				<text class="title">商品详情</text>
				<image style="width: 100%;" src="/static/shop/detail.png" mode="widthFix"></image>
			</view>
			<view class="recommend">
				<view class="title">
					<text></text>
					<text>相关推荐</text>
					<text></text>
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
			</view>
		</view>
		<view class="bottom">
			<view class="b_left" @click="collect = !collect">
				<image v-if="collect" src="/static/shop/collect_on.png" mode=""></image>
				<image v-else src="/static/shop/collect.png" mode=""></image>
				<text>收藏</text>
			</view>
			<view class="b_right" @click="popupShow = true">
				<text>立即购买</text>
				<text></text>
				<text>入手¥849</text>
			</view>
		</view>
		<!-- 选择规格弹窗 -->
		<u-popup v-model="popupShow" mode="bottom" border-radius="20" @touchmove.prevent> 
			<view class="popupCon">
				<view class="top">
					<image class="avatar" src="/static/pub/bbt.png" mode=""></image>
					<view class="selected">
						<view class="price">
							<text>¥</text>
							<text>899</text>
						</view>
						<text>已选 黑色XL</text>
					</view>
					<image class="close" src="/static/my/close.png" mode="" @click="popupShow = false"></image>
				</view>
				<view class="color">
					<text class="title">颜色</text>
					<scroll-view scroll-x="true" >
						<view class="items">
							<image 
								v-for="(item,index) in 5" :key="index" 
								src="/static/pub/ttq.png" mode=""
								:class="colorCheck == index ? 'active': ''"
								@click="colorCheck = index"
							></image>
						</view>
					</scroll-view>
				</view>
				<view class="size">
					<text class="title">尺码</text>
					<scroll-view scroll-x="true" >
						<view class="items">
							<view 
								class=""
								v-for="(item,index) in 5" :key="index" 
								src="/static/pub/ttq.png" mode=""
								:class="sizeCheck == index ? 'active': ''"
								@click="sizeCheck = index"
							>
								<text>S</text>
								<text>¥456</text>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="b_right" @click="go('./confirmOrder/confirmOrder')">
					<text>¥849</text>
					<text></text>
					<text>约五天到</text>
				</view>
			</view>
		</u-popup>
		<!-- 优惠券弹窗 -->
		<u-popup v-model="disPopup" mode="bottom" border-radius="20" @touchmove.prevent>
			<view class="dispopup">
				<view class="title">
					<image src="" mode=""></image>
					<text>领券</text>
					<image src="/static/my/close.png" mode="" @click="disPopup = false"></image>
				</view>
				<view class="list">
					<view class="item" v-for="(item,index) in 5" :key="index">
						<view class="left">
							<text>¥</text>
							<text>10</text>
						</view>
						<view class="right">
							<view class="">
								<text>满100可用</text>
								<text>有效期至2021.11.30 23:59</text>
							</view>
							<text>领取</text>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 平台保障弹窗 -->
		<u-popup v-model="plaPopup" mode="bottom" border-radius="20" @touchmove.prevent>
			<view class="plapopup">
				<view class="title">
					<image src="" mode=""></image>
					<text>平台保障</text>
					<image src="/static/my/close.png" mode="" @click="plaPopup = false"></image>
				</view>
				<view class="list">
					<view class="item" v-for="(item,index) in 3" :key="index">
						<text>7天无理由退货</text>
						<text>在符合7天无理由退货标准的情况下(详见买家须知)，可申请7天无理由退货，退货运费买家自行承担。</text>
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" top="1200" :duration="300"></u-back-top>
	</view>
</template>

<script>
	import imgsBanner from '@/components/imgsBanner-tag/imgsBanner-tag.vue'
	export default {
		components:{imgsBanner},
		data() {
			return {
				imgList: [
					require('@/static/pub/bbt.png'),
					require('@/static/pub/ch.png'),
					require('@/static/pub/ttq.png'),
					require('@/static/pub/xj.png'),
					require('@/static/pub/bql.png')
				],
				current: 0, // 轮播图索引
				cut: 0, // tabs索引
				list: [
					{
						name: '商品'
					}, {
						name: '评价'
					}, {
						name: '详情'
					}, {
						name: '推荐'
					}
				],
				opacity: 0, // 顶部导航栏的透明度
				CTop: '', // 评论top
				RTop: '', // 推荐top
				GTop: '', // 详情top
				scrollTop: '' ,// 当前滚动top值
				collect: false, // 收藏状态
				popupShow: false, // 规格弹窗状态
				colorCheck: 0, // 颜色选中
				sizeCheck: 0, // 尺码选中
				flowList: [], // 推荐列表
				// 推荐列表 数据请求
				goodslist: [
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
				loadStatus: 'loadmore', // 加载更多状态 上拉加载
				disPopup: false, // 优惠券弹窗状态
				plaPopup: false // 平台保障弹窗
			};
		},
		onNavigationBarButtonTap(e){
			if(e.index == 1){
				console.log('客服1')
			}else{
				console.log('分享0')
			}
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
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
			const query = uni.createSelectorQuery().in(this);
			query.select('.tabs').boundingClientRect(data => {
				this.opacity = e.scrollTop/data.height/7
			}).exec();
			query.select('.comment').boundingClientRect(res => {
				this.CTop = res.top - 40
			}).exec();
			query.select('.goodsDetail').boundingClientRect(res => {
				this.GTop = res.top - 40
			}).exec();
			query.select('.recommend').boundingClientRect(res => {
				this.RTop = res.top - 40
			}).exec();
			if(0 < e.scrollTop < this.CTop){
				this.cut = 0
			}else if(this.CTop <= e.scrollTop < this.GTop){
				this.cut = 1
			}else if(this.GTop <= e.scrollTop < this.RTop){
				this.cut = 2
			}else if(this.RTop <= e.scrollTop){
				this.cut = 3
			}
			this.$forceUpdate()
		},
		methods:{
			recom(e){
				console.log(e)
			},
			changeCut(e){
				console.log(e)
				let top = ''
				if(e == 0){
					top = 0
				}else if(e == 1){
					top = this.scrollTop + this.CTop
				}else if(e == 2){
					top = this.scrollTop + this.GTop
				}else if(e == 3){
					top = this.scrollTop + this.RTop
				}
				uni.pageScrollTo({
				    scrollTop: top,
				    duration: 100
				})
			},
			// 模拟数据请求
			addRandomData() {	
				for(let i = 0; i < 10; i++) {
					// 产生 0 到 this.list.length - 1 的一个整数型随机数  
					let index = this.$u.random(0, this.goodslist.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.goodslist[index]))
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
		background: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		padding-bottom: 100rpx;
		.tabs{
			width: 100%;
			border-bottom: solid 1rpx #F6F5FA;
			position: fixed;
			top: 0;
			/* #ifdef H5 */
			top: 88rpx;
			/* #endif */
			background: #fff;
			z-index: 999;
			opacity: 0;
		}
		.goodsInfo{
			padding: 20rpx;
			.detail{
				padding: 21rpx 0;
				background: #fff;
				border-radius: 6rpx;
				.price{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 21rpx;
					.p_left{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						>:nth-child(1){
							text{
								font-weight: bold;
								color: #FF4243;
							}
							>:nth-child(1){
								font-size: 36rpx;
							}
							>:nth-child(2){
								font-size: 48rpx;
							}
						}
						>:nth-child(2){
							margin-left: 10rpx;
							width: 170rpx;
							height: 50rpx;
							background: linear-gradient(90deg, #FD3750 0%, #FC653F 100%);
							border-radius: 25rpx;
							text-align: center;
							line-height: 50rpx;
							text{
								font-weight: bold;
								color: #FFFFFF;
							}
							>:nth-child(1){
								font-size: 22rpx;
							}
							>:nth-child(2){
								font-size: 30rpx;
							}
						}
					}
					>text{
						font-size: 22rpx;
						color: #9094A6;
					}
				}
				.coupon{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 25rpx 0 21rpx 25rpx;
					>text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
					}
					view{
						width: 98rpx;
						height: 44rpx;
						background: #FF4243;
						border-radius: 22rpx 0px 0px 22rpx;
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text{
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
						}
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
				}
				.desc{
					padding: 0 21rpx;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
					line-height: 40rpx;
				}
				
			}
			.ident{
				margin-top: 14rpx;
				width: 100%;
				border-radius: 12rpx;
				overflow: hidden;
				view{
					padding: 27rpx 19rpx;
					height: 84rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						font-weight: bold;
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
				>:nth-child(1){
					background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
					text{
						font-size: 30rpx;
						color: #FF3C16;
					}
				}
				>:nth-child(2){
					background: #fff;
					text{
						font-size: 22rpx;
						color: #000000;
					}
				}
			}
			.store{
				background: #fff;
				margin-top: 11rpx;
				padding: 26rpx 16rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.s_left{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 80rpx;
						height: 80rpx;
						background: #F6F6F6;
						border-radius: 10rpx;
					}
					view{
						height: 80rpx;
						margin-left: 20rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						>:nth-child(1){
							font-size: 26rpx;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-weight: 500;
							color: #686879;
						}
					}
				}
				.s_right{
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
			.adver{
				margin-top: 14rpx;
				width: 100%;
				height: 135rpx;
				background: #E9E9EB;
				border-radius: 6rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-weight: bold;
				color: #FFFFFF;
			}
			.recommend{
				// padding: 30rpx 20rpx 10rpx;
				// margin-top: 10rpx;
				// background: #fff;
				// border-radius: 6rpx;
				.title{
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 33rpx 0;
					>:nth-child(1){
						width: 44rpx;
						height: 4rpx;
						background: linear-gradient(90deg, #F6F5FA 0%, #FC493D 100%);
					}
					>:nth-child(2){
						margin: 0 11rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FC5945;
					}
					>:nth-child(3){
						width: 44rpx;
						height: 4rpx;
						background: linear-gradient(90deg, #FC493D 0%, #F6F5FA 100%);
					}
				}
				.goodsList{
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
				}
			}
			.recency{
				background: #fff;
				margin-top: 10rpx;
				border-radius: 6rpx;
				padding: 0 20rpx 20rpx;
				.title{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0;
					>text{
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					view{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text{
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
				}
				.list{
					.item{
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 21rpx;
						text{
							font-size: 18rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #242535;
						}
						view{
							display: flex;
							justify-content: flex-start;
							align-items: center;
							image{
								width: 26rpx;
								height: 26rpx;
								border-radius: 50%;
								background: #ccc;
								margin-right: 7rpx;
							}
						}
						>:nth-child(4){
							font-size: 16rpx;
							color: #9094A6;
						}
					}
				}
			}
			.comment{
				background: #fff;
				margin-top: 10rpx;
				border-radius: 6rpx;
				padding: 0 20rpx 20rpx;
				.title{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0 10rpx;
					>text{
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					view{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text{
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
				}
				.item{
					margin-top: 20rpx;
					.user{
						margin-bottom: 20rpx;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						image{
							width: 58rpx;
							height: 58rpx;
							border-radius: 50%;
							background-color: #ccc;
							margin-right: 15rpx;
						}
						view{
							height: 58rpx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							>:nth-child(1){
								font-size: 26rpx;
								font-weight: 500;
								color: #000000;
							}
							>:nth-child(2){
								font-size: 20rpx;
								font-weight: 500;
								color: #9094A6;
							}
						}
					}
					>text{
						font-size: 22rpx;
						font-weight: 500;
						color: #333333;
					}
				}
			}
			.goodsDetail{
				background: #fff;
				margin-top: 10rpx;
				border-radius: 6rpx;
				.title{
					display: block;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					padding: 30rpx 20rpx;
				}
			}
		}
		.bottom{
			width: 100%;
			height: 98rpx;
			position: fixed;
			z-index: 999;
			bottom: 0;
			background: #fff;
			padding: 12rpx 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.b_left{
				text-align: center;
				image{
					width: 39rpx;
					height: 39rpx;
				}
				text{
					display: block;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			.b_right{
				width: 610rpx;
				height: 74rpx;
				background: #F35455;
				border-radius: 6rpx;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				>:nth-child(1){
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
				>:nth-child(2){
					width: 2rpx;
					height: 25rpx;
					background: #fff;
					margin: 0 10rpx;
				}
				>:nth-child(3){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}
		.popupCon{
			padding: 20rpx;
			touch-action: none;
			width: 100%;
			.top{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				position: relative;
				border-bottom: solid 1px #F7F7FB;
				padding-bottom: 18rpx;
				.avatar{
					width: 145rpx;
					height: 145rpx;
					margin-right: 28rpx;
					border: 1px solid #EDEDF3;
					border-radius: 10rpx;
				}
				.selected{
					height: 145rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.price{
						text{
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(1){
							font-size: 30rpx;
						}
						>:nth-child(2){
							font-size: 48rpx;
						}
					}
					>text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686D79;
					}
				}
				.close{
					position: absolute;
					width: 44rpx;
					height: 44rpx;
					top: 0;
					right: 0;
				}
			}
			.color,.size{
				padding: 20rpx;
				.title{
					display: block;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
					margin-bottom: 21rpx;
				}
				.items{
					display: flex;
					justify-content: flex-start;
					white-space: nowrap;
					image{
						min-width: 168rpx;
						height: 168rpx;
						border: 2px solid #F4F4F7;
						border-radius: 10rpx;
					}
					:not(:first-child){
						margin-left: 17rpx;
					}
					.active{
						border: 2px solid #F55454;
					}
					view{
						min-width: 168rpx;
						height: 168rpx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						background: #F6F5FA;
						border-radius: 10rpx;
						>:nth-child(1){
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
						}
					}
				}
			}
			.size{
				.items{
					
				}
			}
			.b_right{
				width: 100%;
				height: 74rpx;
				margin-top: 20rpx;
				background: #F35455;
				border-radius: 6rpx;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				>:nth-child(1){
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
				>:nth-child(2){
					width: 2rpx;
					height: 25rpx;
					background: #fff;
					margin: 0 10rpx;
				}
				>:nth-child(3){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}
		.dispopup{
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 34rpx 30rpx;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			.list{
				
				background: #F6F5FA;
				padding: 30rpx 20rpx;
				.item{
					width: 100%;
					background: #fff;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-radius: 10rpx;
					margin-bottom: 20rpx;
					.left{
						width: 159rpx;
						text-align: center;
						border-right: 1px solid #FFBFBB;
						text{
							font-family: PingFang SC;
							font-weight: bold;
							color: #FF4243;
						}
						>:nth-child(1){
							font-size: 36rpx;
						}
						>:nth-child(2){
							font-size: 48rpx;
						}
					}
					.right{
						width: calc(100% - 159rpx);
						padding: 0 23rpx 0 64rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						view{
							height: 136rpx;
							padding: 20rpx 0;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							>:nth-child(1){
								font-size: 30rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #FF4243;
							}
							>:nth-child(2){
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #868693;
							}
						}
						>text{
							padding: 11rpx 30rpx;
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #F6FDFA;
							background: #F35455;
							border-radius: 22rpx;
						}
					}
				}
				
			}
		}
		.plapopup{
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 34rpx 30rpx;
				border-bottom: solid 1px #F6F5FB;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			.list{
				padding: 0 35rpx 50rpx;
				.item{
					margin-top: 35rpx;
					text{
						display: block;
						font-family: PingFang SC;
					}
					>:nth-child(1){
						font-size: 28rpx;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						margin-top: 18rpx;
						font-size: 22rpx;
						font-weight: 500;
						color: #747485;
					}
				}
			}
		}
	}
</style>
