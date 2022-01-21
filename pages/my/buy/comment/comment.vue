<template>
	<view class="content">
		<view class="comment">
			<view class="" v-for="(item,index) in goodsList" :key="index">
				<view class="goods">
					<image :src="ImgUrl + item.image" mode=""></image>
					<view class="">
						<text>{{item.title}}</text>
						<text>{{item.difference}}</text>
					</view>
				</view>
				<view class="evaluate">
					<view class="baby">
						<text class="lettle">宝贝评价</text>
						<view class="sels">
							<view :class="item.state == 0 ? 'active' : ''" @click="slect(0,index)">
								<text>好评</text>
							</view>
							<view :class="item.state == 1 ? 'active' : ''" @click="slect(1,index)">
								<text>中评</text>
							</view>
							<view :class="item.state == 2 ? 'active' : ''" @click="slect(2,index)">
								<text>差评</text>
							</view>
						</view>
					</view>
					<view class="textarea">
						<textarea v-model="item.comment" placeholder="评价下商品~" />
					</view>
				</view>
				<view class="imgs">
					<view class="" v-for="(elem,cut) in item.imgList" :key="cut" @click="pvew(index,cut)">
						<image :src="ImgUrl + elem" mode="heightFix"></image>
						<image src="/static/my/close2.png" mode="" @click.stop="del(index,cut)"></image>
					</view>
					<image src="/static/leave/upload.png" mode="" @click="upload(index)"></image>
				</view>
			</view>
			
			<view class="shopStar">
				<view class="shop">
					<text>{{shop.shopname}}</text>
				</view>
				<view class="rate">
					<view class="">
						<text>描述相符</text>
						<u-rate :count="5" v-model="shop.describe" size="40"></u-rate>
					</view>
					<view class="">
						<text>物流服务</text>
						<u-rate :count="5" v-model="shop.logistics" size="40"></u-rate>
					</view>
					<view class="">
						<text>发货速度</text>
						<u-rate :count="5" v-model="shop.service" size="40"></u-rate>
					</view>
					<view class="">
						<text>服务态度</text>
						<u-rate :count="5" v-model="shop.deliver" size="40"></u-rate>
					</view>
				</view>
			</view>
		</view>
		<u-button class="uButton" @click="submit">发布评论</u-button>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_id: '', // 订单id
				goodsList: [], // 商品列表
				shop: {
					id: 0, // 店铺id
					shopname: '', //店铺名称
					describe : 0, // 描述相符评分
					logistics : 0, // 物流服务评分
					service : 0, // 发货速度
					deliver : 0 // 服务态度评分
				},
				detail: {},
				type: '', // 0 好评、1中评、2差评
				imgs: [], // 图片上传列表
			};
		},
		onLoad(option) {
			this.order_id = option.order_id
			this.getDetail()
		},
		methods:{
			submit(){
				// 判断是否给店铺评分，其他可以不填写，默认好评
				if (this.shop.describe == 0 || this.shop.logistics == 0 || this.shop.service == 0 || this.shop.deliver == 0) {
					this.$wanlshop.msg('请给店铺评分');
					return false;
				}
				let data = {
					order_id : this.order_id,
					shop : {
						id : this.shop.id,
						describe : this.shop.describe,
						logistics : this.shop.logistics,
						service : this.shop.service,
						deliver : this.shop.deliver
					},
					goodsList : this.goodsList
				}
				// console.log(data)
				// return
				this.request({
					url: 'wanlshop/order/commentOrder',
					header: {
						token: uni.getStorageSync('userInfo').token,
						'content-type': 'application/json;charset=UTF-8'
					},
					data: data
				}).then(res=>{
					if(res.data.code == 1){
						uni.showToast({
							title: '评论成功',
							icon: 'none'
						})
						uni.navigateBack({
							delta: 1
						})
					}
				})
			},
			getDetail(){
				this.request({
					url: 'wanlshop/order/getOrderInfo',
					method: 'GET',
					header: {
						token: uni.getStorageSync('userInfo').token,
						'content-type': 'application/json;charset=UTF-8'
					},
					data: {
						id: this.order_id
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.detail = res.data.data
						this.shop.id = res.data.data.shop_id;
						this.shop.shopname = res.data.data.shop.shopname;
						var newItems = [];
						this.detail.goods.forEach((item,index)=>{
							newItems.push({
								id: item['id'],
								goods_id: item['goods_id'],
								difference: item['difference'],
								image: item['image'],
								title: item['title'],
								imgList: [],
								comment: '',
								state: 0
							});
						})
						this.goodsList = newItems;
					}
				})
			},
			slect(e,n){
				this.goodsList[n].state = e
			},
			upload(e){
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
						res.tempFilePaths.forEach(elem=>{
							this.uploadFile(elem, e)
						})
				    }
				})
			},
			uploadFile(e, n){
				uni.uploadFile({
					url: 'http://app.51liuxiang.com/api/common/upload', //仅为示例，非真实的接口地址
					filePath: e,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('userInfo').token
					},
					success: res => {
						this.goodsList[n].imgList.push(JSON.parse(res.data).data.url)
						
					},
					complete: all => {
						console.log(all)
					}
				})
			},
			// 图片预览
			pvew(e,n){
				let arr = []
				this.goodsList[e].imgList.forEach(elem=>{
					arr.push(this.ImgUrl + elem)
				})
				uni.previewImage({
					current: n,
					urls: arr
				})
			},
			del(e,n){
				this.goodsList[e].imgList.splice(n, 1)
				this.$refs.uToast.show({
					title: '删除成功!',
					type: 'success'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.comment{
			padding: 20rpx;
			background: #F6F5FA;
			.goods{
				background: #fff;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 20rpx;
				border-radius: 10rpx;
				image{
					width: 160rpx;
					height: 160rpx;
					min-width: 160rpx;
					border-radius: 10rpx;
					margin-right: 20rpx;
				}
				view{
					height: 140rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					>:nth-child(1){
						font-size: 30rpx;
						color: #333;
						font-weight: bold;
						overflow: hidden;
						-webkit-line-clamp: 2;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}
					>:nth-child(2){
						font-size: 28rpx;
						color: #333;
					}
				}
			}
		
			.evaluate{
				padding: 20rpx;
				background: #fff;
				border-radius: 10rpx;
				margin-top: 20rpx;
				.baby{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.lettle{
						font-size: 30rpx;
						color: #333;
						font-weight: bold;
					}
					.sels{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						margin-left: 30rpx;
						view{
							padding: 0 20rpx;
							text{
								font-size: 28rpx;
								color: #333;
							}
						}
						.active{
							text{
								color: #ff4e02;
								font-weight: bold;
							}
						}
					}
				}
				.textarea{
					margin-top: 20rpx;
					textarea{
						padding: 20rpx;
						background: #fafafa;
						font-size: 26rpx;
						height: 200rpx;
						border-radius: 10rpx;
					}
				}
			}
		
			.imgs{
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				background: #fff;
				padding: 20rpx;
				margin-top: 20rpx;
				border-radius: 10rpx;
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
		
			.shopStar{
				background: #fff;
				padding: 20rpx;
				margin-top: 20rpx;
				border-radius: 10rpx;
				.shop{
					text{
						font-size: 26rpx;
						font-weight: bold;
					}
				}
				.rate{
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						padding: 10rpx 0;
						text{
							margin-right: 20rpx;
							font-size: 26rpx;
						}
					}
				}
			}
		}
	}
</style>
