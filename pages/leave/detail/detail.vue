<template>
	<view class="content">
		<view class="top">
			<u-steps :list="numList" :current="status" mode="number" active-color="#fff" un-active-color="#fff" icon="/static/my/true2.png"></u-steps>
		</view>
		<view class="address" v-if="status != 0">
			<view class="area">
				<text>收货地址</text>
				<view class="">
					<image src="/static/my/copy.png" mode=""></image>
					<text>复制</text>
				</view>
			</view>
			<view class="">
				<image src="/static/my/location.png" mode=""></image>
				<text>流象鉴定部  166****1554</text>
			</view>
			<text>江苏省苏州市相城区南天城路77号高铁新城高融大厦快递快递柜</text>
		</view>
		<view :class="['detail',status == 0 ? 'marginTop' : '']">
		<!-- <view class="detail"> -->
			<view class="goods">
				<image src="/static/pub/bbt.png" mode=""></image>
				<view class="info">
					<text>居居侠 超级无敌棒棒糖</text>
					<text>白色 特大号 数量x1</text>
					<text>¥1500 / 寄卖价</text>
				</view>
			</view>
			<view class="money">
				<view class="">
					<text>出售价格</text>
					<text>¥1999</text>
				</view>
				<view class="" v-if="status != 0">
					<text>预估价格</text>
					<text>¥1500</text>
				</view>
				<view class="" v-if="status != 0">
					<text @click="popupShow = true">总服务费</text>
					<text>¥60.00</text>
				</view>
				<view class="" v-if="status != 0">
					<text>到手价</text>
					<text>¥1440</text>
				</view>
			</view>
		</view>
		<view class="msg">
			<text class="title">订单信息</text>
			<view class="item">
				<text>寄卖单号</text>
				<view class="">
					<text>145585852112881399</text>
					<text @click="copy('145585852112881399')">复制</text>
				</view>
			</view>
			<view class="item">
				<text>创建时间</text>
				<text>2021-08-20 10:35:25</text>
			</view>
			<view class="item" v-if="status > 1">
				<text>支付时间</text>
				<text>2021-08-20 10:35:25</text>
			</view>
		</view>
		<view class="bottom" v-if="status == 0">
			<text>取消估价</text>
		</view>
		<view class="bottom" v-else>
			<view class="">
				<text @click="go('/pages/public/callCenter')">联系客服</text>
				<text>取消寄卖</text>
				<text v-if="status == 1" class="active" @click="go('/pages/leave/publish/affirm/affirm?type=' + type)">确认寄卖</text>
				<text v-else class="active" @click="go('./shipments/shipments')">去发货</text>
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
					<view class="bot">
						<text>基础清洁 ¥8.00</text>
						<text>表面重点清理</text>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				type: '',
				status: 1,
				numList: [
					{
						name: '估价中'
					}, {
						name: '已估价'
					}, {
						name: '已寄出'
					}, {
						name: '寄卖中'
					}, {
						name: '已售出'
					},
				],
				popupShow: false,
				priceList: [
					{text: '总服务费', money: '¥59.99'},
					{text: '银行转行费', money: '¥20.00'},
					{text: '质检费', money: '¥20.00'},
					{text: '包装费', money: '¥5.00'},
					{text: '鉴别费', money: '¥5.00'},
					{text: '信息收录费',type: 1,op:'¥20.00', money: '¥0.00'},
					{text: '专业摄影费',type: 1,op:'¥20.00', money: '¥0.00'},
					{text: '技术服务费',type: 1,op:'¥20.00', money: '¥0.00'},
					{text: '服务清理费', money: '¥8.00'}
				]
			};
		},
		onBackPress() {
			// if(this.type == 0){
			// 	return false
			// }else{
				
				uni.navigateTo({
					url: '/pages/my/sell/sell'
				})
				return true
			// }
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
		},
		methods:{
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
					>:nth-child(1){
						padding-right: 45rpx;
						background: url(../../../static/leave/qmark.png) no-repeat right center;
						background-size: 50rpx;
					}
				}
				>:nth-child(4){
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
					background: url(../../../static/leave/servicebg.png) no-repeat;
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
