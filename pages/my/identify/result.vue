<template>
	<view class="content">
		<view class="top">
			<image class="avatar" src="" mode=""></image>
			<text>Adidas/阿迪达斯 箱包Adidas/阿迪达斯 箱包Adidas/阿迪达斯 箱包Adidas/阿迪达斯 箱包</text>
			<image v-if="status == 1" class="true" src="/static/my/true.png" mode=""></image>
			<image v-else class="true" src="/static/my/fake.png" mode=""></image>
		</view>
		<view class="plan">
			<text class="title">鉴定结果-商品查验通过，已寄回</text>
			<view class="line">
				<u-time-line>
					<u-time-line-item nodeTop="10" v-for="(item,index) in rate" :key="index">
						<!-- 此处自定义了左边内容，用一个图标替代 -->
						<template v-slot:node>
							<u-icon v-if="index == 0" name="checkmark-circle-fill" color="#FF4243"></u-icon>
						</template>
						<template v-slot:content>
							<view>
								<view class="u-order-title">
									<text>{{item.title}}</text>
								</view>
								<view class="u-order-desc">
									<text>{{item.desc}}</text>
									<view class="imgs" v-if="item.imgs">
										<image v-for="(elem,cut) in item.imgs" :key="cut" :src="elem" mode="heightFix" @click="pvew(cut, item.imgs)"></image>
									</view>
								</view>
								<view class="u-order-time">
									<text>{{item.time}}</text>
								</view>
							</view>
						</template>
					</u-time-line-item>
				</u-time-line>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 1,
				rate: [
					{
						icon: 'rmb-circle-fill',
						title: '鉴定通过',
						desc: '商品鉴别通过，订单已寄回。',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '商品实拍意见',
						desc: '做工合格',
						imgs: [
							require('@/static/pub/bbt.png'),
							require('@/static/pub/ch.png')
						],
						time: '2021-06-17 19:35:26'
					},
					{
						title: '开始鉴别',
						desc: '流象平台专业质检员正在对商品进行逐件鉴别，通常失效为1~3天，请耐心等待。',
						time: '2021-06-17 19:35:26'
					}
				],
			};
		},
		onLoad(option) {
			this.status = option.status
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
		.top{
			padding: 20rpx;
			height: 204rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			display: flex;
			justify-content: flex-start;
			position: relative;
			.avatar{
				width: 164rpx;
				height: 164rpx;
				min-width: 164rpx;
				border-radius: 10rpx;
				margin-right: 20rpx;
				background: #ccc;
			}
			text{
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			.true{
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				width: 136rpx;
				height: 136rpx;
			}
		}
		.plan{
			background: #fff;
			border-radius: 10rpx;
			margin-top: 16rpx;
			.title{
				display: block;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				padding: 40rpx 30rpx;
				border-bottom: solid 1px #F1F4F9;
			}
			.line{
				padding: 50rpx 30rpx;
				.u-order-title{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				.u-order-desc{
					margin: 10rpx 0;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
					.imgs{
						display: flex;
						justify-content: flex-start;
						image{
							height: 110rpx;
							border: solid 1px #f8f8f8;
							margin-top: 10rpx;
							margin-right: 10rpx;
						}
					}
				}
				.u-order-time{
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9392A0;
				}
			}
			
		}
	}
</style>
