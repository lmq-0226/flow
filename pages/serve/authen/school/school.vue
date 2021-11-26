<template>
	<view class="content">
		<view class="top">
			<view class="tabs">
				<view class="tab" v-for="(item,index) in list" :key="index" @click="change(index)">
					<text>{{item}}</text>
				</view>
			</view>
			<text :style="{'transform': 'translate(' + translateX +'rpx, -250%)'}" class="active"></text>
		</view>
		<view class="context">
			<view class="wrap">
				<u-swiper :list="swiperList" height="300"></u-swiper>
			</view>
			<view class="con1">
				<view class="title">学院毕业后在做什么</view>
				<view class="msg">
					<view class="video" @click.stop="dblclick">
						<video src="" :controls="false" poster="/static/pub/fj.jpg" :show-center-play-btn="false" objectFit="cover"></video>
						<image v-if="player" style="opacity: 0.7;" src="/static/serve/player.png" mode="" @click.stop="play"></image>
						<image v-else src="/static/serve/pauser.png" :animation="animationData" mode="" @click.stop="pause"></image>
					</view>
					<text>学员毕业后可以依托流象优质的电商平台资源、新媒体营销运营、品牌优势等，学院提供给学员优质行业资源与高端奢侈品行业圈人脉，帮学员轻松解决就业问题。</text>
				</view>
			</view>
			<view class="con2">
				<view class="title">学员毕业年收入</view>
				<view class="msg">
					<image src="/static/pub/fj.jpg" mode="widthFix"></image>
					<text>64%的学员年收入可以达到50~200万，25%学员年收入可达20万~50万，即使最少的也可月收入1万+，是目前市场上为数不多的黄金行业。学员毕业后可从事奢侈品鉴定评估、时尚买手、线上二手奢侈品商家、创办线下二手奢侈品店等。</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['学院简介','学院案例','学员课程'],
				translateX: 60,
				swiperList: [
					{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				player: true,
				animationData: {},
				touchNum: 0
			};
		},
		onNavigationBarButtonTap(e){
			console.log(e)
		},
		onLoad() {
			
		},
		onShow(){
			this.animationData = uni.createAnimation({
				transformOrigin:"ease-in",
				duration: 1000,
				delay: 500
			})
		},
		methods:{
			change(index) {
				if(index == 0){
					this.translateX = 60
				}else if(index == 1){
					this.translateX = 60 + 125*2
				}else{
					this.translateX = 60 + 125*4
				}
			},
			play(){
				this.player = false
				this.animationData.opacity(0).step()
			},
			pause(){
				this.player = true
			},
			// 双击暂停、开始播放
			dblclick(){
				this.touchNum ++
				let timer = setTimeout(()=>{
					if(this.touchNum == 1){
						// 单击
					}
					if(this.touchNum >= 2){
						// 双击
						this.player = !this.player
					}
					this.touchNum = 0
					clearTimeout(timer)
				},250)
			}
		}
	}
</script>
<style>
	page{
		background: #F2F1F6;
	}
</style>
<style lang="scss" scoped>
	.content{
		.top{
			width: 100%;
			background: #fff;
			height: 80rpx;
			.tabs{
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.tab{
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				
			}
			.active{
				display: block;
				width: 125rpx;
				height: 12rpx;
				background: linear-gradient(90deg, #FC493D 0%, #FFFFFF 100%);
				transition-duration: 0.5s;
				opacity: 0.8;
			}
		}
		.context{
			padding: 20rpx;
			.con1,.con2{
				width: 100%;
				.title{
					width: 350rpx;
					height: 58rpx;
					margin: 36rpx auto 0;
					display: flex;
					justify-content: center;
					align-items: center;
					background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
					font-size: 34rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #100C0D;
				}
				.msg{
					padding: 40rpx 20rpx;
					background: #fff;
					border: 4rpx solid;
					border-image: linear-gradient(9deg, #FEEFE5, #FFD4D5) 10 10;
					border-radius: 10rpx;
					.video {
						width: 100%;
						height: 370rpx;
						position: relative;
						video {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
						image{
							width: 100rpx;
							height: 100rpx;
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							opacity: 0.7;
							z-index: 999999;
						}
					}
					>text{
						display: block;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #000000;
						margin-top: 20rpx;
					}
				}
			}
			.con2{
				.msg{
					
					image{
						width: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
	}
</style>
