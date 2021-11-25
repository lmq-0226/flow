<template>
	<view class="content" :catchtouchmove="false">
		<view class="status_bar"></view>
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
				<image src="/static/serve/share.png" mode="" @click="sharePopup = true"></image>
				<image src="/static/comm/more.png" mode=""></image>
			</view>
		</view>
		<view class="">
			<u-swiper :list="imgList" height="750" interval="5000"></u-swiper>
		</view>
		<view class="made">
			<text class="title">这双小粉我可以爱一万年</text>
			<view class="desc">
				<text>小粉色配色太好了！黑粉撞色的设计根本看不腻~甜酷甜酷的赶脚
					麂皮的材质也为鞋子的质感加分噢~
					用作日常的搭配也可以增加亮点
				</text>
				<text>@珂珂kaky @杨洋的小粉丝</text>
			</view>
			<view class="tags">
				<view class="">
					<image src="/static/comm/tag1.png" mode=""></image>
					<text>今天只晒鞋</text>
				</view>
				<view class="">
					<image src="/static/comm/tag2.png" mode=""></image>
					<text>潮流圈</text>
				</view>
			</view>
			<view class="goods">
				<image src="/static/pub/bbt.png" mode=""></image>
				<text>MATVUT Blood男女同款 情侣...</text>
			</view>
		</view>
		<view class="comment">
			<text class="title">7条评论</text>
			<view class="list">
				<!-- 评论列表 -->
				<view class="item" v-for="(elem,cut) in comList" :key="cut">
					<!-- 头像 -->
					<image src="/static/comm/avatar.png" mode=""></image>
					<view class="critic">
						<!-- 评论 -->
						<view class="first">
							<view class="left">
								<view class="name">
									<view class="">
										<text>小马斑比</text>
										<text class="writer" v-if="false">作者</text>
									</view>
									<u-icon name="play-right-fill" size="12" v-if="false"></u-icon>
									<view class="" v-if="false">
										<text>大马</text>
										<text class="writer">作者</text>
									</view>
								</view>
								<text>妈耶，这个真的好好看</text>
								<view class="">
									<text>2021年9月21日</text>
									<text>回复</text>
								</view>
							</view>
							<view class="right">
								<image v-if="false" src="/static/comm/praise_on.png" mode=""></image>
								<image v-else src="/static/comm/praise.png" mode=""></image>
								<text>12</text>
							</view>
						</view>
						<!-- 回复列表 -->
						<view class="item" v-for="(item,index) in list" :key="index">
							<image src="/static/comm/avatar.png" mode=""></image>
							<view class="critic">
								<view class="first">
									<view class="left">
										<view class="name">
											<view class="">
												<text>小马斑比</text>
												<text class="writer" v-if="false">作者</text>
											</view>
											<u-icon name="play-right-fill" size="12"></u-icon>
											<view class="">
												<text>大马</text>
												<text class="writer" v-if="index == 0">作者</text>
											</view>
										</view>
										<text>妈耶，这个真的好好看</text>
										<view class="">
											<text>2021年9月21日</text>
											<text>回复</text>
										</view>
									</view>
									<view class="right">
										<image v-if="false" src="/static/comm/praise_on.png" mode=""></image>
										<image v-else src="/static/comm/praise.png" mode=""></image>
										<text>12</text>
									</view>
								</view>
							</view>
						</view>
						<!-- 加载更多回复 -->
						<view class="" @click="load">
							<u-loadmore :status="status" v-if="loadmore"/>
						</view>
					</view>
				</view>
				<view class="loading" v-if="loading">
					<u-loading mode="flower"></u-loading>
					<text>加载中</text>
				</view>
				<view class="null" v-if="comStatus">
					<text>暂时没有更多了~</text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<u-input placeholder="来说两句..." :custom-style="customStyle" confirm-type="send" @confirm="send"/>
			<view class="right">
				<view class="">
					<image src="/static/comm/praise2.png" mode=""></image>
					<text></text>
				</view>
				<view class="">
					<image src="/static/comm/collect.png" mode=""></image>
					<text></text>
				</view>
			</view>
		</view>
		<u-popup v-model="sharePopup" mode="bottom" border-radius="20">
			<view class="sharePopup">
				<text class="title">分享至</text>
				<view class="items">
					<view class="">
						<image src="/static/my/wx.png" mode=""></image>
						<text>微信好友</text>
					</view>
					<view class="">
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
		
		<u-popup v-model="sharePhoto" mode="bottom">
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
						<view class="">
							<image src="/static/my/wx.png" mode=""></image>
							<text>微信好友</text>
						</view>
						<view class="">
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
		<u-back-top :scrollTop="scrollTop" top="800"></u-back-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				imgList: [
					require('@/static/pub/bbt.png'),
					require('@/static/pub/ch.png'),
					require('@/static/pub/ttq.png'),
					require('@/static/pub/xj.png'),
					require('@/static/pub/bql.png')
				],
				status: 'loadmore',
				iconType: 'flower',
				list: 2, // 回复循环数据
				page: 0, // 分页
				loadmore: true, // 回复列表如果加载完毕，这隐藏加载更多标签
				comList: 1, // 评论数据
				comStatus: false, // 是否显示暂时没有更多
				loading: true ,// 评论列表加载中
				customStyle: {
					background: '#F6F5FA',
					width: '60%',
					borderRadius: '30rpx',
					padding: '0 25rpx'
				},
				sharePopup: false,
				sharePhoto: false,
				ctx: ''
			};
		},
		onReady() {
			
		},
		onLoad() {
			
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		onReachBottom(){
			if(this.comList <= 0){
				this.loading = false
				this.comStatus = true
				return
			}
			if(this.comList >= 5) return
			this.loading = true
			// 模拟数据加载
			setTimeout(() => {
				this.comList += 2;
				if(this.comList >= 5) {
					this.loading = false
					this.comStatus = true
				}else{
					this.comStatus = false
				} 
			}, 2000)
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
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
			// 点击键盘右下角发送按钮
			send(e){
				console.log(e, '11111')
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
				}
				>:nth-child(2){
					margin: 0 19rpx 0 24rpx;
				}
			}
		}
		.made{
			padding: 27rpx;
			border-bottom: solid 1px #F7F7FB;
			.title{
				display: block;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				margin-bottom: 20rpx;
			}
			.desc{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
				>:nth-child(2){
					display: block;
					color: #FD3B4E;
				}
			}
			.tags{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-top: 30rpx;
				view{
					padding: 2rpx 10rpx 2rpx 2rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					background: #F6F5FA;
					border-radius: 6rpx;
					image{
						width: 40rpx;
						height: 40rpx;
					}
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FD4656;
					}
				}
				>:not(:first-child){
					margin-left: 17rpx;
				}
			}
			.goods{
				margin-top: 24rpx;
				width: 373rpx;
				height: 80rpx;
				border: 1px solid #FFD4D5;
				border-radius: 10rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 64rpx;
					height: 64rpx;
					min-width: 64rpx;
					margin-right: 15rpx;
				}
				text{
					font-size: 18rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					overflow: hidden;
					-webkit-line-clamp: 1;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
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
									
									>view:not(:first-child){
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
									font-size: 22rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #9392A0;
									display: flex;
									justify-content: flex-start;
									align-items: center;
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
	}
</style>
