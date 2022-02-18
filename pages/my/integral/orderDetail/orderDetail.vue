<template>
	<!-- 商城订单详情 -->
	<view class="content">
	<!-- 	<view class="status_bar"></view>
		<view class="nav">
			<view class="" @click="back">
				<image src="/static/my/back.png" mode=""></image>
			</view>
		</view> -->
		<view class="top">
			<view class="status">
				<text v-if="status == 0">未支付</text>
				<text v-else-if="status == 1">待发货</text>
				<text v-else-if="status == 2">待签收</text>
				<text v-else-if="status == 3">已签收</text>
				<text class="context"></text>
				<text></text>
			</view>
		</view>
		<!-- <view class="flow marginTop">
			<view class="">
				<image src="/static/my/car.png" mode=""></image>
				<text>{{logistics.status}}</text>
			</view>
			<text>{{logistics.context}}</text>
			<text class="time">2021-10-15 15:25:24</text>
		</view> -->
		<view :class="['address', status == 3 ? 'marginTop' : '']">
			<view class="">
				<image src="/static/my/location.png" mode=""></image>
				<text>{{address.name}}  {{address.mobile}}</text>
			</view>
			<text>{{address.formatted_address + address.address + address.address_name}}</text>
		</view>
		<view class="detail">
			<!-- <view class="title">
				<image src="/static/avatar3.png" mode=""></image>
				<text>{{shop.shopname}}</text>
			</view> -->
			<view class="goods" v-for="(item,index) in goods" :key="index">
				<image :src="ImgUrl + item.goods_thumb" mode=""></image>
				<view class="info">
					<text>{{item.goods_name}}</text>
					<text>数量x{{item.buy_num}}</text>
					<text>¥{{item.score}}</text>
				</view>
			</view>
			<!-- <view class="money">
				<view class="">
					<text>运费</text>
					<text>¥{{pay.freight_price}}</text>
				</view>
				<view class="">
					<text>优惠劵</text>
					<text>-¥{{pay.discount_price}}</text>
				</view>
				<view class="">
					<text>合计支付</text>
					<text>¥{{pay.actual_payment}}</text>
				</view>
			</view> -->
		</view>
		<view class="msg">
			<text class="title">订单信息</text>
			<view class="item">
				<text>订单编号</text>
				<view class="">
					<text>{{orderDetail.order_id}}</text>
					<text @click="copy(orderDetail.order_id)">复制</text>
				</view>
			</view>
			<view class="item">
				<text>交易时间</text>
				<text>{{orderDetail.paytime}}</text>
			</view>
			<!-- <view class="item">
				<text>交易编号</text>
				<text>{{pay.pay_no}}</text>
			</view> -->
		</view>
		<view class="bottom">
			<view class="" v-if="status == 2">
				<text @click="go('/pages/my/buy/logistics/logistics?id=' + orderDetail.id + '&type=integral')">查看物流</text>
				<text class="active" @click="open">确认收货</text>
			</view>
		</view>
		<u-modal v-model="modelshow" :content="content" :show-cancel-button="true" @confirm="receipt"></u-modal>
	</view>
</template>

