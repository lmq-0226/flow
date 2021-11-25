<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="nav">
			<view class="left">
				<image src="/static/comm/back.png" mode="" @click="back"></image>
				<image src="/static/comm/avatar.png" mode=""></image>
				<view class="">
					<text>珂珂</text>
					<text>9月21日·苏州市</text>
				</view>
			</view>
			<view class="right">
				<text>关注</text>
				<image src="/static/comm/more.png" mode=""></image>
			</view>
		</view>
		<view class="">
			<text>咨询详情</text>
		</view>
		<view class="bottom">
			<u-input placeholder="来说两句..." :custom-style="customStyle" confirm-type="send" @confirm="send"/>
			<view class="right">
				<view class="">
					<image src="/static/comm/praise2.png" mode=""></image>
					<text>111</text>
				</view>
				<view class="">
					<image src="/static/comm/collect.png" mode=""></image>
					<text></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					background: '#F6F5FA',
					width: '60%',
					borderRadius: '30rpx',
					padding: '0 25rpx'
				},
			};
		},
		onLoad() {
			
		},
		methods:{
			// 点击键盘右下角发送按钮
			send(e){
				console.log(e, '11111')
			},
			back(){
				uni.navigateBack({
					delta: 1
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
				>:nth-child(1){
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
					margin-right: 23rpx;
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
			justify-content: space-between;
			align-items: center;
			.right{
				width: 35%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				view{
					width: 38%;
					height: 48rpx;
					position: relative;
					image{
						width: 48rpx;
						height: 48rpx;
					}
					text{
						position: absolute;
						top: 0;
						left: 48rpx;
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
		}
	}
</style>
