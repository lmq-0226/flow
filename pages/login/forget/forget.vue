<template>
	<view class="content">
		<view class="title">
			<text>忘记密码</text>
		</view>
		<view class="ips">
			<input 
				type="number" v-model="tell" placeholder="请输入手机号" 
				placeholder-class="holder" maxlength="11" 
				@input="tell == '' ? clear = false : clear = true"
			/>
			<image v-if="clear" src="/static/login/clear.png" mode="" @click="tell = ''"></image>
		</view>
		<button type="default" @click="go()">下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tell: '',
				clear: false
			};
		},
		onLoad() {
			
		},
		methods:{
			go(){
				uni.navigateTo({
					url: './code'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 70rpx;
		.title{
			text{
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #0E1622;
			}
		}
		.ips{
			margin-top: 150rpx;
			border-bottom: solid 1px #E8E8F1;
			padding: 25rpx 10rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			input{
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: bold;
				height: 80rpx;
				line-height: 80rpx;
				width: 100%;
			}
			.holder{
				font-size: 28rpx;
			}
			image{
				width: 40rpx;
				height: 40rpx;
				min-width: 40rpx;
				height: 40rpx;
			}
		}
		button{
			margin-top: 50rpx;
			width: 100%;
			height: 80rpx;
			background: #E4E4EC;
			border-radius: 6rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
			
		}
		uni-button:after{
			border: none;
		}
	}
</style>