<script>
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				status: 3,
				order_id: '',
				orderDetail: {},// 订单详情
				address: {},// 收货地址
				shop: {}, // 店铺信息
				goods: [], // 购买的商品
				pay: {}, // 支付数据 money
				logistics: {},
				type: '',
				modelshow: false,
				content: ''
			};
		},
		// onBackPress() {
		// 	uni.navigateTo({
		// 		url: '../buy'
		// 	})
		// 	return true
		// },
		onReady() {
			uni.setNavigationBarColor({
			    frontColor: '#ffffff',
			    backgroundColor: '#EE4647',
			    animation: {
			        duration: 400,
			        timingFunc: 'easeIn'
			    }
			})
		},
		onLoad(option) {
			this.status = option.status
			this.order_id = option.order_id
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'integral/order/details',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.order_id,
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.address = res.data.data.address
						// this.shop = res.data.data.shop
						this.goods = res.data.data.order_goods
						// this.pay = res.data.data.pay
						this.orderDetail = res.data.data
						// this.logistics = res.data.data.logistics
					}
				})
			},
			open(){
				this.content = '是否确认收货？'
				this.modelshow = true
			},
			// 确认收货
			receipt(){
				this.request({
					url: 'integral/order/order_sign',
					data: {
						id: this.order_id,
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					})
					if(res.data.code == 1){
						this.getData()
					}
				})
			},
			back(){
				if(this.type == 'pay'){
					uni.navigateTo({
						url: '../buy'
					})
				}else{
					uni.navigateBack({
						delta: 1
					})
				}
				
			},
			copy(e){
				setText(e)
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding-bottom: 100rpx;
		.status_bar {
			position: sticky;
			top: 0;
			height: var(--status-bar-height);
			width: 100%;
			background: #EE4647;
			z-index: 9999;
		}
		.nav{
			position: sticky;
			top: var(--status-bar-height);
			width: 100%;
			height: 88rpx;
			z-index: 9999;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 40rpx 0 26rpx;
			background: #EE4647;
			view{
				width: 54rpx;
				height: 54rpx;
				image{
					width: 54rpx;
					height: 54rpx;
				}
			}
		}
		.top{
			height: 236rpx;
			background: linear-gradient(#EE4647, #F35455 );
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			padding-bottom: 77rpx;
			.status{
				padding: 0 40rpx;
				text{
					display: block;
					color: #fff;
				}
				>:nth-child(1){
					font-size: 32rpx;
					font-weight: bold;
				}
				.context{
					overflow: hidden;
					-webkit-line-clamp: 1;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
				>:nth-child(2),>:nth-child(3){
					margin-top: 19rpx;
					font-size: 24rpx;
					font-weight: bold;
				}
				view{
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}
		}
		.address,.flow{
			padding: 20rpx 30rpx;
			background: #fff;
			// margin-top: -30rpx;
			border-radius: 20rpx 20rpx 0 0;
			border-bottom: 10rpx solid #F6F5FA;
			view{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-bottom: 16rpx;
				image{
					width: 44rpx;
					height: 44rpx;
					margin-right: 10rpx;
				}
				text{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			>text{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #717181;
				display: block;
			}
			.time{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #717181;
				margin-top: 10rpx;
			}
		}
		.marginTop{
			margin-top: -30rpx;
		}
		.detail{
			padding: 20rpx 36rpx;
			border-bottom: 10rpx solid #F6F5FA;
			.title{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 36rpx;
					height: 36rpx;
					margin-right: 10rpx;
				}
				text{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
				}
			}
			.goods{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 37rpx 0;
				border-bottom: solid 1px #F1F4F9;
				image{
					width: 180rpx;
					height: 180rpx;
					min-width: 180rpx;
					border-radius: 10rpx;
					margin-right: 22rpx;
				}
				.info{
					height: 180rpx;
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
						color: #6A6A79
					}
					.safe{
						text{
							display: inline-block;
							font-size: 18rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FF4243;
							padding: 3rpx 6rpx;
							border: 1px solid #FF4243;
							border-radius: 2rpx;
							margin-right: 8rpx;
						}
					}
				}
			}
			.money{
				padding: 20rpx 0;
				view{
					padding: 20rpx 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					>:nth-child(1){
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 26rpx;
						font-weight: bold;
					}
				}
				>:nth-child(2){
					>:nth-child(2){
						color: #FF4243;
					}
				}
				>:nth-child(3){
					>:nth-child(2){
						color: #FF4243;
					}
				}
			}
		}
		.msg{
			padding: 20rpx 36rpx;
			.title{
				display: block;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				padding: 15rpx 0;
			}
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 15rpx 0;
				>:nth-child(1){
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #686879;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #686879;
				}
				view{
					>:nth-child(2){
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
						padding: 3rpx 7rpx;
						border: 1px solid #686879;
						border-radius: 8rpx;
						margin-left: 10rpx;
					}
				}
			}
		}
		.bottom{
			width: 100%;
			height: 98rpx;
			padding: 0 35rpx;
			border-top: solid 1px #F2F2F2;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			position: fixed;
			bottom: 0;
			background: #fff;
			image{
				width: 48rpx;
				height: 48rpx;
			}
			text{
				display: inline-block;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #686879;
				padding: 15rpx 25rpx;
				border: 1px solid #E8E8E8;
				border-radius: 6rpx;
				margin-left: 12rpx;
			}
			.active{
				background: #F35455;
				border: 1px solid #F35455;
				color: #fff;
			}
		}
	}
</style>
