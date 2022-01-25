<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="status">
			<image class="back" src="/static/pub/back.png" mode="" @click="back"></image>
			<u-subsection style="width: 80%;" :list="statusList" :current="statusCurrent" active-color="#FF4243" @change="subChange"></u-subsection>
		</view>
		<swiper class="swipers" :current="statusCurrent" @change="statusCurrent = $event.detail.current">
			<swiper-item>
				<shop-order ref="shop"></shop-order>
			</swiper-item>
			<swiper-item>
				<leave-order ref="leave"></leave-order>
			</swiper-item>
			<swiper-item>
				<serve-order ref="serve"></serve-order>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import shopOrder from '@/components/order/shop-order.vue'
	import leaveOrder from '@/components/order/leave-order.vue'
	import serveOrder from '@/components/order/serve-order.vue'
	export default {
		components:{
			'shop-order': shopOrder,
			'leave-order': leaveOrder,
			'serve-order': serveOrder
		},
		data() {
			return {
				statusList: [
					{
						name: '商城订单'
					}, 
					{
						name: '闲置订单'
					}, 
					{
						// name: '服务订单'
						name: '积分商城'
					}
				],
				statusCurrent: 0,
				
				orderList: [],
			};
		},
		onLoad(option) {
			if(option.current){
				this.statusCurrent = option.current
			}
		},
		watch:{
			statusCurrent(newVal, oldVal){
				if(newVal == 0){
					this.$refs.shop.getData()
				}else if(newVal == 1){
					this.$refs.leave.getData()
				}else{
					this.$refs.serve.getData()
				}
			}
		},
		onShow() {
			let timer = setTimeout(()=>{
				this.$refs.shop.getData()
				this.$refs.leave.getData()
				this.$refs.serve.getData()
			}, 50)
		},
		onBackPress(){
			uni.switchTab({
				url: '../my'
			})
			return true
		},
		methods:{
			
			subChange(e){
				this.statusCurrent = e
			},
			
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss"scoped>
	.content{
		height: 100vh;
		.status{
			width: 100%;
			// padding: 0 50rpx;	
			display: flex;
			justify-content: center;
			align-items: center;
			height: 88rpx;
			background: #fff;
			z-index: 999;
			position: sticky;
			top: 0;
			.back{
				width: 48rpx;
				height: 48rpx;
				position: absolute;
				left: 10rpx;
			}
		}
		
		.swipers{
			/* #ifdef H5 */
			height: calc(100vh - 88rpx);
			/* #endif */
			/* #ifdef APP-PLUS */
			height: calc(100vh - 88rpx - var(--status-bar-height));
			/* #endif */
		}
		.list{
			.item{
				padding: 0 36rpx 0;
				border-bottom: solid 10rpx #F6F5FA;
				.title{
					padding: 19rpx 8rpx;
					border-bottom: solid 1px #F2F2F6;
					display: flex;
					justify-content: space-between;
					align-items: center;
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						image{
							width: 34rpx;
							height: 34rpx;
							border-radius: 6rpx;
							margin-right: 12rpx;
						}
						text{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
					>text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #86868F;
					}
					.ing{
						color: #FF4243;
					}
				}
				.goods{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 28rpx 0;
					position: relative;
					.avatar{
						margin-right: 20rpx;
						image{
							width: 164rpx;
							height: 164rpx;
							border-radius: 10rpx;
						}
					}
					view{
						height: 164rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						>:nth-child(1),>:nth-child(3){
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9094A6;
						}
					}
					.status{
						position: absolute;
						right: -62rpx;
						image{
							width: 174rpx;
							height: 174rpx;
						}
					}
				}
				.bot{
					padding: 12rpx 0;
					border-top: solid 1px #F2F2F6;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text{
						display: inline-block;
						width: 130rpx;
						height: 54rpx;
						text-align: center;
						line-height: 54rpx;
						border: 1px solid #9393A7;
						border-radius: 4rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
					}
					.active{
						background: #F55454;
						color: #fff;
						border: 1px solid #F55454;
					}
					>:nth-child(2){
						margin: 0 20rpx;
					}
				}
			}
		}
	}
</style>
