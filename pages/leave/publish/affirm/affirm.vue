<template>
	<view class="content">
		<view class="top">
			<view class="info">
				<image src="" mode=""></image>
				<view class="">
					<text>GUCCI项链 饰品</text>
					<text>专柜 全新</text>
					<text>¥1500 / 寄卖价</text>
				</view>
			</view>
			<view class="clean">
				<view class="basics" @click="active = true">
					<text :class="{'active' : active}">基础清洁 ¥8.00</text>
					<view class="">
						<text>表面重点清理</text>
						<image v-if="active" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
				</view>
				<view class="expor">
					<!-- <view class="">
						<image src="/static/leave/expor.png" mode=""></image>
						<text>专区展示曝光</text>
					</view>
					<view class="">
						<text>查看效果</text>
						<image src="/static/my/right.png" mode=""></image>
					</view> -->
				</view>
				<view class="basics" @click="active = false">
					<text :class="{'active' : !active}">深层洗护 ¥29.90</text>
					<view class="">
						<text>全面清洁养护</text>
						<image v-if="!active" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
				</view>
				<view class="expor"></view>
				
				<view class="all">
					<view class="left" @click="popupShow = true">
						<text>总服务费</text>
						<u-icon name="info-circle"></u-icon>
					</view>
					<text>¥60.00</text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<text @click="go('/pages/shop/goodsDetail/confirmOrder/pay?type=' + type)">提交</text>
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
	export default {
		data() {
			return {
				type: 1,
				active: true,
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
				],
			};
		},
		onLoad(option) {
			this.type = option.type
		},
		methods:{
			go(e){
				uni.navigateTo({
					url: e
				})
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
		.top{
			padding: 20rpx ;
			.info{
				padding: 20rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 164rpx;
					height: 164rpx;
					border-radius: 10rpx;
					margin-right: 20rpx;
					background: #C0C0C0;
				}
				view{
					height: 164rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					>:nth-child(1){
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #6A6A79;
					}
					>:nth-child(3){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
			.clean{
				padding: 30rpx;
				border-radius: 10rpx;
				background: #fff;
				margin-top: 20rpx;
				.basics{
					display: flex;
					justify-content: space-between;
					align-items: center;
					>text{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #9094A6;
					}
					.active{
						color: #000000;
					}
					view{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text{
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9094A6;
						}
						image{
							margin-left: 10rpx;
							width: 35rpx;
							height: 35rpx;
						}
					}
				}
				.expor{
					padding: 10rpx 5rpx;
					background: #F6F8FC;
					border-radius: 6rpx;
					margin: 25rpx 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
					>:nth-child(1){
						display: flex;
						justify-content: flex-start;
						align-items: center;
						text{
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
					}
					>:nth-child(2){
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text{
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
					}
				}
			
				.all{
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						
						text{
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
							margin-right: 10rpx;
						}
					}
					>text{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
			}
		}
		.bottom{
			width: 100%;
			height: 98rpx;
			position: fixed;
			bottom: 0;
			border-top: solid 1px #f2f2f2;
			background: #fff;
			padding: 12rpx 30rpx;
			text{
				display: inline-flex;
				width: 100%;
				height: 100%;
				background: #F55454;
				border-radius: 6rpx;
				color: #fff;
				justify-content: center;
				align-items: center;
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
