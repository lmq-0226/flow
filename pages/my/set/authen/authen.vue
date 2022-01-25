<template>
	<view class="content">
		<view class="line"></view>
		<view class="info">
			<view class="title">
				<text>身份信息</text>
				<text>仅用于身份验证，有效保障您的合法权益和交易安全</text>
			</view>
			<u-form :model="form" ref="uForm" label-width="auto"
				:label-style="{fontWeight: 'bold',paddingRight: '30rpx'}">
				<u-form-item label="真实姓名" prop="name">
					<u-input v-model="form.name" placeholder="请输入真实姓名" />
				</u-form-item>
				<u-form-item label="身份证号" prop="code">
					<u-input v-model="form.code" placeholder="请输入身份证号码" maxlength="18" />
				</u-form-item>
			</u-form>
			<!-- <view class="submit" @click="submit">
				提交 
			</view> -->
			<u-button class="submit" :loading="loading" @click="submit">提交</u-button>
		</view>
		<u-toast ref="uToast" />
<!-- 		<button type="default" @click="authen">获取认证信息</button>
		<button type="default" @click="getFaceId">获取签名</button>
		<button type="default" @click="open">认证授权</button> -->
	</view>
</template>

<script>
	const face = uni.requireNativePlugin('DC-WBFaceService');
	var sha1 = require('sha1')
	export default {
		data() {
			return {
				loading: false,
				form: {
					name: '',
					code: '',
				},
				show: false,
				rules: {
					name: [{
						required: true,
						message: '请输入真实姓名',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					code: [{
							required: true,
							message: '请填写身份证号',
							trigger: 'change'
						},
						{
							pattern: /^[0-9a-zA-Z]*$/g,
							// 正则检验前先将值转为字符串
							transform(value) {
								return String(value);
							},
							message: '只能包含字母或数字',
						},
						{
							min: 18,
							message: '身份证号位数不对'
						}
					]
				},
				
				app_id: '', // 
				secret: '',
				license: '',
				sign: '', // 签名
				access_token: '',
				nonce: '', // 32位随机数
				user_id: "",
				version: "1.0.0",
				ticket: '',
				orderId: '',
				faceId: '',
				authen: true
			};
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.version = plus.runtime.version
			// #endif
			this.getAuthenPram()
		},
		methods: {
			// 获取认证参数
			getAuthenPram(){
				this.request({
					url: 'common/getConfig',
					data: {
						token: uni.getStorageSync('userInfo').token,
						configName: 'tencent_face'
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.app_id = res.data.data.configInfo.app_id
						this.license = res.data.data.configInfo.license
						this.secret = res.data.data.configInfo.secret
					}
				})
			},
			// 提交认证
			submit() {
				// console.log(this.getSign())
				// return
				let str = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
				let num = '';
				for (let i = 0; i < 32; i++) {
					num += str.charAt(Math.floor(Math.random() * str.length));
				}
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.user_id = 'userID' + this.form.code
						this.nonce = num
						this.loading = true
						this.authen()
					} else {
						console.log('验证失败');
					}
				});
			},
			
			authen(){
				// 第一步获取access_token
				uni.request({
					url: 'https://miniprogram-kyc.tencentcloudapi.com/api/oauth2/access_token',
					data: {
						app_id: this.app_id,
						secret: this.secret,
						grant_type: 'client_credential',
						version: this.version
					},
					success: res => {
						this.access_token = res.data.access_token
						// 第二步获取sign类型的ticket
						uni.request({
							url: 'https://miniprogram-kyc.tencentcloudapi.com/api/oauth2/api_ticket',
							data: {
								app_id: this.app_id,
								access_token: this.access_token,
								type: 'SIGN',
								version: this.version
							},
							success: res => {
								this.ticket = res.data.tickets[0].value
								// 第三步进行sha签名
								this.getSign(1)
								// this.sign = 
								this.orderId = res.data.bizSeqNo
								
							}
						})
					},
					fail: (err) => {
						this.loading = false
					}
				})
			},
			// 获取faceid
			getFaceId(){
				uni.request({
					url: 'https://miniprogram-kyc.tencentcloudapi.com/api/server/getfaceid',
					method: "POST",
					header: {
						'Content-Type': 'application/json',
					},
					data: {
						webankAppId: this.app_id,
						name: this.form.name,
						idNo: this.form.code,
						orderNo: this.orderId,
						userId: this.user_id,
						version: this.version,
						nonce: this.nonce,
						sign: this.sign
					},
					success: res => {
						this.faceId = res.data.result.faceId
						this.open()
					},
					fail: (err) => {
						this.loading = false
					},
					complete: (all) => {
						if(all.data.code != 0){
							uni.showToast({
								title: all.data.msg,
								icon: 'none'
							})
						}
					}
				})
			},
			// 打开认证
			open(){
				uni.request({
					url: 'https://miniprogram-kyc.tencentcloudapi.com/api/oauth2/api_ticket',
					data: {
						app_id: this.app_id,
						user_id: this.user_id,
						access_token: this.access_token,
						type: 'NONCE',
						version: this.version
					},
					success: res => {
						this.ticket = res.data.tickets[0].value
						this.getSign(2)
					},
					fail: ()=>{
						this.loading = false
					}
				})
				
			},
			// 获取签名
			getSign(e){
				uni.request({
					url: 'https://app.51liuxiang.com/api/common/tencent_sign',
					method: "POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						token: uni.getStorageSync('userInfo').token,
						wbappid: this.app_id,
						userId: this.user_id,
						nonceStr: this.nonce,
						version: this.version,
						ticket: this.ticket
					},
					success: res => {
						this.sign = res.data.data.sign
						if(e == 1){
							// 第一次获取签名获取faceid
							this.getFaceId()
						}else if(e == 2){
							// 第二次获取签名打开人脸认证
							face.startWbFaceVerifyService({
								userId: this.user_id,
								nonce: this.nonce,
								sign: this.sign,
								appId: this.app_id,
								orderNo: this.orderId,
								apiVersion: this.version,
								licence: this.license,
								faceType: "2",
								compareType: "0",
								faceId: this.faceId,
								sdkConfig: {
									//Android和iOS共有的配置参数                                  
									showSuccessPage: true, //是否展示成功页面
									showFailurePage: true, //是否展示失败页面
									recordVideo: false, //是否录制视频
									playVoice: true, //是否播放语音提示
									detectCloseEyes: true, //是否检测用户闭眼
									theme: "0", //sdk皮肤设置，0黑色，1白色
								    //android独有的配置参数
								    isEnableLog: true, //是否打开刷脸native日志，请release版本关闭！！！
									//iOS独有的配置参数
									windowLevel: '1', //sdk中拉起人脸活体识别界面中使用UIWindow时的windowLevel配置
									manualCookie: true //是否由SDK内部处理sdk网络请求的cookie
								}
							}, result => {
								console.log("【uni log】face SDK callback ================> result.");
								console.log(result);
								if(result.res.success){
									this.request({
										url: 'userauth/submit',
										data: {
											token: uni.getStorageSync('userInfo').token,
											name: this.form.name,
											idcard: this.form.code,
											front_image: '',
											back_image: '',
											info: '',
											mobile: '',
											status: 'normal'
										}
									}).then(res=>{
										if(res.data.code == 1){
											this.loading = true
											this.$refs.uToast.show({
												title: '用户认证成功',
												duration: 1000,
												type: 'success',
												callback: ()=>{
													uni.navigateBack({
														delta: 1
													})
													this.loading = false
												}
											})
										}
									})
								}
							})
						}
						// return res.data.data.sign
					},
					complete: (all) => {
						this.loading = false
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.line {
			width: 100%;
			height: 20rpx;
			background: #F6F5FA;
		}

		.info {
			padding: 0 40rpx;

			.title {
				border-bottom: solid 1px #F1F4F9;

				text {
					display: block;
				}

				>:nth-child(1) {
					font-size: 40rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					margin-bottom: 5rpx;
				}

				>:nth-child(2) {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #686879;
				}
			}

			>:not(:last-child) {
				padding: 36rpx 0;

			}

			.name,
			.code {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				text {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					margin-right: 50rpx;
				}

				/deep/ .u-input {
					font-size: 30rpx;
				}
			}

			>:last-child {
				width: 100%;
				height: 80rpx;
				margin-top: 26rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F55454;
				border-radius: 6rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
	}
</style>
