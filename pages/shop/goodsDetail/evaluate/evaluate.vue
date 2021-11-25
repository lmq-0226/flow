<template>
	<view class="content">
		<view class="top">
			<text 
				v-for="(item,index) in topList" :key="index" 
				:class="topCut == index ? 'active' : ''" 
				@click="topCut = index"
			>{{item}}</text>
		</view>
		<view class="list">
			<view class="item" v-for="item in comList" :key="item.id">
				<view class="user">
					<view class="avatar">
						<image src="/static/avatar3.png" mode=""></image>
						<view class="nick">
							<text>{{item.nickname}}</text>
							<u-rate :current="item.rate" :disabled="true" size="18"></u-rate>
						</view>
					</view>
					<text>{{item.time}}</text>
				</view>
				<text class="desc">{{item.desc}}</text>
				<view class="imgs">
					<view class="" v-for="(elem,index) in item.imgs" :key="index" @click="pvew(item.imgs,index)">
						<u-lazy-load threshold="-450" border-radius="10" :image="elem" img-mode="widthFix" :index="index"></u-lazy-load>
					</view>
				</view>
				<view class="reply" v-if="item.reply != ''">
					<text>商家回复</text>
					<text>{{item.reply}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topList: [
					'全部','最新','好评','有图/视频'
				],
				topCut: 0,
				comList: [
					{
						id: 1,
						nickname: '北**海',
						rate: 5,
						time: '2020/11/21',
						desc: '买了很多件 蓝色 白色 黑色 红色 黄色都好看 我最喜欢p5 出门大印花很吸睛',
						imgs: [
							require('@/static/pub/bbt.png'),
							require('@/static/pub/ttq.png'),
							require('@/static/pub/ch.png'),
							require('@/static/pub/bql.png')
						],
						reply: '亲爱的顾客，感谢您选择本平台，谢谢您的认可，我们会继续努力，为您提供更好的服务。祝您生活愉快！'
					},
					{
						id: 2,
						nickname: '北**海',
						rate: 4.2,
						time: '刚刚',
						desc: '好看好看 很合身 趁着活动买了两件 有韩韩的感觉 黑白颜色都可入',
						imgs: [
							require('@/static/pub/bbt.png'),
						],
						reply: ''
					},
					{
						id: 3,
						nickname: '北**海',
						rate: 4.7,
						time: '刚刚',
						desc: '好看好看 很合身 趁着活动买了两件 有韩韩的感觉 黑白颜色都可入',
						imgs: [
							require('@/static/pub/bbt.png'),
							require('@/static/pub/ttq.png')
						],
						reply: ''
					}
				]
			};
		},
		onLoad() {
			
		},
		methods:{
			pvew(e, n){
				uni.previewImage({
					current: n,
					urls: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.top{
			padding: 20rpx ;
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
				margin-left: 20rpx;
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
