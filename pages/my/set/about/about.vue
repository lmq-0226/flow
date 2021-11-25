<template>
	<view class="content">
		<view class="logo">
			<image src="/static/avatar2.png" mode=""></image>
		</view>
		<view class="list">
			<view class="" v-for="(item,index) in list" :key="index">
				<text>{{item.text}}</text>
				<image src="/static/serve/right.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{ text: '给我们打分', url: '' },
					{ text: '公司信息', url: '' },
					{ text: '协议与规则', url: '' },
					{ text: '隐私政策', url: '' },
					{ text: '检查更新', url: '' }
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 150rpx 0;
		.logo{
			text-align: center;
			image{
				width: 110rpx;
				height: 110rpx;
			}
		}
		.list{
			padding: 0 30rpx;
			view{
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
