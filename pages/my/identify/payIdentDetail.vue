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
			<view class="status" v-if="status == 2">
				<text>待鉴别</text>
			</view>
			<view class="" v-else @click="go('./result?status=' + status)">
				<view class="status" v-if="status == 1">
					<text>鉴别为真</text>
					<image src="/static/my/true.png" mode=""></image>
				</view>
				<view class="status" v-else-if="status == 0">
					<text>鉴别为假</text>
					<image src="/static/my/fake.png" mode=""></image>
				</view>
				<view class="result">
					<text>鉴定结果-商品查验通过</text>
					<view class="">
						<text>明细</text>
						<image src="/static/serve/right.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="item" @click="go('/pages/my/buy/logistics/logistics')">
				<view class="lettle">
					<text>物流详情</text>
					<view class="">
						<image src="/static/serve/right.png" mode=""></image>
					</view>
				</view>
				<view class="middle">
					<image src="/static/my/car.png" mode=""></image>
					<text>已发出</text>
				</view>
				<view class="bot">
					2021-10-15 15:25:24
				</view>
			</view>
			<view class="item">
				<view class="lettle">
					<text>收货地址</text>
					<view class="" @click="copy('江苏省苏州市相城区南天城路77号高铁新城流象公司鉴定部')">
						<image src="/static/my/copy.png" mode=""></image>
						<text>复制</text>
					</view>
				</view>
				<view class="middle">
					<image src="/static/my/location.png" mode=""></image>
					<text>流象鉴定部  166****1554</text>
				</view>
				<view class="bot">
					江苏省苏州市相城区南天城路77号高铁新城流象公司鉴定部
				</view>
			</view>
			<view class="item">
				<view class="lettle">
					<text>商品退回地址</text>
					<view class="">
						<image src="" mode=""></image>
					</view>
				</view>
				<view class="middle">
					<image src="/static/my/location.png" mode=""></image>
					<text>王小明  166****1554</text>
				</view>
				<view class="bot">
					江苏省苏州市相城区南天城路77号高铁新城
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
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				status: '',
				imgs: [
					require('@/static/pub/bbt.png'),
					require('@/static/pub/ch.png'),
					require('@/static/pub/ttq.png')
				]
			};
		},
		onLoad(option) {
			console.log(option, '***')
			this.status = option.status
		},
		methods:{
			preview(e){
				// 预览图片
				uni.previewImage({
					urls: this.imgs,
					current: e
				})
			},
			copy(e){
				setText(e)
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
		.top{
			padding: 0 30rpx;
			border-bottom: solid 1px #F7F7FB;
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
				height: 194rpx;
				border-bottom: 1px solid #F2F2F6;;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 40rpx;
				text{
					font-size: 72rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #F55555;
					display: block;
					margin-top: 20rpx;
				}
				image{
					width: 174rpx;
					height: 174rpx;
				}
			}
			.result{
				height: 116rpx;
				background: #F6F5FA;
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				margin-bottom: 30rpx;
				>text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				view{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text{
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
		}
		
		.items{
			.item{
				border-bottom: solid 14rpx #F6F5FA;
				padding: 20rpx 35rpx;
				.lettle{
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					view{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						image{
							width: 44rpx;
							height: 44rpx;
						}
						text{
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
					}
					
				}
				.middle{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 20rpx 0;
					image{
						width: 44rpx;
						height: 44rpx;
					}
					text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
				.bot{
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #717181;
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
