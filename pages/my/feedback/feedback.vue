<template>
	<view class="content">
		<view class="detail">
			<view class="line1">
				<text class="title">问题类型</text>
				<view class="" @click="popupShow = true">
					<text>请选择</text>
					<image src="/static/serve/right.png" mode=""></image>
				</view>
			</view>
			<view class="line2">
				<text class="title">问题详情</text>
				<u-input v-model="value" type="textarea" :custom-style="customStyle" height="220" :auto-height="false" :clearable="false"/>
			</view>
			<view class="line3">
				<view class="lettle">
					<text class="title">上传图片/视频</text>
					<text>{{list.length}}/3</text>
				</view>
				<view class="items">
					<view class="letm" v-for="(item,index) in list" :key="index" @click="preview(index)">
						<image :src="item" mode="heightFix"></image>
						<image src="/static/login/clear.png" mode="" @click.stop="show = true,sort = index"></image>
					</view>
					<view class="item" @click="choose()">
						<image src="/static/my/upload.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="submit">
			<text>提交</text>
		</view>
		<u-modal v-model="show" :content="content" @confirm="confirm()" title="" :show-cancel-button="true"></u-modal>
		<u-toast ref="uToast" />
		<u-popup v-model="popupShow" mode="bottom" :safe-area-inset-bottom="true" :closeable="false">
			<view class="popup">
				<view class="title">
					<image src="" mode=""></image>
					<text>问题类型</text>
					<image src="/static/my/close.png" mode="" @click="popupShow = false"></image>
				</view>
				<view class="list">
					<text 
						v-for="(item,index) in issueList" :key="index" 
						@click="active = item.id" 
						:class="active == item.id ? 'active' : ''"
					>{{item.text}}</text>
				</view>
				<view class="sure">
					<text>确认</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				sort: 999,
				content: '确定要删除该图片吗?',
				value: '',
				customStyle: {
					background: '#F6F5FA',
					borderRadius: '10rpx',
					padding: '25rpx 21rpx',
					fontSize: '26rpx',
					height: '220rpx'
				},
				list: [],
				popupShow: false,
				issueList: [
					{id: 1, text: '体验问题'},
					{id: 2, text: '订单问题'},
					{id: 3, text: '交易问题'},
					{id: 4, text: '支付问题'},
					{id: 5, text: '卖家问题'},
					{id: 6, text: '活动问题'},
					{id: 7, text: '新功能建议'},
					{id: 8, text: '其他'}
				],
				active: null
			}
		},
		onLoad() {
			
		},
		methods:{
			// 选择图片
			choose(){
				if(this.list.length >= 3){
					this.$refs.uToast.show({	
						title: '最多允许上传3张',
						type: 'warning'
					})
					return
				}
				// // #ifdef APP-PLUS
				// plus.gallery.pick(res=>{
				// 	// 选择文件完成回调
				// 	this.list = [...this.list, ...res.files]
				// 	this.list.forEach(elem=>{
				// 		if(elem.lastIndexOf('.jpg') > -1){
				// 			this.imgs.push(elem)
				// 		}else{
				// 			this.videos.push(elem)
				// 		}
				// 	})
					
				// },e=>{
				// 	// 取消选择回调
				// 	console.log("取消选择文件")
				// },{filter:"none",maximum: 3 - this.list.length,multiple: true})
				// // #endif
				uni.chooseImage({
				    count: 3 - this.list.length, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: res=> {
						this.list = [...this.list, ...res.tempFilePaths] // 如果是选择本地图片展示可以使用这种，一般都要上传网络地址的执行下面注释操作
				    }
				});
			},
			// 图片预览
			preview(e){
				// 预览图片
				uni.previewImage({
					urls: this.list,
					current: e
				});
			},
			// 确定删除
			confirm(){
				this.list.splice(this.sort, 1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.detail{
			padding: 15rpx 30rpx;
			border-top: solid 10rpx #F6F5FA;
			>view{
				.title{
					display: block;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
					padding: 25rpx 0;
				}
			}
			.line1{
				view{
					width: 100%;
					height: 80rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #F6F5FA;
					border-radius: 10rpx;
					padding: 0 21rpx;
					text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9F9FB5;
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
			.line3{
				.lettle{
					display: flex;
					justify-content: space-between;
					align-items: center;
					>:nth-child(2){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #BEBDC6;
					}
				}
				.items{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					.letm{
						height: 164rpx;
						margin: 0 20rpx 20rpx 0;
						position: relative;
						:nth-child(1){
							height: 100%;
							
						}
						:nth-child(2){
							width: 44rpx;
							height: 44rpx;
							position: absolute;
							top: 10rpx;
							right: 10rpx;
						}
					}
					.video{
						position: relative;
						:nth-child(2){
							width: 44rpx;
							height: 44rpx;
							position: absolute;
							top: 10rpx;
							right: 10rpx;
						}
					}
					.item{
						background: #F6F5FA;
						border-radius: 6px;
						width: 164rpx;
						height: 164rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
						}
					}
				}
			}
		}
		.submit{
			padding: 20rpx;
			text{
				display: block;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 74rpx;
				background: #F55454;
				border-radius: 6rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
		.popup{
			.title{
				padding: 33rpx 29rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: solid 1px #F6F5FB;
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
			.list{
				padding: 28rpx 29rpx;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				text{
					display: inline-block;
					width: 160rpx;
					height: 80rpx;
					margin-top: 17rpx;
					text-align: center;
					line-height: 80rpx;
					background: #F6F5FA;
					border: 1px solid #F6F5FA;
					border-radius: 6rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #1C1F2F;
				}
				>:not(:nth-child(4n-3)){
					margin-left: 18rpx;
				}
				.active{
					background: #FFF8F7;
					border: 1px solid #F55454;
					color: #F55454;
				}
			}
			.sure{
				margin-top: 50rpx;
				height: 98rpx;
				padding: 0 30rpx;
				border-top: solid 1px #F2F2F2;
				display: flex;
				justify-content: center;
				align-items: center;
				text{
					display: block;
					width: 100%;
					height: 74rpx;
					text-align: center;
					line-height: 74rpx;
					background: #F35455;
					border-radius: 6rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			}
		}
	}
</style>
