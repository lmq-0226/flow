<template>
	<view class="content">
		<view class="middle">
			<view class="price">
				<view class="">
					<text>所需积分: </text>
					<text>￥</text>
					<text>{{detail.scoreprice}}</text>
				</view>
			</view>
			<view class="desc">
				<text>{{detail.name}}</text>
			</view>
			<view class="brief">
				<view class="">
					<text>原价</text>
					<text>￥{{detail.money}}</text>
				</view>
				<view class="">
					<text>库存</text>
					<text>{{detail.stock}}</text>
				</view>
				<view class="">
					<text>已兑换</text>
					<text>{{detail.usenum}}</text>
				</view>
				<view class="">
					<text>限购</text>
					<text>{{detail.max_buy_number == -1 ? '不限量' : detail.max_buy_number}}</text>
				</view>
			</view>
			<view class="detail">
				<image :src="ImgUrl + detail.thumb" mode="widthFix" @click="pvew(index,goodsDetail.cdn_images)"></image>
				<!-- <text>{{goodsDetail.like_nums}}人想要·浏览{{goodsDetail.view_nums}}</text> -->
			</view>
		</view>
		<view class="bottom">
			<text @click="convert">我想要</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				idlebrand: {},
				goodsDetail:{},
				detail: {}
			};
		},
		onReady() {
			
		},
		onLoad(option) {
			this.id = option.id
			this.getData()
		},
		onShow() {
			
		},
		methods:{
			// 积分商品详情
			getData(e){
				this.request({
					url: 'integral/goods/details',
					data: {
						token: uni.getStorageSync('userInfo').token,
						gid: this.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.detail = res.data.data
					}
				})
			},
			convert(){
				if(!uni.getStorageSync('userInfo').token){
					uni.showToast({
						title: '请登录',
						icon: 'none'
					})
					return
				}
				this.request({
					url: 'integral/order/buy_check',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.id,
						number: 1
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.go('../confirmOrder/confirmOrder?goods_id=' + this.id)
					}
				})
			},
			// 预览图片
			pvew(e,n){
				uni.previewImage({
					current: e,
					urls: n
				})
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
		.nav{
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 18rpx;
			position: sticky;
			top: var(--status-bar-height);
			background: #fff;
			z-index: 999;
			border-bottom: solid 1px #f8f8f8;
			.left{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				>:nth-child(1){
					width: 44rpx;
					height: 44rpx;
				}
				>:nth-child(2){
					width: 58rpx;
					height: 58rpx;
					background: #F6F5FA;
					border-radius: 50%;
					margin: 0 11rpx 0 18rpx;
				}
				view{
					height: 58rpx;
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
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9392A0;
					}
				}
			}
			.right{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				.atten,.attened{
					display: inline-block;
					width: 102rpx;
					height: 48rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 1px solid #FC493D;
					border-radius: 24rpx;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FC493D;
				}
				.attened{
					color: #686879;
					border: 1px solid #686879;
				}
				>:nth-child(2){
					margin: 0 19rpx 0 24rpx;
				}
			}
		}
		
		
		.middle{
			padding: 20rpx;
			.price{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-top: 20rpx;
				view{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FF4243;
					>:nth-child(1){
						color: #000000;
						font-size: 30rpx;
						margin-right: 10rpx;
					}
					>:nth-child(3){
						font-size: 40rpx;
					}
				}
				>:nth-child(2),>:nth-child(3){
					margin-left: 14rpx;
					// width: 50rpx;
					// height: 28rpx;
					padding: 2rpx 6rpx;
					display: inline-flex;
					justify-content: center;
					align-items: center;
					background: #FF4243;
					border-radius: 6rpx;
					font-size: 18rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
			.desc{
				text{
					display: block;
				}
				>:nth-child(1){
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					padding: 28rpx 0;
				}
				>:nth-child(2){
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
			}
			.brief{
				margin-top: 30rpx;
				view{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 16rpx 0;
					>:nth-child(1){
						min-width: 89rpx;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #1D1D20;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #686879;
					}
				}
			}
			.detail{
				margin-top: 30rpx;
				image{
					width: 100%;
					margin-bottom: 10rpx;
					border-radius: 10rpx;
					background: #F0F3F8;
				}
				text{
					width: 100%;
					display: inline-flex;
					justify-content: flex-end;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9094A6;
				}
			}
		}
		
		.bottom{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 98rpx;
			padding: 0 30rpx;
			background: #fff;
			z-index: 999;
			border-top: solid 1px #f2f2f2;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			text{
				padding: 15rpx 40rpx;
				border-radius: 10rpx;
				color: #fff;
				background: #FF4243;
			}
		}
		
	}
</style>
