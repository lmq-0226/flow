<template>
	<view class="content">
		<!-- <view class="status_bar"></view>
		<view class="nav">
			<view class="left">
				<image src="/static/comm/back.png" mode="" @click="back"></image>
				<image src="/static/comm/avatar.png" mode=""></image>
				<view class="">
					<text>珂珂</text>
					<text>9月21日·苏州市</text>
				</view>
			</view>
			<view class="right">
				<text>关注</text>
				<image src="/static/comm/more.png" mode=""></image>
			</view>
		</view> -->
		<view class="rich">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
		<view class="comment">
			<text class="title">{{totalCount}}条评论</text>
			<view class="list">
				<!-- 评论列表 -->
				<view class="item" v-for="(elem,cut) in commentList" :key="cut">
					<!-- 头像 -->
					<image :src="ImgUrl + elem.userinfo.avatar" mode=""></image>
					<view class="critic">
						<!-- 评论 -->
						<view class="first">
							<view class="left">
								<view class="name">
									<view class="">
										<text>{{elem.userinfo.nickname}}</text>
										<text class="writer" v-if="user_id == elem.user_id">作者</text>
									</view>
								</view>
								<text>{{elem.content}}</text>
								<view class="">
									<text>{{elem.create_date}}</text>
									<text @click="reply(elem.id)">回复</text>
								</view>
							</view>
							<view class="right" @click="praise(elem.id, 'comment')">
								<image v-if="elem.likes == 1" src="/static/comm/praise_on.png" mode=""></image>
								<image v-else src="/static/comm/praise.png" mode=""></image>
								<text>{{elem.likes}}</text>
							</view>
						</view>
						<!-- 回复列表 -->
						<view class="item" v-for="(item,index) in elem.children" :key="index">
							<image :src="ImgUrl + item.userinfo.avatar" mode=""></image>
							<view class="critic">
								<view class="first">
									<view class="left">
										<view class="name">
											<view class="">
												<text>{{item.userinfo.nickname}}</text>
												<text class="writer"  v-if="user_id == elem.user_id">作者</text>
											</view>
											<u-icon name="play-right-fill" size="12"></u-icon>
											<view class="">
												<text>大马</text>
												<text class="writer"  v-if="user_id == elem.user_id">作者</text>
											</view>
										</view>
										<text>{{item.content}}</text>
										<view class="">
											<text>{{item.create_date}}</text>
											<text @click="reply(item.id)">回复</text>
										</view>
									</view>
									<view class="right" @click="praise(item.id, 'comment')">
										<image v-if="item.likes == 1 " src="/static/comm/praise_on.png" mode=""></image>
										<image v-else src="/static/comm/praise.png" mode=""></image>
										<text>{{item.likes}}</text>
									</view>
								</view>
							</view>
						</view>
						<!-- 加载更多回复 -->
						<view class="" @click="load" v-if="elem.comments > elem.children.length">
							<u-loadmore :status="status" v-if="loadmore"/>
						</view>
					</view>
				</view>
				<view class="">
					<u-loadmore :status="comStatus" :load-text="loadText"/>
				</view>
				<!-- <view class="loading" v-if="loading">
					<u-loading mode="flower"></u-loading>
					<text>加载中</text>
				</view>
				<view class="null" v-else>
					<text>暂时没有更多了~</text>
				</view> -->
			</view>
		</view>
		<view class="bottom">
			<u-input v-model="value" placeholder="来说两句..." :custom-style="customStyle" confirm-type="send" @confirm="send"/>
			<view class="right">
				<view class="" @click="praise(0, 'article')">
					<image v-if="detail.isLike" src="/static/my/praise_on.png" mode=""></image>
					<image v-else src="/static/comm/praise2.png" mode=""></image>
					<text>{{detail.likes}}</text>
				</view>
				<view class="" @click="collect">
					<image v-if="detail.isCollect" src="/static/my/collect_on.png" mode=""></image>
					<image v-else src="/static/comm/collect.png" mode=""></image>
					<text>{{detail.collections}}</text>
				</view>
			</view>
		</view>
		<u-back-top :scrollTop="scrollTop" top="800"></u-back-top>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_id: uni.getStorageSync('userInfo').id,
				value: '',
				scrollTop: 0,
				status: 'loadmore',
				comStatus: 'custom', // 是否显示暂时没有更多
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了',
					custom: ''
				},
				list: 2, // 回复循环数据
				page: 0, // 分页
				loadmore: true, // 回复列表如果加载完毕，这隐藏加载更多标签
				comList: 1, // 评论数据
				loading: true ,// 评论列表加载中
				commentList: [] ,// 评论列表
				id: '',
				customStyle: {
					background: '#F6F5FA',
					width: '60%',
					borderRadius: '30rpx',
					padding: '0 25rpx'
				},
				pid: 0,
				detail: {},
				goodsDetail: {},
				total_count: 0
			};
		},
		onLoad(option) {
			this.id = option.id
			this.getDetail()
			this.getComment()
		},
		methods:{
			getDetail(){
				this.request({
					url: 'article/index/detail',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.detail = res.data.data
					}
				})
			},
			
			// 评论列表
			getComment(){
				this.request({
					url: 'article/index/comment',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.id,
						pid: 0,
						sort: 'new',
						level: 1
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.commentList = res.data.data.datas
						this.totalCount = res.data.data.totalCount
						console.log(this.commentList)
					}
				})
			},
			
			praise(e, n){
				this.request({
					url: 'article/index/like',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.detail.id,
						comment_id: e,
						type: n
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: res.data.msg,
							type: 'success'
						})
						this.getComment()
						this.getDetail()
					}
				})
			},
			collect(){
				this.request({
					url: 'article/index/collect',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.detail.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: res.data.msg,
							type: 'success'
						})
						this.getDetail()
					}
				})
			},
			// 点击键盘右下角发送按钮
			send(e){
				this.request({
					url: 'article/index/create',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.id,
						pid: this.pid,
						content: this.value
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.getComment()
						this.value = ''
					}
				})
			},
			reply(e){
				this.pid = e
				// this.request({
				// 	url: 'article/index/create',
				// 	data: {
				// 		token: uni.getStorageSync('userInfo').token,
				// 		id: this.id,
				// 		pid: e,
				// 		content: this.value
				// 	}
				// }).then(res=>{
				// 	if(res.data.code == 1){
				// 		this.getComment()
				// 		this.value = ''
				// 	}
				// })
			},
			back(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding-bottom: 100rpx;
		.nav{
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 18rpx;
			position: sticky;
			top: var(--status-bar-height);
			background: #fff;
			z-index: 999;
			border-bottom: solid 1px #f8f8f8;
			.left{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				>:nth-child(1){
					width: 44rpx;
					height: 44rpx;
				}
				>:nth-child(2){
					width: 58rpx;
					height: 58rpx;
					margin: 0 11rpx 0 18rpx;
				}
				view{
					height: 58rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					>:nth-child(1){
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
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
			.right{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				>:nth-child(1){
					display: inline-block;
					width: 102rpx;
					height: 48rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 1px solid #FC493D;
					border-radius: 24rpx;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FC493D;
					margin-right: 23rpx;
				}
			}
		}
		
		.rich{
			min-height: 60vh;
		}
		
		.comment{
			padding: 27rpx;
			.title{
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			.list{
				width: 100%;
				>.item{
					border-bottom: solid 1px #F7F7FB;
				}
				.item{
					width: 100%;
					display: flex;
					justify-content: space-between;
					padding: 20rpx 0;
					>image{
						width: 54rpx;
						height: 54rpx;
						border-radius: 50%;
						margin-right: 23rpx;
					}
					.critic{
						width: calc(100% - 54rpx);
						.first{
							display: flex;
							justify-content: space-between;
							.left{
								text{
									display: block;
								}
								.name{
									font-size: 24rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #686879;
									display: flex;
									justify-content: flex-start;
									align-items: center;
									
									view{
										margin-left: 10rpx;
										.writer{
											margin-left: 5rpx;
											width: 58rpx;
											height: 26rpx;
											display: flex;
											justify-content: center;
											align-items: center;
											background: #F55454;
											border-radius: 6rpx;
											font-size: 18rpx;
											font-family: PingFang SC;
											font-weight: 500;
											color: #FFFFFF;
										}
									}
									
								}
								>:nth-child(2){
									font-size: 26rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #000000;
								}
								view{
									font-size: 24rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #9392A0;
									display: flex;
									justify-content: flex-start;
									align-items: center;
									>:nth-child(2){
										margin-left: 20rpx;
										font-size: 26rpx;
										font-family: PingFang SC;
										font-weight: boldbold;
										color: #000000;
									}
								}
							}
							.right{
								display: flex;
								justify-content: flex-end;
								align-items: center;
								height: 44rpx;
								image{
									width: 44rpx;
									height: 44rpx;
									vertical-align: middle;
								}
								text{
									font-size: 22rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #686879;
								}
							}
						}
					}
				}
				.loading{
					height: 100rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.null{
					text-align: center;
					padding: 20rpx 0;
					font-size: 26rpx;
					color: #555555;
				}
			}
		}
		
		.bottom{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 98rpx;
			padding: 0 30rpx;
			background: #fff;
			z-index: 999;
			border-top: solid 1px #f2f2f2;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.right{
				width: 35%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				view{
					width: 38%;
					height: 48rpx;
					position: relative;
					image{
						width: 48rpx;
						height: 48rpx;
					}
					text{
						position: absolute;
						top: 0;
						left: 48rpx;
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
		}
	}
</style>
