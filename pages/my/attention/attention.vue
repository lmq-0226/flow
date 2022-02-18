<template>
	<view class="content">
		<view class="item" v-for="(item,index) in attenList" :key="item.id" 
		@click="go(item.shop == null ? '/pages/my/homePage/homePage?type=works&id=' + item.user_no : '/pages/my/subscribe/store/store?id=' + item.shop.id)">
			<view class="item_left" v-if="item.shop == null">
				<image :src="ImgUrl + item.user.avatar" mode=""></image>
				<text>{{item.user.username}}</text>
			</view>
			<view class="item_left" v-else>
				<image :src="ImgUrl + item.shop.avatar" mode=""></image>
				<text>{{item.shop.shopname}}</text>
			</view>
			<view class="item_right">
				<text @click="authen(item)">已关注</text>
			</view>
		</view>
		<u-modal v-model="show" title="" content="确定取消关注吗？" :show-cancel-button="true" @confirm="sure"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				attenList:[
					{id: 1, avatar: require('@/static/avatar.png'), name: '每天打篮球', status: true},
					{id: 2, avatar: require('@/static/avatar2.png'), name: '斑马芭比', status: true},
					{id: 3, avatar: require('@/static/avatar.png'), name: '彩虹~·~', status: true},
					{id: 4, avatar: require('@/static/avatar2.png'), name: 'ranran', status: true}
				],
				show:false,
				cut: 0
			};
		},
		onLoad(option) {
			this.getData()
		},
		methods:{
			authen(e){
				return
				if(e.shop == null){
					this.request({
						url: 'wanlshop/find/user/setFindUser',
						data: {
							id: e.user_no,
							type: "follow"
						}
					}).then(res=>{
						if(res.data.code == 1){
							this.getData()
							uni.showToast({
								title: "取关成功",
								icon: 'none'
							})
						}
					})
				}else{
					this.request({
						url: 'wanlshop/find/user/setFindUser',
						data: {
							id: e,
							token: uni.getStorageSync('userInfo').token,
							type: follow,
						}
					}).then(res=>{
						if(res.data.code == 1){
							this.getData()
							uni.showToast({
								title: "取关成功",
								icon: 'none'
							})
						}
					})
				}
				
			},
			getData(){
				this.request({
					url: "wanlshop/find/user/userInfo",
					header: {
						"content-type": "application/json;charset=UTF-8",
						"token": uni.getStorageSync('userInfo').token
					},
					data: {
						"token": uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.request({
							url: "wanlshop/find/user/getList",
							header: {
								"content-type": "application/json;charset=UTF-8",
								"token": uni.getStorageSync('userInfo').token
							},
							data: {
								id: res.data.data.user_no,
								page: 1,
								type: "follow"
							}
						}).then(res=>{
							if(res.data.code == 1){
								this.attenList = res.data.data.data
							}
						})
					}
				})
				
			},
			sure(){
				this.attenList.splice(this.cut,1)
				uni.showToast({
					title: "取关成功",
					icon: 'none'
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
		padding: 0 30rpx;
		.item{
			padding: 15rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: solid 1px #f8f8f8;
			.item_left{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 80rpx;
					height: 80rpx;
					margin-right: 23rpx;
					border-radius: 50%;
				}
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			.item_right{
				text{
					padding: 14rpx 30rpx;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #686879;
					border: 1px solid #686879;
					border-radius: 5rpx;
				}
			}
		}
		.item:last-child{
			border-bottom: none;
		}
	}
</style>
