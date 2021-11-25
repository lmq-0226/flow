<template>
	<view class="content">
		<!-- 适配自定义导航栏 -->
		<view class="status_bar"></view>
		<view class="title">
			<text>登录流象</text>
		</view>
		<view class="">
			<!-- form表单 -->
			<view class="form">
				<view class="tell">
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
				</view>
			</view>
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
			<view class="login">
				<button type="default" @click="login">登录</button>
				<view class="cut">
					<view class="" @click="cut()">
						<text v-if="loginStatus">密码登录</text>
						<text v-else>验证码登录</text>
					</view>
					<text v-if="loginStatus">收不到验证码?</text>
					<text v-else @click="go('./forget/forget')">忘记密码</text>
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
				// 倒计时
				timer: 60,
				status: true,
				// 隐私、协议状态
				radio: false,
				tell: '', // 手机号
				code: '', // 验证码
				pass: '', // 密码
				loginStatus: true ,// 登录方式
				custom: {
					"fontSize": "28rpx",
					"fontWeight": "bold",
					"letterSpacing": "5rpx"
				}
			};
		},
		// 监听点击注册按钮
		onNavigationBarButtonTap (){
			uni.navigateTo({
				url: 'register/register'
			})
		},
		onLoad() {
			
		},
		computed: {
			
		},
		methods:{
			// 获取验证码
			getCode(){
				if(/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.tell)){
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
				}else{
					uni.showToast({
						title: '手机号为空或格式错误',
						icon: 'none'
					})
				}
			},
			// 登录 节流防止一直请求
			login: throttle(()=>{
				uni.switchTab({
					url: '../shop/shop'
				})
			}, 3000),
			// 切换登录方式
			cut(){
				this.code = ''
				this.pass = ''
				var timer = setTimeout(()=>{
					this.loginStatus = !this.loginStatus
					clearTimeout(timer)
				}, 180)
			},
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
			.tell,.code,.pass{
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: solid 1px #E8E8F1;
				// padding: 25rpx 0;
				height: 80rpx;
				padding: 10rpx 0;
				view{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					width: 100%;
					text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
						display: block;
						width: 85rpx;
					}
				}
			}
			.pass{
				view{
					text{
						display: block;
						width: 85rpx;
						min-width: 85rpx;
					}
				}
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
			.tell{
				text{
					background: url(../../static/login/below.png) no-repeat right;
					background-size: 46rpx;
				}
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
			.code{
				>text{
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
