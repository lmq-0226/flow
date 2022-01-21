<template>
	<view class="content">
		<view class="list">
			<!-- <view class="item">
				<view class="title">
					<view class="">
						<image src="/static/avatar3.png" mode=""></image>
						<text>tb455263296</text>
					</view>
					<text class="ing">估价中</text>
				</view>
				<view class="goods">
					<view class="avatar">
						<image src="/static/pub/bbt.png" mode=""></image>
					</view>
					<view class="">
						<text>这条数据是平台寄卖</text>
						<text>白色 XXL 数量x1</text>
						<text>¥999</text>
					</view>
				</view>
				<view class="bot">
					<text @click="go('/pages/leave/detail/detail?status=1')">查看详情</text>
				</view>
			</view> -->
			<view class="item" v-for="(item,index) in list" :key="item.id"  @click="go('/pages/my/sell/detail/detail?order_id=' + item.id)">
				<view class="title">
					<view class="">
						<image :src="ImgUrl + item.seller.avatar" mode=""></image>
						<text>{{item.seller.nickname}}</text>
					</view>
					<text class="ing">{{item.state_text}}</text>
				</view>
				<view class="goods">
					<view class="avatar">
						<image :src="ImgUrl + item.idlegoods.image" mode=""></image>
					</view>
					<view class="">
						<text>{{item.idlegoods.name}}</text>
						<text></text>
						<text>¥{{item.idlegoods.price}}</text>
					</view>
				</view>
				<view class="bot">
					<text @click.stop="go('/pages/my/sell/deliver/deliver?order_id=' + item.id)">去发货</text>
				</view>
			</view>
		</view>
		<u-empty style="padding-top: 400rpx;" v-if="list.length <= 0" text="暂无数据" mode="list"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					// {
					// 	id: 1,
					// 	name: 'tb455263296',
					// 	goodsImg: require('@/static/pub/bbt.png'),
					// 	desc: '居居侠超级无敌棒棒糖',
					// 	price: 199,
					// 	order_status: 1, // 1待发货，2待收货，3待评价
					// 	order_text: '待发货',
					// 	buttons: [{id: 1,text: '查看详情'}]
					// },
					// {
					// 	id: 2,
					// 	name: 'Dyxlhl',
					// 	goodsImg: require('@/static/pub/ch.png'),
					// 	desc: '彩虹，又称天弓、天虹、绛等，简称虹',
					// 	price: 199,
					// 	order_status: 2, // 1待发货，2待收货，3待评价
					// 	order_text: '待收货',
					// 	buttons: [{id: 2,text: '提醒收货'}]
					// },
					// {
					// 	id: 3,
					// 	name: 'tb455263296',
					// 	goodsImg: require('@/static/pub/ttq.png'),
					// 	desc: '甜甜圈，又称多拿滋、唐纳滋，它是一种用面粉、白砂糖、奶油和鸡蛋混合之后再经过油炸的甜食。',
					// 	price: 199,
					// 	order_status: 3, // 1待发货，2待收货，3待评价
					// 	order_text: '待评价',
					// 	buttons: [{id: 3,text: '提醒评价'}]
					// }
				],
			};
		},
		onBackPress() {
			uni.switchTab({
				url: '../my'
			})
			return true
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'idle/order/sale_order_list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						page_index: 1,
						page_size: 10
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.list = res.data.data.list
					}
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss"scoped>
	.content{
		.list{
			.item{
				padding: 0 36rpx 0;
				border-bottom: solid 10rpx #F6F5FA;
				.title{
					padding: 19rpx 8rpx;
					border-bottom: solid 1px #F2F2F6;
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						image{
							width: 34rpx;
							height: 34rpx;
							border-radius: 6rpx;
							margin-right: 12rpx;
						}
						text{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
					>text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #86868F;
					}
					.ing{
						color: #FF4243;
					}
				}
				.goods{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 28rpx 0;
					position: relative;
					.avatar{
						margin-right: 20rpx;
						image{
							width: 180rpx;
							height: 180rpx;
							min-width: 180rpx;
							border-radius: 10rpx;
						}
					}
					view{
						height: 164rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						>:nth-child(1),>:nth-child(3){
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
							overflow: hidden;
							-webkit-line-clamp: 2;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9094A6;
						}
					}
					.status{
						position: absolute;
						right: -62rpx;
						image{
							width: 174rpx;
							height: 174rpx;
						}
					}
				}
				.bot{
					padding: 12rpx 0;
					border-top: solid 1px #F2F2F6;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text{
						display: inline-block;
						width: 130rpx;
						height: 54rpx;
						text-align: center;
						line-height: 54rpx;
						border: 1px solid #9393A7;
						border-radius: 4rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
					.active{
						background: #F55454;
						color: #fff;
						border: 1px solid #F55454;
					}
					>:nth-child(2){
						margin: 0 20rpx;
					}
				}
			}
		}
	}
</style>
