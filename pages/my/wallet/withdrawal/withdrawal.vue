<template>
	<view class="content">
		<view class="">
			<view class="top">
				<text class="title">提现到</text>
				<view class="" @click="go('../bankCard/bankCard?type=select')">
					<image :src="`/static/images/bank/${bank.bankCode}.png`"></image>
					<!-- <image src="/static/my/card.png" mode=""></image> -->
					<text>{{bank.bankName}}({{getCode(bank.cardCode)}})</text>
				</view>
			</view>
			<view class="money">
				<text class="title">提现金额(费率0.{{servicefee}}%)</text>
				<view class="ip">
					<text>¥</text>
					<u-input v-model="money" type="number" placeholder="请输入提现金额" :custom-style="customStyle" :placeholder-style="placeholderStyle"></u-input>
				</view>
				<view class="hint">
					<text>可提现 ¥{{total}}</text>
					<text>服务费¥{{totalfee}}</text>
				</view>
			</view>
		</view>
		<view class="bottom" @click="deposit">
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
				money: '', // 提现金额
				total: 0, // 余额
				servicefee: 0, // 服务费
				bank: {} // 银行卡信息
			};
		},
		onLoad(option) {
			this.getData()
		},
		onShow() {
			
		},
		methods:{
			deposit(){
				this.request({
					url: 'wanlshop/pay/withdraw',
					header: {
						"token": uni.getStorageSync('userInfo').token
					},
					data: {
						account_id: this.bank.id,
						money: this.money
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.getData()
						this.money = ''
						uni.showToast({
							title: "提现申请发起成功",
							icon: 'none'
						})
					}
				})
			},
			getData(){
				this.request({
					url: 'wanlshop/pay/initialWithdraw',
					header: {
						"token": uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.total = res.data.data.money
						this.servicefee = res.data.data.servicefee
						this.bank = res.data.data.bank
					}
				})
			},
			// 获取尾号
			getCode(e){
				e = e.replace(/\s+/g,"");
				return e.substring(e.length-4);
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		},
		computed:{
			totalfee(){
				let num = 0
				num = (this.money * this.servicefee / 1000).toFixed(2)
				return num
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
