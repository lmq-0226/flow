<template>
	<view class="content">
		<view class="top">
			<u-steps :list="numList" :current="status" mode="number" active-color="#fff" un-active-color="#fff" icon="/static/my/true2.png"></u-steps>
		</view>
		<view class="address" v-if="assessInfo.state != 1">
			<view class="area">
				<text>收货地址</text>
				<view class="">
					<image src="/static/my/copy.png" mode=""></image>
					<text>复制</text>
				</view>
			</view>
			<view class="">
				<image src="/static/my/location.png" mode=""></image>
				<text>{{enterAddress.receiver}}  {{enterAddress.photo}}</text>
			</view>
			<text>{{enterAddress.area + enterAddress.address}}</text>
		</view>
		<view :class="['detail',assessInfo.state == 1 ? 'marginTop' : '']">
		<!-- <view class="detail"> -->
			<view class="goods">
				<image :src="ImgUrl + goodsDetail.image" mode=""></image>
				<view class="info">
					<text>{{goodsDetail.content}}</text>
					<text>{{goodsDetail.source + '/' + goodsDetail.state}}</text>
					<text>¥{{goodsDetail.original_price}} / 寄卖价</text>
				</view>
			</view>
			<view class="money" v-if="assessInfo.state != 1">
				<view class="">
					<text>出售价格</text>
					<text>¥{{goodsDetail.original_price}}</text>
				</view>
				<!-- <view class="">
					
				</view> -->
				<view class="" v-if="assessInfo.state != 0">
					<text @click="popupShow = true">总服务费</text>
					<text>¥{{assessInfo.total_fee}}</text>
				</view>
				<view class="" v-if="assessInfo.state != 0">
					<text>预估价格</text>
					<text>¥{{assessInfo.assess_price}}</text>
				</view>
				<!-- <view class="" v-if="assessInfo.state != 0">
					<text>到手价</text>
					<text>¥{{assessInfo.assess_price - assessInfo.total_fee}}</text>
				</view> -->
			</view>
		</view>
		<view class="msg">
			<text class="title">订单信息</text>
			<view class="item">
				<text>寄卖单号</text>
				<view class="">
					<text>{{assessInfo.order_no}}</text>
					<text @click="copy(assessInfo.order_no)">复制</text>
				</view>
			</view>
			<view class="item">
				<text>创建时间</text>
				<text>{{date('YmdHis',assessInfo.createtime*1000)}}</text>
			</view>
			<view class="item" v-if="assessInfo.paymenttime != null">
				<text>支付时间</text>
				<text>{{assessInfo.paymenttime == null ? '' : date('YmdHis',assessInfo.paymenttime*1000)}}</text>
			</view>
		</view>
		<view class="bottom" v-if="assessInfo.state == 1">
			<text>取消估价</text>
		</view>
		<view class="bottom" v-else-if="assessInfo.state == 2">
			<text @click="cancel()">取消寄卖</text>
			<text class="active" @click="sure" v-if="goodsDetail.payInfo == null">确认寄卖</text>
			<text class="active" v-else @click="go('/pages/leave/leaveShop/confirmOrder/pay?type=consign&pay=sell&order_id=' + goodsDetail.payInfo.order_id + '&total_amount=' + goodsDetail.payInfo.total_amount + '&priceList=' + JSON.stringify(priceList))">去支付</text>
		</view>
		<view class="bottom" v-else-if="assessInfo.state == 3">
			<text @click="refund()">申请退款</text>
			<text class="active" @click="go('./shipments/shipments?type=sign&order_id=' + assessInfo.id)">去发货</text>
		</view><view class="bottom" v-else-if="assessInfo.state == 4">
			<view class="">
				<text class="active" @click="go('/pages/my/sell/logistics/logistics?order_id=' + assessInfo.id)">查询物流</text>
			</view>
		</view>
		<view class="bottom" v-else-if="assessInfo.state == 7">
			<view class="">
				<text>已取消</text>
				<text class="active" @click="resubmit">重新提交</text>
			</view>
		</view>
		<u-popup v-model="popupShow" mode="bottom" border-radius="20" @touchmove.native.stop.prevent>
			<view class="popup">
				<view class="title">
					<image src="" mode=""></image>
					<text>总服务费</text>
					<image src="/static/my/close.png" mode="" @click="popupShow = false"></image>
				</view>
				<view class="detailed">
					<view class="item" v-for="(item,index) in priceList" :key="index">
						<view class="left">
							<text>{{index == 0 ? item.text : '-' + item.text}}</text>
							<text v-if="item.type == 1" class="active">活动减免</text>
						</view>
						<view class="right">
							<text v-if="item.op" class="op">{{item.op}}</text>
							<text>{{item.money}}</text>
						</view>
					</view>
					<!-- <view class="bot">
						<text>基础清洁 ¥8.00</text>
						<text>表面重点清理</text>
					</view> -->
				</view>
			</view>
		</u-popup>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				type: 0,
				status: 1,
				numList: [
					{
						name: '待估价'
					}, {
						name: '已估价'
					}, {
						name: '待发货'
					}, {
						name: '寄卖中'
					}, {
						name: '已售出'
					},
				],
				popupShow: false,
				priceList: [],
				order_id: '',
				enterAddress: {}, // 平台地址
				address: {},
				goods: {},
				assessInfo: {},
				goodsDetail: {}
			};
		},
		onBackPress() {
			if(this.type == 0){
				
				return false
			}else{
				uni.navigateTo({
					url: '/pages/my/released/released'
				})
				return true
			}
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
			this.type = option.type
			this.order_id = option.order_id
			this.getEnterAddress()
		},
		onShow() {
			this.getOrderDetail()
		},
		methods:{
			getOrderDetail(){
				this.request({
					url: 'idle/consign/detail',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.order_id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.assessInfo = res.data.data.assessInfo
						this.priceList[0] = {text: '总服务费', money: this.assessInfo.total_fee}
						this.priceList[1] = {text: '清洁费', money: this.assessInfo.cleaning_fee}
						this.priceList[2] = {text: '质检费', money: this.assessInfo.zhijian_fee}
						this.priceList[3] = {text: '包装费', money: this.assessInfo.packing_fee}
						this.priceList[4] = {text: '鉴别费', money: this.assessInfo.identify_fee}
						this.priceList[5] = {text: '信息费', money: this.assessInfo.information_fee}
						this.priceList[6] = {text: '摄影费', money: this.assessInfo.photo_fee}
						this.priceList[7] = {text: '服务费', money: this.assessInfo.service_fee}
						this.priceList[8] = {text: '其他费用', money: this.assessInfo.other_fee}
						this.goodsDetail = res.data.data
						if(this.assessInfo.state == 1){
							this.status = 0
						}else if(this.assessInfo.state == 2){
							this.status = 1
						}else if(this.assessInfo.state == 3){
							this.status = 2
						}else if(this.assessInfo.state == 4){
							this.status = 3
						}
					}
				})
			},
			// 取消寄卖
			cancel(){
				this.request({
					url: 'idle/consign/cancel',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.assessInfo.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: res.data.msg,
							type: 'success',
							callback: ()=>{
								if(res.data.data == null){
									uni.navigateBack({
										delta: 1
									})
									return
								}
								this.request({
									url: res.data.data.buttons.url,
									data: {
										token: uni.getStorageSync('userInfo').token,
										id: res.data.data.buttons.id
									}
								}).then(res=>{
									if(res.data.code == 1){
										this.$refs.uToast.show({
											title: '已为您申请退款',
											type: 'success',
											callback: ()=>{
												uni.navigateBack({
													delta: 1
												})
											}
										})
									}
								})
							}
						})
					}
				})
			},
			// 申请退款
			refund(){
				this.request({
					url: 'idle/consign/apply_refund',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.assessInfo.id,
						refund_content: ''
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.navigateBack({
							delta: 1
						})
						this.$refs.uToast.show({
							title: '已为您申请退款！',
							type: 'success',
						})
					}
				})
			},
			// 重新提交寄卖
			resubmit(){
				this.request({
					url: 'idle/consign/consign',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.goodsDetail.id,
						address_id: this.assessInfo.address_id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: res.data.msg,
							type: 'success',
						})
						this.getOrderDetail()
					}
				})
			},
			// 确认寄卖
			sure(){
				this.request({
					url: 'idle/consign/consign',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.goodsDetail.id,
						address_id: this.assessInfo.address_id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.go('/pages/leave/leaveShop/confirmOrder/pay?type=consign&pay=sell&order_id=' + res.data.data.pay_info.order_id + '&total_amount=' + res.data.data.pay_info.total_amount)
					}
				})
			},
			getEnterAddress(){
				this.request({
					url: 'idle/consign/platform_address',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.enterAddress = res.data.data
					}
				})
			},
			back(){
				uni.navigateTo({
					url: '../buy'
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
		.address{
			padding: 20rpx 30rpx;
			margin-top: -30rpx;
			background: #fff;
			border-radius: 20rpx 20rpx 0 0;
			border-bottom: 10rpx solid #F6F5FA;
			>view{
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
			.area{
				display: flex;
				justify-content: space-between;
				align-items: center;
				>text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				view{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					image{
						width: 44rpx;
						height: 44rpx;
					}
					text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
			}
		}
		.marginTop{
			margin-top: -30rpx;
			background: #fff;
			border-radius: 20rpx 20rpx 0 0;
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
					>:nth-child(1){
						padding-right: 40rpx;
						background: url(@/static/leave/qmark.png) no-repeat right center;
						background-size: 30rpx;
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
		.popup{
			.title{
				padding: 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
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
			.detailed{
				padding: 35rpx 40rpx;
				.item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 10rpx 0;
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #6A6A79;
					}
					.left{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						.active{
							font-size: 18rpx;
							color: #FF4243;
							padding: 3rpx 6rpx;
							border: 1px solid #FF4243;
							border-radius: 2rpx;
							margin-left: 7rpx;
						}
					}
					.right{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						.op{
							margin-right: 7rpx;
							text-decoration: line-through;
						}
					}
				}
				>:nth-child(1){
					.left{
						text{
							font-size: 26rpx !important;
							font-family: PingFang SC;
							font-weight: 500;
							color: #6A6A79;
						}
						
					}
					.right{
						text{
							font-size: 24rpx !important;
							font-family: PingFang SC;
							font-weight: 500;
							color: #6A6A79;
						}	
					}
				}
				.bot{
					width: 100%;
					height: 115rpx;
					background: url(@/static/leave/servicebg.png) no-repeat;
					background-size: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30rpx;
					>:nth-child(1){
						font-size: 30rpx;
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
			}
		}
	}
</style>
