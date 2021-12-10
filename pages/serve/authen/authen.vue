<template>
	<view class="content">
		<view class="context">
			<view class="top" @click="go('/pages/shop/goodsDetail/serviceIntro/serviceIntro')">
				<view class="left">
					<view class="">
						<text>交易保障</text>
						<text>平台交易·支持退货</text>
					</view>
					<text>鉴定鉴定鉴定鉴定鉴定鉴定鉴定鉴定鉴定</text>
				</view>
				<image src="/static/shop/right2.png" mode=""></image>
			</view>
			<view class="pro">
				<view class="left" @click="go('./cert/cert')">
					<view class="lettle">
						<view class="title">
							<text>证书查询</text>
							<text>安全放心</text>
						</view>
						<text>在线/实物/培训证书</text>
					</view>
					<view class="imgs">
						<image src="" mode=""></image>
						<image src="" mode=""></image>
					</view>
				</view>
				<view class="mid_line"></view>
				<view class="right" @click="go('./school/school')">
					<view class="lettle">
						<view class="title">
							<text>流象商学院</text>
							<text>月入10W+</text>
						</view>
						<text>权威学位证书</text>
					</view>
					<view class="img">
						<image src="" mode=""></image>
					</view>
				</view>
			</view>
			<view class="meth">
				<view class="title">
					<text>奢侈品鉴定检测</text>
					<text>专业资质/流程严谨/结论准确</text>
				</view>
				<view class="number">
					<view class="">
						<text>2,028,056</text>
						<text>累计鉴定数量</text>
					</view>
					<image src="" mode=""></image>
				</view>
				<view class="btns">
					<text @click="go('./kind/kind')">实物鉴定</text>
					<text @click="go('./aller/aller')">在线鉴定</text>
				</view>
			</view>
			<view class="er">
				<view class="title">
					<text>鉴定师</text>
					<view class="" @click="go('./aller/aller')">
						<text>全部</text>
						<image src="/static/serve/right.png" mode=""></image>
					</view>
				</view>
				<scroll-view scroll-x="true" class="scroll_x">
					<view class="list">
						<view class="item" v-for="(item,index) in 6" :key="index">
							<image src="" mode=""></image>
							<text>王明</text>
							<text>已鉴定8320单</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.context{
			padding: 20rpx;
			background: #F6F5FA;
			.top{
				padding: 30rpx 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
				border-radius: 6rpx;
				.left{
					view{
						margin-bottom: 20rpx;
						>:nth-child(1){
							display: inline-block;
							margin-right: 15rpx;
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							padding: 5rpx 12rpx;
							background: linear-gradient(90deg, #FD3750 0%, #FC653F 100%);
							border-radius: 6rpx;
						}
						>:nth-child(2){
							font-size: 32rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
					>text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
			.pro{
				background: #fff;
				margin-top: 20rpx;
				padding: 20rpx;
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left,.right{
					width: 48%;
					.lettle{
						.title{
							margin-bottom: 10rpx;
							>:nth-child(1){
								font-size: 32rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #000000;
								margin-right: 13rpx;
							}
							>:nth-child(2){
								font-size: 20rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #FFFFFF;
								padding: 4rpx 8rpx;
								background: #FD3750;
								border-radius: 13rpx;
							}
						}
						>text{
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #686879;
						}
					}
					.imgs{
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 20rpx;
						image{
							width: 48%;
							height: 110rpx;
							background: #ECEFF5;
							border-radius: 10rpx;
						}
					}
				}
				.mid_line{
					width: 1px;
					height: 196rpx;
					background: #F4F4F4;
				}
				.right{
					width: 48%;
					.img{
						margin-top: 20rpx;
						image{
							width: 100%;
							height: 110rpx;
							background: #ECEFF5;
							border-radius: 10rpx;
						}
					}
					
				}
			}
			.meth{
				padding: 20rpx;
				background: #fff;
				border-radius: 10rpx;
				margin-top: 20rpx;
				text{
					display: block;
				}
				.title{
					>:nth-child(1){
						font-size: 42rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
				}
				.number{
					display: flex;
					justify-content: space-between;
					// align-items: center;
					margin-top: 40rpx;
					view{
						>:nth-child(1){
							font-size: 36rpx;
							font-family: FZZhengHeiS-EB-GB;
							font-weight: 400;
							color: #FD3B4E;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9392A0;
						}
					}
					image{
						width: 360rpx;
						height: 224rpx;
						background: #E8E8E8;
					}
				}
				.btns{
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						display: flex;
						justify-content: center;
						align-items: center;
					}
					>:nth-child(1){
						width: 230rpx;
						height: 74rpx;
						background: #282939;
						border-radius: 6rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
					>:nth-child(2){
						width: 420rpx;
						height: 74rpx;
						background: #F55454;
						border-radius: 6rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
				}
			}
			.er{
				padding: 20rpx;
				background: #fff;
				border-radius: 10rpx;
				margin-top: 20rpx;
				.title{
					display: flex;
					justify-content: space-between;
					align-items: center;
					>text{
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					view{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text{
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #000000;
						}
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
				}
				.scroll_x{
					width: 100%;
					overflow: hidden;
					margin-top: 30rpx;
					.list{
						display: flex;
						justify-content: flex-start;
						white-space: nowrap;
						.item{
							width: 164rpx;
							height: 190rpx;
							background: #F6F5FA;
							border-radius: 10rpx;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
							padding: 10rpx 0;
							image{
								width: 76rpx;
								height: 76rpx;
								background: #E9E8EF;
								border-radius: 50%;
							}
							text{
								display: block;
							}
							>:nth-child(2){
								font-size: 22rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #000000;
							}
							>:nth-child(3){
								font-size: 20rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #9392A0;
							}
						}
						:not(:first-child){
							margin-left: 14rpx;
						}
					}
				}
				
			}
		}
	}
</style>
