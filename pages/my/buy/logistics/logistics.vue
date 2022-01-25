<template>
	<view class="content">
		<!-- <view class="">
			<image src="" mode=""></image>
		</view> -->
		<u-time-line>
			<u-time-line-item nodeTop="0" v-for="(item,index) in rate" :key="index" :nodeTop="item.title == '' ? 15 : 5">
				<!-- 此处自定义了左边内容，用一个图标替代 -->
				<template v-slot:node>
					<!-- <u-icon v-if="item.icon" :name="item.icon"></u-icon> -->
					<image v-if="item.icon" :src="ImgUrl + item.icon" mode="" style="width: 24rpx;height: 24rpx;"></image>
				</template>
				<template v-slot:content>
					<view>
						<view class="u-order-title">
							<text>{{item.status}}</text>
							<text v-if="item.copy" @click="copy(item.copy)">复制</text>
						</view>
						<view class="u-order-desc">
							<text>{{item.context}}</text>
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
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				rate: [],
				kuaidi: {}
			};
		},
		onLoad(option) {
			this.getData(option.id)
		},
		methods:{
			getData(e){
				this.request({
					url: 'wanlshop/order/getLogistics',
					header: {
						token: uni.getStorageSync('userInfo').token
					},
					data: {
						id: e
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.rate = res.data.data.express
						this.rate.unshift({
							icon: res.data.data.kuaidi.logo,
							title: '',
							status: res.data.data.kuaidi.name,
							context: res.data.data.order_no,
							time: '',
							copy: res.data.data.order_no
						})
					}
				})
			},
			copy(e){
				setText(e)
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
			display: flex;
			justify-content: space-between;
			align-items: center;
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
