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
		<view class="address marginTop" @click="go('./rate')">
			<view class="">
				<text>服务已完成，感谢您对流象的支持</text>
				<text>**银行已在2021-08-03 19:35:26前将899元入账您的...</text>
			</view>
			<image src="/static/serve/right.png" mode=""></image>
		</view>
		<view class="refundMoney">
			<text>退款总额</text>
			<text>¥899.00</text>
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
				</view>
			</view>
		</view>
		<view class="msg">
			<text class="title">订单信息</text>
			<view class="item">
				<text>订单编号</text>
				<view class="">
					<text>145585852112881399</text>
					<text @click="copy('145585852112881399')">复制</text>
				</view>
			</view>
			<view class="item">
				<text>申请时间</text>
				<text>2021-08-20 10:35:25</text>
			</view>
			<view class="item">
				<text>退款原因</text>
				<text>尺码不合适</text>
			</view>
			<view class="item">
				<text>退款方式</text>
				<text>原支付返还</text>
			</view>
		</view>
		<view class="bottom">
			<image src="/static/my/tpoint.png" mode=""></image>
			<view class="">
				<text>删除记录</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				current: null,
				numList: [{
					name: '提交申请'
				}, {
					name: '售后审核'
				}, {
					name: '退款'
				}, {
					name: '完成'
				}]
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
			
		},
		methods:{
			back(){
				// uni.navigateBack({
				// 	delta: 1
				// })
				uni.navigateTo({
					url: '../refund'
				})
			},
			go(e){
				uni.navigateTo({
					url: e
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
			padding: 30rpx 30rpx;
			background: #fff;
			border-radius: 20rpx 20rpx 0 0;
			border-bottom: 10rpx solid #F6F5FA;
			display: flex;
			justify-content: space-between;
			align-items: center;
			view{
				width: 90%;
				text{
					display: block;
				}
				>:nth-child(1){
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					margin-bottom: 16rpx;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #717181;
					display: block;
				}
			}
			image{
				width: 44rpx;
				height: 44rpx;
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
		.refundMoney{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 32rpx 36rpx;
			border-bottom: 10rpx solid #F6F5FA;
			>:nth-child(1){
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			>:nth-child(2){
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FF4243;
			}
		}
		.detail{
			padding: 20rpx 36rpx 0;
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
