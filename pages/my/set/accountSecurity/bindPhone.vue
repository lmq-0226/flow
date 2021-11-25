<template>
	<view class="content">
		<view class="form">
			<view class="tell">
				<view class="">
					<text>+86</text>
					<u-input 
						v-model="tell" 
						type="number" 
						placeholder="请输入手机号" 
						maxlength="11" 
						:custom-style="custom"
					/>
				</view>
			</view>
			<view class="code">
				<view class="">
					<text>验证码</text>
					<u-input
						v-model="code" 
						type="number" 
						placeholder="请输入验证码" 
						maxlength="6" 
						:custom-style="custom"
					/>
				</view>
				<text v-if="status" @click="getCode()">获取验证码</text>
				<text class="timer" v-else>{{timer + '秒后重新获取'}}</text>
			</view>
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
				clear: false,
				tell: '', // 手机号
				code: '', // 验证码
				custom: {
					"fontSize": "28rpx",
					"fontWeight": "bold",
					"letterSpacing": "5rpx"
				}
			};
		},
		// 完成
		onNavigationBarButtonTap (){
			console.log(111)
		},
		onLoad() {
			
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
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.form{
			padding: 0 36rpx;
			border-top: solid 10rpx #F6F5FA;
			.tell,.code,{
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: solid 1px #E8E8F1;
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
			.tell{
				text{
					background: url(../../../../static/login/below.png) no-repeat right;
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
	}
</style>
