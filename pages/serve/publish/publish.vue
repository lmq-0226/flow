<template>
	<view class="content">
		<view class="pub">
			<view class="pubDetail">
				<view class="imgs">
					<view class="" v-for="(item,index) in imgs" :key="index" @click="pvew(index)">
						<image :src="item" mode="heightFix"></image>
						<image src="/static/my/close2.png" mode="" @click.stop="del(index)"></image>
						<text v-if="index == 0 && type == 2">封面</text>
					</view>
					<image src="/static/leave/upload.png" mode="" @click="upload()"></image>
				</view>
				<view class="">
					<u-input :custom-style="customStyle" v-model="name" type="text" placeholder="输入标题~" :clearable="false" />
					<u-input :custom-style="customStyle" v-model="desc" type="textarea" placeholder="填写正文..." :clearable="false" />
				</view>
				<view class="tags">
					<view class="area" v-for="(item,index) in tags" :key="index" @click="go(item.url)">
						<image :src="item.icon" mode=""></image>
						<text>{{item.lettle}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<!-- <text @click="go('./affirm/affirm?type=' + type)">立即发布</text> -->
			<text @click="go('../detail/detail?status=0&type=' + type)">立即发布</text>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1,
				imgs: [], // 图片上传列表
				name: '', // 名称
				desc: '', // 描述
				customStyle: {
					background: '#F6F5FA',
					marginTop: '20rpx',
					paddingLeft: '20rpx',
					borderRadius: '10rpx'
				},
				tags: [
					{icon: require('@/static/leave/tag1.png'),lettle: '话题',url: '/pages/community/publish/topic/topic'}
				],
				current: 0,
				value: '',
				scrollTop: 0
			};
		},
		onLoad(option) {
			this.type = option.type
		},
		methods:{
			upload(){
				// plus.io.requestFileSystem( plus.io.PRIVATE_WWW, function(res) {
				// 	console.log(res)
				// 	// 可通过fs操作PRIVATE_WWW文件系统 
				// 	// ......
				// },function (e) {
				// 	console.log( "Request file system failed: " + e.message );
				// });
				if(this.imgs.length >= 6){
					this.$refs.uToast.show({
						title: '最多上传6张图片',
						type: 'warning'
					})
					return
				}
				uni.chooseImage({
				    count: 6 - this.imgs.length, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: res =>{
						this.imgs = [...this.imgs, ...res.tempFilePaths]
				    }
				})
			},
			// 图片预览
			pvew(e){
				uni.previewImage({
					current: e,
					urls: this.imgs
				})
			},
			del(e){
				this.imgs.splice(e, 1)
				this.$refs.uToast.show({
					title: '删除成功!',
					type: 'success'
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
		}
	}
</script>

<style lang="scss">
	.content{
		padding-bottom: 100rpx;
		.pub{
			padding: 36rpx;
			.pubDetail{
				padding-bottom: 30rpx;
				border-bottom: solid 1px  #F7F7FB;
				.imgs{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					view{
						position: relative;
						margin-right: 17rpx;
						>:nth-child(1){
							height: 164rpx;
						}
						>:nth-child(2){
							position: absolute;
							top: 0;
							right: 0;
							width: 35rpx;
							height: 35rpx;
						}
						text{
							position: absolute;
							padding: 8rpx 14rpx;
							background: #F55454;
							border-radius: 6rpx;
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							top: 0;
							left: 0;
						}
					}
					>image{
						width: 164rpx;
						height: 164rpx;
					}
				}
				.tags{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					align-items: center;
					>:not(:last-child){
						margin-right: 15rpx;
					}
					.area{
						padding: 8rpx 16rpx;
						background: #F6F5FA;
						border-radius: 6rpx;
						margin-top: 20rpx;
						display: inline-flex;
						justify-content: center;
						align-items: center;
						image{
							width: 30rpx;
							height: 30rpx;
							margin-right: 4rpx;
						}
						text{
							font-size: 22rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #1D1D20;
						}
					}	
				}
				
			}
		}
		
		.bottom{
			width: 100%;
			height: 98rpx;
			border-top: solid 1px #f2f2f2;
			position: fixed;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			background: #fff;
			text{
				display: block;
				width: 100%;
				height: 74rpx;
				text-align: center;
				line-height: 74rpx;
				background: #F55454;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	
		.popups{
			.title{
				padding: 20rpx 29rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			.tabs{
				border-bottom: solid 1px #F2F2F2;
			}
			.search{
				padding: 20rpx 36rpx;
				/deep/ .u-input{
					border-radius: 10rpx;
					background: url(../../../static/shop/search.png) no-repeat 20rpx center;
					background-size: 44rpx;
					background-color: #F6F5FA;
					padding-left: 75rpx !important;
					padding-right: 20rpx !important;
				}
			}
			.scroll-Y{
				width: 100%;
				height: 650rpx;
				background: #F6F5FA;
				.goods{
					.demo-warter {
						border-radius: 8px;
						margin: 5px;
						background-color: #ffffff;
						padding: 8px;
						position: relative;
						.demo-title {
							margin-top: 14rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
							overflow: hidden;
							-webkit-line-clamp: 2;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
						}
						.num{
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 20rpx;
							>:nth-child(1){
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #FF4243;
							}
							>:nth-child(2){
								font-size: 22rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #9094A6;
							}
						}
					}
				}
			}
		}
	}
</style>
