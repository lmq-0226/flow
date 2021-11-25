<template>
	<view class="content">
		<view class="form">
			<text class="title">请绑定本人银行卡</text>
			<u-field
				v-model="name"
				label="持卡人"
				placeholder="请输入持卡人姓名"
				:field-style="{fontWeight: 'bold'}"
				required
			>
			</u-field>
			<u-field
				v-model="idCard"
				label="身份证号"
				placeholder="请输入身份证号"
				:field-style="{fontWeight: 'bold'}"
				required
			>
			</u-field>
			<u-field
				v-model="bankCard"
				label="卡号"
				placeholder="请输入银行卡号"
				:field-style="{fontWeight: 'bold'}"
				required
			></u-field>
		</view>
		<view class="next" @click="go('./verifyBank')">
			下一步
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				idCard: '',
				bankCard: ''
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
		padding: 30rpx;
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.form{
			.title{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				padding: 35rpx 0;
			}
			/deep/ .u-label {
				font-weight: bold;
				font-size: 28rpx;
			}
		}
		.next{
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
</style>
