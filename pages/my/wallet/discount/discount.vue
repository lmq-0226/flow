<template>
	<view class="content">
		<view class="item" v-for="(item,index) in list" :key="index">
			<view class="top">
				<view class="top-left">
					<view class="">
						<text>￥</text>
						<text>{{item.price}}</text>
					</view>
					<text>{{item.name}}</text>
				</view>
				<view class="top-right">
					<!-- draw(item.id) -->
					<text @click="go('/pages/my/subscribe/store/store?id=' + item.shop_id)">立即使用</text>
				</view>
			</view>
			<view class="impose">
				<u-collapse :head-style="{fontSize: '22rpx',color: '#686879',padding: '30rpx'}">
					<u-collapse-item :title="'使用期限:' + (item.pretype == 'appoint' ? ('领取' + item.validity + '天后到期') : (item.startdate + '至' + item.enddate))" :open="false">
						<view class="list" >
							<!-- <text v-for="(item,index) in 3" :key="index">{{'(' +  index +')'}}</text> -->
							<text>{{item.content}}</text>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
		<u-empty v-if="list.length <= 0" text="暂无优惠券" mode="coupon" marginTop="300"></u-empty>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'wanlshop/coupon/getMyList',
					method: 'GET',
					header: {
						token: uni.getStorageSync('userInfo').token
					},
					data: {
						state: 1,
						page: 1
					}
				}).then(res=>{
					// console.log(res)
					if(res.data.code == 1){
						this.list = res.data.data.data
					}
				})
			},
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
						this.disPopup = false
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
<style>
	page{
		background: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		padding: 20rpx 22rpx;
		.item{
			margin-bottom: 20rpx;
			background: url(../../../../static/my/disBg.png) no-repeat;
			background-size: 100%;
			.top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 40rpx 0;
				margin: 0 30rpx;
				height: 186rpx;
				border-bottom: dashed 1px #E2E2E9;
				.top-left{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					view{
						text{
							font-weight: bold;
							color: #F35455;
						}
						>:nth-child(1){
							font-size: 36rpx;
						}
						>:nth-child(2){
							font-size: 60rpx;
						}
					}
					>text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #00001D;
					}
				}
				.top-right{
					width: 129rpx;
					height: 55rpx;
					border: 1px solid #F35455;
					border-radius: 28rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #F35455;
					}
				}
			}
			.impose{
				.list{
					padding: 0 30rpx 30rpx;
					background-color: #fff;
					text{
						display: block;
						font-size: 22rpx;
						color: #686879;
					}
				}
			}
		}
	}
</style>
