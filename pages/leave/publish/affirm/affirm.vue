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
					<view class="">
						<image src="/static/leave/expor.png" mode=""></image>
						<text>专区展示曝光</text>
					</view>
					<view class="">
						<text>查看效果</text>
						<image src="/static/my/right.png" mode=""></image>
					</view>
				</view>
				<view class="basics" @click="active = false">
					<text :class="{'active' : !active}">深层洗护 ¥29.90</text>
					<view class="">
						<text>全面清洁养护</text>
						<image v-if="!active" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<text @click="go('/pages/shop/goodsDetail/confirmOrder/pay?type=' + type)">提交</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1,
				active: true
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
	}
</style>
