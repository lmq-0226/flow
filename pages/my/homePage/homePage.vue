<template>
	<view class="content">
		<view class="nav" :style="'background: url(' + bgimg + ') no-repeat;'">
			<view class="status_bar"></view>
			<view class="top">
				<view class="nav-bar" :style="{backgroundColor: 'rgba(255,66,67,' + opacity + ')'}">
					<image src="/static/my/back.png" mode="" @click="back"></image>
					<view class="">
						<image src="/static/my/share2.png" mode="" @click="sharePopup = true"></image>
						<image src="/static/my/more.png" mode=""></image>
					</view>
				</view>
				<view class="avatar">
					<image :src="avatar" mode=""></image>
					<view class="nums">
						<view class="">
							<text>33</text>
							<text>粉丝</text>
						</view>
						<view class="">
							<text>33</text>
							<text>关注</text>
						</view>
						<view class="">
							<text>33</text>
							<text>获赞</text>
						</view>
					</view>
				</view>
				<view class="datum">
					<view class="nick">
						<view class="left">
							<text>账号昵称</text>
							<text>美妆类 | 流象号：102534685</text>
						</view>
						<view v-if="type == 1" class="edit" @click="go('./edit')">
							<text>编辑资料</text>
						</view>
						<view class="atten" v-else>
							<view class="added" v-if="atten" @click="atten = false">
								<text>已关注</text>
							</view>
							<view class="add" v-else @click="atten = true">
								<image src="/static/my/add.png" mode=""></image>
								<text>关注</text>
							</view>
							<view class="chat" @click="go('/pages/HM-chat/HM-chat')">
								<image src="/static/my/chat.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="desc">
						<text>
							摄影界的瞎拍达人禁止审美绑架穿衣自由目前除流象 小红书账号外 其他平台及和人使用我图片 均为盗图作假 切勿上当受骗!未经允许不得转载！小红书号：kaky珂珂
						</text>
					</view>
				</view>
			</view>
		</view>
		<view class="infor">
			<view class="tabs">
				<u-tabs :list="tabList" :is-scroll="false" active-color="#FC493D" :current="current" @change="change"></u-tabs>
			</view>
			<!-- 动态、赞过、小店组件 -->
			<Dynamic ref="dynamic" v-show="current == 0"/>
			<Liked ref="liked" v-show="current == 1" />
			<Shop ref="shop" v-show="current == 2"/>
		</view>
		<u-popup v-model="sharePopup" mode="bottom" border-radius="20" @touchmove.native.stop.prevent>
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
	</view>	
</template>

