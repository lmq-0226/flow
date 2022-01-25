<template>
	<view class="content">
		<view class="top" @click="go('/pages/my/set/address/address?type=leave&address=' + JSON.stringify(addressData))">
			<view class="" v-if="addressShow">
				<text>{{addressData.formatted_address + addressData.address}}</text>
				<text>{{addressData.name}}  {{addressData.mobile}}</text>
			</view>
			<text v-else>请设置默认收货地址</text>
			<image src="/static/serve/right.png" mode=""></image>
		</view>
		<view class="quad">
			<text v-for="(item,index) in 30" :key="index"></text>
		</view>
		<view class="orderDetail">
			<view class="info">
				<view class="title">
					<image src="/static/avatar3.png" mode=""></image>
					<!-- <text>{{goodsDetail.user.nickname}}</text> -->
				</view>
				<view class="detail">
					<image :src="ImgUrl + goodsDetail.image" mode=""></image>
					<view class="">
						<text>{{goodsDetail.name}}</text>
						<text>商品规格: </text>
						<text>¥{{goodsDetail.price}}</text>
						<view class="">
							<text>{{goodsDetail.source}}</text>
							<text>{{goodsDetail.state}}</text>
							<!-- <text>7天无理由退货</text> -->
						</view>
					</view>
				</view>
			</view>
			<view class="count">
				<view class="freight" @click="freight = true">
					<text>运费</text>
					<text>¥{{goodsDetail.express_fee}}</text>
				</view>
				<!-- <view class="discount" @click="disPopup = true">
					<text>优惠劵</text>
					<text>无可用优惠劵</text>
				</view> -->
				<view class="leave">
					<text>留言</text>
					<u-input v-model="remarks" type="text" placeholder="请输入您的留言" input-align="right" />
				</view>
			</view>
		</view>
		<view class="totalprice">
			<text>合计￥</text>
			<text>{{goodsDetail.price}}</text>
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
				<text>{{goodsDetail.price}}</text>
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
					<text>优惠券</text>
					<image src="/static/my/close.png" mode="" @click="disPopup = false"></image>
				</view>
				<view class="list">
					<view class="item" v-for="(item,index) in 5" :key="index">
						<view class="left">
							<text>¥</text>
							<text>10</text>
						</view>
						<view class="right">
							<view class="">
								<text>满100可用</text>
								<text>有效期至2021.11.30 23:59</text>
							</view>
							<image v-if="index == 0" src="/static/login/radio_on.png" mode=""></image>
							<image v-else src="/static/login/radio.png" mode=""></image>
						</view>
					</view>
				</view>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressShow: true,
				disPopup: false,
				freight: false,
				loading: false,
				token: uni.getStorageSync('userInfo').token,
				goods_id: '',// 商品id
				goodsDetail: {},
				addressData: {},
				remarks: '',// 留言
				type: '', // consign 寄卖，sale 拍图， kind 实物鉴定， line 在线鉴定
				pay: '' // buy买， sell 卖
			};
		},
		onLoad(option) {
			console.log(option)
			this.goods_id = option.goods_id
			this.pay = option.pay
			this.type = option.type
			this.getAddressData()
			if(option.type == 'sale'){
				// 拍图
				this.getGoodsDetail('idle/goods/detail')
			}else if (option.type == 'consign'){
				// 平台寄卖
				this.getGoodsDetail('idle/consign/detail')
			}
			
		},
		onShow(){
			
		},
		methods:{
			subOrder(){
				// console.log(this.type)
				// return
				// 买家购买拍图商品=>提交订单
				if(this.pay == 'buy'){
					this.loading = true
					this.request({
						url: 'idle/order/add_order',
						data: {
							token: this.token,
							goods_id: this.goods_id,
							address_id: this.addressData.id,
							remarks: this.remarks
						}
					}).then(res=>{
						this.loading = false
						console.log(res, '11111111111')
						if(res.data.code == 1){
							uni.navigateTo({
								url: './pay?order_id=' + res.data.data.orderInfo.id + '&type=' + this.type + '&pay=' + this.pay + '&total_amount=' + res.data.data.payInfo.total_amount
							})
						}
					})
				}
				// }else{
				// 	this.loading = true
				// 	this.request({
				// 		url: 'idle/order/add_order',
				// 		data: {
				// 			token: this.token,
				// 			goods_id: this.goods_id,
				// 			address_id: this.addressData.id,
				// 			remarks: this.remarks
				// 		}
				// 	}).then(res=>{
				// 		this.loading = false
				// 		if(res.data.code == 1){
				// 			uni.navigateTo({
				// 				url: './pay?type=pay&order_id=' + res.data.data.orderInfo.id
				// 			})
				// 		}
				// 	})
				// }
				
			},
			// 商品详情
			getGoodsDetail(e){
				this.request({
					url: e,
					data: {
						token: this.token,
						id: this.goods_id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.goodsDetail = res.data.data
					}
				})
			},
			// 默认地址
			getAddressData(){
				this.request({
					url: 'wanlshop/address/getaddress',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						for (var i = 0; i < res.data.data.data.length; i++) {
							if(res.data.data.data[i].default == 1){
								this.addressData = res.data.data.data[i]
								this.addressShow = true
								return
							}else {
								this.addressShow = false
							}
						}
					}else{
						this.addressShow = false
					}
				})
			},
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
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-weight: bold;
					color: #FF4243;
				}
				>:nth-child(3){
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: bold;
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
					.left{
						width: 159rpx;
						text-align: center;
						border-right: 1px solid #FFBFBB;
						text{
							font-family: PingFang SC;
							font-weight: bold;
							color: #FF4243;
						}
						>:nth-child(1){
							font-size: 36rpx;
						}
						>:nth-child(2){
							font-size: 48rpx;
						}
					}
					.right{
						width: calc(100% - 159rpx);
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
							>:nth-child(2){
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
