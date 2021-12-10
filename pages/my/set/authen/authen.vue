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
			<view class="submit" @click="submit">
				提交 
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				}
			};
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {

		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
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
