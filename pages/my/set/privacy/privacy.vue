<template>
	<view class="content">
		<view class="form">
			<view class="">
				<text>允许其他人查看我的喜欢列表</text>
				<u-switch v-model="checked" active-color="#FF4243" inactive-color="#eee" size="40"></u-switch>
			</view>
			<view class="next" @click="go('./priChat')">
				<text>谁可以私聊我</text>
				<image src="/static/serve/right.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: true
			};
		},
		onLoad() {
			
		},
		methods:{
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
		.form{
			border-top: solid 10rpx #F6F5FA;
			padding: 0 30rpx;
			>view{
				padding: 37rpx 6rpx;
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
