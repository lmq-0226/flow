<template>
	<view class="content">
		<view class="title" v-if="status == 'forget'">
			<text>设置新的登录密码</text>
			<text>设置新密码，不能与旧密码相同</text>
		</view>
		<view class="title" v-else>
			<text>设置登录密码</text>
			<text>您可以使用设置的密码登录账号 </text>
		</view>
		<view class="ips">
			<input 
				v-if="passType" type="password" value="" maxlength="20"
				placeholder="6-20位数字、字母、特殊符号组合" 
				placeholder-class="holder" v-model="newPass"
				@input="newPass == '' ? eye = false : eye = true"
			/>
			<input 
				v-else type="text" value=""  maxlength="20"
				placeholder="6-20位数字、字母、特殊符号组合" 
				placeholder-class="holder" v-model="newPass"
				@input="newPass == '' ? eye = false : eye = true"
			/>
			<image v-if="eye" src="/static/login/eye.png" mode="" @click="passType = !passType"></image>
		</view>
		<button type="default" @click="save()">保存密码</button>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newPass: '',
				eye: false,
				passType: true,
				status: 'forget'
			};
		},
		onLoad(option) {
			console.log(option, '1111')
			this.status = option.type || 'forget'
		},
		methods:{
			save(){
				console.log(this.newPass.length)
				if(6 < this.newPass.length < 20){
					this.$refs.uToast.show({
						title: '设置成功',
						duration: 1500,
						callback: ()=>{
							uni.reLaunch({
								url: '../login'
							})
						}
					})
				}else{
					uni.showToast({
						title: '密码格式不规范',
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 70rpx;
		.title{
			text{
				display: block;
			}
			>:nth-child(1){
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #0E1622;
			}
			>:nth-child(2){
				margin-top: 20rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #686879;
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
