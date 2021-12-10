<template>
	<view class="content">
		<view class="null"></view>
		<view class="report">
			<view class="inside">
				<view class="logo">
					<image src="" mode=""></image>
					<text>流象APP鉴定报告</text>
				</view>
				<view class="result">
					<text>鉴别为真</text>
					<text>鉴定结果根据用户所提供图片得出</text>
					<image v-if="status == 1" src="/static/my/true.png" mode=""></image>
					<image v-else-if="status == 0" src="/static/my/fake.png" mode=""></image>
				</view>
				<view class="er">
					<image src="" mode=""></image>
					<text>鉴定师:celia张</text>
				</view>
			</view>
		</view>
		<u-gap height="14" bg-color="#F7F7FB" margin-top="36"></u-gap>
		<view class="detail">
			<view class="">
				<text>LANVIN(浪凡)  服装</text>
				<text>2020-10-25 13:25鉴定</text>
			</view>
			<image src="" mode="widthFix" v-for="(item,index) in 2" :key="index"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 1
			};
		},
		onNavigationBarButtonTap(e){
			console.log(e)
		},
		onLoad(option) {
			this.status = option.status
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.null{
			width: 100%;
			height: 30rpx;
		}
		.report{
			width: 692rpx;
			height: 536rpx;
			margin: auto;
			border: 4rpx solid #D4D4DF;
			padding: 10rpx;
			.inside{
				width: 100%;
				height: 100%;
				padding: 30rpx 0;
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				align-items: center;
				border: 1px solid #D4D4DF;
				view{
					text-align: center;
				}
				.logo{
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 38rpx;
						height: 38rpx;
						background: #D4D4DF;
						border-radius: 6rpx;
						margin-right: 7rpx;
					}
					text{
						font-size: 36rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #202020;
					}
				}
				.result{
					position: relative;
					text{
						display: block;
					}
					>:nth-child(1){
						font-size: 48rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #202020;
					}
					>:nth-child(2){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
						margin-top: 35rpx;
					}
					image{
						position: absolute;
						top: -10rpx;
						left: 83%;
						width: 140rpx;
						height: 140rpx;
					}
				}
				.er{
					image{
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: #ccc;
					}
					text{
						display: block;
						margin-top: 10rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
			
		}
		.detail{
			padding: 0 29rpx;
			view{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx 0;
				>:nth-child(1){
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9094A6;
				}
			}
			image{
				width: 100%;
				background: #ccc;
				border-radius: 10rpx;
				margin-top: 10rpx;
			}
		}
	}
</style>
