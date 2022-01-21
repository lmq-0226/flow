<template>
	<view class="content">
		<view class="nav">
			<u-tabs 
			:list="list" 
			:is-scroll="false" 
			active-color="#000000" 
			:bar-height="0" 
			:current="current" 
			inactive-color="#86868F"
			font-size="26"
			@change="change"
			></u-tabs>
		</view>
		<view class="items">
			<view class="item" v-for="(item,index) in dataList" :key="index" @click="go('./detail?id=' + item.id)">
				<view class="left">
					<text>{{item.title}}</text>
					<view class="">
						<text>{{item.site.title}}</text>
						<text></text>
						<text>{{item.views}}人浏览</text>
						<text>{{date('YmdHis',item.createtime * 1000)}}</text>
					</view>
				</view>
				<image :src="ImgUrl + item.site.image" mode="widthFix"></image>
			</view>
		</view>
		<u-empty v-if="dataList.length <= 0" text="暂无数据" mode="list" margin-top="400"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '推荐'
					}, {
						name: '球鞋'
					}, {
						name: '穿搭'
					}, {
						name: '评论区'
					}, {
						name: '手表'
					}, {
						name: '美妆'
					}, {
						name: '玩具'
					}, {
						name: '数码'
					}
				],
				current: 0,
				dataList: []
			};
		},
		onLoad() {
			this.getCate()
		},
		methods:{
			getCate(){
				this.request({
					url: 'article/index/cate',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						res.data.data.unshift({
							id: 0,
							name: '推荐'
						})
						this.list = res.data.data
						this.getData()
					}
				})
			},
			getData(){
				this.request({
					url: 'article/index/recommend',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.dataList = res.data.data.list
					}
				})
			},
			change(e) {
				this.current = e
				if(e == 0){
					this.getData()
				}else{
					this.request({
						url: 'article/index/cate_article',
						data: {
							token: uni.getStorageSync('userInfo').token,
							cate_id: this.list[e].id,
							page_index: 1,
							page_size: 10
						}
					}).then(res=>{
						if(res.data.code == 1){
							this.dataList = res.data.data.list
						}
					})
				}
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
		.nav{
			border-bottom: solid 1px #F7F7FA;
			position: sticky;
			top: 0;
			/* #ifdef H5 */
			top: 88rpx;
			/* #endif */
			background: #fff;
			z-index: 999;
		}
		.items{
			padding: 0 30rpx;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: solid 1px #F1F1F6;
				padding: 35rpx 0;
				.left{
					width: 470rpx;
					>text{
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						margin-top: 30rpx;
						>:nth-child(1){
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							display: block;
							width: 2rpx;
							height: 14rpx;
							background: #A2A2B5;
						}
						>:nth-child(3),>:nth-child(4){
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #5F646A;
						}
						:not(:first-child){
							margin-left: 10rpx;
						}
					}
				}
				image{
					width: 175rpx;
					// height: 125rpx;
					border-radius: 6rpx;
					// background: #ccc;
				}
			}
		}
	}
</style>
