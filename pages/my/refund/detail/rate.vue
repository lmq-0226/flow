<template>
	<view class="content">
		<u-time-line>
			<u-time-line-item nodeTop="0" v-for="(item,index) in rate" :key="index">
				<!-- 此处自定义了左边内容，用一个图标替代 -->
				<template v-slot:node>
					<u-icon v-if="item.icon" :name="item.icon"></u-icon>
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
</template>

<script>
	export default {
		data() {
			return {
				rate: [
					{
						icon: 'rmb-circle-fill',
						title: '退款成功',
						desc: '**银行已在2021-08-03 19:35:26前将120.5元入账至您的**银行卡。如有疑问请拔打**银行客服*****咨询。',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '售后部已收到商品',
						desc: '您的商品已收到',
						time: '2021-06-17 19:35:26'
					},
					{
						icon: 'car-fill',
						title: '快递寄出',
						desc: '快递已寄出，您的商品将到达流象售后部',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '审核意见',
						desc: '尊敬的顾客您好，很抱歉您的商品出现这样的问题。请将商品寄回，收到商品后如情况属实，我们会尽快为您处理,否则将原物返回。感谢您对京东的支持。',
						time: '2021-06-17 19:35:26'
					},
					{
						icon: 'server-man',
						title: '等待客服处理',
						desc: '您的退款已申请成功，待售后审核中',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '退款申请已提交',
						desc: '退款原因：有污渍',
						imgs: [
							require('@/static/pub/bbt.png'),
							require('@/static/pub/ch.png')
						],
						time: '2021-06-17 19:35:26'
					}
				]
			};
		},
		onLoad() {
			
		},
		methods:{
			pvew(e, n){
				uni.previewImage({
					current: e,
					urls: n
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 30rpx;
		.u-order-title{
			font-size: 26rpx;
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
</style>
