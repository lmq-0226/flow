<template>
	<view class="content">
		<view class="">
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
				<view class="logout" @click="show = true">
					<text>退出登录</text>
				</view>
			</view>
		</view>
		<u-modal v-model="show" content="确定要退出登录吗？" :show-cancel-button="true" @confirm="logout"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {throttle} from '@/utils/throttle.js'
	export default {
		data() {
			return {
				show: false,
				setList1: [
					{text: '账号安全', url: './accountSecurity/accountSecurity'},
					// {text: '支付设置', url: ''},
					// {text: '实名认证', url: './authen/authen'},
					{text: '地址管理', url: './address/address'},
					// {text: '我的尺码', url: ''}
				],
				setList2: [
					// {text: '隐私设置', url: './privacy/privacy'},
					// {text: '消息设置', url: './newInfor/newInfor'},
					// {text: '通用设置', url: ''},
					{text: '关于流象', url: './about/about'}
				]
			};
		},
		onLoad() {
			
		},
		methods:{
			logout:throttle(function(){
				this.request({
					url: 'wanlshop/user/logout',
					data: {
						token: uni.getStorageSync('userInfo').token,
						client_id: ''
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: '退出成功',
							type: 'success',
							duration: 500,
							callback: ()=>{
								uni.clearStorage()
								uni.reLaunch({
									url: '/pages/login/login'
								})
							}
						})
					}
				})
			}, 2000),
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>
<style>
	page{
		background: #fff;
	}
</style>
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
				margin-top: 448rpx;
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
