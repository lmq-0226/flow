<template>
	<view class="content">
		<view class="top">
			<view class="">
				<image src="/static/avatar3.png" mode=""></image>
				<text>流象</text>
			</view>
		</view>
		<view class="middle">
			<!-- 推荐流程 -->
			<view class="flow">
				<text class="title">推荐流程</text>
				<view class="line">
					<view class="midLine"></view>
					<view class="number">
						<text>1</text>
						<text>2</text>
						<text>3</text>
					</view>
					<view class="tests">
						<view class="">
							<text>邀请好友</text>
							<text>领取好礼</text>
						</view>
						<view class="">
							<text>好友下载流象APP</text>
							<text>领取好礼</text>
						</view>
						<view class="">
							<text>获得奖励</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 邀请收益 -->
			<view class="earnings">
				<text class="title">邀请收益</text>
				<view class="user">
					<view class="lettle">
						<view class="">
							<text>5</text>
							<text>有效邀请(人)</text>
						</view>
						<text></text>
						<view class="">
							<text>8</text>
							<text>获得优惠劵(张)</text>
						</view>
					</view>
					<view class="scroll-view_H">
						<scroll-view
							class="scroll-view_Y"
							scroll-y="true" 
							@scroll="scrollChange"
							style="background: #282021;height: 370rpx;padding: 0rpx 60rpx;width: calc(100% - 120rpx);"
						>
							<view class="scroll">
								<view class="" v-for="(item,index) in 10" :key="index">
									<text>{{index + 1}}</text>
									<text>188 **** 8888</text>
								</view>
							</view>
						</scroll-view>
						<view class="slide" >
							<view class="" :style="'top: ' + slideTop + '%'"></view>
						</view>
					</view>
				</view>
				
			</view>
			<!-- 活动规则 -->
			<view class="rule">
				<text class="title">活动规则</text>
				<view class="">
					<text>1.邀请者没邀请好友首次访问页面，可得*元消费红包，多邀多得，可得*元消费红包，多邀多得。</text>
					<text>2.邀请者没邀请好友首次访问页面，可得*元消费红包多邀多得。</text>
					<text>3.邀请者没邀请好友首次访问页面，可得*元消费红包多邀多得。</text>
					<text>4.邀请者没邀请好友首次访问页面，可得*元消费红包。邀请者没邀请好友首次访问页面，可得*元消费红包。</text>
					<text>5.邀请者没邀请好友首次访问页面，可得*元消费红包</text>
					<text>6.邀请者没邀请好友首次访问页面，可得*元消费红包</text>
				</view>
			</view>
			<view class="share" @click="show = true">
				<text>分享邀请好友</text>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" :safe-area-inset-bottom="true" :mask-close-able="false" :custom-style="{background: 'none'}">
			<view class="popup">
				<view class="canvar">
					<view class="close">
						<image src="/static/my/close2.png" mode="" @click="show = false"></image>
					</view>
					<view class="shareImg">
						<image src="/static/my/shareImg.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="shareBtns">
					<view class="" @click="share">
						<image src="/static/my/wxf.png" mode=""></image>
						<text>微信好友</text>
					</view>
					<view class="">
						<image src="/static/my/wxc.png" mode=""></image>
						<text>朋友圈</text>
					</view>
					<view class="">
						<image src="/static/my/wb.png" mode=""></image>
						<text>微博</text>
					</view>
					<view class="" @click="download('/static/my/shareImg.png')">
						<image src="/static/my/down.png" mode=""></image>
						<text>下载到相册</text>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: '',
				slideTop: 0,
				show: false
			};
		},
		onLoad() {
			// scroll可视区域的宽
			setTimeout(()=>{
				let obj = uni.createSelectorQuery().select('.scroll-view_Y')
				obj.boundingClientRect(data =>{ 
					this.scrollHeight = data.height
				}).exec()
			}, 100)
		},
		methods:{
			scrollChange(e){
				let height = e.detail.scrollHeight - this.scrollHeight
				console.log(height,e.detail)
				this.slideTop = e.detail.scrollTop/height/2*100 
			},
			share(){
				uni.getProvider({
				    service: 'share',
				    success: (res)=>{
				        console.log(res.provider)
				    },
					complete: (msg) => {
						console.log(msg)
					}
				});
			},
			// 下载图片到相册
			download(e){
				uni.saveImageToPhotosAlbum({
					filePath: e,
					success: res=> {
						uni.showToast({
							title: '保存成功！',
							icon: 'none'
						})
						this.show = false
					},
					fail: (err) => {
						uni.showToast({
							title: '保存失败！',
							icon: 'none'
						})
					}
				})
			}
		}
	}
