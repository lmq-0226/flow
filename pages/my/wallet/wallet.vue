<template>
	<view class="content">
		<view class="balance">
			<text>我的余额(元)</text>
			<text>{{info.money || 0.00}}</text>
			<text @click="go('./withdrawal/withdrawal')">提现</text>
		</view>
		<view class="have">
			<view class="" @click="go('./discount/discount')">
				<text>{{dynamic.coupon}}</text>
				<text>优惠券(张)</text>
			</view>
			<view class="" @click="go('./gold/gold')">
				<text>{{info.score || 0}}</text>
				<text>积分</text>
			</view>
			<view class="" @click="go('./bankCard/bankCard')">
				<text>{{dynamic.accountbank || 0}}</text>
				<text>银行卡(张)</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banlance: '',
				dynamic: {},
				info: {}
			};
		},
		// 监听点击，明细按钮
		onNavigationBarButtonTap (){
			uni.navigateTo({
				url: './detail/detail'
			})
		},
		onLoad() {
			
		},
		onShow() {
			this.getBalance()
		},
		methods:{
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			getBalance(){
				this.request({
					url: 'wanlshop/user/refresh',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.dynamic = res.data.data.statistics.dynamic
						this.info  =res.data.data.userinfo
					}
				})
				// this.request({
				// 	url: 'wanlshop/pay/getBalance',
				// 	data: {
				// 		token: uni.getStorageSync('userInfo').token
				// 	}
				// }).then(res=>{
				// 	if(res.data.code == 1){
				// 		this.banlance = res.data.data
				// 	}
				// })
			},
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
		>view{
			border-bottom: solid 10rpx #F6F5FA;
		}
		.balance{
			padding: 47rpx 70rpx;
			height: 350rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			>:nth-child(1){
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #686879;
			}
			>:nth-child(2){
				font-size: 60rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #333333;
			}
			>:nth-child(3){
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F35455;
				border-radius: 10rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
		.have{
			display: flex;
			justify-content: space-around;
			align-items: center;
			view{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				padding: 50rpx 0;
				height: 184rpx;
				>:nth-child(1){
					font-size: 40rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
			}
		}
	}
</style>
