<template>
	<view class="content">
		<!-- 适配自定义导航栏 -->
		<view class="status_bar"></view>
		<view class="title">
			<text>登录流象</text>
		</view>
		<view class="form">
			<!-- form表单 -->
			<view class="form">
				<!-- form表单 -->
				<u-form v-if="loginStatus" :model="form1" ref="uForm1" label-width="120":label-style="{fontWeight: 'bold'}">
					<u-form-item label="+86" prop="tell">
						<u-input v-model="form1.tell" type="number" placeholder="请输入手机号" maxlength="11" />
					</u-form-item>
					<u-form-item label="验证码" prop="code">
						<u-input v-model="form1.code" type="number" placeholder="请输入验证码" />
						<text class="time" v-if="status" @click="getCode()">获取验证码</text>
						<text class="time timer" v-else>{{timer + '秒后重新获取'}}</text>
					</u-form-item>
				</u-form>
				<!-- form表单 -->
				<u-form v-else :model="form2" ref="uForm2" label-width="120":label-style="{fontWeight: 'bold'}">
					<u-form-item label="+86" prop="tell">
						<u-input v-model="form2.tell" type="number" placeholder="请输入手机号" maxlength="11" />
					</u-form-item>
					<u-form-item label="密码" prop="pass">
						<u-input v-model="form2.pass" type="password" placeholder="请输入登录密码" maxlength="20" />
					</u-form-item>
				</u-form>
			</view>
			<!-- 隐私、协议 -->
			<view class="agreement" @click="radio = !radio">
				<image v-if="radio" src="/static/login/radio_on.png" mode=""></image>
				<image v-else src="/static/login/radio.png" mode=""></image>
				<text>已经阅读同意</text>
				<text @click="go('/pages/public/richtext?url=index/agreement&type=user_agreement')">《用户协议》</text>
				<text @click="go('/pages/public/richtext?url=index/agreement&type=privacy_protection')">《隐私政策》</text>
				<text>和</text>
				<text @click="go('/pages/public/richtext?url=index/agreement&type=buyers_notice')">《买家需知》</text>
			</view>
			<!-- 登录 -->
			<view class="login">
				<button type="default" :loading="loading" @click="login">登录</button>
				<view class="cut">
					<view class="" @click="cut()">
						<text v-if="loginStatus">密码登录</text>
						<text v-else>验证码登录</text>
					</view>
					<!-- <text v-if="loginStatus">收不到验证码?</text> -->
					<text @click="go('register/register?type=forget')">忘记密码</text>
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
	import {throttle,debounce} from '@/utils/throttle.js'
	
	export default {
		data() {
			return {
				loading: false,
				// 倒计时
				timer: 60,
				status: true,
				// 隐私、协议状态
				radio: true,
				loginStatus: true ,// 登录方式
				custom: {
					"fontSize": "28rpx",
					"fontWeight": "bold",
					"letterSpacing": "5rpx"
				},
				form1: {
					tell: '', // 手机号
					code: '', // 验证码
				},
				rules1: {
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
				},
				form2: {
					tell: '', // 手机号
					pass: '', // 密码
				},
				rules2: {
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
		// 监听点击注册按钮
		onNavigationBarButtonTap (){
			uni.navigateTo({
				url: 'register/register?type=regist'
			})
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm1.setRules(this.rules1)
		},
		onLoad() {
			
		},
		computed: {
			
		},
		methods:{
			// 获取验证码
			getCode(){
				if(/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.form1.tell)){
					this.request({
						url: 'wanlshop/sms/send',
						data: {
							mobile: this.form1.tell,
							event: 'mobilelogin'
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
				}else{
					uni.showToast({
						title: '手机号为空或格式错误',
						icon: 'none'
					})
				}
			},
			// 登录 节流防止一直请求
			login(){
				if(!this.radio){
					uni.showToast({
						title: '请勾选用户协议',
						icon: 'none'
					})
					return
				}
				if(this.loginStatus){
					// 手机号码登录
					this.$refs.uForm1.validate(valid => {
						if (valid) {
							this.loading = true
							this.request({
								url: 'wanlshop/user/mobilelogin',
								data: {
									mobile: this.form1.tell,
									captcha: this.form1.code,
									registration_id: this.$register.state.registerID
								}
							}).then(res=>{
								if(res.data.code == 1){
									this.loading = false
									this.$store.commit('setUserInfo', res.data.data.userinfo)
									uni.setStorageSync('userInfo', res.data.data.userinfo)
									uni.switchTab({
										url: '/pages/my/my'
									})
								}
							})
						}
					})
				}else{
					// 密码登录
					this.$refs.uForm2.validate(valid => {
						if (valid) {
							this.request({
								url: 'wanlshop/user/login',
								data: {
									account: this.form2.tell,
									password: this.form2.pass,
									client_id: uni.getStorageSync("wanlshop:chat_client_id") ? uni.getStorageSync("wanlshop:chat_client_id") : '',
									registration_id: this.$register.state.registerID
								}
							}).then(res=>{
								if(res.data.code == 1){
									this.$store.dispatch('user/login', res.data.data);
									this.$store.dispatch('cart/login');
									this.$store.dispatch('chat/get');
									// this.$store.commit('setUserInfo', res.data.data.userinfo)
									uni.setStorageSync('userInfo', res.data.data.userinfo)
									uni.switchTab({
										url: '/pages/my/my'
									})
								}
							})
						}
					})
				}
			},
			// 切换登录方式
			cut(){
				var timer = setTimeout(()=>{
					this.loginStatus = !this.loginStatus
					if(this.loginStatus){
						this.$refs['uForm2'].resetFields()
					}else{
						this.$refs['uForm1'].resetFields()
					}
					clearTimeout(timer)
				}, 180)
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
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
		// 登录
		.login{
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
				justify-content: space-between;
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
						<u-input 
							v-model="tell" 
							type="number" 
							placeholder="请输入手机号" 
							maxlength="11" 
							placeholder-class="ip"
							:custom-style="custom"
						/>
					</view>
				</view>
				<view class="code" v-if="loginStatus">
					<view class="">
						<text>验证码</text>
						<u-input
							v-model="code" 
							type="number" 
							placeholder="请输入验证码" 
							maxlength="6"
							placeholder-class="ip"
							:custom-style="custom"
						/>
					</view>
					<text v-if="status" @click="getCode()">获取验证码</text>
					<text class="timer" v-else>{{timer + '秒后重新获取'}}</text>
				</view>
				<view class="pass" v-else>
					<view class="">
						<text>密码</text>
						<u-input
							v-model="pass" 
							type="password" 
							placeholder="请输入密码" 
							maxlength="20"
							:custom-style="custom"
						/>
					</view>
				</view> -->
