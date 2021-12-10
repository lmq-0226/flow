<template>
	<view class="content">
		<!-- 适配自定义导航栏 -->
		<view class="status_bar"></view>
		<view class="title">
			<text>注册流象</text>
		</view>
		<view class="form">
			<!-- form表单 -->
			<u-form :model="form" ref="uForm" label-width="120":label-style="{fontWeight: 'bold'}">
				<u-form-item label="+86" prop="tell">
					<u-input v-model="form.tell" type="number" placeholder="请输入手机号" maxlength="11" />
				</u-form-item>
				<u-form-item label="验证码" prop="code">
					<u-input v-model="form.code" type="number" placeholder="请输入验证码" />
					<text class="time" v-if="status" @click="getCode()">获取验证码</text>
					<text class="time timer" v-else>{{timer + '秒后重新获取'}}</text>
				</u-form-item>
				<u-form-item label="密码" prop="pass">
					<u-input v-model="form.pass" type="password" placeholder="6-20位数字、字母、特殊符号组合" />
				</u-form-item>
			</u-form>
			<!-- 隐私、协议 -->
			<view class="agreement" @click="radio = !radio">
				<image v-if="radio" src="/static/login/radio_on.png" mode=""></image>
				<image v-else src="/static/login/radio.png" mode=""></image>
				<text>已经阅读同意</text>
				<text>《用户协议》</text>
				<text>《隐私政策》</text>
				<text>和</text>
				<text>《买家需知》</text>
			</view>
			<!-- 登录 -->
			<view class="register">
				<button type="default" @click="register">注册</button>
				<view class="cut">
					<text @click="go('back')">已有账号?去登录</text>
				</view>
			</view>
		</view>
		
		<!-- wx -->
		<view class="wx">
			<image src="/static/login/wx.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {throttle} from '@/utils/throttle.js'
	export default {
		data() {
			return {
				// 倒计时
				timer: 60,
				status: true,
				// 隐私、协议状态
				radio: false,
				// 清除控件的显示状态
				clear: false,
				form: {
					tell: '', // 手机号
					code: '', // 验证码
					pass: '' // 密码
				},
				rules: {
					tell: [{
						required: true,
						message: '请输入手机号',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					},
					{
						asyncValidator: (rule, value, callback) => {
							if(/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(value)) {
								callback();
							} else {
								// 如果校验通过，也要执行callback()回调
								callback(new Error('手机号为空或格式错误'));
							}
						},
						message: '手机号为空或格式错误',
						trigger: ['change', 'blur'],
					}],
					code: [{
						required: true,
						message: '请输入验证码',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					pass: [{
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
					]
				}
			};
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {
			
		},
		computed: {
			
		},
		methods:{
			// 获取验证码
			getCode(){
				if(/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.form.tell)) {
					this.request({
						url: '/api/wanlshop/sms/send',
						method: 'POST',
						data: {
							mobile: this.form.tell,
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
				} else {
					// 如果校验通过，也要执行callback()回调
					uni.showToast({
						title: '手机号为空或格式错误',
						icon: 'none'
					})
				}
			},
			// 注册设置登录密码
			register(){
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.request({
							url: '/api/wanlshop/user/resetpwd',
							method: 'POST',
							data: {
								mobile: this.form.tell,
								captcha: this.form.code,
								newpassword: this.form.pass,
								confirmpassword: this.form.pass,
							}
						}).then(res=>{
							if(res.data.code == 1){
								// uni.navigateTo({
								// 	url: '../forget/newPass?type=register'
								// })
							}
						})
					} else {
						console.log('验证失败');
					}
				});
			},
			go(e){
				if(e == 'back'){
					uni.navigateBack({
						delta: 1
					})
					return
				}
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 0 70rpx;
		height: calc(100vh - 140rpx);
		/* #ifdef H5 */
		height: calc(100vh - 240rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title{
			text{
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #0E1622;
			}
		}
		// form表单
		.form{
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
		}
		// 隐私、协议
		.agreement{
			padding: 45rpx 0;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			image{
				width: 30rpx;
				height: 30rpx;
				min-width: 30rpx;
				min-height: 30rpx;
			}
			text{
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #9F9FB5;
				/* #ifdef H5 */
				white-space: nowrap;
				/* #endif */
			}
			:nth-child(3),:nth-child(4),:nth-child(6){
				color: #F55454;
			}
		}
		// 注册
		.register{
			button{
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				// background: #E4E4EC;
				background: #F55454;
				border-radius: 6rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
			button::after{
				border: none;
			}
			.cut{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				margin-top: 47rpx;
				view{
					display: flex;
					align-items: center;
				}
				text{
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #686879;
				}
			}
		}
		.wx{
			display: flex;
			justify-content: center;
			padding-bottom: 86rpx;
			image{
				width: 66rpx;
				height: 66rpx;
			}
		}
	}
</style>
<!-- <view class="tell">
					<view class="">
						<text>+86</text>
						<input 
							type="number" v-model="tell" 
							placeholder="请输入手机号" maxlength="11" 
							@input="tell == '' ? clear = false : clear = true" 
							placeholder-class="ip"
						/>
					</view>
					<image v-if="clear" src="/static/login/clear.png" mode="" @click="tell = '',clear = false"></image>
				</view>
				<view class="code">
					<view class="">
						<text>验证码</text>
						<input type="number" placeholder="请输入验证码" maxlength="6" placeholder-class="ip" v-model="code"/>
					</view>
					<text v-if="status" @click="getCode()">获取验证码</text>
					<text class="timer" v-else>{{timer + '秒后重新获取'}}</text>
				</view> -->
