<template>
	<view class="content">
		<view class="top">
			<text>流象证书查询</text>
			<text>输入证书编号即可查询</text>
		</view>
		<view class="scan">
			<text>扫码查询</text>
			<text>扫描鉴定卡或鉴定师证书，可查询结果</text>
			<text @click="scanCode">立即查询</text>
		</view>
		<view class="search">
			<view class="">
				<image src="/static/shop/search.png" mode=""></image>
				<u-input v-model="cert_no" place-holder="输入证书编号"></u-input>
				<text @click="query">查询</text>
			</view>
		</view>
		<view class="query">
			<text class="title">可查询内容: </text>
			<view class="">
				<view class="">
					<text>01.鉴定证书</text>
					<text>查询在线/实物鉴定报告，可追溯鉴定结果</text>
				</view>
				<image src="/static/serve/1.jpg" mode=""></image>
			</view>
			<view class="">
				<view class="">
					<text>02.鉴定师证书</text>
					<text>国字头鉴定师能力认证证书，可查询真伪</text>
				</view>
				<image src="/static/serve/2.jpg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cert_no: ''
			};
		},
		methods:{
			scanCode(){
				uni.scanCode({
				    success:(res)=>{
						uni.showToast({
							title: '证书为真'
						})
				    }
				});
			},
			query(){
				this.request({
					url: 'service/index/query_cert',
					data: {
						token: uni.getStorageSync('userInfo').token,
						cert_no: this.cert_no
					}
				}).then(res=>{
					if(res.data.code == 1){
						if(res.data.data != null){
							uni.showToast({
								title: '证书为真',
								icon: 'none'
							})
						}else{
							uni.showToast({
								title: '找不到证书信息',
								icon: 'none'
							})
						}
					}
				})
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
		.top{
			width: 100%;
			height: 266rpx;
			background: url(../../../../static/serve/cert_top_bg.png) no-repeat;
			background-size: 102.5%;
			padding-left: 48rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text{
				display: block;
			}
			>:nth-child(1){
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				margin-bottom: 19rpx;
			}
			>:nth-child(2){
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #000000;
			}
		}
		.scan{
			width: 690rpx;
			height: 340rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			margin: -30rpx auto;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			padding: 30rpx 0;
			>:nth-child(1){
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			>:nth-child(2){
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #686879;
			}
			>:nth-child(3){
				width: 420rpx;
				height: 78rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F55555;
				border-radius: 10rpx;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
		.search{
			width: 690rpx;
			background: #fff;
			border-radius: 20rpx;
			margin: 50rpx auto;
			padding: 40rpx 32rpx;
			>view{
				width: 100%;
				height: 70rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 2rpx solid #F55555;
				border-radius: 10rpx;
				padding: 0 20rpx;
				image{
					width: 44rpx;
					height: 44rpx;
					margin-right: 10rpx;
				}
				>:nth-child(3){
					border-left: solid 2px #F55555;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #F55555;
					padding-left: 25rpx;
					margin-left: 10rpx;
				}
			}
			
		}
		.query{
			padding: 0 30rpx;
			.title{
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #686879;
			}
			>view{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;
				view{
					text{
						display: block;
					}
					>:nth-child(1){
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #333333;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
						margin-top: 10rpx;
					}
				}
				image{
					width: 126rpx;
					height: 96rpx;
					background: #D4D4DF;
					border-radius: 6rpx;
				}
			}
		}
	}
</style>
