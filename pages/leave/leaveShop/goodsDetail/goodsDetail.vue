<template>
	<view class="content">
		<!-- <view class="tabs" :style="{'opacity': opacity}">
			<u-tabs v-if="opacity > 0" :list="list" :is-scroll="false" :current="cut" @change="changeCut" active-color="#FC493D"></u-tabs>
		</view> -->
		<imgsBanner :imgList='imgList' :currentImg='current'></imgsBanner>
		<view class="goodsInfo">
			<view class="detail">
				<view class="price">
					<view class="p_left">
						<text>¥</text>
						<text>{{goodsDetail.price}}</text>
					</view>
					<!-- <text>S级</text> -->
				</view>
				<view class="coupon">
					<text>运费: {{goodsDetail.express_type_text}}, 来源: {{goodsDetail.source}}, 成色: {{goodsDetail.state}}</text>
					<text>{{goodsDetail.like_nums}}人想要</text>
				</view>
				<view class="desc">
					<text>{{goodsDetail.content}}</text>
				</view>
			</view>
			<view class="ident">
				<view class="">
					<view class="">
						<text class="safe">保障</text>
						<text>查验通过/鉴别为真/杀菌消毒/快速洗护</text>
					</view>
					<image src="/static/shop/right2.png" mode=""></image>
				</view>
				<view class="" @click="plaPopup = true">
					<text>现在下单，平台将在24小时内发货</text>
					<image src="/static/shop/leave_go.png" mode=""></image>
				</view>
			</view>
			<!-- <view class="report">
				<image style="width: 100%;" src="/static/leave/baogao.png" mode="widthFix"></image>
			</view> -->
			<view class="goodsDetail">
				<text class="title">商品详情</text>
				<image style="width: 100%;" v-for="(item,index) in goodsDetail.images.split(',')" :src="ImgUrl + item" mode="widthFix"></image>
			</view>
			
			<!-- <view class="recommend">
				<view class="title">
					<text></text>
					<text>相关推荐</text>
					<text></text>
				</view>
				<view class="goodsList">
					<u-waterfall v-model="flowList" ref="uWaterfall">
						<template v-slot:left="{leftList}">
							<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="go('./goodsDetail/goodsDetail')">
								<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
								<view class="demo-title">
									{{item.title}}
								</view>
								<view class="num">
									<text>¥899</text>
									<text>156人想要</text>
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
									<text>156人想要</text>
								</view>
							</view>
						</template>
					</u-waterfall>
				<u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
			</view> -->
			
		</view>
		<view class="bottom" v-if="userInfo.id == goodsDetail.user_id">
			<view class="b_left" @click="collect">
				<image v-if="true" src="/static/shop/collect_on.png" mode=""></image>
				<image v-else src="/static/shop/collect.png" mode=""></image>
				<text>收藏</text>
			</view>
			<view class="ing">
				<text>{{goodsDetail.status_text}}</text>
			</view>
		</view>
		<view class="bottom" v-else>
			<view class="b_left" @click="collect">
				<image v-if="true" src="/static/shop/collect_on.png" mode=""></image>
				<image v-else src="/static/shop/collect.png" mode=""></image>
				<text>收藏</text>
			</view>
		<!-- 	<view class="b_mid">
				<text>卖同款</text>
			</view> -->
			<!-- 购买寄卖商品 -->
			<view class="b_right" @click="go('../confirmOrder/confirmOrder?type=consign&pay=buy&goods_id=' + goodsDetail.id)">
				<text>立即购买</text>
			</view>
		</view>
		
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
				id: '',
				userInfo: uni.getStorageSync('userInfo'),
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
						name: '报告'
					}, {
						name: '详情'
					}, {
						name: '推荐'
					}
				],
				opacity: 0, // 顶部导航栏的透明度
				CTop: '', // 报告top
				RTop: '', // 推荐top
				GTop: '', // 详情top
				scrollTop: '' ,// 当前滚动top值
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
				goodsDetail: {}
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
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		onReady() {
			// let timer = setTimeout(()=>{
			// 	const query = uni.createSelectorQuery().in(this);
			// 	query.select('.report').boundingClientRect(res => {
			// 		this.CTop = res.top - 40
			// 	}).exec();
			// 	query.select('.goodsDetail').boundingClientRect(res => {
			// 		this.GTop = res.top - 40
			// 	}).exec();
			// 	query.select('.recommend').boundingClientRect(res => {
			// 		this.RTop = res.top - 40
			// 	}).exec();
			// 	clearTimeout(timer)
			// },500)
		},
		onLoad(option) {
			this.id = option.id
			// this.addRandomData()
			this.getData()
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop
			// const query = uni.createSelectorQuery().in(this);
			// query.select('.tabs').boundingClientRect(data => {
			// 	this.opacity = e.scrollTop/data.height/7
			// }).exec();
			// if(e.scrollTop < this.CTop){
			// 	this.cut = 0
			// }else if(this.CTop <= e.scrollTop && e.scrollTop < this.GTop){
			// 	this.cut = 1
			// }else if(this.GTop <= e.scrollTop && e.scrollTop < this.RTop){
			// 	this.cut = 2
			// }else if(this.RTop <= e.scrollTop){
			// 	this.cut = 3
			// }
		},
		methods:{
			// 收藏
			collect(){
				this.request({
					url: 'idle/goods/collect',
					data: {
						token: uni.getStorageSync('userInfo').token,
						goods_id: this.goodsDetail.id,
						type: 'want'
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						this.getData()
					}
				})
			},
			// 闲置商品详情
			getData(){
				this.request({
					url: 'idle/goods/detail',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.imgList = res.data.data.cdn_images
						this.goodsDetail = res.data.data
					}
				})
			},
			changeCut(e){
				let top = ''
				if(e == 0){
					top = 0
				}else if(e == 1){
					top = this.CTop
				}else if(e == 2){
					top = this.GTop
				}else if(e == 3){
					top = this.RTop+1
				}
				uni.pageScrollTo({
				    scrollTop: top,
				    duration: 300
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
					>text{
						font-size: 36rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
				.coupon{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx 25rpx;
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
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
					.safe{
						display: inline-flex;
						margin-right: 8rpx;
						width: 63rpx;
						height: 36rpx;
						justify-content: center;
						align-items: center;
						color: #fff !important;
						font-size: 22rpx !important;
						background: linear-gradient(90deg, #FD3750 0%, #FC653F 100%);
						border-radius: 4rpx;
					}
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
			.ing{
				width: 610rpx;
				height: 74rpx;
				background: #8D8D98;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;
			}
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
			.b_mid{
				width: 160rpx;
				height: 74rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 2px solid #E8E8E8;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			.b_right{
				width: 560rpx;
				height: 74rpx;
				background: #F35455;
				border-radius: 6rpx;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
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
	}
</style>
