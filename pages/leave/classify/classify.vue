<template>
	<view class="content">
		<view class="items">
			<view class="item" v-for="(item,index) in 2" :key="index">
				<text>潮鞋服饰</text>
				<view class="classify">
					<view class="" v-for="(elem,cut) in 5" :key="cut" @click="go('../brand/brand?type=' + type)">
						<text>潮鞋</text>
						<image src="" mode=""></image>
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
				type: 1 // 1平台寄卖 2拍图售卖
			}
		},
		onLoad(option) {
			this.type = option.type
		},
		methods: {
			go(e){
				console.log(e)
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.items{
			padding: 0 30rpx;
			.item{
				>text{
					display: block;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #686879;
					padding: 40rpx 0 17rpx 0;
				}
				.classify{
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					view{
						width: 340rpx;
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
						}
					}
				}
			}
		}
	}
</style>
