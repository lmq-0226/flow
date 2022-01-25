<template>
	<view class="content">
		<view class="matter">
			<view class="writing">
				<view class="tabs">
					<text :class="{'active1': active}" @click="active = false">自行邮寄</text>
					<text :class="{'active2': !active}" @click="active = true">顺丰上门取货</text>
				</view>
				<view class="t1" v-if="!active">
					<view class="address">
						<text>收</text>
						<view class="">
							<text>{{platAddress.receiver}} {{platAddress.photo}}</text>
							<text>{{platAddress.area + platAddress.address}}</text>
						</view>
					</view>
					<view class="address right" @click="go('/pages/my/set/address/address')">
						<text>退</text>
						<view class="">
							<text>{{defAddress.name}} {{defAddress.mobile}}</text>
							<text>{{defAddress.formatted_address + defAddress.address + defAddress.address_name}}</text>
						</view>
					</view>
					<u-field @click="show = true" v-model="express_name" 
						:disabled="true" label="快递公司" placeholder="请选择快递公司"
						right-icon="arrow-right"
						>
					</u-field>
					<view class="number">
						<u-input v-model="express_no" placeholder="请输入快递单号"/>
						<image src="/static/my/scan.png" mode=""></image>
					</view>
				</view>
				<view class="t2" v-else>
					<view class="address" @click="go('/pages/my/set/address/address')">
						<text class="get">取</text>
						<view class="">
							<text>王小明 166****1562</text>
							<text>江苏省苏州市相城区南天城路77号</text>
						</view>
					</view>
					<view class="address" @click="go('/pages/my/set/address/address')">
						<text>退</text>
						<view class="">
							<text>王小明 166****1562</text>
							<text>江苏省苏州市相城区南天城路77号</text>
						</view>
					</view>
					<view class="time">
						<text>上门时间</text>
						<u-input v-model="time" placeholder="请输入快递单号" :clearable="false" input-align="right" disable/>
					</view>
				</view>
			</view>
			<view class="know">
				<text class="title">买家需知</text>
				<text v-for="(item,index) in 4" :key="index">{{index + 1}}、每件交易商品均由平台针对实物进行鉴别</text>
			</view>
		</view>
		
		<view class="bottom">
			<text @click="back">稍后发货</text>
			<u-button @click="submit" :loading="loading">确认</u-button>
		</view>
		<u-picker mode="selector" v-model="show"  :range="selector" range-key="name" @confirm="confirm"></u-picker>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				show: false,
				token: uni.getStorageSync('userInfo').token,
				active: false,
				time: '1小时上门',
				order_id: '', // 订单id
				selector: [], // 快递公司列表
				platAddress: {}, // 平台地址
				defAddress: {}, // 默认地址
				express_name: '', // 快递公司
				express_no: '',// 快递单号
				type: ''
			};
		},
		created() {
			console.log(111 )
		},
		onLoad(option) {
			this.type = option.type
			this.order_id = option.order_id
			this.getPlatAddress()
			this.getEnter()
		},
		onShow() {
			this.getAddress()
		},
		methods:{
			submit(){
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
				if(this.type == 'sign'){
					this.loading = true
					this.request({
						url: 'idle/consign/delivery',
						data: {
							token: uni.getStorageSync('userInfo').token,
							order_id: this.order_id,
							express_name: this.express_name,
							express_no: this.express_no
						}
					}).then(res=>{
						if(res.data.code == 1){
							this.$refs.uToast.show({
								title: res.data.msg,
								type: 'success',
								callback: ()=>{
									this.loading = false
									uni.navigateBack({
										delta: 1
									})
								}
							})
						}else{
							this.loading = false
						}
					})
				}else if (this.type == 'serve'){
					this.loading = true
					this.request({
						url: 'service/order/delivery',
						data: {
							token: uni.getStorageSync('userInfo').token,
							order_id: this.order_id,
							express_name: this.express_name,
							express_no: this.express_no
						}
					}).then(res=>{
						if(res.data.code == 1){
							this.$refs.uToast.show({
								title: res.data.msg,
								type: 'success',
								callback: ()=>{
									this.loading = false
									uni.navigateBack({
										delta: 1
									})
								}
							})
						}else{
							this.loading = false
						}
					})
				}else{
					this.request({
						url: 'service/order/delivery',
						data: {
							token: uni.getStorageSync('userInfo').token,
							order_id: this.order_id,
							express_name: this.express_name,
							express_no: this.express_no
						}
					}).then(res=>{
						
					})
				}
			},
			confirm(e){
				this.express_name = this.selector[e].code
				console.log(this.express_name)
			},
			// 平台地址
			getPlatAddress(){
				this.request({
					url: 'service/order/platform_address',
					data: {
						token: this.token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.platAddress = res.data.data
					}
				})
			},
			// 快递公司列表
			getEnter(){
				this.request({
					url: 'idle/order/express_list',
					data: {
						token: this.token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.selector = res.data.data.list
					}
				})
			},
			// 获取默认地址
			getAddress(){
				this.request({
					url: 'wanlshop/address/getaddress',
					data: {
						token: this.token
					}
				}).then(res=>{
					if(res.data.code == 1){
						let list = res.data.data.data
						list.forEach(elem=>{
							if(elem.default == 1){
								this.defAddress = elem
							}
						})
					}
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			back(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>
<style>
	page{
		background: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		.u-field {
			padding: 20rpx 0!important;
			margin-bottom: 20rpx;
		}
		.matter{
			padding: 30rpx;
			.writing{
				width: 100%;
				background: #FFFFFF;
				border-radius: 10rpx;
				.tabs{
					height: 90rpx;
					text{
						display: inline-flex;
						width: 50%;
						height: 100%;
						justify-content: center;
						align-items: center;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #010101;
					}
					.active1{
						background: #FFE8E8;
						border-radius: 10rpx 0px 10rpx 0px;
						color: #fff;
					}
					.active2{
						background: #FFE8E8;
						border-radius: 0px 10rpx 0px 10rpx;
						color: #fff;
					}
				}
				.t1,.t2{
					padding: 35rpx;
					.address{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						padding: 20rpx 0;
						border-bottom: 1px solid rgba($color: #e4e7ed, $alpha: 0.5);
						>text{
							display: block;
							margin-right: 30rpx;
							width: 26rpx;
							height: 26rpx;
							text-align: center;
							line-height: 26rpx;
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #43424E;
							border: 1px solid #43424E;
							border-radius: 2rpx;
						}
						>:nth-child(2){
							width: 100%;
							padding-right: 50rpx;
							
							>:nth-child(1){
								font-size: 26rpx;
								margin-bottom: 5rpx;
							}
							text{
								display: block;
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #43424E;
							}
						}
					}
					.right{
						background: url(@/static/serve/right.png) no-repeat right center;
						background-size: 44rpx;
					}
					.number{
						width: 100%;
						height: 100rpx;
						background: #F8F8F8;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 25rpx;
						image{
							width: 44rpx;
							height: 44rpx;
							margin-left: 20rpx;
						}
					}
				}
				.t2{
					.address{
						.get{
							color: #4D7FFE;
							border: solid 1px #4D7FFE;
						}
					}
					>view{
						background: url(../../../../static/serve/right.png) no-repeat right center;
						background-size: 44rpx;
					}
					.time{
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding-right: 50rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
			.know{
				margin-top: 15rpx;
				.title{
					padding: 30rpx 0;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				text{
					display: block;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9F9FB5;
					line-height: 36rpx;
				}
			}
		}
		.bottom{
			width: 100%;
			height: 98rpx;
			background: #fff;
			border-top: solid 1px #f2f2f2;
			position: fixed;
			bottom: 0;
			padding: 0 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text{
				display: block;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
			}
			>:nth-child(1){
				width: 242rpx;
				height: 74rpx;
				border: 2px solid #E8E8E8;
				border-radius: 6rpx;
				color: #000000;
			}
			>:nth-child(2){
				width: 456rpx;
				height: 74rpx;
				background: #F55454;
				border-radius: 6rpx;
				
				color: #FFFFFF;
			}
		}
	}
</style>
