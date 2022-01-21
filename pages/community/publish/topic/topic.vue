<template>
	<view class="content">
		<view class="top">
			<image src="/static/leave/add.png" mode=""></image>
			<text>自定义话题</text>
		</view>
		<view class="menus">
			<view class="left">
				<scroll-view scroll-y="true" class="scroll-Y">
					<view>
						<text v-for="(item,index) in 20" :key="index" :class="active == index ? 'active' : ''"
							@click="active = index">推荐</text>
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" class="scroll-Y" @scroll="scrollpage">
					<view>
						<view class="title">
							<text></text>
							<text>智能推荐</text>
							<text></text>
						</view>
						<view class="items">
							<view class="item" v-for="(item,index) in 15" :key="index" @click="go('./house')">
								<image src="" mode=""></image>
								<view class="">
									<text>#学生党最爱黑色潮鞋合集</text>
									<text>热度44.8w</text>
								</view>
							</view>
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
				active: 1,
				scrollTop: 300,
				timer: ''
			};
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url: './search'
			})
		},
		methods:{
			scrollpage(e){
				this.scrollTop = e.detail.scrollTop
			},
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
		.top{
			padding: 0 48rpx;
			height: 92rpx;
			border-bottom: solid 1px #F1F2FB;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			position: sticky;
			top: 0;
			background: #fff;
			z-index: 999999;
			image{
				width: 44rpx;
				height: 44rpx;
				margin-right: 8rpx;
			}
			text{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
		}
		.menus {
			display: flex;
			justify-content: space-between;
			.left {
				.scroll-Y {
					height: calc(100vh - 92rpx);
					/* #ifdef H5 */
					height: calc(100vh - 88rpx - 92rpx);
					/* #endif */
					background: #F6F5FA;
					view {
						text {
							display: block;
							width: 162rpx;
							height: 110rpx;
							text-align: center;
							line-height: 110rpx;
							background: #F6F5FA;
							border-radius: 0px 6rpx 6rpx 0px;
						}
						.active {
							color: #FC493D;
							font-weight: bold;
							background: #fff;
						}
					}
		
				}
		
			}
		
			.right {
				width: calc(100% - 162rpx);
				.scroll-Y {
					background: #fff;
					height: calc(100vh - 92rpx);
					/* #ifdef H5 */
					height: calc(100vh - 88rpx - 92rpx);
					/* #endif */
					.title{
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 41rpx 0 20rpx;
						>:nth-child(1){
							width: 44rpx;
							height: 2rpx;
							background: linear-gradient(90deg, #FFFFFF 0%, #666666 100%);
						}
						>:nth-child(2){
							margin: 0 11rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(3){
							width: 44rpx;
							height: 2rpx;
							background: linear-gradient(90deg, #666666 0%, #FFFFFF 100%);
						}
					}
					.items{
						padding: 0 30rpx;
						.item{
							display: flex;
							justify-content: flex-start;
							align-items: center;
							border-bottom: solid 1px #F1F2FB;
							padding: 12rpx 0;
							image{
								width: 76rpx;
								height: 76rpx;
								background: #F5F5F5;
								border-radius: 10rpx;
								margin-right: 30rpx;
							}
							view{
								height: 76rpx;
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								>:nth-child(1){
									font-size: 26rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #000000;
								}
								>:nth-child(2){
									font-size: 22rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #5E6371;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
