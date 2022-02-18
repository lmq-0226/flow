<template>
	<view class="content">
		<view class="logo">
			<image :src="ImgUrl + about.logo" mode=""></image>
			<text>{{about.name}}</text>
		</view>
		<view class="list">
			<view class="" v-for="(item,index) in list" :key="index" @click="go(item.url)">
				<text>{{item.text}}</text>
				<image src="/static/serve/right.png" mode=""></image>
			</view>
		</view>
		<view class="copyright">
			<text>{{about.name}} 版权所有</text>
			<text>Copyright © {{about.copyright}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				about: {},
				list: [
					// { text: '给我们打分', url: '' },
					// { text: '公司信息', url: '' },
					{ text: '协议与规则', url: '/pages/public/richtext?url=index/agreement&type=user_agreement' },
					{ text: '隐私政策', url: '/pages/public/richtext?url=index/agreement&type=privacy_protection' },
					// { text: '检查更新', url: '' }
				]
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'wanlshop/common/about',
					method: "GET"
				}).then(res=>{
					if(res.data.code == 1){
						this.about = res.data.data
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
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 150rpx 0;
		.logo{
			text-align: center;
			image{
				width: 110rpx;
				height: 110rpx;
			}
			text{
				display: block;
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
		.list{
			padding: 0 30rpx;
			view{
				padding: 37rpx 6rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: solid 1px #f8f8f8;
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
		}
		.copyright{
			text-align: center;
			text{
				display: block;
				font-size: 24rpx;
				color: #aaa;
			}
		}
	}
</style>
