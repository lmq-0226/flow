<template>
	<view class="content">
		<view class="nav">
			<view class="status_bar" :style="{backgroundColor: 'rgba(255,66,67,' + opacity + ')'}"></view>
			<view class="col_flex">
				<view class="nav-bar" :style="{backgroundColor: 'rgba(255,66,67,' + opacity + ')'}">
					<image src="/static/my/back.png" mode="" @click="back"></image>
					<view class="">
						<!-- <image src="/static/my/search.png" mode=""></image>
						<image src="/static/my/wShare.png" mode=""></image> -->
					</view>
				</view>
				<view class="stopHeader">
					<view class="lettle">
						<view class="left">
							<text>穿搭研究所</text>
							<text>43.5万人已加入</text>
						</view>
						<view class="right" @click="atten = !atten">
							<text class="attened" v-if="atten">已加入</text>
							<text class="atten" v-else>加入</text>
						</view>
					</view>
					<view class="desc">
						<text>不知道穿什么，就来这里找找灵感吧。不知道穿什么，就来这里找找灵感吧。不知道穿什么，就来这里找找灵感吧。不知道穿什么，就来这里找找灵感吧。不知道穿什么，就来这里找找灵感吧。</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="true" :current="current" active-color="#FF4243" @change="change"></u-tabs>
		</view>
		<view class="goodsList">
			<!-- 瀑布流 -->
			<view class="items" v-for="(item,index) in forumList" :key="item.id">
				<view class="item">
					<view class="info">
						<image :src="item.avatar" mode=""></image>
						<view class="">
							<text>{{item.name}}</text>
							<text>{{item.time}}</text>
						</view>
					</view>
					<view class="speech">
						<text>{{item.speech}}</text>
					</view>
					<view class="photos">
						<view class="" v-for="(elem,index) in item.photos.slice(0,3)" :key="index">
							<image :src="elem" mode="heightFix"></image>
							<text v-if="item.photos.length > 3 && index == 2">+{{item.photos.length - 3}}</text>
						</view>
					</view>
					<view class="tag">
						<view class="" v-for="(elem,index) in item.tags" :key="index">
							<image src="/static/serve/tag.png" mode=""></image>
							<text>{{elem}}</text>
						</view>
					</view>
					<view class="btns">
						<image src="/static/serve/share.png" mode=""></image>
						<view class="">
							<view class="" style="margin-right: 20rpx;">
								<image src="/static/comm/praise2.png" mode=""></image>
								<text>{{item.parise}}</text>
							</view>
							<view class="" style="margin-right: 20rpx;">
								<image src="/static/serve/discuss.png" mode=""></image>
								<text>{{item.comment}}</text>
							</view>
							<view class="">
								<image v-if="item.topStatus" src="/static/comm/collect.png" mode=""></image>
								<image v-else src="/static/comm/collect.png" mode=""></image>
								<text>{{item.top}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 加载更多 -->
			<u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabList: [
					{
						name: '推荐'
					}, {
						name: '电影'
					}, {
						name: '电视剧'
					}, {
						name: '小视频'
					}, {
						name: '游戏'
					}, {
						name: '校园'
					}, {
						name: '影视'
					}, {
						name: '音乐'
					},
				],
				loadStatus: 'loadmore', // 加载更多状态
				forumList:[
					{
						id: 1, name: '天天打篮球', avatar: require('@/static/avatar.png'), time: '刚刚',
						speech:'朋友国外留学回来帮忙带的，因为盒子要额外花钱所以没	带盒有需要可以补充谢谢！',
						photos:[
							require('@/static/pub/bbt.png'),
							require('@/static/pub/ttq.png'),
							require('@/static/pub/xj.png'),
							require('@/static/pub/ch.png')
						],
						tags:['Balenciaga','Sweet'],
						parise: 5,
						comment:9,
						top: 2,
						topStatus: false
					},{
						id: 2, name: '彩虹独角兽', avatar: require('@/static/avatar2.png'), time: '2021年10月21日',
						speech:'家人们 我无语住了 我就一整个大慌张 帮帮忙看一下 谢谢了~',
						photos:[
							require('@/static/pub/bql.png'),
							require('@/static/pub/xj.png')
						],
						tags:['Sweet'],
						parise: 106,
						comment:18,
						top: 15,
						topStatus: true
					},{
						id: 3, name: '彩虹独角兽', avatar: require('@/static/avatar2.png'), time: '2021年10月21日',
						speech:'家人们 我无语住了 我就一整个大慌张 帮帮忙看一下 谢谢了~',
						photos:[
							require('@/static/pub/bql.png'),
							require('@/static/pub/xj.png')
						],
						tags:['Sweet'],
						parise: 106,
						comment:18,
						top: 15,
						topStatus: true
					}
				],
				show: false, // 弹窗
				opacity: 0 ,// 导航栏背景透明度
				priceSty: {
					background: '#F9F9FB',
					padding: '0 20rpx'
				},
				atten: false
			};
		},
		// 导航栏背景及字体颜色初始化
		onReady() {
			uni.setNavigationBarColor({
			    frontColor: '#ffffff',
				backgroundColor: 'rgba($color: #fff, $alpha: 0)'
			})
		},
		// 触底加载更多，切换加载更多loading
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		onLoad() {
			
		},
		// 监听页面滚动，动态设置导航栏背景
		onPageScroll(e) {
			this.opacity = (e.scrollTop - 80) / 125
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			// 分类
			change(e){
				this.current = e
			},
			// 模拟数据请求
			addRandomData() {	
				
			},
			popupClose(){
				uni.setNavigationBarColor({
				    frontColor: '#ffffff',
					backgroundColor: 'rgba(255,66,67,' + this.opacity + ')'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		// 适配自定义导航栏
		.status_bar {
			position: fixed;
			top: 0;
			height: var(--status-bar-height);
			width: 100%;
			z-index: 9999;
		}
		.nav{
			width: 100%;
			height: 400rpx;
			background: url(../../../../static/my/topBg.jpg) no-repeat;
			background-size: 100%;
			.col_flex{
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				height: calc(400rpx - var(--status-bar-height));
			}
			.nav-bar{
				position: fixed;
				top: var(--status-bar-height);
				width: 100%;
				z-index: 999;
				display: flex;
				justify-content: space-between;
				align-content: enter;
				padding: 20rpx;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				view{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					image{
						margin-left: 35rpx;
					}
				}
			}
			.stopHeader{
				margin: 0 20rpx;
				padding: 0 20rpx;
				.lettle{
					display: flex;
					justify-content: space-between;
					.left{
						display: flex;
						flex-direction: column;
						text{
							color: #fff;
						}
						>:nth-child(1){
							font-size: 36rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #FFFFFF;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							padding: 20rpx 0;
						}
					}
					.right{
						
						text{
							display: block;
							width: 140rpx;
							height: 54rpx;
							border-radius: 27rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
						}
						.atten{
							background: #F55454;
						}
						.attened{
							background: #cbcbcb;
						}
					}
				}
				.desc{
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					overflow: hidden;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
			}
		}
		.tabs{
			border-radius: 10px 10px 0px 0px;
			overflow: hidden;
			margin: -20rpx auto;
			padding: 5rpx 10rpx 20rpx;
			background-color: #fff;
		}
		.goodsList{
			// padding: 0 10rpx;
			background: #fff;
			.item{
				padding: 30rpx;
				.info{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						width: 58rpx;
						height: 58rpx;
					}
					view{
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						margin-left: 14rpx;
						>:nth-child(1){
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9392A0;
						}
					}
				}
				.speech{
					margin-top: 25rpx;
					text{
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
				}
				.photos{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 19rpx;
					view{
						position: relative;
						height: 220rpx;
						image{
							height: 100%;
						}
						text{
							position: absolute;
							right: 0;
							bottom: 0;
							padding: 7rpx 11rpx;
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
							background: #cac0c0;
							opacity: 0.7;
							border-radius: 6rpx 0px 6rpx 0px;
						}
					}
				}
				.tag{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-wrap: wrap;
					view{
						padding: 11rpx;
						background: #F6F5FA;
						border-radius: 6rpx;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						margin-top: 20rpx;
						margin-right: 10rpx;
						image{
							width: 26rpx;
							height: 26rpx;
							background: #FD3B4E;
							border-radius: 4px;
							margin-right: 7rpx;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #FD4556;
						}
					}
				}
				.btns{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 30rpx;
					image{
						width: 44rpx;
						height: 44rpx;
					}
					>view{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						view{
							height: 48rpx;
							position: relative;
							display: flex;
							align-items: top;
							image{
								width: 48rpx;
								height: 48rpx;
							}
							text{
								font-size: 20rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #000000;
							}
						}
					}
				}
			}
		}
		.popup{
			padding: 80rpx 30rpx 120rpx;
			position: relative;
			touch-action: none;
			.close{
				width: 44rpx;
				height: 44rpx;
				z-index: 999;
				position: fixed;
				top: 60rpx;
				right: 40rpx;
			}
			.item{
				.title{
					display: block;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					padding: 30rpx 0;
				}
				.range{
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						display: inline-block;
						width: 26rpx;
						height: 2px;
						background: #a5a5a5;
						margin: 0 30rpx;
					}
				}
				.list{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					:nth-child(3n+2){
						margin: 0 5% 19rpx;
					}
					view{
						display: flex;
						justify-content: center;
						align-items: center;
						width: 30%;
						padding: 14rpx 0;
						margin-bottom: 19rpx;
						background: #F9F9FB;
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
			}
			.btns{
				border-top: solid 1px #f8f8f8;
				width: calc(100% - 60rpx);
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: fixed;
				background-color: #fff;
				padding: 20rpx 0;
				bottom: 0;
				text{
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
				}
				>:nth-child(1){
					width: 160rpx;
					height: 74rpx;
					border: 2rpx solid #E8E8E8;
					border-radius: 6rpx;
					color: #000000;
				}
				>:nth-child(2){
					width: 427rpx;
					height: 74rpx;
					border-radius: 6rpx;
					background: #F35455;
					color: #fff;
				}
			}
		}
	}
</style>
