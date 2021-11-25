<template>
	<view class="content">
		<view class="form">
			<view class="">
				<text>新密码</text>
				<u-input v-model="pass" maxlength="20" type="password" placeholder="输入新密码" :custom-style="custom"/>
			</view>
			<view class="">
				<text>确认密码</text>
				<u-input v-model="newPass" maxlength="20" type="password" placeholder="确认密码" :custom-style="custom" />
			</view>
			<text>必须是6-20个字符之间，至少包含英文字母、数字、标点符号中的两种</text>
			<button type="default">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pass: '',
				newPass: '',
				custom: {
					fontSize: '28rpx',
					fontWeight: 'bold',
					"letterSpacing": "5rpx"
				}
			};
		},
		onLoad() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.form{
			border-top: solid 10rpx #F6F5FA;
			padding: 0 27rpx;
			>view{
				border-bottom: solid 1px #f8f8f8;
			}
			view{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 15rpx 0;
				text{
					display: inline-block;
					width: 140rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			>text{
				display: block;
				margin:  20rpx 0;
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #9F9FB5;
			}
			button{
				margin-top: 60rpx;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
				background: #F35455;
				border-radius: 6rpx;
			}
			button::after{
				border: none;
			}
		}
	}
</style>
