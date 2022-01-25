<template>
	<view class="content">
		<view class="top">
			<view class="top-left">
				<text>{{total}}</text>
				<text>可使用积分兑换商品哦~</text>
			</view>
			<view class="top-right">
				<text>去分享获积分</text>
			</view>
		</view>
		<view class="goodsList">
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="go('./detail/detail?id=' + item.id)">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.thumb" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.name}}
						</view>
						<view class="num">
							<text>¥{{item.scoreprice}}</text>
							<text>{{item.usenum}}人兑换</text>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="go('./detail/detail?id=' + item.id)">
						<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.thumb" img-mode="widthFix" :index="index"></u-lazy-load>
						<view class="demo-title">
							{{item.name}}
						</view>
						<view class="num">
							<text>¥{{item.scoreprice}}</text>
							<text>{{item.usenum}}人兑换</text>
						</view>
					</view>
				</template>
			</u-waterfall>
			<!-- 加载更多 -->
			<u-loadmore bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				list: [],
				total: 0
			}
		},
		onLoad() {
			this.getData()
			this.getGlod()
			// this.addRandomData()
		},
		methods: {
			getGlod(){
				this.request({
					url: 'wanlshop/user/scoreLog',
					data: {
						token: uni.getStorageSync('userInfo').token,
						page: 1
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.total = res.data.data.total
					}
				})
			},
			getData(){
				this.request({
					url: 'integral/index/index',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.flowList = res.data.data.hotList
					}
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		},
		// 触底加载更多，切换加载更多loading
		onReachBottom() {
			// this.loadStatus = 'loading';
			// // 模拟数据加载
			// setTimeout(() => {
			// 	this.addRandomData();
			// 	this.loadStatus = 'loadmore';
			// }, 1000)
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		.top{
			height: 180rpx;
			background: linear-gradient(-32deg, #FB300F 0%, #FC5A1A 100%);
			padding: 20rpx 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			.top-left{
				height: 140rpx;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				>:nth-child(1){
					font-size: 70rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
				>:nth-child(2){
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
			.top-right{
				width: 216rpx;
				height: 68rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 20rpx;
				background: linear-gradient(-90deg, #FFC9C9 0%, #FFFFFF 100%);
				border-radius: 34rpx;
				text{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FB300F;
				}
			}
		}
		.goodsList{
			// padding: 0 10rpx;
			background: #F6F5FA;
			.demo-warter {
				border-radius: 8px;
				margin: 5px;
				background-color: #ffffff;
				padding: 8px;
				position: relative;
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
				.num{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 20rpx;
					>:nth-child(1){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FF4243;
					}
					>:nth-child(2){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
					}
				}
			}
		}
	}
</style>
