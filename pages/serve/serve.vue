<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="nav">
			<image src="/static/serve/message.png" mode="" @click="go('./consult/consult')"></image>
			<text @click="go('./consult/consult')">资讯</text>
		</view>
		<view class="context">
			<view class="detection" v-for="item in projectList" :key="item.id" @click="go(item.url)">
				<view class="lettle">
					<view class="title">
						<text>{{item.title}}</text>
						<text>{{item.sub}}</text>
					</view>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
				<view class="project">
					<view class="" v-for="elem in item.project" :key="elem.sid">
						<image :src="ImgUrl + elem.image" mode=""></image>
						<text>{{elem.name}}</text>
					</view>
				</view>
			</view>
			<view class="forum">
				<view class="title">
					<text>讨论区</text>
					<view class="">
						<text :class="forumCheck == 1? 'active' : ''" @click="forumCheck = 1">最新</text>
						<text :class="forumCheck == 2? 'active' : ''" @click="forumCheck = 2">推荐</text>
					</view>
				</view>
				<view class="items" v-for="(item,index) in forumList" :key="item.id">
					<u-gap height="10" bg-color="#F8F8F8"></u-gap>
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
									<image src="/static/serve/discuss.png" mode=""></image>
									<text>{{item.comment}}</text>
								</view>
								<view class="">
									<image v-if="item.topStatus" src="/static/serve/top_on.png" mode=""></image>
									<image v-else src="/static/serve/top.png" mode=""></image>
									<text>{{item.top}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <image class="publish" src="/static/serve/publish.png" mode="" @click="go('./publish/publish')"></image> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				forumCheck: 1,
				projectList:[
					{id: 1,title: '鉴定检测',url: './authen/authen',sub: '专业鉴别 快速准确',project:[
						{sid: 2, lettle: '箱包'},
						{sid: 3, lettle: '珠宝'},
						{sid: 4, lettle: '数码'},
						{sid: 5, lettle: '服饰'}
					]},
					{id: 6,title: '生活服务',url: './life/life',sub: '专业鉴别 快速准确',project:[
						{sid: 7, name: '新品发售'},
						{sid: 8, name: '新品发售'},
						{sid: 9, name: '新品发售'},
						{sid: 10, name: '新品发售'}
					]}
				],
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
						comment:18,
						top: 15,
						topStatus: true
					}
				]
				
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'service/index/home_page',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.projectList[0].project = res.data.data.appraisal_cate
						this.projectList[1].project = res.data.data.life_service
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
		background-color: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		.publish{
			position: fixed;
			bottom: 100rpx;
			right: 30rpx;
			width: 100rpx;
			height: 100rpx;
			z-index: 99999;
			/* #ifdef H5 */
			bottom: 200rpx;
			/* #endif */
		}
		.nav{
			padding: 22rpx 30rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			background-color: #fff;
			position: sticky;
			top: var(--status-bar-height);
			z-index: 999;
			border-bottom: solid 1px #f8f8f8;
			image{
				width: 44rpx;
				height: 44rpx;
			}
			text{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
		.context{
			padding: 20rpx;
			.detection{
				padding: 30rpx 21rpx;
				background-color: #fff;
				border-radius: 10rpx;
				margin-bottom: 20rpx;
				.lettle{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.title{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						>:nth-child(1){
							font-size: 42rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
							margin-right: 24rpx;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
						}
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
				.project{
					margin-top: 20rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						text-align: center;
						max-width: 150rpx;
						image{
							width: 150rpx;
							height: 120rpx;
							background-color: #e8e8e8;
						}
						text{
							display: block;
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
							overflow: hidden;
							-webkit-line-clamp: 1;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
						}
					}
				}
			}
			.forum{
				background-color: #fff;
				.title{
					padding: 30rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					// margin-bottom: 30rpx;
					>text{
						font-size: 42rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					view{
						text{
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #686879;
							padding: 11rpx 20rpx;
						}
						.active{
							font-weight: bold;
							color: #000000;
							background: #F8F8F8;
							border-radius: 6rpx;
						}
					}
				}
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
		}
		
	}
</style>
