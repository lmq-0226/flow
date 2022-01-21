<template>
	<view class="content">
		<view class="history">
			<view class="lettle">
				<text>历史记录</text>
				<image src="/static/shop/clear.png" mode="" @click="clearModel = true"></image>
			</view>
			<view class="wrap">
				<view :class="['list',show ? '' : 'active',downShow ? 'height' : '']">
					<image v-if="downShow" class="btn" :style="{'transform': 'rotate(' + rotate +'deg)'}" src="/static/comm/down.png" mode="" @click="down"></image>
					<text class="item" v-for="(item,index) in hisList" :key="index" @click="search(item)">{{item}}</text>
				</view>
			</view>
		</view>
		<u-modal v-model="clearModel" title="" :show-cancel-button="true" :content="'确认清空历史搜索吗？'" @confirm="clear"></u-modal>
		<view class="refresh">
			<view class="lettle">
				<text>猜你想搜</text>
				<view class="" @click="refresh">
					<text>换一换</text>
					<image src="/static/shop/refresh.png" mode="" :style="{'transform': 'rotate(' + refreshRot +'deg)'}"></image>
				</view>
			</view>
			<view class="list">
				<text class="item" v-for="(item,index) in refList" :key="index" @click="search(item.keywords)">{{item.keywords}}</text>
			</view>
		</view>
		<view class="">
			
		</view>
		
	</view>
</template>

<script>
	import {throttle,debounce} from '@/utils/throttle.js'
	export default {
		data() {
			return {
				show: true,
				hisList: uni.getStorageSync('history') || [],
				rotate: 0,
				downShow: false,
				clearModel: false,
				refreshRot: 0,
				refList: [
					'nike court 高帮 白蓝配色','空军一号','雅诗兰黛小棕瓶',
					'篮球鞋男','chrrota','nike court 高帮','黑天使'
				]
			};
		},
		onNavigationBarSearchInputConfirmed(e){
			uni.navigateTo({
				url: '/pages/public/public?search=' + e.text
			})
			// 如果重复则跳过
			if(this.hisList.indexOf(e.text) > -1 || e.text == ''){
				return
			}
			this.hisList.push(e.text)
			uni.setStorageSync('history', this.hisList)
			setTimeout(()=>{
				let obj = uni.createSelectorQuery().select('.list')
				obj.boundingClientRect(res=>{ // data - 各种参数
					if(res.height > 64){
						this.downShow = true
					}
				}).exec()
			},100)
		},
		onLoad(option) {
			setTimeout(()=>{
				let obj = uni.createSelectorQuery().select('.list')
				obj.boundingClientRect(res=>{ // data - 各种参数
					if(res.height > 64){
						this.downShow = true
					}
				}).exec()
			},200)
			this.getSearchList()
		},
		methods:{
			getSearchList(){
				this.request({
					url: 'wanlshop/common/searchList',
					header: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.refList = res.data.data
					}
				})
			},
			down(e){
				this.show = !this.show
				if(!this.show){
					this.rotate = 180
				}else{
					this.rotate = 0
				}
			},
			clear(){
				this.clearModel = false
				this.hisList = []
				uni.clearStorage('history')
				this.downShow = false
			},
			// 节流-换一换
			refresh:throttle(function(){
				this.refreshRot += 720
			}, 2000),
			search(e){
				uni.navigateTo({
					url: '/pages/public/public?search=' + e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 0 30rpx;
		.history{
			margin-top: 30rpx;
			.lettle{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
			.wrap{
				display: flex;
				.list{
					width: 100%;
					display: -webkit-box;
					// justify-content: flex-start;
					flex-wrap: wrap;
					position: relative;
					transition-duration: 0.5s;
					.btn{
						/* #ifdef APP-PLUS */
						position: absolute;
						right: 0;
						bottom: 0;
						margin-left: 20rpx;
						/* #endif */
						/* #ifdef H5 */
						float: right;
						clear: both;
						/* #endif */
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000;
						width: 44rpx;
						height: 44rpx;
						transition-duration: 0.5s;
					}
					.item{
						display: inline-block;
						margin: 19rpx 0 0 10rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #1C1F2F;
						padding: 6rpx 12rpx;
						background: #F6F5FA;
						border-radius: 6rpx;
					}
					
				}
				.list::before{
					content: '';
					float: right;
					width: 0;
					height: calc(100% - 44rpx);
					background: red;
				}
				.active{
					-webkit-line-clamp: 999 !important;
				}
				.height{
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
				}
			}
		}
		.refresh{
			margin-top: 30rpx;
			.lettle{
				display: flex;
				justify-content: space-between;
				align-items: center;
				>text{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				view{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #7E7E8C;
					}
					image{
						width: 44rpx;
						height: 44rpx;
						transition-duration: 2s;
					}
				}
			}
			.list{
				width: 100%;
				display: -webkit-box;
				flex-wrap: wrap;
				position: relative;
				transition-duration: 0.5s;
				.item{
					display: inline-block;
					margin: 19rpx 0 0 10rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #1C1F2F;
					padding: 6rpx 12rpx;
					background: #F6F5FA;
					border-radius: 6rpx;
				}
			}
		}
	}
</style>
