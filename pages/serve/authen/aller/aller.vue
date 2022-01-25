<template>
	<view class="content">
		<view class="goods">
			<!-- 瀑布流 -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="next(item.id)">
						<view class="top">
							<image :src="ImgUrl + item.image" mode=""></image>
							<text>{{item.name}}</text>
							<text>{{item.cate}}</text>
						</view>
						<view class="bottom">
							<view class="">
								<u-rate :count="item.star" v-model="value" size="12" active-color="#FEA713"></u-rate>
								<text>{{item.star}}分</text>
							</view>
							<text>¥{{item.price}}</text>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="next(item.id)">
						<view class="top">
							<image :src="ImgUrl + item.image" mode=""></image>
							<text>{{item.name}}</text>
							<text>{{item.cate}}</text>
						</view>
						<view class="bottom">
							<view class="">
								<u-rate :count="item.star" v-model="value" size="12" active-color="#FEA713"></u-rate>
								<text>{{item.star}}分</text>
							</view>
							<text>¥{{item.price}}</text>
						</view>
					</view>
				</template>
			</u-waterfall>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 5,
				flowList: [],
				list: [],
				type: '',
				category_id: '',
				category_name: '',
				brand_id: '',
				brand_name: ''
			}
		},
		onLoad(option) {
			this.type = option.type
			this.category_id = option.category_id
			this.category_name = option.category_name
			this.brand_id = option.brand_id
			this.brand_name = option.brand_name
			this.getData()
			// this.addRandomData()
		},
		// 触底加载更多，切换加载更多loading
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods:{
			getData(){
				this.request({
					url: 'service/gemmologist/list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						page_index: 1,
						page_size: 10
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.flowList = res.data.data.list
					}
				})
			},
			// 模拟数据请求
			addRandomData() {	
				for(let i = 0; i < 10; i++) {
					// 产生 0 到 this.list.length - 1 的一个整数型随机数  
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					// 唯一码
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			next(e){
				this.go('./detail?type=' + this.type + '&category_id=' + this.category_id + '&category_name=' + this.category_name + '&brand_id=' + this.brand_id +'&brand_name=' + this.brand_name + '&id=' + e)
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>
<style>
	page{
		background-color: #F6F5FA;
	}
</style>
<style lang="scss" scoped>
	.content{
		.demo-warter {
			border-radius: 16rpx;
			margin: 10rpx;
			background-color: #ffffff;
			padding: 25rpx 16rpx;
			position: relative;
			.top{
				text-align: center;
				image{
					width: 96rpx;
					height: 96rpx;
					border-radius: 50%;
					background: #ccc;
				}
				text{
					display: block;
				}
				>:nth-child(2){
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					padding: 10rpx;
				}
				>:nth-child(3){
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #686879;
					margin-bottom: 20rpx;
				}
			}
			.bottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 0 0;
				border-top: solid 1px #F1F4F9;
				view{
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #A0A0B2;
					}
				}
				>text{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FF4243;
				}
			}
		}
	}
</style>
