<template>
	<view class="content">
		<view class="wrap">
			<image src="/static/pub/bbt.png" mode="widthFix"></image>
		</view>
		<view class="top">
			<view class="tabs">
				<view class="tab" v-for="(item,index) in list" :key="index" @click="change(index)">
					<text>{{item}}</text>
				</view>
			</view>
			<text :style="{'transform': 'translate(' + translateX +'rpx, -250%)'}" class="active"></text>
		</view>
		<view class="context">
			<view class="service">
				<text class="title">流象鉴别服务</text>
				<text class="desc">流象APP再传统电商模式基础上添加”鉴别服务”，采用“先鉴别后发货”的网购流程，用平台品控的方式为年轻消费者带来[多重鉴别，正品保障]的全新网购体验。（文案采用的得物app，请自行后台修改~）</text>
				<view class="">
					<image src="" mode="" v-for="(item,index) in 6" :key="index"></image>
				</view>
			</view>
			<view class="check">
				<text class="title">逐件查验</text>
				<view class="item">
					<view class="lettle">
						<text>01</text>
						<text>多道鉴别查验工</text>
					</view>
					<text class="desc">多重鉴别查验不仅保障商品为全新正品，独立的查验环节对瑕疵商品进行排查，拦截明显瑕疵商品，确保用户高效地购买到称心如意的商品。（文案采用的得物app，请自行后台修改~）</text>
					<view class="">
						
					</view>
				</view>
				<view class="item">
					<view class="lettle">
						<text>02</text>
						<text>专业鉴别团队</text>
					</view>
					<text class="desc">多重鉴别查验不仅保障商品为全新正品，独立的查验环节对瑕疵商品进行排查，拦截明显瑕疵商品，确保用户高效地购买到称心如意的商品。多重鉴别查验不仅保障商品为全新正品，独立的查验环节对瑕疵商品进行排查，拦截明显瑕疵商品，确保用户高效地购买到称心如意的商品。（文案采用的得物app，请自行后台修改~）</text>
					<view class="">
						
					</view>
				</view>
			</view>
			<view class="oimei">
				<text class="title">假一赔十</text>
				<view class="item">
					<view class="lettle">
						<text>01</text>
						<text>多道鉴别查验工</text>
					</view>
					<text class="desc">多重鉴别查验不仅保障商品为全新正品，独立的查验环节对瑕疵商品进行排查，拦截明显瑕疵商品，确保用户高效地购买到称心如意的商品。（文案采用的得物app，请自行后台修改~）</text>
					<view class="imgs">
						
					</view>
				</view>
				<view class="item">
					<view class="lettle">
						<text>02</text>
						<text>严控卖家资质</text>
					</view>
					<text class="desc">多重鉴别查验不仅保障商品为全新正品，独立的查验环节对瑕疵商品进行排查，拦截明显瑕疵商品，确保用户高效地购买到称心如意的商品。多重鉴别查验不仅保障商品为全新正品，独立的查验环节对瑕疵商品进行排查，拦截明显瑕疵商品，确保用户高效地购买到称心如意的商品。（文案采用的得物app，请自行后台修改~）</text>
					<view class="imgs">
						
					</view>
				</view>
				<view class="item">
					<view class="lettle">
						<text>03</text>
						<text>官方发货 货品溯源</text>
					</view>
					<text class="desc">多重鉴别查验不仅保障商品为全新正品，独立的查验环节对瑕疵商品进行排查，拦截明显瑕疵商品，确保用户高效地购买到称心如意的商品。（文案采用的得物app，请自行后台修改~）</text>
					<view class="imgs">
						
					</view>
				</view>
			</view>
		</view>
		<view class="logo">
			<view class="">
				<text>logo</text>
			</view>
			<text>流象APP</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['先鉴别后发货','逐件查验','假一赔十'],
				translateX: 60,
				sTop: '',
				cTop: '',
				oTop: '',
				flag: false
			};
		},
		onNavigationBarButtonTap(e){
			console.log('分享')
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.service').boundingClientRect(res => {
				this.sTop = res.top - 40
			}).exec();
			query.select('.check').boundingClientRect(res => {
				this.cTop = res.top - 40
			}).exec();
			query.select('.oimei').boundingClientRect(res => {
				this.oTop = res.top - 40
			}).exec();
		},
		onLoad() {
			
		},
		onPageScroll(e) {
			if(e.scrollTop < this.cTop){
				this.translateX = 60
			}else if(this.cTop <= e.scrollTop < this.oTop){
				this.translateX = 100 + 125*2
			}
			if(this.oTop <= e.scrollTop){
				this.translateX = 80 + 125*4
			}
		},
		onShow(){
			
		},
		methods:{
			change(index) {
				if(index == 0){
					uni.pageScrollTo({
					    scrollTop: this.sTop,
					    duration: 300
					})
				}else if(index == 1){
					uni.pageScrollTo({
					    scrollTop: this.cTop,
					    duration: 300
					})
				}else if(index == 2){
					uni.pageScrollTo({
					    scrollTop: this.oTop + 1,
					    duration: 300
					})
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.content{
		padding-bottom: 100rpx;
		.wrap{
			width: 750rpx;
			height: 750rpx;
			image{
				width: 100%;
				background: #CDCCCE;
			}
		}
		.top{
			position: sticky;
			top: 0;
			z-index: 999;
			width: 100%;
			background: #fff;
			/* #ifdef H5 */
			top: 88rpx;
			/* #endif */
			height: 80rpx;
			border-bottom: solid 1px #f2f2f2;
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
				transition-duration: 0.3s;
				opacity: 0.8;
			}
		}
		.context{
			background: #fff;
			padding: 0 50rpx;
			>view{
				margin-top: 50rpx;
				.title{
					font-size: 50rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					margin-bottom: 30rpx;
				}
				.desc{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #747485;
					line-height: 50rpx;
					margin-bottom: 30rpx;
				}
			}
			.service{
				text{
					display: block;
				}
				view{
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					image{
						flex: 0 0 33%;
						width: 216rpx;
						height: 160rpx;
						background: #E3E3E3;
						margin-top: 6rpx;
					}
				}
			}
			.check{
				.item{
					.lettle{
						padding: 30rpx 0;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						>:nth-child(1){
							font-size: 36rpx;
							font-family: AliHYAiHei;
							font-weight: 400;
							color: #FBE2E3;
							margin-right: 20rpx;
						}
						>:nth-child(2){
							font-size: 32rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
				}
			}
			.oimei{
				.item{
					.lettle{
						padding: 30rpx 0;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						>:nth-child(1){
							font-size: 36rpx;
							font-family: AliHYAiHei;
							font-weight: 400;
							color: #FBE2E3;
							margin-right: 20rpx;
						}
						>:nth-child(2){
							font-size: 32rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
				}
				.imgs{
					
				}
			}
		}
		.logo{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 100rpx;
			view{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100rpx;
				height: 100rpx;
				background: #F33A40;
				border-radius: 10rpx;
				margin-bottom: 20rpx;
				text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			}
			>text{
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
	}
</style>
