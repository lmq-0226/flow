<template>
	<view class="content">
		<u-time-line>
			<u-time-line-item nodeTop="0" v-for="(item,index) in rate" :key="index" :nodeTop="item.title == '' ? 15 : 5">
				<!-- 此处自定义了左边内容，用一个图标替代 -->
				<template v-slot:node>
					<u-icon v-if="item.icon" :name="item.icon"></u-icon>
					<!-- <image src="/static/my/car.png" mode="" style="width: 24rpx;height: 24rpx;"></image> -->
				</template>
				<template v-slot:content>
					<view>
						<view class="u-order-title">
							<text>{{item.title}}</text>
							<text v-if="item.status" @click="copy('731576605948')">复制</text>
						</view>
						<view class="u-order-desc">
							<text>{{item.desc}}</text>
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
				rate: [
					{
						icon: 'pushpin-fill',
						title: '中通快递 731576605948',
						desc: '',
						time: '',
						status: true
					},
					{
						icon: 'map-fill',
						title: '',
						desc: '【收货地址】江苏省 苏州市 相城区 高铁新城高融大厦丰巢快递柜 ',
						time: ''
					},
					{
						icon: 'edit-pen-fill',
						title: '已签收',
						desc: '【自提柜】已签收，签收人凭取货码签收。感谢使用高融大厦丰巢快递柜，期待再次为您服务。',
						time: '2021-06-17 19:35:26'
					},
					{
						icon: 'rmb-circle-fill',
						title: '代取件',
						desc: '【自提柜】您的快件已存放至高融大厦丰巢快递柜请及时取件。有问题请联系快递员15124578564',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '派送中',
						desc: '苏州高铁新城快递员正在派件（95720）未中通快递外呼专属号码，请放心接听 185****485456',
						time: '2021-06-17 19:35:26'
					},
					{
						icon: 'car-fill',
						title: '运输中',
						desc: '快件到达苏州高铁新城',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '',
						desc: '快件已离开苏州中转部到达苏州高铁新城',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '',
						desc: '快件已离开苏州中转部',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '',
						desc: '快件离开昆常转运中心已发往苏州中转部',
						time: '2021-06-17 19:35:26'
					},
					{
						title: '',
						desc: '快件以离开苏州昆山已发往昆常转运中心',
						time: '2021-06-17 19:35:26'
					},
					{
						icon: 'server-man',
						title: '已揽件',
						desc: '苏州昆山的快件已揽收',
						time: '2021-06-18 19:35:26'
					},
					{
						title: '已下单',
						desc: '快件已下单',
						time: '2021-06-17 19:35:26'
					}
				]
			};
		},
		onLoad() {
			
		},
		methods:{
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
