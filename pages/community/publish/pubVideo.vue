<template>
	<view class="content">
		<view class="pub" v-show="!modelShow">
			<view class="pubDetail">
				<view class="imgs">
					<video v-if="imgSrc != ''" ref="myVideo" id="myVideo" :style="{width: VWidth,height: VHeight,borderRadius: '10rpx',overflow: 'hidden'}" 
						:src="ImgUrl + videoSrc" :enable-progress-gesture="false"
						:page-gesture="false" :controls="false" :show-fullscreen-btn="true" :show-center-play-btn="true"
						 object-fit="cover" :poster="ImgUrl + imgSrc" @click="maskShow = true"
					></video>
					<image src="/static/leave/upload.png" mode="" @click="upload()"></image>
				</view>
				<view class="">
					<textarea :style="customStyle" v-model="desc" placeholder="编辑内容~" />
				</view>
				<view class="tags">
					<view class="area" v-for="(item,index) in tags" :key="index" @click="go(item.url)">
						<image :src="item.icon" mode=""></image>
						<text>{{item.lettle}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom" v-show="!modelShow">
			<!-- <view class="">
				<image src="/static/leave/draft.png" mode=""></image>
				<text>存草稿</text>
			</view> -->
			<!-- <text @click="go('./affirm/affirm?type=' + type)">立即发布</text> -->
			 <!-- @click="go('../detail/detail?status=0&type=' + type)" -->
			<text @click="publish()">立即发布</text>
		</view>
		<u-popup v-model="show" mode="bottom" border-radius="20">
			<view class="popups">
				<view class="title">
					<image src="" mode=""></image>
					<text>选择商品</text>
					<image src="../../../static/my/close.png" mode="" @click="show = false"></image>
				</view>
				<view class="tabs">
					<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#FC493D" @change="change"></u-tabs>
				</view>
				<view class="search">
					<u-input v-model="value" type="text" placeholder="搜索商品" :clearable="false" />
				</view>
				<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="rachBotm">
					<view class="goods">
						<!-- 瀑布流 -->
						<u-waterfall v-model="flowList" ref="uWaterfall">
							<template v-slot:left="{leftList}">
								<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="select(item.id)">
									<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
									<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image" img-mode="widthFix" :index="index"></u-lazy-load>
									<view class="demo-title">
										{{item.title}}
									</view>
									<view class="num">
										<text>¥{{item.price}}</text>
									</view>
									<view class="radio">
										<image v-if="goods_ids.indexOf(item.id) > -1" src="/static/login/radio_on.png" mode=""></image>
										<image v-else src="/static/login/radio.png" mode=""></image>
									</view>
								</view>
							</template>
							<template v-slot:right="{rightList}">
								<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="select(item.id)">
									<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
									<u-lazy-load threshold="-450" border-radius="10" :image="ImgUrl + item.image" img-mode="widthFix" :index="index"></u-lazy-load>
									<view class="demo-title">
										{{item.title}}
									</view>
									<view class="num">
										<text>¥{{item.price}}</text>
									</view>
									<view class="radio">
										<image v-if="goods_ids.indexOf(item.id) > -1" src="/static/login/radio_on.png" mode=""></image>
										<image v-else src="/static/login/radio.png" mode=""></image>
									</view>
								</view>
							</template>
						</u-waterfall>
						<u-empty v-if="flowList.length <= 0" text="您还没有购买过商品~" mode="data" margin-top="200"></u-empty>
						<!-- 加载更多 -->
						<u-loadmore v-if="flowList.length > 0" bg-color="#F6F5FA" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
					</view>
				</scroll-view>
			</view>
		</u-popup>
		<u-toast ref="uToast" />
		<view class="VPopup" v-if="maskShow">
			<video v-if="imgSrc != ''" :style="{width: '100%',height: '100%'}"
				:src="videoSrc" :enable-progress-gesture="false"
				:page-gesture="false" :controls="false" :show-fullscreen-btn="true" :show-center-play-btn="true"
				 object-fit="cover" :poster="imgSrc"
			></video>
		</view>
		<view class="mask" v-if="maskShow" @click="maskShow = false">
			
		</view>
		<u-modal v-model="modelShow" content="发布成功,等待审核" @confirm="back"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				VWidth: 0,
				VHeight: 0,
				videoSrc: '',
				imgSrc: '',
				type: 1,
				imgs: [], // 图片上传列表
				name: '', // 名称
				desc: '', // 描述
				customStyle: {
					width: '100%',
					background: '#F6F5FA',
					marginTop: '20rpx',
					padding: '20rpx',
					borderRadius: '10rpx',
					fontSize: '28rpx'
				},
				tags: [
					{icon: require('@/static/leave/tag1.png'),lettle: '话题',url: './topic/topic'},
					// {icon: require('@/static/leave/tag2.png'),lettle: '圈子',url: './circle/circle'},
					{icon: require('@/static/leave/tag3.png'),lettle: '商品',url: 'popup'}
					// {icon: require('@/static/leave/tag4.png'),lettle: '好友'},
					// {icon: require('@/static/leave/tag5.png'),lettle: '不显示',url: 'localtion'}
				],
				show: false,
				tabList: [{
					name: '推荐'
				}, {
					name: '出售'
				}, {
					name: '闲置'
				}],
				current: 0,
				value: '',
				loadStatus: 'loadmore', // 加载更多状态
				flowList: [],
				list: [],
				scrollTop: 0,
				topic_id: '',
				editorCtx: '',
				content: '',
				goods_ids: [],
				maskShow: false, // 遮罩
				modelShow: false,
				
			};
		},
		onLoad(option) {
			this.type = option.type
			// this.addRandomData()
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', res => {
				uni.uploadFile({
					url: 'http://app.51liuxiang.com/api/common/upload', //仅为示例，非真实的接口地址
					filePath: res,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('userInfo').token
					},
					success: res => {
						this.imgs.push(JSON.parse(res.data).data.url)
					}
				})
			})
		},
		methods:{
			publish(){
				let form = {
					topic_id: this.topic_id,
					content: this.content, // 内容
					goods_ids: this.goods_ids, // 商品id
					images: this.imgs, // 图片
					type: 'video',
					video_id: null
				}
				console.log(form)
				// return
				this.request({
					url: 'wanlshop/find/find/addData',
					header: {
						token: uni.getStorageSync('userInfo').token,
						'content-type': 'application/json;charset=UTF-8'
					},
					data: {
						video_url: this.videoSrc, // 视频地址
						topic_id: this.topic_id,
						content: this.content, // 内容
						goods_ids: this.goods_ids, // 商品id
						images: this.imgSrc, // 图片
						type: 'video'
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.modelShow = true
					}
				})
			},
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			change(index) {
				this.current = index;
			},
			select(e,n){
				// this.$set解决数组添加dom不更新
				this.$set(this.activeList,e,n)
			},
			upload(){
				uni.chooseVideo({
					sourceType: ['camera', 'album'],
					compressed: false, // 不压缩，压缩造成视频模糊
					success: (res)=>{
						console.log(res, 1)
						let url = res.tempFilePath
						this.uploadFile(res.tempFilePath)
						// this.videoSrc = res.tempFilePath
						// this.VWidth = res.width/2 + 'rpx'
						// this.VHeight = res.height/2 + 'rpx'
						// uni.getVideoInfo({
						// 	src: url,
						// 	success: (res) => {
						// 		console.log(res, 2)
						// 		uni.compressVideo({
						// 			src: url,
						// 			resolution: 1,
						// 			bitrate: res.bitrate,
						// 			fps: res.fps,
						// 			// quality: 'high',
						// 			success: (res) => {
						// 				console.log(res, 3)
						// 				this.videoSrc = res.tempFilePath
						// 			},
						// 			complete: (all) => {
						// 				console.log(all)
						// 			}
						// 		})
						// 	}
						// })
						
						
						// this.request({
						// 	url: 'wanlshop/video/getUploadProof',
						// 	method: 'GET',
						// 	header: {
						// 		token: uni.getStorageSync('userInfo').token
						// 	},
						// 	data: {
						// 		name: res.name
						// 	}
						// }).then(res=>{
						// 	console.log(res)
						// })
						
					}
				});
			},
			uploadFile(e){
				uni.uploadFile({
					url: 'http://app.51liuxiang.com/api/common/upload', //仅为示例，非真实的接口地址
					filePath: e,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('userInfo').token
					},
					success: res => {
						this.VWidth = 220 + 'rpx'						this.VHeight = 300 + 'rpx'
						this.videoSrc = JSON.parse(res.data).data.url
						this.imgSrc = this.videoSrc + '?x-oss-process=video/snapshot,t_1000,f_jpg'
						console.log(this.videoSrc + '?x-oss-process=video/snapshot,t_1000,f_jpg')
						// this.imgs.push()
					},
					complete: all => {
						console.log(all)
					}
				})
			},
			go(e){
				if(e == 'popup'){
					this.show = true
					this.getOrderList()
					return
				}else if(e == 'localtion'){
					uni.getLocation({
						type: 'wgs84',
						geocode: true,
						success: res => {
							console.log(res, '1111')
						},
						complete: err => {
							console.log(err, '222')
						}
					})
					return
				}
				uni.navigateTo({
					url: e
				})
			},
			onEditorInput(e) {
				this.content = e.detail.html;
			},
			onEditorReady() {
				// #ifdef MP-BAIDU
				this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
				// #endif
			
				// #ifdef APP-PLUS || H5 ||MP-WEIXIN
				uni.createSelectorQuery()
					.select('#editor')
					.context(res => {
						this.editorCtx = res.context;
					})
					.exec();
				// #endif
			},
			// 获取购买过的商品列表
			getOrderList(){
				this.request({
					url: 'wanlshop/order/getBuyList',
					header: {
						token: uni.getStorageSync('userInfo').token,
						'content-type': 'application/json;charset=UTF-8'
					},
					data: {
						page: 1
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.flowList = res.data.data.data
					}
				})
			},
			select(e){
				if(this.goods_ids.indexOf(e) > -1){
					let index = this.goods_ids.indexOf(e)
					this.goods_ids.splice(index, 1)
				}else{
					this.goods_ids.push(e)
				}
			},
			rachBotm(){
				this.loadStatus = 'loading';
				// 模拟数据加载
				setTimeout(() => {
					this.loadStatus = 'loadmore';
				}, 2000)
			},
			// 模拟数据请求
			addRandomData() {	
				for(let i = 0; i < 10; i++) {
					// 产生 0 到 this.list.length - 1 的一个整数型随机数  
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					// 唯一码
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			// 图片预览
			pvew(e){
				let arr = []
				this.imgs.forEach(elem=>{
					arr.push(this.ImgUrl + elem)
				})
				let timer = setTimeout(()=>{
					uni.previewImage({
						current: e,
						urls: arr
					})
				}, 50)
			},
			del(e){
				this.imgs.splice(e, 1)
				this.$refs.uToast.show({
					title: '删除成功!',
					type: 'success'
				})
			}
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
					video{
						width: 100%;
					}
					>image{
						width: 164rpx;
						height: 164rpx;
					}
				}
				
				.edit{
					background: #F6F5FA;
					margin-top: 20rpx;
					border-radius: 10rpx;
					padding: 10rpx;
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
			view{
				text-align: center;
				image{
					width: 44rpx;
					height: 44rpx;
				}
				text{
					display: block;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
				}
			}
			>text{
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
						.radio{
							width: 44rpx;
							height: 44rpx;
							position: absolute;
							top: 20rpx;
							right: 20rpx;
							image{
								width: 44rpx;
								height: 44rpx;
							}
						}
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
	
		.VPopup{
			width: 100%;
			z-index: 11;
			position: fixed;
			top: 0;
			left: 0;
		}
		
		.mask{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			background: rgba(0,0,0,0.3);
			z-index: 10;
		}
	
	}
</style>
