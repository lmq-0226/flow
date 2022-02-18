<template>
	<view class="content">
		<view class="margin-bj">
			<view class="item" v-for="(item, key) in bankList" :key="item.id" @click="go('./bankCardDetail?detail=' + JSON.stringify(item))">
				<wanl-bank :bankCode="item.bankCode" :bankName="item.bankName" :cardCode="item.cardCode" />
				<!-- <view class="choice text-xl">
					<text class="wlIcon-xuanze-danxuan" v-if="index == key"></text>
					<text class="wlIcon-xuanze" v-else></text>
				</view> -->
			</view>
		</view>
		<u-empty v-if="bankList.length <= 0" text="暂无数据" mode="list"></u-empty>
		<view class="add" @click="go('./addCard')">
			<image src="/static/my/add2.png" mode=""></image>
			<text>添加银行卡</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			bankList: [],
			index: null,
			type: ''
		};
	},
	onLoad(option) {
		if(option.type){
			this.type = option.type
		}
	},
	onShow() {
		this.getData()
	},
	methods: {
		go(e){
			uni.navigateTo({
				url: e
			})
		},
		getData() {
			this.request({
				url: 'wanlshop/pay/getPayAccount',
				data: {
					token: uni.getStorageSync('userInfo').token
				}
			}).then(res=>{
				if(res.data.code == 1){
					this.bankList = res.data.data
				}
			})
		},
		
	}
};
</script>

<style lang="scss" scoped>
	.content{
		padding: 0 20rpx 20rpx;
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		.margin-bj{
			width: 100%;
			.item{
				width: 100%;
			}
		}
		.add{
			width: 90%;
			height: 90rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #F35455;
			border-radius: 45rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #F35455;
			background: #fff;
			image{
				width: 44rpx;
				height: 44rpx;
			}
		}
	}
</style>
