<template>
	<view class="content">
		<view class="userList">
			<view class="item" v-for="(item,index) in list" :key="index" @click="go('/pages/my/buy/receiving/receiving?type=message&order_id=' + item.modules_id)">
				<image :src="ImgUrl + item.image" mode=""></image>
				<view class="">
					<text>{{item.title}}</text>
					<text>{{item.content}}</text>
					<text>{{item.come}}</text>
				</view>
			</view>
		</view>
		<u-empty v-if="list.length <= 0" text="暂无消息" mode="message" marginTop="300"></u-empty>
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
		methods: {
			getData(){
				this.request({
					url: 'wanlshop/notice/getNoticeList',
					method: 'GET',
					header: {
						"content-type": "application/json;charset=UTF-8",
						"token": uni.getStorageSync('userInfo').token
					},
					data: {
						type: 'order',
						page: 1
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.list = res.data.data.data
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
		.userList{
			padding: 0 30rpx;
			.item{
				padding: 28rpx 0;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: solid 1px #F1F1F6;
				image{
					width: 100rpx;
					height: 100rpx;
					min-width: 100rpx;
					border-radius: 10rpx;
					margin-right: 21rpx;
					background: #ccc;
				}
				view{
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					text{
						display: block;
					}
					>:nth-child(1){
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #6A6F7B;
						margin: 5rpx 0;
					}
					>:nth-child(3){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #6A6F7B;
					}
				}
			}
		}
	}
</style>
