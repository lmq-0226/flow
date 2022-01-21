<template>
	<view class="content">
		<view class="menus" v-if="show">
			<view class="left">
				<scroll-view scroll-y="true" class="scroll-Y">
					<view>
						<text v-for="(item,index) in classify" :key="index" :class="active == index ? 'active' : ''"
							@click="selectClass(index)">{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" class="scroll-Y" @scroll="scrollpage" @touchend="scrollEnd">
					<view>
						<view class="top">
							<swiper class="advertising" :autoplay="true" :circular="true" :interval="3000">
								<swiper-item v-for="(item,index) in categoryAdverts" :key="index">
									 <!-- @click="go('/pages/public/public?category_id=' + elem.id)" -->
									<image v-for="(elem,cut) in item" :key="cut" :src="ImgUrl + elem.media" mode="widthFix"></image>
								</swiper-item>
							</swiper>
							<!-- <view class="class">
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
							</view> -->
						</view>
						<view class="right_list">
							<view class="item" v-for="(item,index) in rightList" :key="index">
								<view class="father" @click="go('/pages/public/public?category_id=' + item.id)">
									<view class="">
										<image :src="ImgUrl + item.image" mode=""></image>
										<text>{{item.name}}</text>
									</view>
									<image src="/static/serve/right.png" mode=""></image>
								</view>
								<view class="classify">
									<view class="" v-for="(elem,cut) in item.childlist" :key="cut"
										 @click="go('/pages/public/public?category_id=' + elem.id)"
									>
										<image :src="ImgUrl + elem.image" mode=""></image>
										<text>{{elem.name}}</text>
									</view>
								</view>
							</view>
						</view>
						<!-- <u-index-list :scrollTop="scrollTop" :showIndex="Index" active-color="#FC493D">
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
						</u-index-list> -->
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="searchList" v-else>
			<view class="" v-for="(item,index) in searchList" :key="index" @click="go('/pages/public/public?category_id=' + item.id)">
				<text>{{item.name}}</text>
				<image src="/static/serve/right.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				scrollTop: 300,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
					"T", "U",
					"V", "W", "X", "Y", "Z"
				],
				Index: -1,
				timer: '',
				classify: [],
				rightList: [],
				searchList: [],
				show: true,
				categoryAdverts: []
			};
		},
		onNavigationBarSearchInputChanged(e){
			console.log(e)
			if(e.text == ''){
				this.show = true
			}else{
				this.show = false
			}
			this.request({
				url: 'wanlshop/common/search',
				method: 'GET',
				data: {
					search: e.text
				}
			}).then(res=>{
				if(res.data.code == 1){
					this.searchList = res.data.data == null ? [] : res.data.data.categoryList
				}
			})
		},
		onNavigationBarSearchInputConfirmed(e) {
				// var webView = this.$mp.page.$holder.navigationBar.searchInput
				// webView.placeholder = option.search
			// this.go('/pages/search/search?search=' + e.text)
		},
		onLoad() {
			this.getClass()
			this.getAdv()
		},
		methods:{
			getClass(){
				this.request({
					url: 'wanlshop/common/init'
				}).then(res => {
					if (res.data.code == 1) {
						this.classify = res.data.data.modulesData.categoryModules
						this.rightList = this.classify[0].childlist
					}
				})
			},
			getAdv(){
				this.request({
					url: 'wanlshop/common/adverts?version=1.1.2',
					methods: 'GET'
				}).then(res => {
					if (res.data.code == 1) {
						this.categoryAdverts = res.data.data.data.categoryAdverts
					}
				})
			},
			selectClass(e){
				this.active = e
				this.rightList = this.classify[e].childlist
			},
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
							image{
								width: 100%;
							}
						}
						.class{
							padding: 40rpx 0 0;
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
					.right_list{
						padding: 0 30rpx;
					}
					.item{
						background: #F6F5FA;
						.father{
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 20rpx;
							view{
								display: flex;
								justify-content: flex-start;
								align-items: center;
								padding: 10rpx;
								image{
									width: 50rpx;
									height: 50rpx;
									margin-right: 20rpx;
									background: #eeeeee;
									padding: 10rpx;
									border-radius: 10rpx;
								}
								text{
									font-size: 28rpx;
									font-family: PingFang SC;
									font-weight: bold;
									color: #686879;
								}
							}
							
							>image{
								width: 44rpx;
								height: 44rpx;
							}
						}
						.classify{
							display: flex;
							// justify-content: space-between;
							flex-wrap: wrap;
							padding: 0 20rpx;
							:not(:nth-child(3n-2)){
								margin-left: 2%;
							}
							view{
								// width: 340rpx;
								width: 32%;
								// height: 128rpx;
								border: 1px solid #EDEDF2;
								border-radius: 6rpx;
								padding: 14rpx 13rpx;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								align-items: center;
								margin-bottom: 12rpx;
								text{
									font-size: 26rpx;
									font-family: PingFang SC;
									font-weight: bold;
									color: #000000;
								}
								image{
									width: 100rpx;
									height: 100rpx;
									background: #F5F5F5;
									border-radius: 10rpx;
								}
							}
						}
					}
					
				}
			}
		}
	
		.searchList{
			padding: 0 20rpx;
			view{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 30rpx;
				background-color: #F6F5Fa;
				border-radius: 10rpx;
				margin-top: 20rpx;
				text{
					font-size: 28rpx;
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>
