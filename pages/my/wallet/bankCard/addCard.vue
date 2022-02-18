<template>
	<view class="content">
		<view class="form">
			<text class="title">请绑定本人银行卡</text>
			<u-field @click="show = true" v-model="bankName" 
			:disabled="true" label="开户行" placeholder="请选择开户行"
			right-icon="arrow-down-fill"
			required
			:field-style="{fontWeight: 'bold'}"
			>
			</u-field>
			<u-field
				v-model="username"
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
				maxlength="18"
				required
			>
				<u-icon name="camera-fill" slot="right" color="#888f8e" size="32" @click="cameraCard(0)"></u-icon>
			</u-field>
			<u-field
				v-model="cardCode"
				label="卡号"
				placeholder="请输入银行卡号"
				:field-style="{fontWeight: 'bold'}"
				maxlength="16"
				type="number"
				required
			>
				<!-- <u-button size="mini" type="success">111</u-button> -->
				<u-icon name="camera-fill" slot="right" color="#888f8e" size="32" @click="cameraBank(2)"></u-icon>
			</u-field>
		</view>
		 <!--  -->
		 <!-- <view class="next" @click="go('./verifyBank')">
		 	下一步
		 </view> -->
		 <view class="del">
		 	<u-button :loading="loading" class="text" @click="addBankCard">添加银行卡</u-button>
		 </view>
		<u-picker mode="selector" v-model="show" :range="list" range-key="bankName" @confirm="sure"></u-picker>
		<!-- <u-action-sheet :list="list" v-model="show"></u-action-sheet> -->
	</view>
</template>

<script>
	const esandOcrModule = uni.requireNativePlugin('Esand-OcrModule');
	const APPCODE = "b8e6f32364374130913b1877fe2098f9";
	export default {
		data() {
			return {
				loading: false,
				idCard: '', // 身份证号
				bankCode: '', // 开户行
				bankName: '', // 银行名称
				cardCode: '',// 银行卡号
				mobile: '',// 手机号
				username: '', // 姓名
				show: false,
				list: [
					{bankCode: 'ALIPAY', bankName: '支付宝账户'},
					{bankCode: 'WECHAT', bankName: '微信账户'},
					{bankCode: 'ICBC', bankName: '工商银行'},
					{bankCode: 'ABC', bankName: '农业银行'},
					{bankCode: 'PSBC', bankName: '邮储银行'},
					{bankCode: 'CCB', bankName: '建设银行'},
					{bankCode: 'CMB', bankName: '招商银行'},
					{bankCode: 'BOC', bankName: '中国银行'},
					{bankCode: 'COMM', bankName: '交通银行'},
					{bankCode: 'SPDB', bankName: '浦发银行'},
					{bankCode: 'GDB', bankName: '广发银行'},
					{bankCode: 'CMBC', bankName: '民生银行'},
					{bankCode: 'PAB', bankName: '平安银行'},
					{bankCode: 'CEB', bankName: '光大银行'},
					{bankCode: 'CIB', bankName: '兴业银行'},
					{bankCode: 'CITIC', bankName: '中信银行'}
				],
			};
		},
		methods:{
			// 验证身份证号
			cameraCard(e){
				uni.request({
					url: "http://edisocr.market.alicloudapi.com/ocr/init",
					method: 'POST',
					data: {
						ocrType: e
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						// TODO APPCODE切勿泄漏，需替换成您的APPCODE
						'Authorization': 'APPCODE ' + APPCODE,
					},
					success: (res) => {
						uni.showLoading({
							title: '识别中...',
							mask: true
						})
						esandOcrModule.processOcr({
							ocrType: e,
							token: res.data.token,
							from: 0,// 0：用相机拍摄，1：从相册中选取
						}, result => {
							uni.hideLoading()
							this.idCard = JSON.parse(result.data).front.idNumber
							this.username = JSON.parse(result.data).front.name
						});
					},
					fail: (res) => {
						uni.showToast({
							title: '上传失败',
							icon: 'none',
							duration: 1500
						})
						return JSON.stringify(res.data);
					},
					complete: (res) => {
						
					}
				})
			},
			// 验证银行卡
			cameraBank(e){
				uni.request({
					// OCR 初始化后端地址, 为了您的数据安全，请保护好您的APPCODE, 最好把初始化这段逻辑放在服务器端。
					url: "https://edisocr.market.alicloudapi.com/ocr/init",
					method: 'POST',
					data: {
						ocrType: e
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						// TODO APPCODE切勿泄漏，需替换成您的APPCODE
						'Authorization': 'APPCODE ' + APPCODE,
					},
					success: (res) => {
						uni.showLoading({
							title: '识别中...',
							mask: true
						})
						esandOcrModule.processOcr({
							ocrType: e,
							token: res.data.token,
							from: 1,// 0：用相机拍摄，1：从相册中选取
						}, result => {
							uni.hideLoading()
							this.cardCode = JSON.parse(result.data).number
							this.bankName = JSON.parse(result.data).bank
							this.list.forEach(elem=>{
								if(elem.bankName == this.bankName){
									this.bankCode = elem.bankCode
								}
							})
						});
					},
					fail: (res) => {
						uni.showToast({
							title: '上传失败',
							icon: 'none',
							duration: 1500
						})
						return JSON.stringify(res.data);
					},
					complete: (res) => {
						
					}
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			// 添加银行卡
			addBankCard(){
				if(this.bankName == ''){
					uni.showToast({
						title: '请选择开户行',
						icon: 'none'
					})
					return
				}
				if(this.username == ''){
					uni.showToast({
						title: '请输入持卡人',
						icon: 'none'
					})
					return
				}
				if(this.idCard.length < 18){
					uni.showToast({
						title: '身份证号不足18位',
						icon: 'none'
					})
					return
				}
				if(this.cardCode.length < 16){
					uni.showToast({
						title: '银行卡号不足16位',
						icon: 'none'
					})
					return
				}
				
				
				this.loading = true
				this.request({
					url: 'wanlshop/pay/addPayAccount',
					data: {
						token: uni.getStorageSync('userInfo').token,
						bankCode: this.bankCode,
						bankName: this.bankName,
						cardCode: this.cardCode,
						mobile: this.mobile,
						username: this.username
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.showToast({
							title: '添加成功',
							icon: 'none'
						})
						let timer = setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							})
							this.loading = false
						},1000)
					}
				})
			},
			sure(e){
				this.bankCode = this.list[e].bankCode
				this.bankName = this.list[e].bankName
			},
			// 图片转base64
			urlTobase64(e){
				return new Promise((resolved, rejected)=>{
					uni.request({
						url: e,
						method: 'GET',
						responseType: 'arraybuffer',
						success: (res) => {
							let base64 = wx.arrayBufferToBase64(res.data)
							// base64 = 'data:image/jpeg;base64;' + base64
							resolved(base64)
						}
					})
				})
			},
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
		// .next{
		// 	width: 100%;
		// 	height: 74rpx;
		// 	display: flex;
		// 	justify-content: center;
		// 	align-items: center;
		// 	background: #F35455;
		// 	border-radius: 6rpx;
		// 	font-size: 28rpx;
		// 	font-family: PingFang SC;
		// 	font-weight: bold;
		// 	color: #FFFFFF;
		// }
		.del{
			width: 100%;
			padding: 0 30rpx;
			margin-bottom: 30rpx;
			.text{
				
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F35455;
				color: #fff;
				font-size: 28rpx;
				font-weight: bold;
				border-radius: 10rpx;
			}
		}
	}
</style>
