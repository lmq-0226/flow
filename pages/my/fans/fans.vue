<template>
	<view class="content">
		<view class="item" v-for="(item,index) in attenList" :key="item.id" @click="go('/pages/my/homePage/homePage?type=0')">
			<view class="item_left">
				<image :src="item.avatar" mode=""></image>
				<text>{{item.name}}</text>
			</view>
			<view class="item_right null" v-if="item.status">
				<text @click="modelShow(index,1)">已关注</text>
			</view>
			<view class="item_right" v-else>
				<image src="/static/my/add.png" mode=""></image>
				<text @click="modelShow(index,2)">关注</text>
			</view>
		</view>
		<u-modal v-model="show" title="" :content="content" :show-cancel-button="true" @confirm="sure"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				attenList:[
					{id: 1, avatar: require('@/static/avatar.png'), name: '每天打篮球', status: false},
					{id: 2, avatar: require('@/static/avatar2.png'), name: '斑马芭比', status: false},
					{id: 3, avatar: require('@/static/avatar.png'), name: '彩虹~·~', status: false},
					{id: 4, avatar: require('@/static/avatar2.png'), name: 'ranran', status: false}
				],
				show:false,
				cut: 0, // 当前点击操作下标
				content: '确定取消关注吗？'
			};
		},
		onLoad() {
			
		},
		methods:{
			modelShow(e,n){
				if(n == 1){
					this.content = '确定取消关注吗？'
				}else{
					this.content = '确定关注该用户吗？'
				}
				this.cut = e
				this.show = true
			},
			sure(){
				this.attenList[this.cut].status = !this.attenList[this.cut].status
				uni.showToast({
					title: "操作成功",
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
