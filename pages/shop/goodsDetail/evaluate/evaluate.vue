<template>
	<view class="content">
		<view class="top">
			<text 
				v-for="(item,index) in topList" :key="index" 
				:class="tag == item.tag ? 'active' : ''" 
				@click="selectCut(item)"
			>{{item.lettle + '(' + item.num + ')'}}</text>
		</view>
		<view class="list">
			<view class="item" v-for="item in comList.data" :key="item.id">
				<view class="user">
					<view class="avatar">
						<image :src="ImgUrl + item.user.avatar" mode=""></image>
						<view class="nick">
							<text>{{item.user.nickname}}</text>
							<u-rate :current="item.score" :disabled="true" size="18"></u-rate>
						</view>
					</view>
					<text>{{date('YmdHis',item.createtime*1000)}}</text>
				</view>
				<text class="desc">{{item.content}}</text>
				<view class="imgs">
					<view class="" v-for="(elem,index) in item.images" :key="index" @click="pvew(item.images,index)">
						<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + elem" img-mode="widthFix" :index="index"></u-lazy-load>
					</view>
				</view>
				<!-- <view class="reply" v-if="item.reply != ''">
					<text>商家回复</text>
					<text>{{item.reply}}</text>
				</view> -->
			</view>
		</view>
		<u-empty v-if="comList.data.length <= 0" text="暂无评论" mode="list" margin-top="400"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				topList: [
					{tag: '',lettle: '全部',num: 0},
					{tag: 'good',lettle: '好评',num: 0},
					{tag: 'pertinent',lettle: '中评',num: 0},
					{tag: 'poor',lettle: '差评',num: 0},
					{tag: 'figure',lettle: '有图',num: 0}
				],
				tag: '',
				topCut: 0,
				comList: [],
				
			};
		},
		onLoad(option) {
			this.id = option.id
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'wanlshop/product/comment',
					method: 'GET',
					header: {
						token: uni.getStorageSync('userInfo').token
					},
					data: {	
						id: this.id,
						page: 1,
						tag: this.tag
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.comList = res.data.data.comment
						this.topList[0].num = res.data.data.statistics.total
						this.topList[1].num = res.data.data.statistics.good
						this.topList[2].num = res.data.data.statistics.pertinent
						this.topList[3].num = res.data.data.statistics.poor
						this.topList[4].num = res.data.data.statistics.figure
					}
				})
			},
			selectCut(e){
				if(this.tag == e.tag) return;
				this.tag = e.tag
				this.getData()
			},
			pvew(e, n){
				let arr = []
				e.forEach(elem=>{
					arr.push(this.ImgUrl + elem)
				})
				uni.previewImage({
					current: n,
					urls: arr
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.top{
			padding: 0 20rpx 20rpx;
			border-top: solid 10rpx #F6F5FA;
			border-bottom: solid 10rpx #F6F5FA;
			position: sticky;
			top: 0;
			/* #ifdef H5 */
			top: 88rpx;
			/* #endif */
			z-index: 999;
			background: #fff;
			text{
				display: inline-block;
				margin: 20rpx 0 0 20rpx;
				padding: 10rpx 20rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #1C1F2F;
				background: #F6F5FA;
				border-radius: 6rpx;
				border: solid 1px #F6F5FA;
			}
			.active{
				color: #FF4243;
				background: #FFF8F7;
				border: 1px solid #F55454;
			}
		}	
		.list{
			padding: 0 36rpx;
			.item{
				padding: 36rpx 0;
				border-bottom: solid 1px #F1F2FB;
				.user{
					display: flex;
					justify-content: space-between;
					.avatar{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						image{
							width: 66rpx;
							height: 66rpx;
							margin-right: 14rpx;
							border-radius: 50%;
						}
						.nick{
							height: 66rpx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							>:nth-child(1){
								font-size: 26rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #000000;
							}
						}
					}
					>text{
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9094A6;
					}
				}
				.desc{
					display: block;
					margin-top: 20rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
					line-height: 38rpx;
				}
				.imgs{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					
					view{
						width: 220rpx;
						height: 220rpx;
						margin-top: 9rpx;
						image{
							width: 220rpx;
							height: 220rpx;
						}
					}
					:nth-child(3n+2){
						margin: 9rpx 9rpx 0;
					}
				}
				.reply{
					margin-top: 30rpx;
					padding: 24rpx 30rpx;
					background: #F6F5FA;
					border-radius: 10rpx;
					text{
						display: block;
						font-size: 24rpx;
						font-family: PingFang SC;
						
						color: #333333;
					}
					>:nth-child(1){
						font-weight: bold;
						margin-bottom: 21rpx;
					}
					>:nth-child(2){
						
					}
				}
			}
		}
	}
</style>
