<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="status">
			<image class="back" src="/static/pub/back.png" mode="" @click="bay"></image>
			<u-subsection style="width: 80%;" :list="statusList" :current="statusCurrent" active-color="#FF4243" @change="statusCurrent = $event"></u-subsection>
		</view>
		<swiper class="swipers"  :current="statusCurrent" @change="statusCurrent = $event.detail.current">
			<swiper-item>
				<sale ref="sale" :current="current" :pCut="pCut"></sale>
			</swiper-item>
			<swiper-item>
				<consign ref="consign" :current="current" :pCut="pCut"></consign>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import consign from '@/components/publish/consign.vue'
	import sale from '@/components/publish/sale.vue'
	export default {
		components:{
			consign,
			sale
		},
		data() {
			return {
				statusList: [
					{
						name: '拍卖商品'
					},
					{
						name: '寄卖商品'
					}
				],
				statusCurrent: 0,
				current: 0,
				status: '',
				pCut: 0,
				type: ''
			};
		},
		onLoad(option) {
			this.type = option.type
			if(option.type == 'consign'){
				this.statusCurrent = 1
			}else{
				this.statusCurrent = 0
			}
			// if(option.current){
			// if(option.current){
			// 	this.statusCurrent = option.current
			// }else{
			// 	this.statusCurrent = option.statusCurrent // 0拍卖 1寄卖
			// }
			this.current = option.current || 0
			this.pCut = option.current || 0
			// }
		},
		onShow(){
			let timer = setTimeout(()=>{
				this.$refs.sale.getData()
				this.$refs.consign.getData()
			}, 50)
		},
		methods:{
			bay(){
				if(this.type != '' && this.current == 1){
					uni.navigateBack({
						delta: 1
					})
				}else{
					uni.switchTab({
						url: '/pages/my/my'
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
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
		.tabs{
			border-bottom: solid 10rpx #F6F5FA;
			position: sticky;
			top: 88rpx;
			background: #fff;
			z-index: 999;
		}
		.swipers{
			/* #ifdef H5 */
			height: calc(100vh - 88rpx);
			/* #endif */
			/* #ifdef APP-PLUS */
			height: calc(100vh - 88rpx - var(--status-bar-height));
			/* #endif */
		}
	}
</style>
