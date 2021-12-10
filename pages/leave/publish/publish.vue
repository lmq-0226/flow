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
				<!-- 平台寄卖 -->
				<view class="" v-if="type == 1">
					<u-input :custom-style="customStyle" v-model="name" type="text" placeholder="输入寄卖商品名称~" :clearable="false" />
					<u-input :custom-style="customStyle" v-model="desc" type="textarea" placeholder="给鉴定师多一些对商品的描述..." :clearable="false" />
				</view>
				<!-- 拍图售卖 -->
				<view class="" v-else>
					<u-input :custom-style="customStyle" v-model="name" type="text" placeholder="填写标题" :clearable="false" />
					<u-input :custom-style="customStyle" v-model="desc" type="textarea" placeholder="买家都关心品牌型号、入手渠道、转售原因..." :clearable="false" />
				</view>
				<view class="area">
					<image src="/static/my/location.png" mode=""></image>
					<text>苏州市</text>
				</view>
			</view>
			<view class="classify" :style="'height: '+ classHeight +';overflow: hidden;'">
				<view class="lettle">
					<view class="">
						<image src="/static/leave/classify.png" mode=""></image>
						<text>{{classStatus ? '分类' : '分类/来源/状态'}}</text>
					</view>
					<image v-if="classStatus" src="/static/leave/on.png" mode="" @click="classStatus = false,classHeight = '88rpx'"></image>
					<image v-else src="/static/leave/down.png" mode="" @click="classStatus = true,classHeight = '100%'"></image>
				</view>
				<view class="classitem" v-for="(item,index) in classList" :key="index">
					<text class="title" v-if="index > 0">{{item.lettle}}</text>
					<text v-for="(elem,cut) in item.class" :key="cut" :class="activeList.indexOf(elem.id) > -1 ? 'active' : ''" @click="select(index,elem.id)">{{elem.text}}</text>
				</view>
			</view>
			<view class="classify price" :style="'height: '+ priceHeight +';overflow: hidden;'">
				<view class="lettle">
					<view class="">
						<image src="/static/leave/money.png" mode=""></image>
						<text>价格</text>
					</view>
					<image v-if="priceStatus" src="/static/leave/on.png" mode="" @click="priceStatus = false,priceHeight = '88rpx'"></image>
					<image v-else src="/static/leave/down.png" mode="" @click="priceStatus = true,priceHeight = '100%'"></image>
				</view>
				<view class="num">
					<view class="">
						<text>售价 ¥</text>
						<u-input v-model="sprice" type="number" :clearable="false" placeholder="请输入售价"/>
					</view>
				</view>
				<view class="num" v-if="type == 2">
					<view class="">
						<text>原价 ¥</text>
						<u-input v-model="oprice" type="number" :clearable="false" placeholder="请输入原价"/>
					</view>
				</view>
				<view class="num" v-if="type == 2">
					<view class="">
						<text>运费 ¥</text>
						<u-input v-model="freight" type="number" :clearable="false" placeholder="请输入运费"/>
					</view>
					<view class="">
						<text>包邮</text>
						<text>距离估算</text>
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
				classList: [
					{
						lettle: '分类',class:[
							{id: 2,text: '运动鞋'},
							{id: 3,text: '帆布鞋'},
							{id: 4,text: '高跟鞋'},
							{id: 5,text: '平底鞋'},
							{id: 6,text: '皮鞋'},
						]
					},
					{
						lettle: '来源',class:[
							{id: 8,text: '代购'},
							{id: 9,text: '他人赠送'},
							{id: 10,text: '线下专柜'}
						]
					},
					{
						lettle: '状态',class:[
							{id: 14,text: '全新'},
							{id: 15,text: '几乎全新'},
							{id: 16,text: '轻微使用痕迹'},
							{id: 17,text: '明显使用痕迹'}
						]
					}
				],
				classHeight: '100%', // 分类动态高度
				priceHeight: '100%', // 价格动态高度
				classStatus: true, // 下拉框状态
				priceStatus: true,
				activeList: [] ,// 分类、来源、状态id
				sprice: '', // 售价
				oprice: '', // 原价
				freight: '' // 运费
			};
		},
		onLoad(option) {
			this.type = option.type
		},
		methods:{
			select(e,n){
				// this.$set解决数组添加dom不更新
				this.$set(this.activeList,e,n)
			},
			upload(){
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
				uni.navigateTo({
					url: e
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
				.area{
					
					padding: 4rpx 9rpx;
					background: #F6F5FA;
					border-radius: 6rpx;
					margin-top: 20rpx;
					display: inline-flex;
					justify-content: center;
					align-items: center;
					image{
						width: 40rpx;
						height: 40rpx;
					}
					text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #1D1D20;
					}
				}	
			}
			.classify{
				
				.lettle{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0 14rpx;
					view{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						text{
							margin-left: 10rpx;
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #1D1D20;
						}
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
				.classitem{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-wrap: wrap;
					.title{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #1D1D20;
						margin-right: 25rpx;
					}
					>:not(.title){
						padding: 18rpx 28rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #686879;
						border: 3rpx solid #EDEDF2;
						border-radius: 10rpx;
						margin: 12rpx 12rpx 0rpx 0;
					}
				}
				.active{
					background: linear-gradient(-34deg, #EE4647 0%, #FF7F7C 100%);
					border-radius: 10rpx;
					color: #fff !important;
				}
			}
			.price{
				.num{
					margin-top: 12rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					>:nth-child(1){
						display: flex;
						justify-content: flex-start;
						align-items: center;
						text{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #1D1D20;
						}
						/deep/ .u-input{
							flex: unset;
							// width: 106rpx !important;
							min-width: 106rpx;
							width: 180rpx;
							background: #F6F5FA;
							border-radius: 10rpx;
							padding: 0 20rpx !important;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}
					>:nth-child(2){
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text{
							display: inline-block;
							padding: 18rpx 28rpx;
							border: 3rpx solid #EDEDF2;
							border-radius: 10rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #686879;
							margin-left: 12rpx;
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
	}
</style>
