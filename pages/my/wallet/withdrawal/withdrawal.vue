<template>
	<view class="content">
		<view class="">
			<view class="top">
				<text class="title">提现到</text>
				<view class="" @click="go('../bankCard/bankCard')">
					<image src="/static/my/card.png" mode=""></image>
					<text>中国建设银行储蓄卡(5427)</text>
				</view>
			</view>
			<view class="money">
				<text class="title">提现金额</text>
				<view class="ip">
					<text>¥</text>
					<u-input v-model="money" type="number" placeholder="请输入提现金额" :custom-style="customStyle" :placeholder-style="placeholderStyle"></u-input>
				</view>
				<view class="hint">
					<text>可提现 ¥1000</text>
					<text>每日提现上限¥50000.00</text>
				</view>
			</view>
		</view>
		<view class="bottom">
			提现
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					fontSize: '48rpx',
					fontWeight: 'bold',
					letterSpacing: "5rpx"
				},
				placeholderStyle: "fontSize: 36rpx",
				money: ''
			};
		},
		onLoad() {
			
		},
		onShow() {
			
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
		padding: 20rpx;
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.top{
			padding: 20rpx 27rpx 0;
			.title{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			view{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 30rpx 0;
				background: url(../../../../static/serve/right.png) no-repeat right center;
				background-size: 44rpx;
				image{
					width: 46rpx;
					height: 46rpx;
					border-radius: 50%;
					margin-right: 13rpx;
				}
				text{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #010101;
				}
			}
		}
		.money{
			width: 100%;
			padding: 33rpx 27rpx;
			background: rgba(255, 255, 255, 0.99);
			border-radius: 10rpx;
			.title{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #00001D;
			}
			.ip{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 39rpx 0;
				border-bottom: solid 1px #F1F4F9;
				text{
					font-size: 36rpx;
					font-weight: bold;
					color: #000000;
					margin-right: 10rpx;
				}
			}
			.hint{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 24rpx 0 0;
				text{
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #9F9FB4;
				}
			}
		}
		.bottom{
			margin-bottom: 50rpx;
			height: 74rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #F35455;
			border-radius: 6px;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
		}
	}
</style>
