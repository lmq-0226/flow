<template>
	<view class="content">
		<view class="context">
			<view class="video" @click.stop="dblclick">
				<video src="" :controls="false" poster="/static/pub/fj.jpg" :show-center-play-btn="false" objectFit="cover"></video>
				<image v-if="player" style="opacity: 0.7;" src="/static/serve/player.png" mode="" @click.stop="play"></image>
				<image v-else src="/static/serve/pauser.png" :animation="animationData" mode="" @click.stop="pause"></image>
			</view>
			<view class="flow">
				<text class="title">鉴定流程</text>
				<view class="line">
					<view class="">
						<text>下单付款</text>
						<text>邮寄商品至平台</text>
					</view>
					<image src="/static/serve/next.png" mode=""></image>
					<view class="">
						<text>平台鉴定</text>
						<text>团队逐件查验</text>
					</view>
					<image src="/static/serve/next.png" mode=""></image>
					<view class="">
						<text>开具证书</text>
						<text>将商品寄回</text>
					</view>
				</view>
			</view>
			<view class="cert">
				<text class="title">流象鉴定证书</text>
				<image src="" mode=""></image>
			</view>
			<view class="ensure">
				<image src="/static/serve/ensure.png" mode=""></image>
				<view class="">
					<text>担保查询</text>
					<text>实物鉴定结论真伪均提供相应电子证书，可通过手机扫码或电脑登录查询</text>
				</view>
				<image src="/static/serve/right2.png" mode=""></image>
			</view>
			<view class="issue">
				<text class="title">常见问题</text>
				<view class="">
					<text>1.快递选择</text>
					<text>由于价格较高，建议使用顺丰</text>
				</view>
				<view class="">
					<text>2.物流费用</text>
					<text>商品邮寄过程中产生的快递费用由委托方承担。</text>
				</view>
				<view class="">
					<text>3.实物鉴定需要多久？</text>
					<text>我们会在收到商品后的3个工作日左右告知您鉴定结果后寄回物品。（法定节假日顺延）</text>
				</view>
				<view class="">
					<text>4.结论证明</text>
					<text>实物鉴定后会根据鉴定结果给您开具电子证书，不具有法律效应。</text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="left">
				<image src="/static/serve/service.png" mode=""></image>
				<text>联系客服</text>
			</view>
			<view class="right">
				立即鉴定
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				player: true,
				animationData: {},
				touchNum: 0
			}
		},
		onShow(){
			this.animationData = uni.createAnimation({
				transformOrigin:"ease-in",
				duration: 1000,
				delay: 500
			})
		},
		methods: {
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

<style scoped lang="scss">
	.content {
		padding-bottom: 100rpx;
		.context {
			background: #F6F5FA;
			padding: 20rpx;
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
			.flow{
				padding: 30rpx 20rpx;
				background: linear-gradient(9deg, #FEEFE5 0%, #FFD4D5 100%);
				border-radius: 10rpx;
				margin-top: 20rpx;
				.title{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				.line{
					display: flex;
					justify-content: space-around;
					align-items: center;
					margin-top: 30rpx;
					view{
						text-align: center;
						text{
							display: block;
						}
						>:nth-child(1){
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #686879;
						}
					}
					image{
						width: 48rpx;
						height: 48rpx;
					}
				}
				
			}
			.cert{
				margin-top: 20rpx;
				background: #fff;
				border-radius: 10rpx;
				padding: 20rpx;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				image{
					width: 100%;
					margin-top: 30rpx;
					background: #ECECED;
					border-radius: 10rpx;
				}
			}
			.ensure{
				background: #fff;
				margin-top: 20rpx;
				padding: 20rpx;
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				>:nth-child(1){
					width: 90rpx;
					height: 90rpx;
					min-width: 90rpx;
					margin-right: 23rpx;
				}
				view{
					text{
						display: block;
					}
					>:nth-child(1){
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
				}
				>:nth-child(3){
					width: 44rpx;
					height: 44rpx;
					min-width: 44rpx;
				}
			}
			.issue{
				background: #fff;
				padding: 20rpx;
				margin-top: 20rpx;
				border-radius: 10rpx;
				.title{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				view{
					margin-top: 30rpx;
					text{
						display: block;
					}
					>:nth-child(1){
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>:nth-child(2){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #868692;
						margin-top: 10rpx;
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
			border-top: solid 1px #f2f2f2;
			z-index: 999;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20rpx;
			.left{
				text-align: center;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					display: block;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			.right{
				width: 590rpx;
				height: 74rpx;
				background: #F35455;
				border-radius: 6rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
</style>
