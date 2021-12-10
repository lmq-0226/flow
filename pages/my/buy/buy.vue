<template>
	<view class="content">
		<view class="tabs">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#FC493D"></u-tabs>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in orderList" :key="item.id">
				<view class="title">
					<view class="">
						<image src="/static/avatar3.png" mode=""></image>
						<text>{{item.name}}</text>
					</view>
					<text class="ing">{{item.order_text}}</text>
				</view>
				<view class="goods">
					<view class="avatar">
						<image :src="item.goodsImg" mode=""></image>
					</view>
					<view class="">
						<text>{{item.desc}}</text>
						<text>白色 XXL 数量x1</text>
						<text>¥199</text>
					</view>
				</view>
				<view class="bot">
					<text v-for="(elem,cut) in item.buttons" :key="cut" @click="go('./receiving/receiving?status=' + elem.id)">{{elem.text}}</text>
					<!-- <text>申请退款</text>
					<text @click="go('./logistics/logistics')">查看物流</text>
					<text class="active" @click="go('./receiving/receiving?status=3')">确认收货</text> -->
				</view>
			</view>
		</view>
		<u-empty v-if="identList.length <= 0" margin-top="400" text="暂无数据" mode="data"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list: [
					{
						name: '全部'
					}, {
						name: '待付款'
					}, {
						name: '待发货'
					},{
						name: '待收货'
					}
				],
				identList: [1],
				orderList: [
					{
						id: 1,
						type: 1, // 1官方 2个人寄卖
						name: 'tb455263296',
						goodsImg: require('@/static/pub/bbt.png'),
						desc: '居居侠超级无敌棒棒糖',
						price: 199,
						order_status: 0, // 0交易关闭 1待收货 2待发货 3退款售后
						order_text: '交易失败',
						buttons: [{id: 0,text: '查看详情'}]
					},
					{
						id: 2,
						type: 1,
						name: 'Dyxlhl',
						goodsImg: require('@/static/pub/ch.png'),
						desc: '彩虹，又称天弓、天虹、绛等，简称虹',
						price: 199,
						order_status: 1, // 0交易关闭 1待收货 2待发货 3退款售后
						order_text: '待收货',
						buttons: [{id: 1,text: '确认收货'}]
					},
					{
						id: 3,
						type: 1,
						name: 'tb455263296',
						goodsImg: require('@/static/pub/ttq.png'),
						desc: '甜甜圈，又称多拿滋、唐纳滋，它是一种用面粉、白砂糖、奶油和鸡蛋混合之后再经过油炸的甜食。',
						price: 199,
						order_status: 2, // 0交易关闭 1待收货 2待发货 3退款售后
						order_text: '待发货',
						buttons: [{id: 2,text: '申请退款'}]
					},
					{
						id: 4,
						type: 1,
						name: 'tb455263296',
						goodsImg: require('@/static/pub/ttq.png'),
						desc: '甜甜圈，又称多拿滋、唐纳滋，它是一种用面粉、白砂糖、奶油和鸡蛋混合之后再经过油炸的甜食。',
						price: 199,
						order_status: 3, // 0交易关闭 1待收货 2待发货 3退款售后
						order_text: '退款中',
						buttons: [{id: 3,text: '退款进度'}]
					}
				],
			};
		},
		onLoad() {
			
		},
		onBackPress(){
			uni.switchTab({
				url: '../my'
			})
			return true
		},
		methods:{
			change(e){
				this.current = e
			},
			go(e){
				console.log(e)
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss"scoped>
	.content{
		.tabs{
			border-bottom: solid 10rpx #F6F5FA;
			position: sticky;
			top: 0;
			background: #fff;
			z-index: 999;
			/* #ifdef H5 */
			top: 88rpx;
			/* #endif */
		}
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
							width: 164rpx;
							height: 164rpx;
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
