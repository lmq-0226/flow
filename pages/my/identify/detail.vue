<template>
	<view class="content">
		<view class="top">
			<view class="logo">
				<image src="/static/avatar3.png" mode=""></image>
				<view class="">
					<text>流象APP</text>
					<text>图片鉴别 品类全面 专业严谨</text>
				</view>
			</view>
			<view class="status">
				<text>待鉴别</text>
			</view>
			<view class="identer">
				<text>鉴定结果由资深鉴别师根据用户所提供图片得出</text>
				<view class="">
					<image src="/static/avatar2.png" mode=""></image>
					<text>鉴定师: celia张</text>
				</view>
			</view>
		</view>
		<view class="detail">
			<view class="title">
				<text>LANVIN(浪凡)  服装</text>
				<text>2020-10-25 13:25鉴定</text>
			</view>
			<view class="imgs">
				<image v-for="(item,index) in imgs" :key="index" :src="item" mode="widthFix" @click="preview(index)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs: [
					require('@/static/pub/bbt.png'),
					require('@/static/pub/ch.png'),
					require('@/static/pub/ttq.png')
				]
			};
		},
		onLoad() {
			
		},
		methods:{
			preview(e){
				// 预览图片
				uni.previewImage({
					urls: this.imgs,
					current: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.top{
			padding: 0 30rpx;
			border-bottom: solid 10rpx #F7F7FB;
			.logo{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 0 12rpx;
				image{
					width: 54rpx;
					height: 54rpx;
				}
				view{
					margin-left: 13rpx;
					text{
						display: block;
					}
					>:nth-child(1){
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #202020;
					}
					>:nth-child(2){
						font-size: 18rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #202020;
					}
				}
			}
			.status{
				padding: 65rpx 3rpx;
				border-bottom: 1px solid #F2F2F6;;
				text{
					font-size: 72rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #F55555;
				}
			}
			.identer{
				padding: 40rpx 0;
				>text{
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #686879;
				}
				view{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 23rpx;
					image{
						border-radius: 50%;
						width: 58rpx;
						height: 58rpx;
						margin-right: 22rpx;
					}
					text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
		}
		.detail{
			padding: 0 29rpx 30rpx;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 40rpx 0;
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
			.imgs{
				image{
					width: 100%;
					border: solid 1px #f8f8f8;
					margin-bottom: 10rpx;
				}
			}
		}
	}
</style>
