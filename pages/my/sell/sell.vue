<template>
	<view class="content">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="item.id"  @click="go('/pages/my/sell/detail/detail?order_id=' + item.id)">
				<view class="title" v-if="item.seller">
					<view class="">
						<image :src="ImgUrl + item.seller.avatar" mode=""></image>
						<text>{{item.seller.nickname}}</text>
					</view>
					<text class="ing">{{item.state_text}}</text>
				</view>
				<view class="goods" v-if="item.idlegoods">
					<view class="avatar">
						<image :src="ImgUrl + item.idlegoods.image" mode=""></image>
					</view>
					<view class="">
						<text>{{item.idlegoods.name}}</text>
						<text></text>
						<text>¥{{item.idlegoods.price}}</text>
					</view>
				</view>
				<view class="bot">
					<text v-if="item.state == 7" @click.stop="del(item.id)">删除订单</text>
					<text v-if="item.type == 'sale'" @click.stop="go('/pages/my/sell/deliver/deliver?order_id=' + item.id)">去发货</text>
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
		<u-empty style="padding-top: 400rpx;" v-if="list.length <= 0" text="暂无数据" mode="list"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			};
		},
		onBackPress() {
			uni.switchTab({
				url: '../my'
			})
			return true
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'idle/order/sale_order_list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						page_index: 1,
						page_size: 10
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.list = res.data.data.list
					}
				})
			},
			// 买家删除寄卖订单
			del(e){
				this.request({
					url: 'idle/order/seller_del',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: e
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: '删除成功',
							type: 'success'
						})
						this.getData()
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

<style lang="scss"scoped>
	.content{
		.list{
			.item{
				padding: 0 36rpx 0;
				border-bottom: solid 10rpx #F6F5FA;
				background: #fff;
				.title{
					padding: 19rpx 8rpx;
					border-bottom: solid 1px #F2F2F6;
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						image{
							width: 34rpx;
							height: 34rpx;
							border-radius: 6rpx;
							margin-right: 12rpx;
						}
						text{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
					>text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #86868F;
					}
					.ing{
						color: #FF4243;
					}
				}
				.goods{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 28rpx 0;
					position: relative;
					.avatar{
						margin-right: 20rpx;
						image{
							width: 180rpx;
							height: 180rpx;
							min-width: 180rpx;
							border-radius: 10rpx;
						}
					}
					view{
						height: 164rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						>:nth-child(1),>:nth-child(3){
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
							overflow: hidden;
							-webkit-line-clamp: 2;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9094A6;
						}
					}
					.status{
						position: absolute;
						right: -62rpx;
						image{
							width: 174rpx;
							height: 174rpx;
						}
					}
				}
				.bot{
					padding: 12rpx 0;
					border-top: solid 1px #F2F2F6;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text{
						display: inline-block;
						width: 130rpx;
						height: 54rpx;
						text-align: center;
						line-height: 54rpx;
						border: 1px solid #9393A7;
						border-radius: 4rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
					.active{
						background: #F55454;
						color: #fff;
						border: 1px solid #F55454;
					}
					>:nth-child(2){
						margin: 0 20rpx;
					}
				}
			}
		}
	}
</style>
