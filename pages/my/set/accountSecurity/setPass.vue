<template>
	<view class="content">
		<view class="form">
			<!-- form表单 -->
			<u-form :model="form" ref="uForm" label-width="140":label-style="{fontWeight: 'bold'}">
				<u-form-item label="验证码" prop="code">
					<u-input v-model="form.code" type="number" placeholder="请输入验证码" />
					<text class="time" v-if="status" @click="getCode()">获取验证码</text>
					<text class="time timer" v-else>{{timer + '秒后重新获取'}}</text>
				</u-form-item>
				<u-form-item label="密码" prop="newPass">
					<u-input v-model="form.newPass" type="password" placeholder="6-20位数字、字母、特殊符号组合" />
				</u-form-item>
				<u-form-item label="确认密码" prop="conPass">
					<u-input v-model="form.conPass" type="password" placeholder="6-20位数字、字母、特殊符号组合" />
				</u-form-item>
			</u-form>
			<text>必须是6-20个字符之间，至少包含英文字母、数字、标点符号中的两种</text>
			<button type="default" @click="submit()">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 倒计时
				timer: 60,
				status: true,
				form: {
					code: '', // 验证码
					newPass: '', // 新密码
					conPass: '' // 确认密码
				},
				rules: {
					code: [{
						required: true,
						message: '请输入验证码',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					newPass: [{
							required: true,
							message: '请输入登录密码',
							trigger: 'change'
						},
						{
							pattern: /^[0-9a-zA-Z./*@]*$/g,
							// 正则检验前先将值转为字符串
							transform(value) {
								return String(value);
							},
							message: '只能包含字母或数字或./*',
						},
						{
							min: 6,
							max: 20,
							message: '6到20位之间'
						}
					],
					conPass: [{
						required: true,
						message: '请输入登录密码',
						trigger: 'change'
					},{
						asyncValidator: (rule, value, callback) => {
							if(this.form.newPass == value) {
								callback();
							} else {
								// 如果校验通过，也要执行callback()回调
								callback(new Error('密码不一致'));
							}
						},
						message: '密码不一致',
						trigger: ['change', 'blur'],
					}]
				},
				custom: {
					fontSize: '28rpx',
					fontWeight: 'bold',
					"letterSpacing": "5rpx"
				}
			};
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {
			
		},
		methods:{
			// 获取验证码
			getCode(){
				this.request({
					url: 'wanlshop/sms/send',
					method: 'POST',
					data: {
						mobile: uni.getStorageSync('userInfo').mobile,
						event: 'resetpwd'
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.status = false
						var time = setInterval(()=>{
							if(this.timer > 1){
								this.timer --
							}else{
								this.status = false
								this.timer = 60
								clearInterval(time)
							}
						}, 1000)
					}
				})
			},
			submit(){
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log("验证成功")
						this.request({
							url: 'wanlshop/user/resetpwd',
							method: 'POST',
							data: {
								mobile: uni.getStorageSync('userInfo').mobile,
								captcha: this.form.code,
								newpassword: this.form.newPass,
								confirmpassword: this.form.conPass,
							}
						}).then(res=>{
							if(res.data.code == 1){
								uni.navigateBack({
									delta: 1
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.form{
			border-top: solid 10rpx #F6F5FA;
			padding: 0 27rpx;
			.time{
				display: block;
				text-align: right;
				width: 150rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #9F9FB5;
			}
			.timer{
				width: 230rpx;
				/* #ifdef H5 */
				width: 250rpx;
				/* #endif */
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