<script>
	import Shop from './components/shop.vue'
	import Dynamic from './components/dynamic.vue'
	import Liked from './components/liked.vue'
	export default {
		components:{
			Dynamic,
			Liked,
			Shop
		},
		data() {
			return {
				type: 1, // 本人
				atten: false,
				opacity: 0 ,// 导航栏背景透明度
				tabList: [{
					name: '动态'
				}, {
					name: '赞过'
				}, {
					name: '小店'
				}],
				current: 0,
				avatar: require('@/static/comm/avatar.png'),
				bgimg: require('@/static/pub/fj.jpg'),
				scrollTop: 0,
				sharePopup: false,
				sharePhoto: false,
				ctx: ''
				
			};
		},
		// 导航栏背景及字体颜色初始化
		onReady() {
			uni.setNavigationBarColor({
			    frontColor: '#ffffff',
				backgroundColor: 'rgba($color: #fff, $alpha: 0)'
			})
		},
		// 监听页面滚动，动态设置导航栏背景
		onPageScroll(e) {
			this.opacity = (e.scrollTop - 80) / 125
			// 记录当前子组件的滚动位置
			if(this.current == 0){
				this.$refs.dynamic.scrollTop = e.scrollTop;
			}else if(this.current == 1){
				this.$refs.liked.scrollTop = e.scrollTop;
			}else if(this.current == 2){
				this.$refs.shop.scrollTop = e.scrollTop;
			}
			
		},
		// 触底加载更多，切换加载更多loading
		onReachBottom() {
			// 子组件触底加载操作
			if(this.current == 0){
				console.log('dynamic', this.$refs.dynamic)
				this.$refs.dynamic.loadStatus = 'loading';
				// 模拟数据加载
				setTimeout(() => {
					this.$refs.dynamic.addRandomData()
					this.$refs.dynamic.loadStatus = 'loadmore';
				}, 1000)
			}else if(this.current == 1){
				console.log('liked', this.$refs.liked)
				this.$refs.liked.loadStatus = 'loading';
				// 模拟数据加载
				setTimeout(() => {
					this.$refs.liked.addRandomData()
					this.$refs.liked.loadStatus = 'loadmore';
				}, 1000)
				
			}else if(this.current == 2){
				console.log('shop', this.$refs.shop)
				this.$refs.shop.loadStatus = 'loading';
				// 模拟数据加载
				setTimeout(() => {
					this.$refs.shop.addRandomData()
					this.$refs.shop.loadStatus = 'loadmore';
				}, 1000)
			}
		},
		onLoad(option) {
			this.type = option.type
		},
		methods:{
			change(e) {
				this.current = e;
				// 切换tabs的时候，滚动到子组件当时切换关闭时的位置
				if(e == 0){
					console.log(this.$refs.dynamic.scrollTop)
					uni.pageScrollTo({
						scrollTop: this.$refs.dynamic.scrollTop || 0
					})
					
				}else if(e == 1){
					console.log(this.$refs.liked.scrollTop)
					uni.pageScrollTo({
						scrollTop: this.$refs.liked.scrollTop || 0
					})
					
				}else if(e == 2){
					console.log(this.$refs.shop.scrollTop)
					uni.pageScrollTo({
						scrollTop: this.$refs.shop.scrollTop || 0
					})
				}
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			back(){
				uni.navigateBack({
					delta: 1
				})
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
		.nav{
			width: 100%;
			height: 600rpx;
			background-size: 100% 100% !important;
			// 适配自定义导航栏
			.status_bar {
				position: fixed;
				top: 0;
				height: var(--status-bar-height);
				width: 100%;
				z-index: 9999;
				background: rgba(255,255,255,0);
			}
			.top{
				height: calc(600rpx - var(--status-bar-height));
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
				.avatar{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 120rpx 30rpx 0;
					image{
						min-width: 156rpx;
						width: 156rpx;
						height: 156rpx;
						background: #9E9DB5;
						border: 4rpx solid #FFFFFF;
						border-radius: 50%;
					}
					.nums{
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 100%;
						padding: 0 50rpx;
						view{
							text-align: center;
							color: #fff;
							text{
								display: block;
								font-family: PingFang SC;
							}
							>:nth-child(1){
								font-size: 36rpx;
								font-weight: bold;
							}
							>:nth-child(2){
								font-size: 24rpx;
								font-weight: 500;
								opacity: 0.7;
							}
						}
					}
				}
				.datum{
					padding: 0 30rpx;
					text{
						color: #fff;
						display: block;
						font-family: PingFang SC;
					}
					.nick{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.left{
							>:nth-child(1){
								font-size: 36rpx;
								font-weight: bold;
								margin-top: 30rpx;
							}
							>:nth-child(2){
								font-size: 22rpx;
								font-weight: 500;
								opacity: 0.7;
								margin-top: 20rpx;
							}
							>:nth-child(3){
								font-size: 22rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #FFFFFF;
								margin-top: 30rpx;
							}
						}
						.edit{
							display: flex;
							justify-content: center;
							align-items: center;
							width: 152rpx;
							height: 54rpx;
							border: 1px solid #FFFFFF;
							opacity: 0.7;
							border-radius: 27rpx;
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
						}
						.atten{
							display: flex;
							justify-content: flex-end;
							align-items: center;
							image{
								width: 44rpx;
								height: 44rpx;
							}
							.add,.added{
								display: flex;
								justify-content: center;
								align-items: center;
								width: 152rpx;
								height: 54rpx;
								background: #F55454;
								border-radius: 27rpx;
								margin-right: 20rpx;
								text{
									font-size: 22rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #FFFFFF;
								}
							}
							.added{
								background: #aaaaaa;
							}
							.chat{
								width: 70rpx;
								height: 54rpx;
								border: 1px solid #FFFFFF;
								border-radius: 27rpx;
								display: flex;
								justify-content: center;
								align-items: center;
								image{
									width: 48rpx;
									height: 48rpx;
								}
							}
						}
					}
					.desc{
						margin-top: 30rpx;
						text{
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							overflow: hidden;
							-webkit-line-clamp: 3;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
						}
					}
				}
			}
		}
		.infor{
			width: 100%;
			margin: -30rpx auto 0;
			.tabs{
				width: 100%;
				border-radius: 20rpx 20rpx 0px 0px;
				position: sticky;
				top: 84rpx;
				z-index: 999;
				border-bottom: solid 1px #F2F2F2;
				padding: 0 100rpx;
				background: #fff;
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
