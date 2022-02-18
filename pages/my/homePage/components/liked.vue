<template>
	<view class="content">
		<view class="all">
			<text :class="praise == 1 ? 'active' : ''" @click="praise = 1">全部 0</text>
			<text :class="praise == 2 ? 'active' : ''" @click="praise = 2">视频 0</text>
		</view>
		<view class="goods">
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="go(item)">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load v-if="item.type == 'want'" threshold="-450" border-radius="10" :image="ImgUrl + item.images[0]" img-mode="widthFix" :index="index"></u-lazy-load>
						<u-lazy-load v-else threshold="-450" border-radius="10" :image="ImgUrl + item.video_url + '?x-oss-process=video/snapshot,t_1000,f_jpg'" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<text class="first" v-if="index == 0">置顶</text>
						<view class="bot">
							<view class="avatar">
								<!-- <image src="" mode=""></image> -->
								<text>{{item.createtime_text}}</text>
							</view>
							<view class="">
								<image src="/static/comm/praise.png" mode=""></image>
								<text>{{item.likes}}</text>
							</view>
						</view>
						<image v-if="item.type == 'video'" class="video" src="/static/serve/player.png" mode=""></image>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="go(item)">
						<u-lazy-load v-if="item.type == 'want'" threshold="-450" border-radius="10" :image="ImgUrl + item.images[0]" img-mode="widthFix" :index="index"></u-lazy-load>
						<u-lazy-load v-else threshold="-450" border-radius="10" :image="ImgUrl + item.video_url + '?x-oss-process=video/snapshot,t_1000,f_jpg'" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="bot">
							<view class="avatar">
								<!-- <image src="" mode=""></image> -->
								<text>{{item.createtime_text}}</text>
							</view>
							<view class="">
								<image src="/static/comm/praise.png" mode=""></image>
								<text>{{item.likes}}</text>
							</view>
						</view>
						<image v-if="item.type == 'video'" class="video" src="/static/serve/player.png" mode=""></image>
					</view>
				</template>
			</u-waterfall>
			<!-- 加载更多 -->
			<!-- <u-loadmore v-if="flowList.length > 0" bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore> -->
			<!-- 返回顶部 -->
			<u-back-top :scroll-top="scrollTop" top="1000" :duration="300"></u-back-top>
		</view>
		<!-- 数据为空 -->
		<u-empty v-if="flowList.length <= 0" text="是没有您喜欢的动态吗~" margin-top="200" mode="data"></u-empty>
	</view>
</template>

<script>
	export default {
		name: 'liked',
		props:{
			user_no: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				loadStatus: 'loadmore', // 加载更多状态
				praise: 1,
				flowList: [],
				list: [],
				scrollTop: 0
			};
		},
		mounted() {
			this.$nextTick(()=>{
				let timer = setTimeout(()=>{
					console.log(this.user_no, '222')
					this.getData()
				}, 200)
			})
			console.log('praise 赞过组件')
		},
		methods:{
			getData(){
				this.request({
					url: 'wanlshop/find/find/getList',
					method: 'GET',
					header: {
						"content-type": "application/json;charset=UTF-8",
						"token": uni.getStorageSync('userInfo').token
					},
					data: {
						type: 'likes',
						user_no: this.user_no,
						page: 1
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.flowList = res.data.data.data
					}
				})
			},
			// 模拟数据请求
			addRandomData() {	
				
			},
			go(e){
				console.log(e)
				if(e.type == 'want'){
					uni.navigateTo({
						url: "/pages/community/detail/detail?id=" + e.id
					})
				}else{
					uni.navigateTo({
						url: "/pages/community/detail/videoList?video=" + JSON.stringify(e)
					})
				}
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.content{
		.all{
			width: 100%;
			padding: 0 36rpx;
			height: 75rpx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background: #fff;
			text{
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #686879;
				padding: 11rpx 19rpx;
			}
			.active{
				
				background: #F8F8F8;
				border-radius: 6rpx;
				color: #000000;
			}
		}
		.goods{
			background-color: #F6F5FA;
			.demo-warter {
				border-radius: 8px;
				margin: 5px;
				background-color: #ffffff;
				padding: 8px;
				position: relative;
				.video{
					position: absolute;
					width: 44rpx;
					height: 44rpx;
					top: 20rpx;
					right: 20rpx;
				}
				.first{
					position: absolute;
					top: 30rpx;
					left: 30rpx;
					display: block;
					padding: 5rpx 10rpx;
					background: #000000;
					opacity: 0.7;
					border-radius: 6rpx;
					font-size: 18rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
				.demo-title {
					margin-top: 14rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					overflow: hidden;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
				.bot{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 17rpx;
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						image{
							width: 44rpx;
							height: 44rpx;
						}
						text{
							font-size: 18rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #535960;
						}
					}
					.avatar{
						image{
							width: 34rpx;
							height: 34rpx;
							border-radius: 50%;
							background: #ccc;
							margin-right: 14rpx;
						}
						text{
							font-size: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
