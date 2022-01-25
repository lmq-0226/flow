<template>
	<view class="content">
		<view class="items">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="father" @click="next(item.id,item.name)">
					<view class="">
						<image :src="ImgUrl + item.image" mode=""></image>
						<text>{{item.name}}</text>
					</view>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
				<view class="classify">
					<view class="" v-for="(elem,cut) in item.childlist" :key="cut" @click="next(elem.id, elem.name)">
						<text>{{elem.name}}</text>
						<image :src="ImgUrl + elem.image" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '',// 1平台寄卖 2拍图售卖,
				list: []
			}
		},
		onLoad(option) {
			if(option.type){
				this.type = option.type
			}
			this.getData()
		},
		methods: {
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			getData(){
				this.request({
					url: 'idle/index/showcate',
					data: {
						token: uni.getStorageSync('userInfo').token,
						id: ''
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.list = res.data.data
					}
				})
			},
			next(e, n){
				if(this.type == ''){
					this.go('../goodsList/goodsList?category_id=' + e)
				}else{
					 // + '&gemmologist_id=' + this.gemmologist_id
					this.go('../brand/brand?type=' + this.type + '&category_id=' + e + '&category_name=' + n)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.items{
			padding: 0 30rpx;
			.item{
				.father{
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						padding: 40rpx 0 17rpx 0;
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
					justify-content: space-between;
					flex-wrap: wrap;
					padding: 0 20rpx;
					view{
						width: 47%;
						height: 128rpx;
						border: 1px solid #EDEDF2;
						border-radius: 6rpx;
						padding: 24rpx 23rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 12rpx;
						text{
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						image{
							width: 80rpx;
							height: 80rpx;
							background: #F5F5F5;
							border-radius: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
