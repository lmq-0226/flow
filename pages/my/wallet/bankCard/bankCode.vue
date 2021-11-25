<template>
	<view class="content">
		<view class="code">
			<view class="title">
				<text>请输入验证码</text>
				<text>验证码已发送至 158 5647 5215 </text>
			</view>
			<u-message-input :focus="true" class="codeIP" :maxlength="6" mode="bottomLine" @finish="finish"></u-message-input>
			<view class="error">
				<text v-if="error"></text>
				<text v-else>验证码错误</text>
				<text v-if="send">{{ timer }}秒后重新发送</text>
				<text v-else="send" @click="countDown()" class="send">重新发送</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer: 60,
				error: true, // 验证码错误
				send: true ,// 发送验证码
			};
		},
		onLoad() {
			this.countDown()
		},
		onShow() {
			
		},
		methods:{
			// 验证码输入完成
			finish(e){
				// 获取页面栈
				var pages = getCurrentPages();
				console.log(pages)
				// 可以触犯回退页面onShow方法
				uni.navigateBack({
					delta: 3
				})
			},
			// 倒计时
			countDown(){
				this.send = true
				this.error = true
				var times = setInterval(()=>{
					this.timer --
					if(this.timer <= 0){
						clearInterval(times)
						this.send = false
						this.timer = 60
						this.error = false
					}
				},1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 70rpx;
		.code{
			.title{
				margin-bottom: 100rpx;
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
			.codeIP{
				left: 0;
			}
			.error{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 38rpx 30rpx;
				text{
					font-weight: bold;
				}
				>:nth-child(1){
					font-size: 26rpx;
					font-family: PingFang SC;
					color: #F35455;
				}
				>:nth-child(2){
					font-size: 26rpx;
					font-family: PingFang SC;
					color: #A2A2B6;
				}
				.send{
					color: #F35455;
				}
			}
		}
	}
</style>
