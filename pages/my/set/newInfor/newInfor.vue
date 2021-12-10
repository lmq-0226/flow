<template>
	<view class="content">
		<view class="form">
			<view class="">
				<text>接受新消息</text>
				<u-switch v-model="checked" active-color="#FF4243" inactive-color="#eee" size="40"></u-switch>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false
			};
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
