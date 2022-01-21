<template>
	<view class="content">
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
				<scroll-view scroll-y="true" class="scroll-Y" @scroll="scrollpage" @touchend="scrollEnd">
					<view>
						<view class="top">
							<view class="advertising">
								
							</view>
							<view class="class">
								<view class="title">
									<text></text>
									<text>热门分类</text>
									<text></text>
								</view>
								<view class="items">
									<view class="" v-for="(item,index) in 9" :key="index" @click="go('/pages/public/public')">
										<image src="" mode=""></image>
										<text>绒线帽</text>
									</view>
								</view>
							</view>
						</view>
						<u-index-list :scrollTop="scrollTop" :showIndex="Index" active-color="#FC493D">
							<view v-for="(item, index) in indexList" :key="index" @click="go('/pages/public/public')">
								<u-index-anchor :index="item" />
								<view class="list-cell">
									<image src="" mode=""></image>
									<text>列表1</text>
								</view>
								<view class="list-cell">
									<image src="" mode=""></image>
									<text>列表2</text>
								</view>
								<view class="list-cell">
									<image src="" mode=""></image>
									<text>列表3</text>
								</view>
							</view>
						</u-index-list>
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
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
					"T", "U",
					"V", "W", "X", "Y", "Z"
				],
				Index: -1,
				timer: ''
			};
		},
		onNavigationBarSearchInputConfirmed(e) {
			console.log(e.text, '1111')
		},
		onLoad() {
			
		},
		methods:{
			
			scrollpage(e){
				this.scrollTop = e.detail.scrollTop
				this.Index = 9999
			},
			scrollEnd(e){
				clearInterval(this.timer)
				this.timer = setInterval(()=>{
					this.Index = -1
				}, 3000)
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
	.content {
		.menus {
			display: flex;
			justify-content: space-between;
			.left {
				.scroll-Y {
					height: 100vh;
					/* #ifdef H5 */
					height: calc(100vh - 88rpx);
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
					height: 100vh;
					/* #ifdef H5 */
					height: calc(100vh - 88rpx);
					/* #endif */
					.list-cell {
						display: flex;
						box-sizing: border-box;
						width: 100%;
						padding: 10px 24rpx;
						overflow: hidden;
						color: #323233;
						font-size: 14px;
						line-height: 24px;
						background-color: #fff;
						justify-content: flex-start;
						align-items: center;
						image{
							width: 76rpx;
							height: 76rpx;
							background: #F5F5F5;
							border-radius: 10rpx;
							margin-right: 33rpx;
						}
						text{
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 800;
							color: #000000;
						}
					}
					// /deep/ .u-index-anchor--active{
					// 	display: none;
					// }
					.top{
						padding: 20rpx 40rpx;
						.advertising{
							width: 100%;
							height: 130rpx;
							background: #E9E9EB;
							border-radius: 6rpx;
						}
						.class{
							padding: 40rpx 0;
							.title{
								display: flex;
								justify-content: center;
								align-items: center;
								>:nth-child(1){
									width: 44rpx;
									height: 4rpx;
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
									height: 4rpx;
									background: linear-gradient(90deg, #666666 0%, #FFFFFF 100%);
								}
							}
							.items{
								padding: 0 14rpx;
								display: flex;
								justify-content: flex-start;
								flex-wrap: wrap;
								view{
									text-align: center;
									margin-top: 30rpx;
									image{
										width: 106rpx;
										height: 106rpx;
										background: #F5F5F5;
									}
									text{
										display: block;
										font-size: 22rpx;
										font-family: PingFang SC;
										font-weight: bold;
										color: #000000;
									}
								}
								>:nth-child(3n+2){
									margin: 30rpx 80rpx 0;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
