<template>
	<view class="content">
		<view class="detail">
			<view class="item">
				<text>开户行</text>
				<text>{{detail.bankName}}</text>
			</view>
			<view class="item">
				<text>类型</text>
				<text>{{detail.cardType == 0 ? '储蓄卡' : ''}}</text>
			</view>
			<view class="item">
				<text>账号</text>
				<text>{{detail.cardCode}}</text>
			</view>
			<view class="item">
				<text>姓名</text>
				<text>{{detail.username}}</text>
			</view>
			
			<view class="item">
				<text>预留电话</text>
				<text>{{detail.mobile}}</text>
			</view>
		</view>
		<view class="del">
			<u-button :loading="loading" class="text" @click="del">删除账户</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {},
				loading: false
			};
		},
		onLoad(option){
			this.detail = JSON.parse(option.detail)
		},
		methods:{
			del(){
				this.loading = true
				this.request({
					url: 'wanlshop/pay/delPayAccount',
					method: "GET",
					data: {
						token: uni.getStorageSync('userInfo').token,
						ids: this.detail.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.showToast({
							title: '删除成功',
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
		background: #F6F5FA;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.detail{
			width: 100%;
			.item{
				background: #fff;
				border-top: solid 1px #F6F5FA;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100rpx;
				padding: 0 30rpx;
				text{
					font-size: 28rpx;
					font-weight: bold;
				}
				
			}
		}
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
