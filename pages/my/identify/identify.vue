<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="status">
			<image class="back" src="/static/pub/back.png" mode="" @click="back"></image>
			<u-subsection style="width: 80%;" :list="list" :current="current" active-color="#FF4243" @change="current = $event"></u-subsection>
		</view>
		<swiper class="swipers" :current="current" @change="current = $event.detail.current">
			<swiper-item>
				<inline ref="inline"></inline>
			</swiper-item>
			<swiper-item>
				<kind ref="kind"></kind>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import kind from '@/components/authen/kind.vue'
	import inline from '@/components/authen/line.vue'
	export default {
		components:{
			kind,
			inline
		},
		data() {
			return {
				current: 0,
				list: [
					{
						name: '在线鉴定'
					}, 
					{
						name: '实物鉴定'
					}
				],
			};
		},
		onLoad() {
			
		},
		onShow() {
			let timer = setTimeout(()=>{
				this.$refs.kind.getData()
				this.$refs.inline.getData()
			}, 50)
			
		},
		methods:{
			change(e){
				this.current = e
			},
			back(){
				uni.switchTab({
					url: '../my'
				})
			},
		}
	}
</script>

<style lang="scss" class="content">
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
