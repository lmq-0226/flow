<template>
	<view class="content" v-if="show">
		<view class="tabs" :style="{'opacity': opacity}">
			<u-tabs :list="list" :is-scroll="false" :current="cut" duration="0.3" @change="changeCut" active-color="#FC493D"></u-tabs>
		</view>
		<imgsBanner :imgList='imgList' :currentImg='current'></imgsBanner>
		<view class="goodsInfo">
			<view class="detail">
				<view class="price">
					<view class="p_left">
						<view class="">
							<text>¥</text>
							<text>{{sku.market_price}}</text>
						</view>
						<view class="">
							<text>券后价¥</text>
							<text>{{sku.price}}</text>
						</view>
					</view>
					<text>{{goodsDetail.payment}}人付款</text>
				</view>
				<view class="coupon" v-if="goodsDetail.coupon.length > 0">
					<text>可领取店铺优惠券</text>
					<view class="" @click="disPopup = true">
						<text>领券</text>
						<image src="/static/shop/right.png" mode=""></image>
					</view>
				</view>
				<view class="coupon" v-else>
					<text>当前店铺暂无优惠券</text>
					<view class="couponNull">
						<text>领券</text>
						<image src="/static/shop/right.png" mode=""></image>
					</view>
				</view>
				<view class="desc">
					<text>{{goodsDetail.title}}</text>
				</view>
			</view>
			<view class="ident">
				<view class="" @click="go('./serviceIntro/serviceIntro')">
					<text>先鉴别后发货 全新正品 假一赔十</text>
					<image src="/static/shop/right2.png" mode=""></image>
				</view>
				<view class="" @click="plaPopup = true">
					<text>7天无理由退货·超时赔付·次日达·防伪包装·逐件查验</text>
					<image src="/static/shop/leave_go.png" mode=""></image>
				</view>
			</view>
			<view class="store" @click="go('/pages/my/subscribe/store/store?id=' + goodsDetail.shop_id)">
				<view class="s_left">
					<image :src="ImgUrl + shop.avatar" mode=""></image>
					<view class="">
						<text>{{shop.shopname}}</text>
						<text>{{shop.find_user.fans}}人订阅</text>
						<!-- ·1524款商品 -->
					</view>
				</view>
				<view class="s_right">
					<image src="/static/shop/service.png" mode=""></image>
					<image src="/static/my/right.png" mode=""></image>
				</view>
			</view>
			<!-- <view class="adver">
				<text>广告位</text>
			</view> -->
			
		<!-- 	<view class="recency">
				<view class="title">
					<text>最近购买(636)</text>
					<view class="" @click="go('./recency/recency')">
						<text>全部</text>
						<image src="/static/my/right.png" mode=""></image>
					</view>
				</view>
				<view class="list">
					<swiper class="swiper" :autoplay="true" :interval="2000" :duration="800" :vertical="true" :display-multiple-items="4" :disable-touch="true" :circular="true">
						<swiper-item v-for="(item,index) in 10" :key="index">
							<view class="swiper-item uni-bg-red item">
								<view class="">
									<image src="" mode=""></image>
									<text>故*事</text>
								</view>
								<text>黑色 XL</text>
								<text>¥899</text>
								<text>9月30日</text>
							</view>
						</swiper-item>
					</swiper>
					
				</view>
			</view> -->
			
			<view class="comment" @click="go('./evaluate/evaluate?id=' + goodsDetail.id)">
				<view class="title">
					<text> {{ '评价(' + goodsDetail.comment_list.figure + ')'}}</text>
					<view class="">
						<text>全部</text>
						<image src="/static/my/right.png" mode=""></image>
					</view>
				</view>
				<view class="item" v-for="(item,index) in comment_list" :key="index">
					<view class="user">
						<image :src="ImgUrl + item.user.avatar" mode=""></image>
						<view class="nickname">
							<text>{{item.user.nickname}}</text>
							<u-rate :current="item.score" :disabled="true"></u-rate>
						</view>
					</view>
					<text>{{item.content}}</text>
					<view class="imgs" style="margin-top: 10rpx;">
						<image style="height: 200rpx;padding: 10rpx;" v-for="(elem,cut) in item.images" :key="cut" :src="ImgUrl + elem" mode="heightFix"></image>
					</view>
				</view>
			</view>
			<view class="goodsDetail">
				<text class="title">商品详情</text>
				<view style="padding: 0 20rpx 20rpx 20rpx;">
					<rich-text :nodes="goodsDetail.content"></rich-text>
				</view>
				
				<!-- <image style="width: 100%;" src="/static/shop/detail.png" mode="widthFix"></image> -->
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
							<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="go('/pages/shop/goodsDetail/goodsDetail?id=' + item.id)">
								<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
								<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image" img-mode="widthFix" :index="index"></u-lazy-load>
								<view class="demo-title">
									{{item.title}}
								</view>
								<view class="num">
									<text>¥{{item.price}}</text>
									<!-- <text>156人付款</text> -->
								</view>
							</view>
						</template>
						<template v-slot:right="{rightList}">
							<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="go('/pages/shop/goodsDetail/goodsDetail?id=' + item.id)">
								<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image" img-mode="widthFix" :index="index"></u-lazy-load>
								<view class="demo-title">
									{{item.title}}
								</view>
								<view class="num">
									<text>¥{{item.price}}</text>
									<!-- <text>156人付款</text> -->
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
			<view class="b_left" @click="collect">
				<image v-if="goodsDetail.follow" src="/static/shop/collect_on.png" mode=""></image>
				<image v-else src="/static/shop/collect.png" mode=""></image>
				<text>收藏</text>
			</view>
			<view class="b_right" @click="popupShow = true">
				<text>立即购买</text>
				<text></text>
				<text>入手¥{{sku.price}}</text>
			</view>
		</view>
		<!-- 选择规格弹窗 -->
		<u-popup v-model="popupShow" mode="bottom" border-radius="20"  @touchmove.native.stop.prevent> 
			<view class="popupCon">
				<view class="top">
					<image class="avatar" :src="ImgUrl + sku.thumbnail" mode=""></image>
					<view class="selected">
						<view class="price">
							<text>¥</text>
							<text>{{sku.price}}</text>
						</view>
						<text>已选 {{sku.difference.join('-')}}</text>
					</view>
					<image class="close" src="/static/my/close.png" mode="" @click="popupShow = false"></image>
				</view>
				<!-- <view class="color">
					<text class="title">颜色</text>
					<scroll-view scroll-x="true" >
						<view class="items">
							<image 
								v-for="(item,index) in goodsDetail.spu[1].item" :key="index" 
								src="/static/pub/ttq.png" mode=""
								:class="colorCheck == index ? 'active': ''"
								@click="colorCheck = index"
							></image>
						</view>
					</scroll-view>
				</view> -->
				<view class="size" v-for="(item,index) in goodsDetail.spu" :key="index">
					<text class="title">{{item.name}}</text>
					<scroll-view scroll-x="true" >
						<view class="items">
							<view 
								class=""
								v-for="(elem,cut) in item.item" :key="cut" 
								src="/static/pub/ttq.png" mode=""
								:class="selectSku.indexOf(elem.name) > -1 ? 'active': ''"
								@click="select(index,elem.name)"
							>
								<text>{{elem.name}}</text>
								<!-- <text>¥456</text> -->
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- go('./confirmOrder/confirmOrder') -->
				<view class="b_right" @click="next()">
					<text>¥{{sku.price}}</text>
					<!-- <text></text>
					<text>约五天到</text> -->
				</view>
				<!-- <view class="b_right" @click="go('./confirmOrder/confirmOrder?number=1&goods_id=' + goodsDetail.id + '&sku_id=' + sku.id)">
					<text>¥{{sku.price}}</text>
				</view> -->
			</view>
		</u-popup>
		<!-- 优惠券弹窗 -->
		<u-popup v-model="disPopup" mode="bottom" border-radius="20"  @touchmove.native.stop.prevent>
			<view class="dispopup">
				<view class="title">
					<image src="" mode=""></image>
					<text>领券</text>
					<image src="/static/my/close.png" mode="" @click="disPopup = false"></image>
				</view>
				<view class="list">
					<view class="item" v-for="(item,index) in goodsDetail.coupon" :key="index">
						<view class="left">
							<text>¥</text>
							<text>{{item.price}}</text>
						</view>
						<view class="right">
							<view class="">
								<text>满{{item.limit}}可用</text>
								<text v-if="item.pretype == 'fixed'">{{item.pretype_text + item.enddate}}</text>
								<!-- <view class="" v-else> -->
								<!-- <text v-if="item.pretype == 'appoint'">领取日期: {{item.startdate}}</text> -->
								<text v-if="item.pretype == 'appoint'">{{item.pretype_text + item.validity}}</text>
							</view>
							<text @click="draw(item.id)">立即领取</text>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 平台保障弹窗 -->
		<u-popup v-model="plaPopup" mode="bottom" border-radius="20"  @touchmove.native.stop.prevent>
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
		<u-toast ref="uToast" />
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
				show: false,
				id: '',
				imgList: [],
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
				popupShow: false, // 规格弹窗状态
				colorCheck: 0, // 颜色选中
				sizeCheck: 0, // 尺码选中
				flowList: [], // 推荐列表
				// 推荐列表 数据请求
				goodslist: [],
				loadStatus: 'loadmore', // 加载更多状态 上拉加载
				disPopup: false, // 优惠券弹窗状态
				plaPopup: false ,// 平台保障弹窗
				goodsDetail: {},
				shop: {},
				brand: {},
				selectSku: [],
				sku: {},
				content: '',
				discountList: [], // 优惠券列表
				comment_list: [], // 商品评论列表
				count: 0
			};
		},
		onNavigationBarButtonTap(e){
			if(e.index == 1){
				console.log('客服1')
				this.go('/pages/HM-chat/HM-chat?shop_id=' + this.goodsDetail.shop_id + '&goods=' + JSON.stringify({ id: this.goodsDetail.id, title: this.goodsDetail.title, image: this.goodsDetail.image, price: this.goodsDetail.price }))
			}else{
				console.log('分享0')
			}
		},
		onReady() {
			let timer = setTimeout(()=>{
				const query = uni.createSelectorQuery().in(this);
				query.select('.comment').boundingClientRect(res => {
					this.CTop = res.top - 40
				}).exec();
				query.select('.goodsDetail').boundingClientRect(res => {
					this.GTop = res.top - 40
				}).exec();
				query.select('.recommend').boundingClientRect(res => {
					this.RTop = res.top - 40
				}).exec();
				clearTimeout(timer)
			},500)
		},
		// 触底加载更多，切换加载更多loading
		onReachBottom() {
			// this.loadStatus = 'loading';
			// // 模拟数据加载
			// setTimeout(() => {
			// 	this.addRandomData();
			// 	this.loadStatus = 'loadmore';
			// }, 1000)
		},
		onLoad(option) {
			this.id = option.id
			this.getData()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
			const query = uni.createSelectorQuery().in(this);
			query.select('.tabs').boundingClientRect(data => {
				this.opacity = e.scrollTop/data.height/7
			}).exec();
			if(e.scrollTop < this.CTop){
				this.cut = 0
			}else if(this.CTop <= e.scrollTop && e.scrollTop < this.GTop){
				this.cut = 1
			}else if(this.GTop <= e.scrollTop && e.scrollTop < this.RTop){
				this.cut = 2
			}else if(this.RTop <= e.scrollTop){
				this.cut = 3
			}
		},
		methods:{
			// 优惠券列表
			// getDiscount(){
			// 	this.disPopup = true
			// 	this.request({
			// 		url: 'wanlshop/coupon/getList',
			// 		data: {
			// 			type: 'reduction',
			// 			page: 1
			// 		}
			// 	}).then(res=>{
			// 		if(res.data.code == 1){
			// 			this.discountList = res.data.data.data
			// 		}
			// 	})
			// },
			// 领取优惠券
			draw(e){
				this.request({
					url: 'wanlshop/coupon/receive',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: e
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: res.data.data.msg,
							type: 'success'
						})
						this.disPopup = false
						this.getDiscount()
					}
				})
			},
			// 商品详情
			getData(){
				this.request({
					url: 'wanlshop/product/goods',
					header: {
						'content-type': 'application/json;charset=UTF-8',
						token: uni.getStorageSync('userInfo').token
					},
					method: 'GET',
					data: {
						id: this.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						// 轮播
						res.data.data.images.forEach(elem=>{
							this.imgList.push(this.ImgUrl + elem)
						})
						this.goodsDetail = res.data.data // 商品详情
						this.goodsDetail.content = res.data.data.content.replace(/<img /g,"<img width='100%'")
						this.shop = res.data.data.shop // 店铺详情
						this.brand = res.data.data.brand // 商品名称
						this.flowList = res.data.data.shop_recommend // 推荐列表
						this.sku = res.data.data.sku[0] // 默认选中的商品属性商品详情	
						// this.sku.
						this.selectSku = res.data.data.sku[0].difference // 默认选中的商品属性
						this.comment_list = res.data.data.comment_list.data
						this.show = true
						// 查询库存
						// this.request({
						// 	url: 'wanlshop/product/stock',
						// 	method: 'GET',
						// 	data: {
						// 		sku_id: this.sku.id
						// 	}
						// }).then(res=>{})
						this.query()
					}
				})
			},
			// 收藏
			collect(){
				this.request({
					url: 'wanlshop/product/follow',
					method: 'POST',
					header: {
						token: uni.getStorageSync('userInfo').token,
						'content-type': 'application/json;charset=UTF-8'
					},
					data: {
						id: Number(this.id)
					}
				}).then(res=>{
					if(res.data.code == 1){
						if(res.data.data){
							this.$refs.uToast.show({
								title: '关注成功',
								type: 'success'
							})
						}else{
							this.$refs.uToast.show({
								title: '取消成功',
								type: 'success'
							})
						}
						this.goodsDetail.follow = res.data.data
					}
				})
			},
			// 选择商品规格属性
			select(e,n){
				this.$set(this.selectSku, e, n)
				this.goodsDetail.sku.forEach(elem=>{
					if(JSON.stringify(elem.difference) == JSON.stringify(this.selectSku)){
						this.sku = elem
					}
				})
				this.query()
			},
			// 查询库存
			query(){
				
				this.request({
					url: 'wanlshop/product/stock',
					method: 'GET',
					data: {
						sku_id: this.sku.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.count = res.data.data
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
			next(){
				if(this.count <= 0){
					this.$refs.uToast.show({
						title: '当前商品暂无库存',
						type: 'warning'
					})
				}
				this.go('./confirmOrder/confirmOrder?number=1&goods_id=' + this.goodsDetail.id + '&sku_id=' + this.sku.id)
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
							padding: 0 10rpx;
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
					.couponNull{
						background: #ccc;
					}
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
						.nickname{
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
						.imgs{
							display: flex;
							justify-content: flex-start;
							// margin-top: 20rpx;
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
				width: 580rpx;
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
						width: 180rpx;
						text-align: center;
						border-right: 1px solid #FFBFBB;
						text{
							font-family: PingFang SC;
							font-weight: bold;
							color: #FF4243;
						}
						>:nth-child(1){
							font-size: 32rpx;
						}
						>:nth-child(2){
							font-size: 42rpx;
						}
					}
					.right{
						width: calc(100% - 180rpx);
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
							>:nth-child(2),>:nth-child(3){
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