</script>
<style>
	page{
		background: #100C0D;
	}
</style>
<style lang="scss" scoped>
	.content{
		.top{
			width: 100%;
			height: 700rpx;
			background: url(../../../static/my/inviteBg.png) no-repeat -75rpx 0;
			background-size: 110%;
			view{
				padding: 20rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 48rpx;
					height: 48rpx;
					margin-right: 10rpx;
				}
				text{
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}
		.middle{
			padding: 0 30rpx 40rpx;
			.flow{
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				.title{
					display: block;
					width: 200rpx;
					height: 58rpx;
					text-align: center;
					line-height: 58rpx;
					background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
					font-size: 34rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #100C0D;
				}
				.line{
					width: 100%;
					height: 246rpx;
					padding: 50rpx 0;
					border: 2rpx solid #FFD4D5;
					border-radius: 0px 0px 0px 10rpx;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					position: relative;
					.midLine{
						position: absolute;
						width: 419rpx;
						height: 1rpx;
						background: #ED3540;
						top: 78rpx;
						left: 135rpx;
						z-index: 1;
					}
					.number{
						text{
							z-index: 9;
							width: 40rpx;
							height: 40rpx;
							text-align: center;
							line-height: 40rpx;
							background: #ED3540;
							border-radius: 50%;
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #FFFFFF;
						}
					}
					.tests{
						text{
							width: 210rpx;
							text-align: center;
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
						}
					}
					>view{
						width: 100%;
						display: flex;
						justify-content: space-around;
						text{
							display: block;
						}
					}
				}
			}
			
			.earnings{
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				margin-top: 48rpx;
				.title{
					display: block;
					width: 200rpx;
					height: 58rpx;
					text-align: center;
					line-height: 58rpx;
					background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
					font-size: 34rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #100C0D;
				}
				.user{
					width: 100%;
					padding: 50rpx 42rpx;
					border: 2rpx solid #FFD4D5;
					border-radius: 0px 0px 0px 10rpx;
					.lettle{
						display: flex;
						justify-content: space-around;
						align-items: center;
						>text{
							width: 2rpx;
							height: 74rpx;
							background: #FFFFFF;
							opacity: 0.3;
						}
						view{
							padding: 0rpx 20rpx;
							text{
								height: 64rpx;
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								align-items: center;
								color: #FFFFFF;
							}
							>:nth-child(1){
								font-size: 36rpx;
								font-family: PingFang SC;
								font-weight: bold;
							}
							>:nth-child(2){
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 500;
								
							}
						}
					}
					.scroll{
						width: 100%;
						margin-top: 20rpx;
						background: #282021;
						view{
							padding: 20rpx 0;
							text{
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #FFFFFF;
							}
							>:nth-child(1){
								display: inline-block;
								width: 60rpx;
							}
						}
					}
					.scroll-view_H{
						position: relative;
						.slide {
							position: absolute;
							top: 50%;
							transform: translateY(-50%);
							right: 10rpx;
							width: 6rpx;
							height: 150rpx;
							background: #FFFFFF;
							border-radius: 3rpx;
							view{
								position: absolute;
								width: 6rpx;
								height: 75rpx;
								background: #848484;
								border-radius: 3rpx;
							}
						}
					}
				}
			}
			.rule{
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				margin-top: 48rpx;
				.title{
					display: block;
					width: 200rpx;
					height: 58rpx;
					text-align: center;
					line-height: 58rpx;
					background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
					font-size: 34rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #100C0D;
				}
				view{
					width: 100%;
					padding: 40rpx;
					border: 2rpx solid #FFD4D5;
					border-radius: 0px 0px 0px 10rpx;
					text{
						display: block;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 34rpx;
					}
				}
			}
			.share{
				width: 100%;
				height: 74rpx;
				margin: 80rpx auto 0;
				text-align: center;
				line-height: 74rpx;
				background: #FF4243;
				border-radius: 6rpx;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			}
		}
		.popup{
			.canvar{
				width: 100%;
				text-align: center;
				.shareImg{
					
					image{
						width: 520rpx;
					}
				}
				.close{
					width: 620rpx;
					margin: auto;
					text-align: right;
					image{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
			.shareBtns{
				width: 100%;
				height: 194rpx;
				padding: 0 50rpx;
				margin-top: 35rpx;
				background: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-radius: 20rpx 20rpx 0 0;
				view{
					text-align: center;
					image{
						width: 88rpx;
						height: 88rpx;
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
		/deep/ .u-drawer-bottom{
			background: none;
		}
	}
</style>
