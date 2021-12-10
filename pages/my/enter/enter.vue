<template>
	<view class="content">
		<view class="top">
			<view class="lettle" v-if="title == 'mer'">
				<text>入驻企业商家</text>
				<text>诚邀优质商家 期待您的加入</text>
			</view>
			<view class="lettle" v-else>
				<text>入驻个人卖家</text>
				<text>更多优惠政策 期待您的加入</text>
			</view>
			<view class="local">
				<text>可复制网址并前往电脑端入驻，请认准唯一地址</text>
				<view class="">
					<text>https:/liuxiang.com/</text>
					<image src="/static/my/copy.png" mode="" @click="copy('https:/liuxiang.com')"></image>
				</view>
				<text>入驻有任何疑问，请邮件/电话联系我们（邮件liuxiang@com/电话4004565）</text>
			</view>
		</view>
		<view class="advan">
			<view class="title">
				<text>入驻优势</text>
				<text></text>
			</view>
			<view class="item" v-for="(item,index) in advanList" :key="index">
				<image src="" mode=""></image>
				<view class="">
					<text>{{item.lettle}}</text>
					<text>{{item.desc}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { setText } from '@/utils/clipboard.js'
	export default {
		data() {
			return {
				advanList:[
					{lettle: '多种模式', desc: '预售、现货多种交易模式；'},
					{lettle: '回款快速', desc: '鉴别通过立即结算，当天回款无账期；'},
					{lettle: '安全仓储', desc: '仓储周转全程监控，交易安全有保障；'},
					{lettle: '专业客服', desc: '专线卖家客服团队，交易问题快速响应；'}
				],
				title: ''
			};
		},
		onLoad(option) {
			this.title = option.title
			var timer = setTimeout(()=>{
				this.setTitle(option.title)
				clearTimeout(timer)
			},100)
		},
		methods:{
			copy(e){
				setText(e)
			},
			setTitle(e){
				// #ifdef APP-PLUS
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				var currentWebview = page.$getAppWebview();
				var tn = currentWebview.getStyle().titleNView;
				if(e == 'per'){
					tn.tags[0].text = '个人卖家入驻'
				}else{
					tn.tags[0].text = '企业商家入驻'
				}
				currentWebview.setStyle({
				    titleNView: tn
				})
				// #endif
				// #ifdef H5
				if(e == 'per'){
					uni.setNavigationBarTitle({
						title: '个人卖家入驻'
					})
				}else{
					uni.setNavigationBarTitle({
						title: '企业商家入驻'
					})
				}
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.top{
			width: 100%;
			height: 640rpx;
			background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
			.lettle{
				width: 100%;
				height: 185rpx;
				background: url(../../../static/serve/cert_top_bg.png) no-repeat -450rpx top;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: center;
				background-size: 180%;
				>:nth-child(1){
					font-size: 48rpx;
					font-family: FZLanTingHei-H-GBK;
					font-weight: bold;
					color: #000000;
				}
				>:nth-child(2){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
					padding: 10rpx 0;
				}
			}
			.local{
				width: 670rpx;
				height: 340rpx;
				background: linear-gradient(0deg, #F0F0F0 0%, #CECECE 100%);
				border-radius: 10rpx;
				margin: auto;
				padding: 40rpx 60rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				>:nth-child(1){
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				view{
					width: 100%;
					height: 65rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #F4F3F8;
					border-radius: 6rpx;
					padding: 0 20rpx;
					text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
				>:nth-child(3){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9094A6;
				}
			}
		}
		.advan{
			padding: 36rpx 45rpx;
			.title{
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				text-align: center;
				>:nth-child(2){
					display: block;
					width: 132rpx;
					height: 12rpx;
					background: linear-gradient(90deg, #FC493D 0%, #FFFFFF 100%);
					margin: -10rpx auto 0;
				}
			}
			.item{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-top: 50rpx;
				image{
					width: 100rpx;
					height: 100rpx;
					background: #FDF2F2;
					border-radius: 50%;
					margin-right: 39rpx;
				}
				view{
					height: 100rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					>:nth-child(1){
						font-size: 34rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
				}
			}
		}
	}
</style>
