<template>
	<view class="content">
		<view class="sort">
			<view v-for="(item,index) in sortList" :key="index" :class="sortIndex == index ? 'active' : ''" @click="changeSort(index)">
				<text>{{item.text}}</text>
				<image :src="item.url" mode=""></image>
			</view>
		</view>
		<u-empty v-if="flowList.length <= 0" text="暂无商品" mode="data" margin-top="300"></u-empty>
		<view class="goodsList">
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
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
			<!-- 加载更多 -->
			<u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
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
				priceStatus: false,
				sortList: [
					{text: '综合', url: ''},
					{text: '销量', url: ''},
					{text: '价格', url: require('@/static/pub/updown.png')},
					{text: '新品', url: ''},
					{text: '筛选', url: require('@/static/filter.png')}
				],
				sortIndex: 0,
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				list: [],
				show: false, // 弹窗
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
				search: '',
				sort: 'weigh',
				order: 'asc',
				brand_id: '' // 分类id
			};
		},
		// 导航栏背景及字体颜色初始化
		onReady() {
			
		},
		onNavigationBarSearchInputConfirmed(e){
			this.$refs.uWaterfall.clear()
			this.search = e.text
			this.getData()
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
			if(option.search){
				this.search = option.search
				var webView = this.$mp.page.$holder.navigationBar.searchInput
				webView.placeholder = option.search
			}
			if(option.brand_id){
				this.brand_id = option.brand_id
			}
			this.getData()
		},
		// 监听页面滚动，动态设置导航栏背景
		onPageScroll(e) {
			this.opacity = (e.scrollTop - 80) / 125
		},
		methods:{
			// 闲置商品列表
			getData(){
				this.request({
					url: 'idle/goods/brand_goods',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.brand_id,
						page_index: 1,
						page_size: 10,
						flag: 'new',//商品标识	字符串	否	recommend	同类推荐 ： recommend=》推荐 new=》上新 可不传
						keyword: ''
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.flowList = res.data.data.list
					}
				})
			},
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			// 分类
			change(e){
				this.current = e
			},
			// 排序
			changeSort(e){
				this.sortIndex = e
				if(e == 0){
					this.sort = 'weigh'
				}else if(e == 1){
					this.sort = 'sales'
				}else if(e == 2){
					this.sort = 'price'
					this.priceStatus = !this.priceStatus
					if(this.priceStatus){
						this.order = 'asc'
						this.sortList[2].url = require('@/static/pub/up.png')
					}else{
						this.order = 'desc'
						this.sortList[2].url = require('@/static/pub/down.png')
					}
				}else if(e == 3){
					this.sort = 'createtime'
				}else if(e == 4){
					this.sort = 'createtime'
					this.show = true
				}
				if(e != 2){
					this.order = 'asc'
					this.priceStatus = false
					this.sortList[2].url = require('@/static/pub/updown.png')
				}
				if(e != 4){
					this.getData()
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
			popuTouch(e){
				
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
		.sort{
			position: sticky;
			top: 0;
			/* #ifdef H5 */
			top: 88rpx;
			/* #endif */
			z-index: 999;
			background: #fff;
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
	}
</style>
