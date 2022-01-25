<template>
	<view class="content">
		<view class="form">
			<u-form :model="form" ref="uForm" label-width="120":label-style="{fontWeight: 'bold'}">
				<u-form-item label="+86" prop="tell">
					<u-input v-model="form.tell" type="number" placeholder="请输入手机号" maxlength="11" />
				</u-form-item>
				<u-form-item label="验证码" prop="code">
					<u-input v-model="form.code" type="number" placeholder="请输入验证码" />
					<text class="time" v-if="status" @click="getCode()">获取验证码</text>
					<text class="time timer" v-else>{{timer + '秒后重新获取'}}</text>
				</u-form-item>
			</u-form>
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
				form: {
					tell: '', // 手机号
					code: '', // 验证码
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
				},
				custom: {
					"fontSize": "28rpx",
					"fontWeight": "bold",
					"letterSpacing": "5rpx"
				}
			};
		},
		// 完成
		onNavigationBarButtonTap (){
			this.$refs.uForm1.validate(valid => {
				if (valid) {
					console.log("验证成功")
				}
			})
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		onLoad() {
			
		},
		methods:{
			// 获取验证码
			getCode(){
				// if(/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.tell)){
				this.status = false
				var time = setInterval(()=>{
					if(this.timer > 1){
						this.timer --
					}else{
						this.status = true
						this.timer = 60
						clearInterval(time)
					}
				}, 1000)
				// }else{
				// 	uni.showToast({
				// 		title: '手机号为空或格式错误',
				// 		icon: 'none'
				// 	})
				// }
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.form{
			padding: 0 36rpx;
			border-top: solid 10rpx #F6F5FA;
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
	}
</style>
