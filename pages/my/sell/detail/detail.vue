<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="nav">
			<view class="" @click="back">
				<image src="/static/my/back.png" mode=""></image>
			</view>
			<view class="" @click="go('/pages/public/callCenter')">
				<image src="/static/my/service2.png" mode=""></image>
			</view>
		</view>
		<view class="top">
			<u-steps :list="numList" :current="current" mode="number" active-color="#fff" un-active-color="#fff" icon="/static/my/true2.png"></u-steps>
		</view>
		<!-- 待收货状态 -->
		<view class="flow marginTop" @click="go('../logistics/logistics')">
			<view class="">
				<image src="/static/my/car.png" mode=""></image>
				<text>{{logistics.status}}</text>
			</view>
			<text>{{logistics.context}}</text>
			<text class="time">{{logistics.time}}</text>
		</view>
		<!-- <view v-if="status == 3" :class="['flow', status == 3 ? 'marginTop' : '']" @click="go('../logistics/logistics')">
			<view class="">
				<image src="/static/my/car.png" mode=""></image>
				<text>买家已签收</text>
			</view>
			<text style="color: #26B3FF;">高铁新城某某正在派件(95720为中通快递员外呼专属号码，请...</text>
			<text class="time">2021-10-15 15:25:24</text>
		</view> -->
		<!-- 待发货状态 -->
		<view :class="['address', status == 1 ? 'marginTop' : '']">
			<view class="">
				<image src="/static/my/location.png" mode=""></image>
				<text>{{address.name}}  {{address.mobile}}</text>
			</view>
			<text>{{address.address + address.address_name}}</text>
		</view>
		<view class="detail">
			<!-- <view class="title">
				<image :src="ImgUrl + goods.image" mode=""></image>
				<text>{{goods.title}}</text>
			</view> -->
			<view class="goods">
				<image :src="ImgUrl + goods.image" mode=""></image>
				<view class="info">
					<text>{{goods.title}}</text>
					<text>{{goods.brand_name}}</text>
					<text>¥{{goods.price}}</text>
					
				</view>
			</view>
			<view class="money">
				<view class="">
					<text>商品总价</text>
					<text>¥{{goods.price}}</text>
				</view>
				<view class="">
					<text>运费</text>
					<text>-¥{{pay.freight_price}}</text>
				</view>
				<view class="">
					<text v-if="status == 3 || status == 4">实收款(已到达您的支付宝/账户余额 <p style="display: inline-block;color: #26B3FF;margin-left:10rpx;">查看</p>)</text>
					<text v-else>实收款</text>
					<text>¥{{pay.total_amount}}</text>
				</view>
			</view>
		</view>
		<view class="msg" v-if="status != 0">
			<text class="title">订单信息</text>
			<view class="item">
				<text>订单编号</text>
				<view class="">
					<text>{{pay.order_no}}</text>
					<text @click="copy(pay.order_no)">复制</text>
				</view>
			</view>
			<view class="item">
				<text>创建时间</text>
				<text>{{pay.createtime_text}}</text>
			</view>
			<view class="item">
				<text>交易编号</text>
				<text>{{pay.pay_no}}</text>
			</view>
		</view>
		<view class="bottom">
			<image src="/static/my/tpoint.png" mode=""></image>
			<view class="" v-if="goodsDetail.state == 2">
				<text @click="go('/pages/HM-chat/HM-chat')">联系买家</text>
				<!-- <text>关闭订单</text> -->
				<text v-if="goodsDetail.type == 'sale'" class="active" @click="go('/pages/my/sell/deliver/deliver?order_id=' + goodsDetail.id)">去发货</text>
			</view>
			<view class="" v-else-if="goodsDetail.state == 3">
				<text @click="go('/pages/HM-chat/HM-chat')">联系买家</text>
				<text class="active" @click="go('/pages/my/sell/logistics/logistics?order_id=' + goodsDetail.id)">查看物流</text>
				<!-- <text class="active" v-if="status == 2">提醒收货</text>
				<text class="active" v-else-if="status == 3">提醒评价</text>
				<text class="active" v-else-if="status == 4">查看评价</text> -->
			</view>
		</view>
	</view>
</template>

<script>
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				status: 1,
				current: 0,
				numList: [{
					name: '已付款'
				}, {
					name: '待发货'
				}, {
					name: '待收货'
				}, {
					name: '交易成功'
				}, {
					name: '已评价'
				}],
				order_id: '',
				address: {},
				goods: {},
				logistics: {},
				pay: {},
				goodsDetail: {}
			};
		},
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
			this.getOrderDetail()
			if(option.status == 1){
				this.current = 1
			}else if(option.status == 2){
				this.current = 2
			}else if(option.status == 3){
				this.current = 3
			}
		},
		methods:{
			getOrderDetail(){
				this.request({
					url: 'idle/order/detail',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.order_id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.address = res.data.data.address
						this.goods = res.data.data.goods
						this.logistics = res.data.data.logistics
						this.pay = res.data.data.pay
						this.goodsDetail = res.data.data
						if(this.goodsDetail.state == 2){
							this.current = 1
						}
					}
				})
			},
			back(){
				uni.navigateBack({
					delta: 1
				})
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
			/deep/ .u-steps__item__line{
				width: 100%;
				left: 50%;
				
				.u-line{
					border: none !important;
					height: 4rpx;
					background-color: #fff;
				}
			}
			/deep/ .u-steps__item__num{
				width: 12rpx;
				height: 12rpx;
				z-index: 9;
				background: #fff !important;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: unset;
				uni-text{
					display: none !important;
				}
				uni-image{
					width: 20rpx !important;
					height: 20rpx !important;
					border-radius: 50%;
					background: #fff;
				}
			}
			/deep/ .u-steps__item__text--row{
				font-size: 22rpx;
			}
			/deep/ .u-steps__item__line--number{
				top: calc((12rpx - 4rpx) / 2);
			}
		}
		.flow,.address{
			padding: 20rpx 30rpx;
			background: #fff;
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
					width: 164rpx;
					height: 164rpx;
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
			justify-content: space-between;
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
