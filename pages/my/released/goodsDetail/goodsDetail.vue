<template>
	<view class="content" :catchtouchmove="false">
		<view class="status_bar"></view>
		<view class="nav">
			<view class="left" @click="go(loginId == goodsDetail.user_id ? '/pages/my/homePage/homePage?type=myfind' : '/pages/my/homePage/homePage?type=works&id=' + goodsDetail.user_no)">
				<image src="/static/comm/back.png" mode="" @click.stop="back"></image>
				<image :src="user.url" mode=""></image>
				<view class="">
					<text>{{user.nickname}}</text>
					<text>9月21日·苏州市</text>
				</view>
			</view>
			<view class="right">
				<!-- <view class="" v-if="loginId != goodsDetail.user_id">
					<text v-if="goodsDetail.isFollow == 1" class="attened" @click="follow">已关注</text>
					<text v-else class="atten" @click="follow">关注</text>
				</view> -->
				<image src="/static/serve/share.png" mode="" @click="sharePopup = true"></image>
				<image src="/static/comm/more.png" mode=""></image>
			</view>
		</view>
		<view class="middle">
			<view class="price">
				<view class="">
					<text>￥</text>
					<text>{{goodsDetail.price}}</text>
				</view>
				<text>{{goodsDetail.express_type_text}}</text>
				<text>{{goodsDetail.state}}</text>
			</view>
			<view class="desc">
				<text>{{goodsDetail.name}}</text>
				<text>{{goodsDetail.content}}</text>
			</view>
			<view class="brief">
				<view class="">
					<text>品牌</text>
					<text>{{idlebrand.name}}</text>
				</view>
				<view class="">
					<text>来源</text>
					<text>{{goodsDetail.source}}</text>
				</view>
				<view class="">
					<text>状态</text>
					<text>{{goodsDetail.status_text}}</text>
				</view>
			</view>
			<view class="detail">
				<image v-for="(item,index) in goodsDetail.cdn_images" :key="index" :src="item" mode="widthFix" @click="pvew(index,goodsDetail.cdn_images)"></image>
				<view class="delBot">
					<!-- {{goodsDetail.like_nums}}人想要· -->
					<text>浏览{{goodsDetail.view_nums}}</text>
					<view class="report" @click="go('/pages/public/report?goods_id=' + goodsDetail.id + '&user_id=' + goodsDetail.user_id + '&type=3')">
						<image src="/static/comm/report.png" mode=""></image>
						<text>举报</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="comment">
			<text class="title">{{goodsDetail.comments_nums}}条评论</text>
			<view class="list">
				<!-- 评论列表 -->
				<view class="item" v-for="(elem,cut) in commentList" :key="cut">
					<!-- 头像 -->
					<image :src="ImgUrl + elem.user.avatar" mode=""></image>
					<view class="critic">
						<!-- 评论 -->
						<view class="first">
							<view class="left">
								<view class="name">
									<view class="">
										<text>{{elem.user.nickname}}</text>
										<text class="writer" v-if="goodsDetail.user_id == elem.user_id">作者</text>
									</view>
								</view>
								<text>{{elem.content}}</text>
								<view class="">
									<text>{{elem.createtime}}</text>
									<text class="backBt" @click="reply(elem.id)">回复</text>
								</view>
							</view>
							<view class="right">
								<image v-if="elem.isLike" src="/static/comm/praise_on.png" mode=""></image>
								<image v-else src="/static/comm/praise.png" mode=""></image>
								<text>{{elem.likes}}</text>
							</view>
						</view>
						<!-- 回复列表 -->
						<view class="item" v-for="(item,index) in elem.children" :key="index">
							<image :src="ImgUrl + item.user.avatar" mode=""></image>
							<view class="critic">
								<view class="first">
									<view class="left">
										<view class="name">
											<view class="">
												<text>{{item.user.nickname}}</text>
												<text class="writer" v-if="goodsDetail.user_id == item.user_id">作者</text>
											</view>
										</view>
										<text>{{item.content}}</text>
										<view class="">
											<text>{{item.createtime}}</text>
											<text class="backBt" @click="reply(elem.id, item.user.nickname)">回复</text>
										</view>
									</view>
									<view class="right">
										<image v-if="item.isLike" src="/static/comm/praise_on.png" mode=""></image>
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
			<!-- <u-input placeholder="来说两句..." :custom-style="customStyle" confirm-type="send" @confirm="send"/> -->
			<view class="right">
				<view class="" @click="enshrine('collect')">
					<image v-if="goodsDetail.isCollect" src="/static/my/collect_on.png" mode=""></image>
					<image v-else src="/static/comm/collect.png" mode=""></image>
					<text>收藏</text>
				</view>
				<view class="" @click="enshrine('want')">
					<image v-if="goodsDetail.isLikes" src="/static/my/praise_on.png" mode=""></image>
					<image v-else src="/static/comm/praise2.png" mode=""></image>
					<text>想要</text>
				</view>
				<view class="" @click="reply(0)">
					<image src="/static/my/mes_comment.png" mode=""></image>
					<text>评论</text>
				</view>
			</view>
			<view class="ing" v-if="Ain">
				<text>{{goodsDetail.status_text}}</text>
			</view>
			<view class="btns" v-else>
				<text @click="go('/pages/leave/leaveShop/confirmOrder/confirmOrder?type=sale&pay=buy&goods_id=' + goodsDetail.id)">前往购买</text>
			</view>
		</view>
		<u-popup v-model="sharePopup" mode="bottom" border-radius="20" @touchmove.native.stop.prevent>
			<view class="sharePopup">
				<text class="title">分享至</text>
				<view class="items">
					<view class="" v-if="install">
						<image src="/static/my/wx.png" mode=""></image>
						<text>微信好友</text>
					</view>
					<view class="" v-if="install">
						<image src="/static/my/wxc.png" mode=""></image>
						<text>朋友圈</text>
					</view>
					<view class="">
						<image src="/static/comm/copy.png" mode=""></image>
						<text>复制链接</text>
					</view>
					<view class="" @click="create">
						<image src="/static/comm/photo.png" mode=""></image>
						<text>生成分享图</text>
					</view>
				</view>
				<view class="close" @click="sharePopup = false">
					取消
				</view>
			</view>
		</u-popup>
		<u-popup v-model="sharePhoto" mode="bottom" @touchmove.native.stop.prevent>
			<view class="sharePhoto">
				<view class="photo">
					<!-- #ifdef APP-PLUS -->
					<canvas style="width: 660rpx; height: 660rpx;" canvas-id="sharePoster" @error="createErr"></canvas>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<canvas style="width: 620rpx; height: 620rpx;" canvas-id="sharePoster" @error="createErr"></canvas>
					<!-- #endif -->
				</view>
				<view class="">
					<view class="items">
						<view class="" v-if="install">
							<image src="/static/my/wx.png" mode=""></image>
							<text>微信好友</text>
						</view>
						<view class="" v-if="install">
							<image src="/static/my/wxc.png" mode=""></image>
							<text>朋友圈</text>
						</view>
						<view class="" @click="downLoad">
							<image src="/static/comm/downLoad.png" mode=""></image>
							<text>下载到相册</text>
						</view>
					</view>
					<view class="close" @click="sharePhoto = false">
						取消
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="commentPopup" mode="bottom" border-radius="20" @close="commentClose" @touchmove.native.stop.prevent>
			<view class="commentPopup">
				<u-input v-model="comment.content" type="text" :focus="replyFocus" />
				<text @click="send()">发送</text>
			</view>
		</u-popup>
		<u-back-top :scrollTop="scrollTop" top="800"></u-back-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginId: uni.getStorageSync('userInfo').id || '', // 当前登录用户id
				id: '',
				scrollTop: 0,
				status: 'loadmore',
				comStatus: 'custom', // 是否显示暂时没有更多
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了',
					custom: ''
				},
				iconType: 'flower',
				list: 2, // 回复循环数据
				page: 0, // 分页
				loadmore: true, // 回复列表如果加载完毕，这隐藏加载更多标签
				comList: 1, // 评论数据
				loading: true ,// 评论列表加载中
				customStyle: {
					background: '#F6F5FA',
					width: '60%',
					borderRadius: '30rpx',
					padding: '0 25rpx'
				},
				sharePopup: false,
				sharePhoto: false,
				commentPopup: false,
				commentText: '',
				replyFocus: false,
				ctx: '',
				atten: false, // 关注状态
				praise: false ,// 点赞状态
				collect: false ,// 收藏状态
				goodsDetail: {} ,// 商品详情
				user: {}, // 用户
				idlebrand: {},// 品牌,
				commentList: [] ,// 评论列表
				authen_text: '',
				comment: {
					token: uni.getStorageSync('userInfo').token,
					pid: '',
					goods_id: '',
					content: ''
				},
				Ain: false,// 当前商品是否为自己发布
				install: uni.getStorageSync('install')
			};
		},
		onReady() {
			
		},
		onLoad(option) {
			this.id = option.id
			this.getData(option.id)
			this.getCommentList(option.id)
		},
		onShow() {
			console.log(uni.getStorageSync('userInfo').id)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		onReachBottom(){
			if(this.comList <= 0){
				this.loading = false
				return
			}
			if(this.comList >= 5) return
			this.loading = true
			// 模拟数据加载
			let timer = setTimeout(() => {
				this.comList += 2;
				if(this.comList >= 5) {
					this.loading = false
				}else{
					this.loading = true	
				}
			}, 2000)
		},
		methods:{
			// 闲置详情
			getData(e){
				this.request({
					url: 'idle/goods/detail',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: this.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.goodsDetail = res.data.data
						this.user = res.data.data.user
						this.idlebrand = res.data.data.idlebrand
						this.comment.goods_id = res.data.data.id
						if(this.user.id == uni.getStorageSync('userInfo').id){
							this.Ain = true
						}else {
							this.Ain = false
						}
					}
				})
			},
			// 获取评论列表
			getCommentList(e){
				this.request({
					url: 'idle/comment/comment_list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: 0,
						goods_id: this.id
					}
				}).then(res=>{
					console.log(res, '111')
					if(res.data.code == 1){
						this.commentList = res.data.data.list
					}else{
						this.loadText.custom = res.data.msg
						this.comStatus = 'custom'
					}
				})
			},
			// 预览图片
			pvew(e,n){
				uni.previewImage({
					current: e,
					urls: n
				})
			},
			// 返回上一个页面
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			// 加载更多回复
			load(){
				if(this.page >= 3) return ;
				this.status = 'loading';
				this.page = ++ this.page;
				setTimeout(() => {
					this.list += 2;
					if(this.page >= 3) {
						this.status = 'nomore'
						this.loadmore = false
					}else{
						this.status = 'loadmore'
					} 
				}, 2000)
			},
			// 收藏 / 想要
			enshrine(e){
				this.request({
					url: 'idle/goods/collect',
					data: {
						token: uni.getStorageSync('userInfo').token,
						goods_id: this.id,
						type: e
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
						if(e == 'collect'){
							this.goodsDetail.isCollect = res.data.data.isCollect
						}else{
							this.goodsDetail.isLikes = this.goodsDetail.isCollect
						}
					}
				})
			},
			// 评论
			send(){
				this.request({
					url: 'idle/comment/add',
					data: this.comment
				}).then(res=>{
					if(res.data.code == 1){
						this.getCommentList(this.id)
						this.commentPopup = false
						this.replyFocus = false
						this.comment.pid = ''
						this.comment.content = ''
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
						this.getData()
					}
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			// 评论
			reply(e, n){
				if(n){
					this.comment.content = '@' + n + ' '
				}else{
					this.comment.content = ''
				}
				this.comment.pid = e
				this.commentPopup = true
				this.replyFocus = true
			},
			commentClose(){
				this.replyFocus = false
			},
			// 下载图片至相册
			downLoad(){
				uni.canvasToTempFilePath({
					x: 0,
					y: 0,
					width: 310,
					height: 310,
					destWidth: 620,
					destHeight: 620,
					canvasId: 'sharePoster',
					success:res=>{
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: ()=>{
								uni.showToast({
									title: '保存成功',
									icon: 'none'
								})
								this.sharePhoto = false
							}
						});
					} 
				})
			},
			// 生成分享图片
			create(){
				this.sharePopup = false
				this.sharePhoto = true
				uni.showLoading({
				    title: '图片生成中...',
					mask: true
				});
				const ctx = uni.createCanvasContext('sharePoster',this)
				var x = 0,y = 0,w = 310,h = 310,r=10
				ctx.save()
				ctx.beginPath()
				// 左上弧线
				ctx.arc(x + r, y + r, r, 1 * Math.PI, 1.5 * Math.PI)
				// 左直线
				ctx.moveTo(x, y + r)
				ctx.lineTo(x, y + h - r)
				// 左下弧线
				ctx.arc(x + r, y + h - r, r, 0.5 * Math.PI, 1 * Math.PI)
				// 下直线
				ctx.lineTo(x + r, y + h)
				ctx.lineTo(x + w - r, y + h)
				// 右下弧线
				ctx.arc(x + w - r, y + h - r, r, 0 * Math.PI, 0.5 * Math.PI)
				// 右直线
				ctx.lineTo(x + w, y + h - r)
				ctx.lineTo(x + w, y + r)
				// 右上弧线
				ctx.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI)
				// 上直线
				ctx.lineTo(x + w - r, y)
				ctx.lineTo(x + r, y)
				ctx.setFillStyle('#FFFFFF')
				ctx.fill()
				// 绘制图片 前三张为商品图片，第四张为头像
				ctx.drawImage(require('@/static/pub/zy.jpg'), 12, 12, 190, 190, 10)
				ctx.drawImage(require('@/static/pub/zy.jpg'), 204, 12, 94, 94, 10)
				ctx.drawImage(require('@/static/pub/zy.jpg'), 204, 108, 94, 94, 10)
				ctx.drawImage(require('@/static/comm/avatar.png'), 12, 210, 29, 29, 0)
				// 昵称
				ctx.setFillStyle('#000000')
				ctx.setFontSize(13)
				ctx.fillText('珂珂', 55, 223)
				// 时间
				ctx.setFillStyle('#9392A0')
				ctx.setFontSize(10)
				ctx.fillText('9月21日', 55, 238)
				// 标题
				ctx.setFillStyle('#000000')
				this.textPrewrap(ctx,`这双小粉我可以爱一万年`, 12, 257,15,286,1)
				// 文本内容
				ctx.setFillStyle('#333333')
				this.textPrewrap(ctx,`小粉色配色太好了！黑粉撞色的设计根本看不腻~ 甜酷甜酷的赶脚麂皮的材质也为鞋子的质感加分噢~ 用作日常的搭配也可以增加...`, 12, 277,15,280,2)
				
				setTimeout(()=>{
					ctx.draw()
					uni.hideLoading()
				}, 2000)
				
			},
			// 绘制错误
			createErr(e){
				console.log(e)
			},
			// 绘制文字、文本换行
			textPrewrap(ctx, content, drawX, drawY, lineHeight, lineMaxWidth, lineNum) {
				var drawTxt = ''; // 当前绘制的内容
				var drawLine = 1; // 第几行开始绘制
				var drawIndex = 0; // 当前绘制内容的索引
				// 判断内容是否可以一行绘制完毕
				if (ctx.measureText(content).width <= lineMaxWidth) {
					ctx.fillText(content.substring(drawIndex, i), drawX, drawY);
				} else {
						for (var i = 0; i < content.length; i++) {
						drawTxt += content[i];
						if (ctx.measureText(drawTxt).width >= lineMaxWidth) {
							if (drawLine >= lineNum) {
								ctx.fillText(content.substring(drawIndex, i) + '..', drawX, drawY);
								break;
							} else {
								ctx.fillText(content.substring(drawIndex, i + 1), drawX, drawY);
								drawIndex = i + 1;
								drawLine += 1;
								drawY += lineHeight;
								drawTxt = '';
							}
						} else {
							// 内容绘制完毕，但是剩下的内容宽度不到lineMaxWidth
							if (i === content.length - 1) {
								ctx.fillText(content.substring(drawIndex), drawX, drawY);
							}
						}
					}
				}
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
					background: #F6F5FA;
					border-radius: 50%;
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
				.atten,.attened{
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
				}
				.attened{
					color: #686879;
					border: 1px solid #686879;
				}
				>:nth-child(2){
					margin: 0 19rpx 0 24rpx;
				}
			}
		}
		
		
		.middle{
			padding: 20rpx;
			.price{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-top: 20rpx;
				view{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FF4243;
					>:nth-child(2){
						font-size: 40rpx;
					}
				}
				>:nth-child(2),>:nth-child(3){
					margin-left: 14rpx;
					// width: 50rpx;
					// height: 28rpx;
					padding: 2rpx 6rpx;
					display: inline-flex;
					justify-content: center;
					align-items: center;
					background: #FF4243;
					border-radius: 6rpx;
					font-size: 18rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
			.desc{
				text{
					display: block;
				}
				>:nth-child(1){
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					padding: 28rpx 0;
				}
				>:nth-child(2){
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
			}
			.brief{
				margin-top: 30rpx;
				view{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 16rpx 0;
					>:nth-child(1){
						min-width: 89rpx;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #1D1D20;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #686879;
					}
				}
			}
			.detail{
				margin-top: 30rpx;
				>image{
					width: 100%;
					margin-bottom: 10rpx;
					border-radius: 10rpx;
					background: #F0F3F8;
				}
				.delBot{
					width: 100%;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
					}
					.report{
						width: 90rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-left: 20rpx;
						image{
							min-width: 36rpx;
							min-height: 36rpx;
							width: 36rpx;
							height: 36rpx;
						}
					}
				}
			}
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
				justify-content: flex-start;
				align-items: center;
				view{
					width: 38%;
					text-align: center;
					image{
						width: 48rpx;
						height: 48rpx;
					}
					text{
						display: block;
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
			.ing{
				width: 450rpx;
				height: 74rpx;
				background: #8D8D98;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.btns{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				text{
					display: inline-flex;
					justify-content: center;
					align-items: center;
					border-radius: 12rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
				}
				// >:nth-child(1){
				// 	width: 160rpx;
				// 	height: 74rpx;
				// 	border: 2px solid #E8E8E8;
				// 	color: #000000;
				// 	margin-right: 12rpx;
				// }
				>:nth-child(1){
					width: 450rpx;
					// width: 314rpx;
					height: 74rpx;
					background: #F55454;
					
					color: #FFFFFF;
				}
			}
		}
		.sharePopup,.sharePhoto{
			.title{
				display: block;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				text-align: center;
				padding: 40rpx 0;
			}
			.items{
				padding: 40rpx 50rpx 20rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				view{
					text-align: center;
					image{
						width: 88rpx;
						height: 88rpx;
					}
					text{
						display: block;
						margin-top: 10rpx;
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
				}
			}
			.close{
				width: 100%;
				height: 98rpx;
				text-align: center;
				line-height: 98rpx;
				border-top: solid 1px #f2f2f2;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}
		.sharePhoto{
			height: 100vh;
			background: linear-gradient(180deg, #FFCAD1 0%, #FFDDD4 100%);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.photo{
				margin: auto;
			}
			.items{
				border-radius: 20rpx 20rpx 0 0;
				background: #fff;
			}
			.close{
				background: #fff;
			}
		}
	
		.commentPopup{
			padding: 10rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text{
				width: 100rpx;
				height: 60rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgb(245,85,85);
				border-radius: 10rpx;
				margin-left: 19rpx;
				font-size: 26rpx;
				font-weight: bold;
				color: #fff;
			}
		}
		.backBt{
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #4e4e56;
			margin-left: 30rpx;
		}
	}
</style>
