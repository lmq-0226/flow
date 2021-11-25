<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="nav">
			<view class="" @click="back">
				<image src="/static/my/back.png" mode=""></image>
			</view>
			<view class="">
				<image src="/static/my/service2.png" mode=""></image>
			</view>
		</view>
		<view class="top">
			<view class="status" v-if="status == 0">
				<text>交易关闭</text>
				<text>订单取消成功，期待您再次选择。</text>
			</view>
			<view class="status" v-else-if="status == 1">
				<text>待收货</text>
				<text>已发货，请您耐心等待。</text>
			</view>
			<view class="status" v-else-if="status == 2">
				<text>待发货</text>
				<text>订单已付款，仓库会尽快安排发货。</text>
			</view>
			<view class="status" v-else-if="status == 3">
				<view class="">
					<text>退货中</text>
					<u-count-down 
						:timestamp="983272" 
						:show-days="true" 
						:show-hours="true" 
						separator="zh"
						color="#fff"
						separator-color="#fff"
						bg-color="none"
					></u-count-down>
				</view>
				<view class="">
					<text>退货申请成功，请及时填写退货运单号</text>
					<text>退货倒计时</text>
				</view>
			</view>
		</view>
		<view v-if="status == 1" :class="['flow', status == 1 ? 'marginTop' : '']">
			<view class="">
				<image src="/static/my/car.png" mode=""></image>
				<text>派送中</text>
			</view>
			<text>高铁新城某某正在派件(95720为中通快递员外呼专属号码，请...</text>
			<text class="time">2021-10-15 15:25:24</text>
		</view>
		<view v-else-if="status == 3" :class="['flow', status == 3 ? 'marginTop' : '']">
			<view class="">
				<image src="/static/my/car.png" mode=""></image>
				<text>买家已收货</text>
			</view>
			<text class="time">2021-10-15 15:25:24</text>
		</view>
		<view :class="['address', status == 2 ? 'marginTop' : '']">
			<view class="">
				<image src="/static/my/location.png" mode=""></image>
				<text>王小明  166****1554</text>
			</view>
			<text>江苏省苏州市相城区南天城路77号高铁新城高融大厦快递快递柜</text>
		</view>
		<view class="detail">
			<view class="title">
				<image src="/static/avatar3.png" mode=""></image>
				<text>EVISU官方旗舰店</text>
			</view>
			<view class="goods">
				<image src="/static/pub/bql.png" mode=""></image>
				<view class="info">
					<text>EVISU 老虎达摩拼图印花T恤 男款</text>
					<text>白色 XXL 数量x1</text>
					<text>¥899</text>
					<view class="safe">
						<text>假一赔三</text>
						<text>防伪包装</text>
						<text>7天无理由退货</text>
					</view>
				</view>
			</view>
			<view class="money">
				<view class="">
					<text>运费</text>
					<text>¥10.00</text>
				</view>
				<view class="">
					<text>优惠劵</text>
					<text>-¥25.00</text>
				</view>
				<view class="">
					<text>合计支付</text>
					<text>¥899.00</text>
				</view>
			</view>
		</view>
		<view class="msg" v-if="status != 0">
			<text class="title">订单信息</text>
			<view class="item">
				<text>订单编号</text>
				<view class="">
					<text>145585852112881399</text>
					<text @click="copy('145585852112881399')">复制</text>
				</view>
			</view>
			<view class="item">
				<text>创建时间</text>
				<text>2021-08-20 10:35:25</text>
			</view>
			<view class="item">
				<text>交易编号</text>
				<text>2120549565926232</text>
			</view>
		</view>
		<view class="bottom">
			<image src="/static/my/tpoint.png" mode=""></image>
			<view class="" v-if="status == 1">
				<text>申请售后</text>
				<text>查看物流</text>
				<text class="active">确认收货</text>
			</view>
			<view class="" v-else-if="status == 2">
				<text>申请退款</text>
			</view>
			<view class="" v-else-if="status == 3">
				<text>取消退款</text>
				<text class="active">填写货运单号</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				status: 3
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
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			copy(e){
				setText(e)
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
					margin-bottom: 19rpx;
				}
				>:nth-child(2){
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
