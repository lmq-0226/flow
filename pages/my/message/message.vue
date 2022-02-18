<template>
	<view class="content">
		<view class="top" v-if="close">
			<text>开启推送通知，及时查收消息</text>
			<view class="">
				<text>去开启</text>
				<image src="/static/my/close.png" mode="" @click="close = false"></image>
			</view>
		</view>
		<view class="menus">
			<view class="item" v-for="(item,index) in menus" :key="index" @click="go(item.url)">
				<view class="left">
					<image :src="item.icon" mode=""></image>
					<text>{{item.lettle}}</text>
				</view>
				<u-badge v-if="item.count > 0" type="error" :absolute="false" :count="item.count"></u-badge>
			</view>
		</view>
		<view class="userList">
			<view class="item" v-for="(item,index) in chat.list" :key="index" @click="go('/pages/HM-chat/HM-chat?shop_id=' + item.id)">
				<image :src="ImgUrl + item.avatar" mode=""></image>
				<view class="">
					<view class="name">
						<text>{{item.name}}</text>
						<text>{{$wanlshop.timeToChat(item.createtime)}}</text>
					</view>
					<view class="content">
						<text>{{item.content}}</text>
						<u-badge v-if="item.count > 0" type="error" :absolute="false" :count="item.count"></u-badge>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	export default {
		data() {
			return {
				close: true,
				menus: [
					{url: './praise/praise',icon: require('@/static/my/mes_praise.png'),lettle: '赞与收藏',count: 28},
					{url: './comment/comment',icon: require('@/static/my/mes_comment.png'),lettle: '评论',count: 999},
					{url: '../fans/fans',icon: require('@/static/my/mes_fans.png'),lettle: '粉丝',count: 4},
					{url: './official/official',icon: require('@/static/my/mes_official.png'),lettle: '官方通知',count: 0},
					{url: './order/order',icon: require('@/static/my/mes_order.png'),lettle: '订单通知',count: 0}
				],
			};
		},
		computed: {
			...mapState(['chat','statistics'])
		},
		onNavigationBarButtonTap(e){
			this.empty()
		},
		onLoad() {
			
		},
		methods:{
			...mapActions({
				del: 'chat/del', // 删除消息记录
				empty: 'chat/empty', // 清空角标
			}),
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
		.top{
			width: 100%;
			height: 60rpx;
			background: #F6F5FA;
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			>text{
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #000000;
			}
			view{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				text{
					width: 80rpx;
					height: 36rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 1px solid #9090A9;
					border-radius: 18rpx;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
				}
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
		.menus{
			padding: 0 30rpx;
			border-bottom: solid 14rpx #F7F7FB;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 120rpx;
				border-bottom: solid 1px #F7F7FB;
				.left{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 48rpx;
						height: 48rpx;
						margin-right: 20rpx;
					}
					text{
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
				}
				>text{
					display: block;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FAFAFC;
					background: #FF4556;
					border-radius: 50%;
					padding: 4rpx 10rpx;
				}
			}
		}
		.userList{
			padding: 0 30rpx;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 28rpx 0;
				border-bottom: solid 1px #F6F5FA;
				image{
					width: 80rpx;
					height: 80rpx;
					min-width: 80rpx;
					border-radius: 50%;
					margin-right: 21rpx;
					background: #ccc;
				}
				>view{
					width: 100%;
					height: 80rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					view{
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
					.name{
						>:nth-child(1){
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #6A6F7B;
						}
					}
					.content{
						text{
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #6A6F7B;
							overflow: hidden;
							-webkit-line-clamp: 1;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
						}
					}
				}
			}
		}
	}
</style>
