<template>
	<view class="content">
		<view class="top">
			<text>热门品牌</text>
			<view class="items">
				<view class="" v-for="(item,index) in hot" :key="index" @click="next(item.id,item.name)">
					<image :src="ImgUrl + item.image" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<u-index-list :scrollTop="scrollTop" :showIndex="Index" active-color="#FC493D" @select="drag" ref="child">
			<view v-for="(item, index) in indexList" :key="index">
				<u-index-anchor :index="item" />
				<view class="list-cell" v-for="(elem,cut) in brandList" :key="cut" v-if="item == elem.initial" @click="next(elem.id,elem.name)">
					<image :src="ImgUrl + elem.image" mode=""></image>
					<text>{{elem.name}}</text>
				</view>
				<view class="null">
					暂无品牌	
				</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '', // 1平台寄卖 2拍图售卖
				scrollTop: 0,
				Index: -1,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z"
				],
				timer: '',
				category_id: '',
				category_name: '',
				brand_id: '',
				brandList: [],
				hot: []
			};
		},
		onLoad(option) {
			if(option.type){
				this.type = option.type
			}
			this.category_id = option.category_id
			this.category_name = option.category_name
			this.getData()
			console.log(option)
		},
		onNavigationBarSearchInputConfirmed(e){
			// 当前字母的下标
			this.$refs.child.scrollToAnchor(e.text)
			
		},
		methods:{
			// 获取品牌列表
			getData(){
				this.request({
					url: 'idle/index/brand',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.brandList = res.data.data.list
						this.hot = res.data.data.hot
					}
				})
			},
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
				this.Index = 9999
			},
			drag(e){
				uni.pageScrollTo({
				    scrollTop: this.scrollTop + e,
				    duration: 300,
					complete: ()=>{
						clearInterval(this.timer)
						this.timer = setInterval(()=>{
							this.Index = -1
						}, 3000)
					}
				});
				this.scrollTop = this.scrollTop + e
				// this.Index = 9999
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			next(e, n){
				if(this.type == 'consign' || this.type == 'sale'){
					this.go('../publish/publish?type=' + this.type + '&category_id=' + this.category_id + '&brand_id=' + e)
				}
				// else if(this.type == 'kind'){
				// 	this.go('/pages/leave/detail/shipments/shipments?type=' + this.type + '&category_id=' + this.category_id + '&category_name=' + this.category_name + '&brand_id=' + e +'&brand_name=' + n + '&gemmologist_id=' + this.gemmologist_id)
				// }
				else{
					this.go('/pages/serve/authen/aller/aller?type=' + this.type + '&category_id=' + this.category_id + '&category_name=' + this.category_name + '&brand_id=' + e +'&brand_name=' + n)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.top{
			padding: 30rpx;
			>text{
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			.items{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				view{
					flex: 0 0 25%;
					text-align: center;
					margin-top: 25rpx;
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
			}
		}
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
				width: 50rpx;
				height: 50rpx;
				margin-right: 20rpx;
				border-radius: 10rpx;
			}
			text{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #000000;
			}
		}
		.null{
			font-size: 28rpx;
			color: #333;
			font-weight: bold;
			display: flex;
			justify-content: center;
			padding: 20rpx 0;
		}
	}
</style>
