<template>
	<view class="content">
		<view class="item" v-for="(item,index) in list" :key="index">
			<view class="left">
				<text>{{item.memo}}</text>
				<text>{{date('YmdHis',item.createtime*1000)}}</text>
			</view>
			<text>{{item.money}}</text>
		</view>
		<u-empty v-if="list.length <= 0" text="暂无数据" mode="list" margin-top="300"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					// {name: '提现',time: '2021-08-09 10:52', money: '-2000'},
					// {name: '收入',time: '2021-08-09 10:52', money: '+2000'},
					// {name: '提现',time: '2021-08-09 10:52', money: '-500'},
					// {name: '收入',time: '2021-08-09 10:52', money: '+500'},
					// {name: '提现',time: '2021-08-09 10:52', money: '-100'},
					// {name: '收入',time: '2021-08-09 10:52', money: '+90'}
				]
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'wanlshop/pay/moneyLog',
					data:{
						token: uni.getStorageSync('userInfo').token,
						page: 1
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.list = res.data.data.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 0 30rpx;	
		.item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: solid 1px #F7F7FB;
			height: 106rpx;
			padding: 20rpx 0;
			.left{
				display: flex;
				height: 66rpx;
				flex-direction: column;
				justify-content: space-between;
				>:nth-child(1){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9392A0;
				}
			}
			>text{
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
	}
</style>
