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
				<view class="title">
					<text>学院毕业后在做什么</text>
				</view>
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
				<view class="title">
					<text>学员毕业年收入</text>
				</view>
				<view class="msg">
					<image src="/static/pub/fj.jpg" mode="widthFix"></image>
					<text>64%的学员年收入可以达到50~200万，25%学员年收入可达20万~50万，即使最少的也可月收入1万+，是目前市场上为数不多的黄金行业。学员毕业后可从事奢侈品鉴定评估、时尚买手、线上二手奢侈品商家、创办线下二手奢侈品店等。</text>
				</view>
			</view>
			<view class="con3">
				<view class="title">
					<text>专家团队</text>
				</view>
				<view class="msg">
					<swiper class="swipers" :indicator-dots="true">
						<swiper-item v-for="(item,index) in 3" :key="index">
							<view class="swiper-item">
								<view class="item" v-for="(elem,cut) in 6" :key="cut">
									<image src="/static/pub/bql.png" mode=""></image>
									<view class="">
										<text>梁辰</text>
										<text>奢侈品鉴定师</text>
										<text>箱包高级讲师</text>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="con4">
				<view class="title">
					<text>流象商学院的优势</text>
				</view>
				<view class="msg">
					<view class="item" v-for="(item,index) in 4" :key="index">
						<image src="" mode=""></image>
						<text>专家级别师资力量</text>
					</view>
				</view>
			</view>
			<view class="con5">
				<view class="title">
					<text>全品类课程涵盖</text>
				</view>
				<view class="msg">
					<view class="item" v-for="(item,index) in 2" :key="index">
						<view class="lettle">
							<text>0{{index + 1}}</text>
							<text>鉴定理论+实操</text>
						</view>
						<view class="infor" v-for="(elem,cut) in 3" :key="cut">
							<image src="" mode=""></image>
							<text>奢侈品鉴定知识框架体系，奢侈品鉴定知识框架体系，奢侈品鉴定知识框架体系，奢侈品鉴定;</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="left">
				<view class="">
					<image src="/static/serve/course.png" mode=""></image>
					<text>我的课程</text>
				</view>
				<view class="">
					<image src="/static/serve/service.png" mode=""></image>
					<text>在线客服</text>
				</view>
			</view>
			<view class="right">
				申请报名
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
		padding-bottom: 100rpx;
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
			>view{
				width: 100%;
				.title{
					margin: 36rpx auto 0;
					display: flex;
					justify-content: center;
					align-items: center;
					text{
						padding: 12rpx 25rpx;
						background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
						font-size: 34rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #100C0D;
					}
				}
				.msg{
					padding: 40rpx 20rpx;
					background: #fff;
					border: 4rpx solid;
					border-image: linear-gradient(9deg, #FEEFE5, #FFD4D5) 10 10;
					border-radius: 10rpx;
				}
			}
			.con1{
				.msg{
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
			.con3{
				.swipers{
					width: 100%;
					height: 600rpx;
					background: #FFF1F1;
					border-radius: 10rpx;
					.swiper-item{
						padding: 30rpx 20rpx;
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						>:nth-child(3),>:nth-child(4){
							margin: 60rpx 0;
						}
						.item{
							width: 50%;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							image{
								width: 130rpx;
								height: 130rpx;
								// background: #ccc;
								margin-right: 10rpx;
								border-radius: 10rpx;
							}
							view{
								height: 130rpx;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								>:nth-child(1){
									font-size: 24rpx;
									font-family: PingFang SC;
									font-weight: bold;
									color: #100C0D;
								}
								>:nth-child(2){
									font-size: 18rpx;
									font-family: PingFang SC;
									font-weight: bold;
									color: #E45364;
									padding-bottom: 6rpx;
									border-bottom: solid 1px #E45364;
								}
								>:nth-child(3){
									font-size: 16rpx;
									font-family: PingFang SC;
									font-weight: bold;
									color: #FFFEFE;
									padding: 3rpx 12rpx;
									background: #E45364;
									border-radius: 4rpx;
								}
							}
						}
					}
				}
			}
			.con4{
				.msg{
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					>:nth-child(3),>:nth-child(4){
						margin-top: 20rpx;
					}
					.item{
						width: 48%;
						height: 254rpx;
						background: #FFF1F1;
						border-radius: 10rpx;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						image{
							width: 108rpx;
							height: 108rpx;
							background: #FFFFFF;
							border-radius: 50%;
							margin-bottom: 27rpx;
						}
						text{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #E45364;
						}
					}
				}
			}
			.con5{
				.msg{
					padding: 0 30rpx 37rpx;
					background: #FFF1F1;
					>:nth-child(2n){
						.lettle{
							text-align: right;
						}
					}
					.item{
						.lettle{
							padding: 10rpx 0;
							text{
								font-family: AliHYAiHei;
								font-weight: bold;
								color: #E45364;
							}
							>:nth-child(1){
								font-size: 60rpx;
							}
							>:nth-child(2){
								font-size: 34rpx;
							}
						}
						.infor{
							display: flex;
							justify-content: flex-start;
							background: #fff;
							margin-top: 20rpx;
							image{
								width: 196rpx;
								height: 150rpx;
								min-width: 196rpx;
								border-radius: 10rpx;
								background: #ccc;
								margin-right: 20rpx;
							}
							text{
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 400;
								color: #000000;
								padding-top: 30rpx;
							}
						}
					}
				}
			}
		}
		.bottom{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 98rpx;
			background: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20rpx;
			.left{
				width: 230rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				view{
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
			.right{
				width: 480rpx;
				height: 74rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F55454;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
</style>
