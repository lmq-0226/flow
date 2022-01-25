<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="nav">
			<image src="/static/my/scan.png" mode="" @click="scan"></image>
			<image src="/static/my/news.png" mode="" @click="go('./message/message')"></image>
			<image src="/static/my/set.png" mode="" @click="go('./set/set')"></image>
		</view>
		<view class="user">
			<view class="info" @click.stop="go('./homePage/homePage?type=1')">
				<image :src="ImgUrl + userInfo.avatar" mode=""></image>
				<view class="name">
					<view class="nickname">
						<text v-if="userInfo.nickname">{{userInfo.nickname}}</text>
						<text v-else @click.stop="go('/pages/login/login')">去登陆</text>
						<image src="/static/my/right.png" mode=""></image>
					</view>
					<text>{{userInfo.bio == '' ? '未设置签名' : userInfo.bio}}</text>
				</view>
			</view>
			<view class="number">
				<view class="" @click="praiseShow = true">
					<text>0</text>
					<text>获赞与收藏</text>
				</view>
				<view class="" @click="go('./fans/fans')">
					<text>0</text>
					<text>粉丝</text>
				</view>
				<view class="" @click="go('./attention/attention')">
					<text>0</text>
					<text>关注</text>
				</view>
				<view class="" @click="go('/pages/my/homePage/homePage?type=1')">
					<text>0</text>
					<text>动态</text>
				</view>
			</view>
		</view>
		<view class="writeCenter" @click="go('./writingCenter/writingCenter')">
			<view class="">
				<text>创作中心</text>
				<text></text>
				<text>创作赢奖励,去查看</text>
			</view>
			<image src="../../static/my/rigth.png" mode=""></image>
		</view>
		<view class="write">
			<text>创作收益</text>
			<view class="">
				<text>发布创作内容的奖励！</text>
				<text>【原创】优质内容+优质视频</text>
			</view>
		</view>
		<view class="context">
			<view class="mark">
				<view class="" v-for="(item,index) in markList" :key="index" @click="go(item.url)">
					<image :src="item.icon" mode=""></image>
					<text>{{item.lettle}}</text>
				</view>
			</view>
			<view class="MyTrading">
				<text class="title">我的交易</text>
				<view class="items">
					<view class="item" v-for="(item,index) in tradList" :key="index" @click="go(item.url)">
						<image :src="item.icon" mode=""></image>
						<text>{{item.lettle}}</text>
					</view>
				</view>
			</view>
			<view class="wallet">
				<view class="wLeft">
					<view class="" @click="go('./wallet/wallet')">
						<image src="/static/my/wallet.png" mode=""></image>
						<text>钱包</text>
					</view>
					<view class="line">
						
					</view>
				</view>
				<view class="wRight">
					<view class="" @click="go('./wallet/wallet')">
						<text>￥{{userInfo.money || '0.00'}}</text>
						<text>余额</text>
					</view>
					<view class="" @click="go('/pages/my/wallet/discount/discount')">
						<text>{{dynamic.coupon || 0}}</text>
						<text>优惠券</text>
					</view>
					<view class="" @click="go('/pages/my/wallet/gold/gold')">
						<text>{{userInfo.score || 0}}</text>
						<text>积分</text>
					</view>	
				</view>
			</view>
			<view class="upto">
				<view class="solder" @click="go('./enter/enter?title=per')">
					<text>申请个人卖家</text>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
				<view class="enter" @click="go('./enter/enter?title=mer')">
					<text>企业/品牌商家入驻</text>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
			</view>
			<view class="other">
				<view class="item" v-for="(item,index) in otherList" :key="index" @click="go(item.url)">
					<image :src="item.icon" mode=""></image>
					<text>{{item.lettle}}</text>
				</view>
			</view>
		</view>
		<!-- 获赞与收藏弹出层 -->
		<u-popup v-model="praiseShow" mode="center" :border-radius="10" @touchmove.native.stop.prevent>
			<view class="praisePopop">
				<text class="title">获赞与收藏</text>
				<view class="items">
					<view class="">
						<image src="/static/my/praise_on.png" mode=""></image>
						<text>当前发布点赞数</text>
						<text class="cut">0</text>
					</view>
					<view class="" style="margin-top: 30rpx;">
						<image src="/static/my/collect_on.png" mode=""></image>
						<text>当前获得收藏数</text>
						<text class="cut">0</text>
					</view>
				</view>
				<text class="good" @click="praiseShow = false">好的</text>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo') || {},
				praiseShow: false,
				markList:[
					{lettle: '收藏', icon: require('@/static/my/collect.png'),url: './collect/collect'},
					{lettle: '足迹', icon: require('@/static/my/foot.png'),url: './footprint/footprint'},
					{lettle: '订阅', icon: require('@/static/my/sub.png'),url: './subscribe/subscribe'}
				],
				tradList:[
					{lettle: '我买到的', icon: require('@/static/my/myBuy.png'),url: './buy/buy'},
					{lettle: '我发布的', icon: require('@/static/my/myPub.png'),url: './released/released'},
					{lettle: '我卖出的', icon: require('@/static/my/mySold.png'),url: './sell/sell'},
					{lettle: '我鉴定的', icon: require('@/static/my/myCri.png'),url: './identify/identify'},
					{lettle: '退款售后', icon: require('@/static/my/only.png'),url: './refund/refund'}
				],
				otherList:[
					{lettle: '积分商城', icon: require('@/static/my/integral.png'),url: './integral/integral'},
					{lettle: '客服中心', icon: require('@/static/my/service.png'),url: '/pages/public/callCenter'},
					// {lettle: '尺码管理', icon: require('@/static/my/size.png'),url: ''},
					{lettle: '邀请好友', icon: require('@/static/my/invite.png'),url: 'invite/invite'},
					{lettle: '意见反馈', icon: require('@/static/my/feedback.png'),url: './feedback/feedback'}
				],
				dynamic: {}
			};
		},
		onLoad() {
			
		},
		onShow() {
			this.getData()
			this.userInfo = uni.getStorageSync('userInfo')
		},
		methods:{
			getData(){
				this.request({
					url: 'wanlshop/user/refresh',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.dynamic = res.data.data.statistics.dynamic
						this.userInfo = res.data.data.userinfo
						uni.setStorageSync('userInfo', res.data.data.userinfo)
					}
				})
			},
			scan(){
				uni.scanCode({
					success: (res) => {
						console.log(res)
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
<style>
	page{
		background: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		.status_bar {
			position: sticky;
			top: 0;
			height: var(--status-bar-height);
			width: 100%;
			background: #F6F5FA;
			z-index: 9999;
		}
		.nav{
			padding: 27rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			image{
				width: 44rpx;
				height: 44rpx;
				margin-left: 35rpx;
			}
		}
		.user{
			width: 100%;
			padding: 30rpx 36rpx;
			.info{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				>image{
					width: 102rpx;
					height: 102rpx;
					border-radius: 50%;
					background: #ccc;
				}
				.name{
					height: 102rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					margin-left: 20rpx;
					.nickname{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						text{
							font-size: 32rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
					
					>text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #86868F;
					}
				}
			}
			.number{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 40rpx;
				padding: 0 20rpx;
				view{
					text-align: center;
					text{
						display: block;
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #00001D;
					}
					>:nth-child(1){
						font-size: 28rpx;
						font-weight: bold;
					}
				}
			}
		}
		.writeCenter{
			width: 710rpx;
			margin: auto;
			padding: 20rpx 30rpx;
			background: linear-gradient(-90deg, #000000 0%, #3A2020 100%);
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			view{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				text{
					display: inline-block;
					color: #fff;
					margin-right: 10rpx;
				}
				>:nth-child(1){
					font-size: 26rpx;
					font-family: AliHYAiHei;
					font-weight: bold;
					color: #F6F5FA;
				}
				>:nth-child(2){
					width: 2rpx;
					height: 24rpx;
					background: #F1F1F6;
				}
				>:nth-child(3){
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #F6F5FA;
				}
			}
			image{
				width: 44rpx;
				height: 44rpx;
			}
		}
		.write{
			width: 710rpx;
			height: 150rpx;
			margin: 20rpx auto 20rpx;
			background: url(../../static/my/writeBg.png) no-repeat;
			background-size: 100%;
			position: relative;
			>text{
				position: absolute;
				top: 40rpx;
				left: 55rpx;
				font-size: 36rpx;
				font-family: AliHYAiHei;
				font-weight: bold;
				color: #000000;
			}
			view{
				position: absolute;
				top: 48rpx;
				left: 232rpx;
				text{
					display: block;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					font-style: italic;
					color: #000000;
				}
			}
		}
		.context{
			padding: 0 10rpx;
			.mark{
				padding: 30rpx 70rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				view{
					text-align: center;
					image{
						width: 48rpx;
						height: 48rpx;
					}
					text{
						display: block;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
			.MyTrading{
				padding: 24rpx 30rpx 30rpx;
				background-color: #fff;
				border-radius: 10rpx;
				margin-top: 20rpx;
				.title{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				.items{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 30rpx;
					view{
						text-align: center;
						image{
							width: 48rpx;
							height: 48rpx;
						}
						text{
							display: block;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
						}
					}
				}
			}
			.wallet{
				padding: 30rpx 65rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #fff;
				border-radius: 10rpx;
				margin-top: 20rpx;
				.wLeft{
					width: 20%;
				}
				.wRight{
					width: 70%;
				}
				.line{
					width: 1rpx;
					height: 60rpx;
					background: #E8E8E8;
				}
				>view{
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						height: 80rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						text-align: center;
						image{
							width: 44rpx;
							height: 44rpx;
						}
						text:nth-child(1){
							font-size: 28rpx;
							font-weight: bold;
							color: #00001D;
						}
						text{
							display: block;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
						}
					}
				}
			}
			.upto{
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;
				.solder,.enter{
					padding: 30rpx;
					width: 49%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: #fff;
					border-radius: 10rpx;
					text{
						font-size: 26rpx;
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
			.other{
				padding: 36rpx 44rpx 30rpx;
				background-color: #fff;
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				view{
					text-align: center;
					image{
						width: 66rpx;
						height: 66rpx;
					}
					text{
						display: block;
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
				}
			}
		}
		// 获赞与收藏弹窗
		.praisePopop{
			height: 470rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			text-align: center;
			padding: 30rpx 80rpx;
			.title{
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			.items{
				view{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 48rpx;
						height: 48rpx;
						margin-right: 25rpx;
					}
					text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #81818F;
					}
					.cut{
						margin-left: 10rpx;
						font-weight: bold;
						color: #000;
					}
				}
			}
			.good{
				padding: 20rpx 83rpx;
				background: #F55454;
				border-radius: 10rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FEFEFE;
			}
		}
	}
</style>
