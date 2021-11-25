<template>
	<view class="content">
		<view class="items">
			<view class="item" v-for="(item,index) in setList1" :key="index" @click="go(item.url)">
				<text>{{item.text}}</text>
				<image src="/static/serve/right.png" mode=""></image>
			</view>
		</view>
		<view class="items">
			<view class="item" v-for="(item,index) in setList2" :key="index" @click="go(item.url)">
				<text>{{item.text}}</text>
				<image src="/static/serve/right.png" mode=""></image>
			</view>
			<view class="logout" @click="go('/pages/login/login')">
				<text>退出登录</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				setList1: [
					{text: '账号安全', url: './accountSecurity/accountSecurity'},
					{text: '支付设置', url: ''},
					{text: '实名认证', url: ''},
					{text: '地址管理', url: './address/address'},
					{text: '我的尺码', url: ''}
				],
				setList2: [
					{text: '隐私设置', url: './privacy/privacy'},
					{text: '消息设置', url: ''},
					{text: '通用设置', url: ''},
					{text: '关于流象', url: './about/about'}
				]
			};
		},
		onLoad() {
			
		},
		methods:{
			go(e){
				if(e == '/pages/login/login'){
					uni.reLaunch({
						url: e
					})
					return
				}
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.items{
			padding: 0 36rpx;
			border-top: solid 10rpx #F6F5FA;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx 0;
				border-bottom: solid 1px #F6F5FA;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
			.logout{
				width: 100%;
				height: 80rpx;
				border: 2rpx solid #E8E8E8;
				border-radius: 6rpx;
				text-align: center;
				line-height: 80rpx;
				margin-top: 48rpx;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
		}
	}
</style>
