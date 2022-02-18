<template>
	<view class="content">
		<view class="">
			<u-field @click="enterPicker = true" v-model="express_name" 
				:disabled="true" label="快递公司" placeholder="请选择快递公司"
				right-icon="arrow-right"
			>
			</u-field>
			<u-field
				v-model="express_no"
				label="快递单号"
				placeholder="请填写快递单号"
			>
			</u-field>
		</view>
		<u-button class="pay" :loading="loading" @click="deliverGoods">确认发货</u-button>
		<u-picker v-model="enterPicker" mode="selector" range-key="name" :range="enterList" @confirm="confirm"></u-picker>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				order_id: '',
				express_name: '', // 快递公司
				express_no: '', //快递单号
				enterPicker: false,
				enterList: []
			};
		},
		onLoad(option) {
			console.log(option)
			this.order_id = option.order_id
			this.getDeliverList()
		},
		methods:{
			getDeliverList(){
				this.request({
					url: 'idle/order/express_list',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.enterList = res.data.data.list
					}
				})
			},
			deliverGoods(){
				if(this.express_name == ''){
					this.$refs.uToast.show({
						title: '请选择快递公司',
						type: 'warning'
					})
					return
				}
				if(this.express_no == ''){
					this.$refs.uToast.show({
						title: '请填写快递单号',
						type: 'warning'
					})
					return
				}
				this.request({
					url: 'idle/order/delivery',
					data: {
						token: uni.getStorageSync('userInfo').token,
						order_id: this.order_id,
						express_name: this.express_name,
						express_no: this.express_no
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: '发货成功！',
							type: 'success'
						})
						uni.navigateBack({
							delta: 1
						})
					}
				})
			},
			confirm(e){
				console.log(this.enterList[e[0]])
				this.express_name = this.enterList[e[0]].name
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 88rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.pay{
			width: 90%;
			height: 74rpx;
			text-align: center;
			line-height: 74rpx;
			background: #F55454;
			border-radius: 6rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
			margin-bottom: 100rpx;
		}
	}
</style>
