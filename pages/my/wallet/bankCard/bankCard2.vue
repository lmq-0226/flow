<template>
	<view class="content">
		<view class="cardList">
			<view class="item" v-for="(item,index) in bankCardList" :key="index" @click="go('./bankCardDetail?detail=' + JSON.stringify(item))">
				<view class="type">
					<image :src="'/static/bank/' + item.bankCode +'.png'" mode=""></image>
					<text>{{item.bankName}}</text>
					<text></text>
					<text>{{item.cardType == 0 ? '储蓄卡' : ''}}</text>
				</view>
				<view class="number">
					<text>**** **** **** {{item.cardCode.slice(item.cardCode.length - 4)}}</text>
				</view>
			</view>
		</view>
		<u-empty v-if="bankCardList.length <= 0" text="暂无数据" mode="list"></u-empty>
		<view class="add" @click="go('./addCard')">
			<image src="/static/my/add2.png" mode=""></image>
			<text>添加银行卡</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankCardList: []
			};
		},
		onLoad() {
			console.log(1)
			
		},
		onShow() {
			console.log(2)
			this.getBankCard()
			
		},
		methods:{
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			getBankCard(){
				this.request({
					url: 'wanlshop/pay/getPayAccount',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.bankCardList = res.data.data
						this.bankCardList.forEach(elem=>{
							uni.getImageInfo({
								src: '/static/bank/' + elem.bankCode +'.png',
								success: res => {
									console.log(res)
								}
							});
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 20rpx 40rpx;
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.cardList{
			.item{
				width: 100%;
				height: 170rpx;
				padding: 30rpx;
				margin-bottom: 20rpx;
				background: #5468FF;
				border-radius: 10px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.type{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 50rpx;
						height: 50rpx;
						background: #fff;
						padding: 10rpx;
						border-radius: 50%;
					}
					text{
						margin-left: 15rpx;
					}
					>:nth-child(2){
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
					>:nth-child(3){
						display: inline-block;
						width: 1rpx;
						height: 20rpx;
						background: #FFFFFF;
					}
					>:nth-child(4){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
					}
				}
				.number{
					width: 100%;
					text-align: center;
					text{
						font-size: 38rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
				}
			}
		}
		.add{
			width: 100%;
			height: 90rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #F35455;
			border-radius: 45rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #F35455;
			background: #fff;
			image{
				width: 44rpx;
				height: 44rpx;
			}
		}
	}
</style>
