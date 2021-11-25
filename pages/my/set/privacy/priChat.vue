<template>
	<view class="content">
		<view class="form">
			<view class="" @click="check(true)">
				<text>所有人</text>
				<image v-if="status" src="/static/my/pair.png" mode=""></image>
			</view>
			<view class="" @click="check(false)">
				<text>我关注的人</text>
				<image v-if="!status" src="/static/my/pair.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {throttle} from '@/utils/throttle.js'
	export default {
		data() {
			return {
				status: true
			};
		},
		onLoad() {
			
		},
		methods:{
			check: throttle(function(e){
				this.status = e
			}, 3000)
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.form{
			border-top: solid 10rpx #F6F5FA;
			padding: 0 30rpx;
			>view{
				height: 100rpx;
				padding: 0rpx 6rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: solid 1px #f8f8f8;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>
