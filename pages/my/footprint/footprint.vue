<template>
	<view class="content">
		<!-- <view class="status_bar"></view>
		<view class="nav_bar">
			<view class="nav">
				<u-icon name="arrow-left" color="#000" size="44" @click="back"></u-icon>
				<text class="navMid">足迹</text>
				<text></text>
				<text class="navRit" v-if="status" @click="status = false">管理</text>
				<text class="navRit" v-else @click="status = true">完成</text>
			</view>
		</view> -->
		<view class="foots">
			<!-- <view class="often" v-for="(item,index) in goodsList" :key="item.id">
				<view class="title">
					<view class="" v-if="!status" @click="Rchoice(index)">
						<image v-if="item.status" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
					<text>{{item.title}}</text>
				</view>
				<view class="list">
					<view class="item" v-for="(elem,cut) in item.list" :key="elem.id" @click="go('/pages/shop/goodsDetail/goodsDetail')">
						<view class="radio" v-if="!status" @click.stop="Mchoice(index,cut)">
							<image v-if="elem.status" src="/static/login/radio_on.png" mode=""></image>
							<image v-else src="/static/login/radio.png" mode=""></image>
						</view>
						<image :src="elem.url" mode=""></image>
						<text>¥{{elem.price}}</text>
					</view>
				</view>
			</view> -->
			<view class="often">
				
				<view class="item" v-for="(item,index) in goodsList" :key="item.id" @click="go('/pages/shop/goodsDetail/goodsDetail?id=' + item.goods_id)">
					<!-- <view class="radio" v-if="!status" @click.stop="Mchoice(index,cut)">
						<image v-if="item.status" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view> -->
					<image v-if="item.goods" :src="ImgUrl + item.goods.image" mode=""></image>
					<text v-if="item.goods">¥{{item.goods.price}}</text>
				</view>
			</view>
		</view>
		<view class="bottom" v-if="!status">
			<view class="radio" @click="allChoice()">
				<image v-if="fatherList.length == goodsList.length" src="/static/login/radio_on.png" mode=""></image>
				<image v-else src="/static/login/radio.png" mode=""></image>
				<text>全选</text>
			</view>
			<text @click="show = true">删除</text>
		</view>
		<u-modal v-model="show" title="" content="确定移除所选吗？" :show-cancel-button="true" @confirm="del"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: true,
				show: false,
				goodsList: [
					{id: 1, title: '经常浏览',status: false,list: [
						{id: 2, price: 699, url: require('@/static/pub/bbt.png'),status: false},
						{id: 3, price: 899, url: require('@/static/pub/ch.png'),status: false},
						{id: 4, price: 799, url: require('@/static/pub/ttq.png'),status: false},
						{id: 5, price: 999, url: require('@/static/pub/xj.png'),status: false},
						{id: 6, price: 399, url: require('@/static/pub/ch.png'),status: false}
					]},
					{id: 7, title: '10/21',status: false,list: [
						{id: 8, price: 99, url: require('@/static/pub/bbt.png'),status: false},
						{id: 9, price: 199, url: require('@/static/pub/ch.png'),status: false},
						{id: 10, price: 299, url: require('@/static/pub/ttq.png'),status: false},
						{id: 11, price: 399, url: require('@/static/pub/xj.png'),status: false},
						{id: 12, price: 699, url: require('@/static/pub/ch.png'),status: false}
					]}
				],
				childrenList: [], // 模块下的子元素选中存储数据
				fatherList: [], // 模块选中存储数组
			}
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'wanlshop/product/footprint',
					method: 'GET',
					data: {
						token: uni.getStorageSync('userInfo').token,
						type: 'goods'
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.goodsList = res.data.data.data
					}
				})
			},
			// 单选  以下的所有status是每条数据的选中状态
			Mchoice(e,n){
				let shop = this.goodsList[e]
				let goods = this.goodsList[e].list
				goods[n].status = !goods[n].status
				// 单选
				if(goods[n].status == true){
					this.childrenList.push(goods[n].id)
				}else{
					let index = this.childrenList.indexOf(goods[n].id)
					this.childrenList.splice(index, 1)
				}
				// 单选控制模块全选、所有全选
				let num = 0
				goods.forEach(elem=>{
					if(elem.status == true){
						num ++
						if(goods.length == num){
							shop.status = true
							this.fatherList.push(shop.id)
						}else{
							shop.status = false
							let cut = this.fatherList.indexOf(shop.id)
							if(cut > -1){
								this.fatherList.splice(cut, 1)
							}
						}
					}
				})
			},
			// 模块全选
			Rchoice(e){
				this.goodsList[e].status = !this.goodsList[e].status
				// 单个模块全选 原理同全选
				if(this.goodsList[e].status){
					this.fatherList.push(this.goodsList[e].id)
					this.goodsList[e].list.forEach(elem=>{
						elem.status = true
						if(this.childrenList.indexOf(elem.id) == -1){
							this.childrenList.push(elem.id)
						}
					})
				}else{
					let cut = this.fatherList.indexOf(this.goodsList[e].id)
					if(cut > -1){
						this.fatherList.splice(cut, 1)
					}
					this.goodsList[e].list.forEach(elem=>{
						elem.status = false
						let index = this.childrenList.indexOf(elem.id)
						if(index > -1){
							this.childrenList.splice(index, 1)
						}
					})
				}
			},
			// 全选
			allChoice(){
				// 如果已经全选，清楚所有选中状态
				if(this.fatherList.length == this.goodsList.length){
					this.fatherList = []
					this.childrenList = []
					this.goodsList.forEach(item=>{
						item.status = false
						item.list.forEach(elem=>{
							elem.status = false
						})
					})
				}else{
					// 如果没有被全部选中，先把选中状态数据置空，在重新把所有的数据添加进去
					this.fatherList = []
					this.childrenList = []
					this.goodsList.forEach(item=>{
						item.status = true
						this.fatherList.push(item.id)
						item.list.forEach(elem=>{
							elem.status = true
							this.childrenList.push(elem.id)
						})
					})
				}
			},
			// 删除所选
			del(){
				// 倒叙删除所选(删除多个需要使用倒叙循环)
				for (let i = this.goodsList.length; i-- ; i > 0) {
					// 先删除当前记录的子元素
					for (let j = this.goodsList[i].list.length; j-- ; j > 0) {
						if(this.childrenList.indexOf(this.goodsList[i].list[j].id) > -1){
							let index = this.childrenList.indexOf(this.goodsList[i].list[j].id)
							// 删除源数据的同时删除选中状态数组中的数据
							this.childrenList.splice(index, 1)
							this.goodsList[i].list.splice(j, 1)
						}
					}
					// 再删除父元素（同上）
					if(this.fatherList.indexOf(this.goodsList[i].id) > -1){
						let cut = this.fatherList.indexOf(this.goodsList[i].id)
						this.fatherList.splice(cut, 1)
						this.goodsList.splice(i, 1)
					}
				}
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		},
		computed: {
			
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
		/* #ifdef H5 */
			padding-bottom: 100rpx;
		/* #endif */
		.nav_bar{
			position: sticky;
			top: var(--status-bar-height);
			background-color: #fff;
			z-index: 999;
			border-bottom: solid 1px #f8f8f8;
			.nav{
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: sticky;
				height: 100rpx;
				padding: 0 30rpx;
				image{
					width: 40rpx;
					height: 40rpx;
				}
				text{
					font-weight: bold;
					color: #000000;
				}
				.navMid{
					font-size: 32rpx;
				}
				.navRit{
					font-size: 28rpx;
				}
			}
		}
		.foots{
			>:not(:first-child){
				border-top: solid 10rpx #F6F5FA;
			}
			// .often{
			// 	padding: 0 30rpx 30rpx;
			// 	.title{
			// 		padding: 17rpx 0;
			// 		display: flex;
			// 		justify-content: flex-start;
			// 		align-items: center;
			// 		view{
			// 			height: 44rpx;
			// 			margin-right: 17rpx;
			// 			image{
			// 				width: 44rpx;
			// 				height: 44rpx;
			// 			}
			// 		}
			// 		text{
			// 			font-size: 30rpx;
			// 			font-family: PingFang SC;
			// 			font-weight: bold;
			// 			color: #000000;
			// 		}
			// 	}
			// 	.list{
			// 		padding: 0 6rpx;
			// 		display: flex;
			// 		justify-content: flex-start;
			// 		flex-wrap: wrap;
			// 		>:not(:nth-child(4n)){
			// 			margin-right: 13rpx;
			// 		}
			// 		.item{
			// 			width: 160rpx;
			// 			height: 200rpx;
			// 			position: relative;
			// 			background-color: rgba($color: #d3d3d3, $alpha: .2);
			// 			border-radius: 10rpx;
			// 			margin-top: 15rpx;
			// 			.radio{
			// 				position: absolute;
			// 				top: 10rpx;
			// 				left: 10rpx;
			// 				z-index: 9;
			// 				height: 44rpx;
			// 				image{
			// 					width: 44rpx;
			// 					height: 44rpx;
			// 				}
			// 			}
			// 			>image{
			// 				width: 160rpx;
			// 				height: 160rpx;
			// 			}
			// 			text{
			// 				display: block;
			// 				padding: 0 6rpx;
			// 				font-size: 28rpx;
			// 				line-height: 18rpx;
			// 				font-family: PingFang SC;
			// 				font-weight: bold;
			// 				color: #000000;
			// 			}
						
			// 		}
			// 	}
			// }
			.often{
				padding: 0 30rpx 30rpx;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				>:not(:nth-child(4n)){
					margin-right: 13rpx;
				}
				.item{
					width: 160rpx;
					height: 200rpx;
					position: relative;
					background-color: rgba($color: #fff, $alpha: 1);
					border-radius: 10rpx;
					margin-top: 15rpx;
					.radio{
						position: absolute;
						top: 10rpx;
						left: 10rpx;
						z-index: 9;
						height: 44rpx;
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
					>image{
						width: 160rpx;
						height: 160rpx;
					}
					text{
						display: block;
						padding: 0 6rpx;
						font-size: 28rpx;
						line-height: 18rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
		}
		
		.bottom{
			position: fixed;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 98rpx;
			padding: 0 36rpx;
			background-color: #fff;
			z-index: 99;
			border-top: solid 1px #dadada;
			view{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 44rpx;
					height: 44rpx;
					margin-right: 23rpx;
				}
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			>text{
				display: block;
				width: 220rpx;
				height: 74rpx;
				text-align: center;
				line-height: 74rpx;
				background: #F35455;
				border-radius: 10rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
</style>
