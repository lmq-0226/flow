<template>
	<view class="content">
		<view class="top">
			<view class="title">
				<text>个人信息加密保护中，身份信息仅用于身份验证</text>
			</view>
			<view class="form">
				<u-field
					v-model="bankName"
					label="银行卡"
					placeholder="请输入开户行"
					:field-style="{fontWeight: 'bold'}"
					required
				>
				</u-field>
				<u-field
					v-model="bankCard"
					label="卡   号"
					placeholder="请输入银行卡号"
					:field-style="{fontWeight: 'bold'}"
					required
				>
				</u-field>
				<u-field
					v-model="tell"
					label="手机号"
					placeholder="请输入持卡人手机号"
					:field-style="{fontWeight: 'bold'}"
					required
				></u-field>
			</view>
		</view>
		
		<view class="next" @click="go('./bankCode')">
			<view class="">
				<text>查看</text>
				<text>《支付服务协议》</text>
			</view>
			<text>同意协议并绑卡</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankName: '',
				bankCard: '',
				tell: ''
			};
		},
		methods:{
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
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.top{
			.title{
				width: 100%;
				height: 40rpx;
				background: #F6F5FA;
				line-height: 40rpx;
				padding-left: 35rpx;
				text{
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #A8A8B9;
				}
			}
			.form{
				padding: 60rpx 30rpx;
				/deep/ .u-label {
					font-weight: bold;
					font-size: 28rpx;
				}
			}
		}
		
		.next{
			padding: 30rpx;
			view{
				margin-bottom: 30rpx;
				text{
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: bold;
				}
				>:nth-child(1){
					color: #000000;
				}
				>:nth-child(2){
					color: #F35455;
				}
			}
			>text{
				display: block;
				width: 100%;
				height: 74rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F35455;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
			
		}
	}
</style>
