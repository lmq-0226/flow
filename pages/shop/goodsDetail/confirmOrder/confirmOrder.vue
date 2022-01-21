<template>
	<view class="content">
		<view class="top" @click="go('/pages/my/set/address/address?type=order&address=' + JSON.stringify(addressData))">
			<view class="" v-if="addressShow">
				<text>{{addressData.province + addressData.city + addressData.district + addressData.address}}</text>
				<text>{{addressData.name}}  {{addressData.mobile}}</text>
			</view>
			<text v-else>请设置默认收货地址</text>
			<image src="/static/serve/right.png" mode=""></image>
		</view>
		<view class="quad">
			<text v-for="(item,index) in 30" :key="index"></text>
		</view>
		<view class="orderDetail" v-for="(item,index) in list" :key="index">
			<view class="info" v-for="(elem,cut) in item.products" :key="cut">
				<view class="title">
					<!-- <image src="/static/avatar3.png" mode=""></image> -->
					<text>{{elem.shop.shopname}}</text>
				</view>
				<view class="detail">
					<image :src="ImgUrl + elem.image" mode=""></image>
					<view class="">
						<text>{{elem.title}}</text>
						<text>商品规格: {{elem.sku.difference.join('/')}}</text>
						<text>¥{{elem.sku.price}}</text>
						<!-- <view class="">
							<text>假一赔三</text>
							<text>防伪包装</text>
							<text>7天无理由退货</text>
						</view> -->
					</view>
				</view>
			</view>
			<view class="count">
				 <!-- @click="freight = true" -->
				<view class="freight">
					<text>运费</text>
					<text>¥{{item.freight.price}}</text>
				</view>
				<view class="discount" @click="getDiscount">
					<text>优惠劵</text>
					<text>{{discount.price != 0 ? '-' + discount.price : '请选择优惠券'}}</text>
				</view>	
				<view class="leave">
					<text>留言</text>
					<u-input v-model="item.remarks" type="text" placeholder="请输入您的留言" input-align="right" />
				</view>
			</view>
		</view>
		<view class="totalprice">
			<text>合计￥</text>
			<text>{{addressShow ? parseFloat(statis.allsub - discount.price).toFixed(2) : ''}}</text>
		</view>
		<view class="need">
			<text class="title">买家须知</text>
			<view class="">
				<text>每件交易商品均由平台针对实物进行鉴别，每件交易商品均由平台针对实物进行鉴别，每件交易商品均由平台针对实物进行鉴别。 查看</text>
				<text>《买家须知》</text>
			</view>
		</view>
		<view class="bottom">
			<view class="left">
				<text>合计</text>
				<text>￥</text>
				<text>{{addressShow ? parseFloat(statis.allsub - discount.price).toFixed(2) : ''}}</text>
			</view>
			<u-button class="right" :loading="loading" @click="subOrder">提交订单</u-button>
			<!-- <view class="right" @click="go('./pay')"> 
				<text>提交订单</text>
			</view> -->
		</view>
		<!-- 优惠券弹窗 -->
		<u-popup v-model="disPopup" mode="bottom" border-radius="20"  @touchmove.native.stop.prevent>
			<view class="dispopup">
				<view class="title">
					<image src="" mode=""></image>
					<text>店铺优惠券</text>
					<image src="/static/my/close.png" mode="" @click="disPopup = false"></image>
				</view>
				<view class="list">
					 <!-- @click="select(item)" -->
					<view class="item" v-for="(item,index) in discountList" :key="index">
						<view class="left">
							<text>¥</text>
							<text>{{item.price}}</text>
						</view>
						<view class="right">
							<view class="">
								<text>满{{item.limit}}可用</text>
								<text v-if="item.pretype == 'fixed'">{{item.pretype_text + item.enddate}}</text>
								<!-- <view class="" v-else> -->
								<text v-if="item.pretype == 'appoint'">领取日期: {{item.startdate}}</text>
								<text v-if="item.pretype == 'appoint'">{{item.pretype_text + item.validity}}</text>
							</view>
							<text class="use" v-if="coupon_id == item.id">已选中</text>
							<text class="use" v-else-if="item.state" @click="use(item)">立即使用</text>
							<text class="draw" v-else @click="draw(item.id)">立即领取</text>
						</view>
					</view>
				</view>
				 <!-- @click="sure" -->
				<view class="sure">
					<text>确认</text>
				</view>
			</view>
		</u-popup>
		<!-- 运费弹窗 -->
		<u-popup v-model="freight" mode="bottom" border-radius="20"  @touchmove.native.stop.prevent>
			<view class="frepopup">
				<view class="title">
					<image src="" mode=""></image>
					<text>运费</text>
					<image src="/static/my/close.png" mode="" @click="freight = false"></image>
				</view>
				<view class="list">
					<view class="">
						<text>顺丰发货 ¥12.00</text>
						<image v-if="true" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
					<view class="">
						<text>普通发货 ¥6.00</text>
						<image v-if="false" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
				</view>
				<view class="sure">
					<text>确认</text>
				</view>
			</view>
		</u-popup>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressShow: true,
				disPopup: false,
				freight: false,
				goodsConfirm: [],
				addressData: {},
				list: [],
				statis: {},
				loading: false,
				token: '',
				discountList: [],
				coupon_id: 0, // 优惠券id
				discount: {
					id: 0,
					price: 0
				},
				address_id: ''
			};
		},
		onLoad(option) {
			let obj = option
			for (let i in obj) {
				obj[i] = Number(obj[i])
			}
			this.goodsConfirm.push(obj)
			this.confirmOrder()
		},
		onShow(){
			// this.coupon_id = ''
			// this.discount = {
			// 	id: 0
			// }
			this.confirmOrder()
			
		},
		methods:{
			// 确认订单
			confirmOrder(){
				this.request({
					url: 'wanlshop/order/getOrderGoodsList',
					header: {
						'token': uni.getStorageSync('userInfo').token,
						'Content-Type': 'application/json;charset=UTF-8'
					},
					data: {
						address_id: this.address_id,
						data: this.goodsConfirm
					}
				}).then(res=>{
					if(res.data.code == 1){
						if(res.data.data.addressData  == null){
							this.addressShow = false
							this.$refs.uToast.show({
								title: '请添加收货地址',
								type: 'warning',
								callback: ()=>{
									uni.navigateTo({
										url: '/pages/my/set/address/address'
									})
								}
							})
							return
						}
						this.addressShow = true
						this.token = res.data.data.token
						this.addressData = res.data.data.addressData
						this.list = res.data.data.orderData.lists
						this.statis = res.data.data.orderData.statis
					}else{
						this.addressShow = false
					}
				})
				
			},
			// 提交订单
			subOrder(){
				this.loading = true
				let data = {lists: [], address_id: this.addressData.id},
				cart = [];
				this.list.forEach((item, index)=> {
					data.lists.push({
						shop_id: item.shop_id,
						remarks: item.remarks,
						products: [],
						//店铺优惠券和其他 在下追加
						coupon_id: this.coupon_id
					});
					item.products.forEach(goods => {
						// 购物车数据
						cart.push({
							goods_id: goods.id,
							sku_id: goods.sku.id
						});
						// 商品数据
						data.lists[index].products.push({
							goods_id: goods.id,
							number: goods.number,
							sku_id: goods.sku.id,
							freight_id: goods.freight_id
						})
					})
				})
				this.request({
					url: 'wanlshop/order/addOrder',
					header: {
						'token': uni.getStorageSync('userInfo').token,
						'Content-Type': 'application/json;charset=UTF-8'
					},
					data: {
						token: this.token, // 此token是上面接口获取的，不是用户token
						order: data
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.navigateTo({
							url: 'pay?data=' + JSON.stringify(res.data.data.list[0]) + '&token=' + res.data.data.token
						})
					}
					this.loading = false
				})
			},
			
			getDiscount(){
				this.disPopup = true
				let obj = this.list[0]
				this.request({
					url: 'wanlshop/coupon/query',
					header: {
						'token': uni.getStorageSync('userInfo').token,
						'Content-Type': 'application/json;charset=UTF-8'
					},
					data: {
						goods_id: obj.products[0].id,
						shop_id: obj.shop_id,
						price: obj.order_price,
						shop_category_id: obj.products[0].shop_category_id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.discountList = []
						this.discountList = res.data.data
					}
				})
			},
			select(e){
				
			},
			// 立即使用
			use(e){
				this.disPopup = false
				this.coupon_id = e.id
				this.discount = e
			},
			// 领取优惠券
			draw(e){
				this.request({
					url: 'wanlshop/coupon/receive',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: e
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: res.data.data.msg,
							type: 'success'
						})
						this.getDiscount()
					}
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		},
		computed:{
			totalPrice(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding-bottom: 98rpx;
		.top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 36rpx 0;
			>text{
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			view{
				width: 550rpx;
				text{
					display: block;
				}
				>:nth-child(1){
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					line-height: 36rpx;
					margin-bottom: 20rpx;
					overflow: hidden;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #717181;
				}
			}
			image{
				width: 44rpx;
				height: 44rpx;
			}
		}
		.quad{
			white-space: nowrap;
			overflow: hidden;
			border-bottom: solid 10rpx #F6F5FA;
			text{
				display: inline-block;
				width: 40rpx;
				height: 6rpx;
				background: #F55454;
				transform: skewX(-30deg);
				margin-right: 20rpx;
			}
			>:nth-child(2n){
				background: #4F8AFE;
			}
		}
		.orderDetail{
			padding: 32rpx 36rpx;
			.info{
				border-bottom: solid 1px #F1F4F9;
				padding-bottom: 30rpx;
				.title{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 36rpx;
						height: 36rpx;
						margin-right: 10rpx;
					}
					text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
				.detail{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 30rpx;
					image{
						width: 164rpx;
						height: 164rpx;
						min-width: 164rpx;
						margin-right: 22rpx;
					}
					>view{
						height: 180rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						>:nth-child(1),>:nth-child(3){
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
							overflow: hidden;
							-webkit-line-clamp: 1;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #6A6A79;
						}
						view{
							display: flex;
							justify-content: flex-start;
							align-items: center;
							text{
								font-size: 18rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #FF4243;
								padding: 3rpx 6rpx;
								border: 1rpx solid #FF4243;
								border-radius: 2rpx;
							}
							:not(:first-child){
								margin-left: 10rpx;
							}
						}
					}
				}
			}
			.count{
				padding: 20rpx 6rpx;
				border-bottom: solid 1px #F1F4F9;
				view{
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 80rpx;
					>:nth-child(1){
						display: inline-block;
						width: 20%;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
				.freight,.discount{
					background: url(../../../../static/serve/right.png) no-repeat right center;
					background-size: 44rpx;
					padding-right: 40rpx;
				}
				.leave{
					
				}
			}
		}
		.totalprice{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 0 36rpx 33rpx;
			border-bottom: solid 10rpx #F6F5FA;
			text{
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			>:nth-child(1){
				font-size: 24rpx;
			}
			>:nth-child(2){
				font-size: 24rpx;
			}
		}
		.need{
			padding: 33rpx 37rpx;
			.title{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			view{
				margin-top: 30rpx;
				text{
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
				}
				>:nth-child(1){
					color: #9F9FB5;
				}
				>:nth-child(2){
					color: #868693;
				}
			}
		}
		.bottom{
			width: 100%;
			height: 98rpx;
			position: fixed;
			bottom: 0;
			border-top: solid 1px #f2f2f2;
			background: #fff;
			padding: 0 38rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				>:nth-child(1){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-weight: 500;
					color: #FF4243;
				}
				>:nth-child(3){
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: Heavy;
					color: #FF4243;
				}
			}
			.right{
				width: 220rpx;
				height: 74rpx;
				margin: 0 !important;
				text-align: center;
				line-height: 74rpx;
				background: #F55454;
				border-radius: 12rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
		.dispopup,.frepopup{
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 34rpx 30rpx;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			.list{
				background: #F6F5FA;
				padding: 30rpx 20rpx;
				.item{
					width: 100%;
					background: #fff;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-radius: 10rpx;
					margin-bottom: 20rpx;
					.use,.draw{
						padding: 11rpx 30rpx;
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #F6FDFA;
						background: #F35455;
						border-radius: 22rpx;
					}
					.use{
						background: #fff;
						border: solid 1px #F35455;
						color: #F35455;
					}
					.left{
						width: 180rpx;
						text-align: center;
						border-right: 1px solid #FFBFBB;
						text{
							font-family: PingFang SC;
							font-weight: bold;
							color: #FF4243;
						}
						>:nth-child(1){
							font-size: 32rpx;
						}
						>:nth-child(2){
							font-size: 42rpx;
						}
					}
					.right{
						width: calc(100% - 180rpx);
						padding: 0 23rpx 0 64rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						view{
							height: 136rpx;
							padding: 20rpx 0;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							>:nth-child(1){
								font-size: 30rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #FF4243;
							}
							>:nth-child(2),>:nth-child(3){
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #868693;
							}
							
						}
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
				}
				
			}
			.sure{
				width: 100%;
				height: 98rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-top: solid 1px #f2f2f2;
				text{
					display: block;
					width: 690rpx;
					height: 74rpx;
					text-align: center;
					line-height: 74rpx;
					background: #F35455;
					border-radius: 12rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			}
		}
		.frepopup{
			.list{
				view{
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #fff;
					padding: 20rpx;
					border-radius: 10rpx;
					text{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
				:not(:first-child){
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
