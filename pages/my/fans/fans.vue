<template>
	<view class="content">
		<view class="item" v-for="(item,index) in attenList" :key="item.id" @click="go()">
			<view class="item_left" v-if="item.user">
				<image :src="ImgUrl + item.user.avatar" mode=""></image>
				<text>{{item.user.nickname}}</text>
			</view>
			<view class="item_right null" v-if="item.isFollow == 1">
				<text @click.stop="modelShow(item.user_no, 1, index)">已关注</text>
			</view>
			<view class="item_right" v-else>
				<image src="/static/my/add.png" mode=""></image>
				<text @click.stop="modelShow(item.user_no, 2, index)">关注</text>
			</view>
		</view>
		<u-modal v-model="show" title="" :content="content" :show-cancel-button="true" @confirm="sure"></u-modal>
		<u-empty v-if="attenList.length <= 0" text="还没有人关注您" mode="list" marginTop="300"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {	
				attenList:[],
				show:false,
				user_id: '',
				user_no: '', // 当前点击操作下标
				content: '确定取消关注吗？',
				page: 1,
				cut: 0
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
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
							url: 'wanlshop/find/user/getList',
							data: {
								id: res.data.data.user_no,
								page: this.page,
								type: "fans"
							}
						}).then(res=>{
							this.attenList = res.data.data.data
						})
					}
				})
			},
			modelShow(e, n, m){
				if(n == 1){
					this.content = '确定取消关注吗？'
				}else{
					this.content = '确定关注该用户吗？'
				}
				this.user_no = e
				this.cut = m
				this.show = true
				
			},
			sure(){
				// 关注/取消关注
				this.request({
					url: 'wanlshop/find/user/setFindUser',
					header: {
						token: uni.getStorageSync('userInfo').token
					},
					data:{
						id: this.user_no,
						type: 'follow'
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.attenList[this.cut].isFollow = res.data.data.data
						if(res.data.data.data == 1){
							uni.showToast({
								title: '关注成功',
								icon: 'none'
							})
						}else{
							uni.showToast({
								title: '取消成功',
								icon: 'none'
							})
						}
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
				width: 110rpx;
				height: 56rpx;
				background: #F55454;
				border-radius: 5rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #fff;
				}
			}
			.null{
				background: none;
				border: 1px solid #686879;
				text{
					color: #686879;
				}
			}
		}
		.item:last-child{
			border-bottom: none;
		}
	}
</style>
