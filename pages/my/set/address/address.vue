<template>
	<view class="content">
		<view class="items">
			<view class="item" v-for="(item,index) in addressList" :key="index" @click="setDef(item)">
				<view class="left">
					<text>{{item.formatted_address + item.address}}</text>
					<view class="">
						<text class="default" v-if="item.default == 1">默认</text>
						<text>{{item.name}} {{item.mobile}}</text>
					</view>
				</view>
				<image src="/static/my/edit.png" mode="" @click.stop="go('./add?type=edit&detail=' + JSON.stringify(item))"></image>
			</view>
		</view>
		<u-empty v-if="addressList.length <= 0" text="您还没有添加收货地址" mode="address"></u-empty>
		<view class="add" @click="go('./add?type=add')">
			添加新地址
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 0,
				addressList: [],
				type: '',
				item: {}
			};
		},
		onLoad(option) {
			this.type = option.type
			this.item = JSON.parse(option.address)
		},
		onBackPress() {
			// 返回上一个页面携带参数
			var pages = getCurrentPages();
			var prevPage = pages[pages.length - 2]; //上一个页面
			if(this.type == 'order'){
				// prevPage.$vm.type = 'order'
				prevPage.$vm.address_id = this.item.id
			}else if(this.type == 'leave' || this.type == 'serve'){
				prevPage.$vm.addressData = this.item
			}
		},
		onShow() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'wanlshop/address/getaddress',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.addressList = res.data.data.data
					}
				})
			},
			setDef(e){
				if(this.type == 'order' || this.type == 'leave' || this.type == 'serve'){
					this.item = e
					uni.navigateBack({
						delta: 1
					})
				}
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
		padding: 0 30rpx 30rpx;
		min-height: 100vh;
		/* #ifdef H5 */
		min-height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.item{
			padding: 40rpx 0;
			border-bottom: solid 1px #F7F7FB;
			display: flex;
			justify-content: space-between;
			align-items: center;
			image{
				width: 58rpx;
				height: 58rpx;
			}
			.left{
				width: 90%;;
				>text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #030303;
				}
				view{
					margin-top: 13rpx;
					text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
					.default{
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
						padding: 3rpx 7rpx;
						background-color: #000;
						border-radius: 8rpx;
						margin-right: 17rpx;
					}
				}
			}
		}
		.add{
			margin-top: 30rpx;
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
