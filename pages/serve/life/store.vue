<template>
	<view class="content">
		<view class="store">
			<u-swiper :list="swiperList" height="350"></u-swiper>
			<view class="name">
				<text>衣服修理店</text>
				<text>人均8~35元</text>
			</view>
			<view class="time">
				<text>营业时间: 09:00-21:00</text>
			</view>
			<view class="address">
				<text>店铺地址: 相城区高铁新城南天成路77号高融大厦一层</text>
				<view class="btns">
					<view class="map">
						<image src="/static/serve/location.png" mode=""></image>
						<text>地图</text>
					</view>
					<view class="tell" @click="call()">
						<image src="/static/serve/call.png" mode=""></image>
						<text>电话</text>
					</view>
				</view>
			</view>
		</view>
		<view class="serve">
			<view class="title">
				<text>服务</text>
				<text class="line"></text>
			</view>
			<view class="pro">
				<view class="" v-for="(item,index) in 7" :key="index">
					<text>修拉链</text>
					<text>¥9.9</text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<text @click="call()">电话咨询</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
			};
		},
		methods:{
			call(e){
				uni.makePhoneCall({
				    phoneNumber: '10086' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding-bottom: 100rpx;
		.store{
			padding: 0 30rpx;
			border-bottom: solid 20rpx #F1F1F6;
			.name{
				padding: 20rpx 0;
				border-bottom: solid 1px #F1F1F6;
				text{
					display: block;
				}
				>:nth-child(1){
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #F55454;
					margin-top: 10rpx;
				}
			}
			.time{
				padding: 28rpx 0;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				border-bottom: solid 1px #F1F1F6;
			}
			.address{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 24rpx 0;
				>text{
					display: inline-block;
					width: 442rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				.btns{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					view{
						text-align: center;
						image{
							width: 44rpx;
							height: 44rpx;
						}
						text{
							display: block;
							font-size: 18rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9392A0;
						}
					}
					.map{
						margin-right: 75rpx;
					}
				}
			}
		}
		.serve{
			padding: 35rpx 0;
			.title{
				text-align: center;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				.line{
					display: block;
					margin: -10rpx auto;
					width: 72rpx;
					height: 12rpx;
					background: linear-gradient(90deg, #FC493D 0%, #FFFFFF 100%);
				}
			}
			.pro{
				width: 550rpx;
				background: #F6F5FA;
				border-radius: 10rpx;
				margin: 20rpx auto;
				padding: 10rpx 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				view{
					width: 45%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx 0;
					text{
						font-size: 24rpx;
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
			width: 100%;
			height: 98rpx;
			padding: 12rpx 30rpx;
			border-top: solid 1px #f2f2f2;
			background: #fff;
			z-index: 999;
			text{
				display: block;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F35455;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
</style>
