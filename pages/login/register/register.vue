<template>
	<view class="content">
		<!-- 适配自定义导航栏 -->
		<view class="status_bar"></view>
		<view class="title">
			<text>注册流象</text>
		</view>
		<view class="">
			<!-- form表单 -->
			<view class="form">
				<view class="tell">
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
				tell: '', // 手机号
				code: '', // 验证码
			};
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
			register: throttle(()=>{
				uni.navigateTo({
					url: '../forget/newPass?type=register'
				})
			}, 3000),
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
			.tell,.code{
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
					input{
						width: calc(100% - 85rpx);
						font-size: 28rpx;
						height: 80rpx;
						line-height: 80rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					.ip{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #A0A0B2;
					}
				}
			}
			.tell{
				text{
					background: url(../../../static/login/below.png) no-repeat right;
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
