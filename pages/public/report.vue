<template>
	<view class="content">
		<view class="detail">
			<view class="line1">
				<text class="title">举报理由</text>
				<view class="">
					<u-input v-model="feedDetail.reason_text" disabled placeholder="请选择举报理由" @click="openPopup" />
					<image src="/static/serve/right.png" mode=""></image>
				</view>
			</view>
			<view class="line2">
				<text class="title">举报内容</text>
				<u-input v-model="feedDetail.content"  :disabled="status != 'submit'" type="textarea" :custom-style="customStyle" height="220" :auto-height="false" :clearable="false"/>
			</view>
			<view class="line3">
				<view class="lettle">
					<text class="title">上传图片</text>
					<text>{{feedDetail.images.length}}/5</text>
				</view>
				<view class="items">
					<view class="letm" v-for="(item,index) in feedDetail.images" :key="index" @click="preview(index)">
						<image :src="ImgUrl + item" mode="heightFix"></image>
						<image v-if="status == 'submit'" src="/static/login/clear.png" mode="" @click.stop="show = true,sort = index"></image>
					</view>
					<view class="item" @click="choose()">
						<image src="/static/my/upload.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="line2" v-if="status == 'hidden'">
				<text class="title">反馈详情</text>
				<u-input v-model="feedDetail.receipt"  :disabled="status != 'submit'" type="textarea" :custom-style="customStyle" height="220" :auto-height="false" :clearable="false"/>
			</view>
		</view>
		<u-button v-if="status == 'submit'" :loading="loading" :class="status == 'submit' ? 'submit' : 'normal'" @click="submit">
			提交
		</u-button>
		<u-button v-else-if="status == 'normal'" :loading="loading" :class="status == 'submit' ? 'submit' : 'normal'" @click="normal">
			未受理
		</u-button>
		<u-button v-else-if="status == 'hidden'" :loading="loading" :class="[status == 'submit' ? 'submit' : 'normal', 'bot']" @click="delshow = true">
			提交新的举报
		</u-button>
		<u-modal v-model="show" :content="content" @confirm="confirm()" title="" :show-cancel-button="true"></u-modal>
		<u-modal v-model="delshow" content="是否重新提交举报" @confirm="del()" :show-cancel-button="true"></u-modal>
		<u-toast ref="uToast" />
		<u-popup v-model="popupShow" mode="bottom" :safe-area-inset-bottom="true" :closeable="false" @touchmove.native.stop.prevent>
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
				<view class="sure" @click="select">
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
				
				customStyle: {
					background: '#F6F5FA',
					borderRadius: '10rpx',
					padding: '25rpx 21rpx',
					fontSize: '26rpx',
					height: '220rpx'
				},
				// 举报理由弹窗
				popupShow: false,
				// 举报理由
				issueList: [
					{id: 0, text: '虚假交易'},
					{id: 1, text: '诈骗欺诈'},
					{id: 2, text: '收到空包裹'},
					{id: 3, text: '假冒盗版'},
					{id: 4, text: '泄露信息'},
					{id: 5, text: '违禁物品'},
					{id: 6, text: '未按成交价交易'},
					{id: 7, text: '未按约定时间发货'},
					{id: 8, text: '垃圾营销'},
					{id: 9, text: '涉黄信息'},
					{id: 10, text: '不实信息'},
					{id: 11, text: '人身攻击'},
					{id: 12, text: '违法信息'},
					{id: 13, text: '诈骗信息'},
				],
				active: null, // 所选举报理由
				loading: false,
				// 举报提交内容
				feedDetail: {
					content: '', // 举报内容详情
					reason: '', // 举报理由id
					reason_text: '', // 举报理由
					images: [], // 图片数据
					type: 4, // 举报类型
					complaint_user_id: '', // 被举报用户ID 否
					complaint_shop_id: '', // 被举报店铺ID 否
					complaint_goods_id: '', // 被举报商品ID	字符串	否
					complaint_article_id: '', // 被举报文章视频ID	字符串	否	10	
				} ,// 反馈详情
				status: 'submit',
				delshow: false,
			}
		},
		onLoad(option) {
			if(option.type){
				this.feedDetail.type = option.type
			}
			if(option.article_id){
				this.feedDetail.complaint_article_id = option.article_id
			}
			if(option.user_id){
				this.feedDetail.complaint_user_id = option.user_id
			}
			if(option.shop_id){
				this.feedDetail.complaint_shop_id = option.shop_id
			}
			if(option.goods_id){
				this.feedDetail.complaint_goods_id = option.goods_id
			}
			this.getFeedList()
		},
		methods:{
			// 选择举报理由
			select(){
				this.feedDetail.reason = this.issueList[this.active].id
				this.feedDetail.reason_text = this.issueList[this.active].text
				this.popupShow = false
			},
			normal(){
				uni.showToast({
					title: '已提交，正在受理',
					icon: 'none'
				})
			},
			openPopup(){
				if(this.status != 'submit'){
					return
				}
				this.popupShow = true
			},
			// 删除反馈
			del(){
				this.request({
					url: 'wanlshop/complaint/del',
					data: {
						token: uni.getStorageSync('userInfo').token,
						ids: this.feedDetail.id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.feedDetail.reason = '', // 举报理由
						this.feedDetail.content = '', // 举报内容
						this.feedDetail.images = [], // 图片集
						this.feedDetail.reason_text = '', // 举报理由
						this.status = 'submit'
					}
				})
			},
			// 获取举报列表
			getFeedList(){
				this.request({
					url: 'wanlshop/complaint/list',
					data: {
						token: uni.getStorageSync('userInfo').token,
						page_index: 1,
						page_size: 10
					}
				}).then(res=>{
					if(res.data.code == 1){
						if(res.data.data.list.length >= 1){
							res.data.data.list.forEach(elem=>{
								if(elem.complaint_article_id == this.feedDetail.complaint_article_id && elem.state != 'submit' && this.feedDetail.complaint_article_id != ''){
									this.feedDetail = elem
									this.status = elem.state
								}
								if(elem.complaint_goods_id == this.feedDetail.complaint_goods_id && elem.state != 'submit' && this.feedDetail.complaint_goods_id != ''){
									this.feedDetail = elem
									this.status = elem.state
								}
							})
						}
					}
				})
			},
			// 举报提交
			submit(){
				if(this.feedDetail.reason == ''){
					uni.showToast({
						title: '请选择举报理由',
						icon: 'none'
					})
					return
				}
				if(this.feedDetail.content == ''){
					uni.showToast({
						title: '请填写问题详细信息',
						icon: 'none'
					})
					return
				}
				if(this.feedDetail.images.length <= 0){
					uni.showToast({
						title: '请上传图片信息',
						icon: 'none'
					})
					return
				}
				this.loading = true
				this.request({
					url: 'wanlshop/complaint/add',
					data: {
						token: uni.getStorageSync('userInfo').token,	
						reason: this.feedDetail.reason, // 举报理由
						content: this.feedDetail.content, // 举报内容
						images: this.feedDetail.images, // 图片集
						type: this.feedDetail.type, // 举报类型
						complaint_user_id: this.feedDetail.complaint_user_id, // 被举报用户ID 否
						complaint_shop_id: this.feedDetail.complaint_shop_id, // 被举报店铺ID 否
						complaint_goods_id: this.feedDetail.complaint_goods_id, // 被举报商品ID	字符串	否
						complaint_article_id: this.feedDetail.complaint_article_id, // 被举报文章视频ID	字符串	否	10	
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.$refs.uToast.show({
							title: '提交成功',
							type: 'success',
							duration: 1500,
							callback: ()=>{
								this.loading = false
								this.getFeedList()
							}
						})
					}
				})
			},
			// 选择图片
			choose(){
				if(this.feedDetail.images.length >= 5){
					this.$refs.uToast.show({	
						title: '最多允许上传5张',
						type: 'warning'
					})
					return
				}else if(this.status != 'submit'){
					return
				}
				uni.chooseImage({
				    count: 5 - this.feedDetail.images.length, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: res=> {
						// this.list = [...this.list, ...res.tempFilePaths] // 如果是选择本地图片展示可以使用这种，一般都要上传网络地址的执行下面注释操作
						res.tempFilePaths.forEach(elem=>{
							this.uploadFile(elem)
						})
					}
				});
			},
			// 上传网络图片
			uploadFile(e){
				uni.uploadFile({
					url: 'http://app.51liuxiang.com/api/common/upload', //仅为示例，非真实的接口地址
					filePath: e,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('userInfo').token
					},
					success: res => {
						this.feedDetail.images.push(JSON.parse(res.data).data.url)
						
					},
					complete: all => {
						console.log(all)
					}
				})
			},
			// 图片预览
			preview(e){
				let arr = []
				this.feedDetail.images.forEach(elem=>{
					arr.push(this.ImgUrl + elem)
				})
				// 预览图片
				uni.previewImage({
					urls: arr,
					current: e
				})
			},
			// 确定删除
			confirm(){
				this.feedDetail.images.splice(this.sort, 1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		min-height: 100vh;
		/* #ifdef H5 */
		min-height: calc(100vh - 100rpx);
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
			// padding: 20rpx;
				display: block;
				width: 80%;
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
		.bot{
			margin: 30rpx auto;
		}
		.normal{
			display: block;
			width: 80%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 74rpx;
			background: #ccc;
			border-radius: 6rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
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
