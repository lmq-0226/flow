<template>
	<view class="content">
		<view class="ip">
			<u-input v-model="number" placeholder="请输入快递单号" type="number" @input="watchNum"/>
			<image src="/static/my/scan.png" mode="" @click="scan()"></image>
		</view>
		<view class="item" v-if="number.length >= 3">
			<image src="" mode=""></image>
			<view class="">
				<text>已揽收</text>
				<text>中通快递：2020-10-15 15:25揽收，当前高铁新城快递员正在派件</text>	
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number: ''
			};
		},
		onLoad() {
			
		},
		methods:{
			watchNum(e){
				console.log(e)
			},
			scan(){
				// 允许从相机和相册扫码
				uni.scanCode({
					scanType: ['barCode','qrCode','datamatrix','pdf417'],
				    success: res=>{
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
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
		padding: 30rpx;
		.ip{
			height: 100rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 26rpx;
			image{
				width: 44rpx;
				height: 44rpx;
				padding-left: 26rpx;
				border-left: solid 1px #F1F4F9;
				margin-left: 26rpx;
			}
		}
		.item{
			background: #fff;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 20rpx;
			margin-top: 20rpx;
			border-radius: 10rpx;
			image{
				width: 110rpx;
				height: 110rpx;
				min-width: 110rpx;
				margin-right: 21rpx;
				background: #ccc;
				border-radius: 10rpx;
			}
			view{
				height: 110rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
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
					color: #717181;
				}
			}
		}
	}
</style>
