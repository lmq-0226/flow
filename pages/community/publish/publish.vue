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
			<view class="">
				<image src="/static/leave/draft.png" mode=""></image>
				<text>存草稿</text>
			</view>
			<!-- <text @click="go('./affirm/affirm?type=' + type)">立即发布</text> -->
			<text @click="go('../detail/detail?status=0&type=' + type)">立即发布</text>
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
								<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="go('./goodsDetail/goodsDetail')">
									<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
									<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
									<view class="demo-title">
										{{item.title}}
									</view>
									<view class="num">
										<text>¥899</text>
										<text>156人付款</text>
									</view>
								</view>
							</template>
							<template v-slot:right="{rightList}">
								<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="go('./goodsDetail/goodsDetail')">
									<u-lazy-load threshold="-450" border-radius="10" :image="item.image" img-mode="widthFix" :index="index"></u-lazy-load>
									<view class="demo-title">
										{{item.title}}
									</view>
									<view class="num">
										<text>¥899</text>
										<text>156人付款</text>
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
					{icon: require('@/static/leave/tag1.png'),lettle: '话题',url: './topic/topic'},
					{icon: require('@/static/leave/tag2.png'),lettle: '圈子',url: './circle/circle'},
					{icon: require('@/static/leave/tag3.png'),lettle: '商品',url: 'popup'},
					{icon: require('@/static/leave/tag4.png'),lettle: '好友'},
					{icon: require('@/static/leave/tag5.png'),lettle: '不显示',url: 'localtion'}
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
				list: [
					{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						price: 385,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						price: 784,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					},
					{
						price: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
					},
					{
						price: 2341,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
					},
					{
						price: 661,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
					},
					{
						price: 1654,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 1678,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 924,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
				],
				scrollTop: 0
			};
		},
		onLoad(option) {
			this.type = option.type
			this.addRandomData()
		},
		methods:{
			change(index) {
				this.current = index;
			},
			select(e,n){
				// this.$set解决数组添加dom不更新
				this.$set(this.activeList,e,n)
			},
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
			go(e){
				if(e == 'popup'){
					this.show = true
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
			rachBotm(){
				this.loadStatus = 'loading';
				// 模拟数据加载
				setTimeout(() => {
					this.addRandomData();
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
				width: 557rpx;
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
