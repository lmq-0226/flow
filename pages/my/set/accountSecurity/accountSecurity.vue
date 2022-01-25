<template>
	<view class="content">
		<view class="auth">
			<view class="" @click="go('../authen/authen')" v-if="authen">
				<text>实名认证</text>
				<text>去认证</text>
			</view>
			<view class="" v-else>
				<text>实名认证</text>
				<text>{{authenInfo.name}}</text>
			</view>
			<!-- @click="go('./bindPhone')" -->
			<view class="">
				<text>绑定手机</text>
				<text>{{userInfo.mobile}}</text>
			</view>
			<view class="" @click="go('./setPass')">
				<text>设置登录密码</text>
			</view>
		</view>
		<!-- <view class="gap">
			<text>第三方账号绑定</text>
		</view>
		<view class="wx">
			<view class="">
				<image src="/static/my/wx.png" mode=""></image>
				<text>微信</text>
			</view>
			<text>解绑</text>
		</view>
		<view class="cancel">
			<text>账户注销</text>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo') || {},
				authenInfo: {},
				authen: false
			};
		},
		onLoad() {
			console.log(uni.getStorageSync('userInfo'))
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'userauth/info',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.authenInfo = res.data.data
						this.authen = false
					}else{
						this.authen = true
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

<style lang="scss">
	.content{
		.auth{
			border-top: solid 10rpx #F6F5FA;
			padding: 0 36rpx;
			view{
				padding: 37rpx 40rpx 37rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: solid 1px #F6F5FA;
				background: url(../../../../static/serve/right.png) no-repeat right center;
				background-size: 44rpx;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
		}
		.gap{
			padding: 25rpx 36rpx;
			background: #F6F4FA;
			text{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #686879;
			}
		}
		.wx{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 28rpx 37rpx;
			border-bottom: solid 10rpx #F6F5FA;
			view{
				display: flex;
				align-items: center;
				image{
					width: 48rpx;
					height: 48rpx;
					margin-right: 27rpx;
				}
				text{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			>text{
				padding: 8rpx 22rpx;
				border: 2px solid #9393A7;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
		.cancel{
			padding:  0 36rpx;
			text{
				padding: 37rpx 0;
				display: block;
				border-bottom: solid 1px #F6F5FA;
				background: url(../../../../static/serve/right.png) no-repeat right center;
				background-size: 44rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
	}
</style>
