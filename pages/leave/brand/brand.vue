<template>
	<view class="content">
		<view class="top">
			<text>热门品牌</text>
			<view class="items">
				<view class="" v-for="(item,index) in 8" :key="index">
					<image src="" mode=""></image>
					<text>LV</text>
				</view>
			</view>
		</view>
		<u-index-list :scrollTop="scrollTop" :showIndex="Index" active-color="#FC493D" @select="drag" ref="child">
			<view v-for="(item, index) in indexList" :key="index">
				<u-index-anchor :index="item" />
				<view class="list-cell" v-for="(elem,cut) in 3" :key="cut" @click="go('../publish/publish?type=' + type)">
					<text>列表{{cut + 1}}</text>
				</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1, // 1平台寄卖 2拍图售卖
				scrollTop: 0,
				Index: -1,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z"
				],
				timer: ''
			};
		},
		onLoad(option) {
			this.type = option.type
		},
		onNavigationBarSearchInputConfirmed(e){
			// 当前字母的下标
			this.$refs.child.scrollToAnchor(e.text)
			
		},
		methods:{
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
			text{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #000000;
			}
		}
	}
</style>
