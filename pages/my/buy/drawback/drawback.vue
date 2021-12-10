<template>
	<view class="content">
		<view class="context">
			<view class="menus">
				<view class="" @click="statusPopup = true">
					<text>货物状态</text>
					<text>已收到货</text>
				</view>
				<view class="" @click="cause = true">
					<text>退款原因</text>
					<text>尺码不合适</text>
				</view>
				<view class="" @click="refundAmount = true">
					<text>退款金额</text>
					<text>¥899.00</text>
				</view>
				<view class="" @click="returnWay = true">
					<text>退货方式</text>
					<text>自行邮寄</text>
				</view>
			</view>
			<view class="write">
				<text>补充描述和凭证</text>
				<view class="desc">
					<u-input v-model="value" type="textarea" maxlength="200" :clearable="false" :auto-height="true"/>
					<text>{{value.length}} / 200</text>
					<view class="imgs">
						<view class="item" v-for="(item,index) in imgs" :key="index" @click="pvew(index)">
							<image :src="item" mode="heightFix"></image>
							<image src="/static/my/close2.png" mode="" @click.stop="del(index)"></image>
						</view>
						<image src="/static/my/upload2.png" mode="" @click="upload()"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="submit" @click="submit">
			提交
		</view>
		<u-toast ref="uToast" />
		<!-- 货物状态 -->
		<u-popup v-model="statusPopup" mode="bottom" border-radius="20" @touchmove.native.stop.prevent>
			<view class="statusPopup popupBot">
				<view class="title">
					<image src="" mode=""></image>
					<text>货物状态</text>
					<image src="/static/my/close.png" mode="" @click="statusPopup = false"></image>
				</view>
				<view class="radios">
					<view class="" @click="status = true">
						<text>已收到货</text>
						<image v-if="status" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
					<view class="" @click="status = false">
						<text>未收到货</text>
						<image v-if="!status" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
				</view>
				<view class="sure">
					<text @click="statusPopup = false">确认</text>
				</view>
			</view>
		</u-popup>
		<!-- 退款原因 -->
		<u-popup v-model="cause" mode="bottom" border-radius="20">
			<view class="cause popupBot">
				<view class="title">
					<image src="" mode=""></image>
					<text>退款原因</text>
					<image src="/static/my/close.png" mode="" @click="cause = false"></image>
				</view>
				<view class="causeList">
					<view class="item" v-for="(item,index) in causeList" :key="item.id" @click="cause_id = item.id">
						<text>{{item.desc}}</text>
						<image v-if="cause_id == item.id" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
				</view>
				
				<view class="sure">
					<text @click="cause = false">确认</text>
				</view>
			</view>
		</u-popup>
		<!-- 退款金额 -->
		<u-popup v-model="refundAmount" mode="bottom" border-radius="20" @touchmove.native.stop.prevent>
			<view class="refundAmount popupBot">
				<view class="title">
					<image src="" mode=""></image>
					<text>退款金额</text>
					<image src="/static/my/close.png" mode="" @click="refundAmount = false"></image>
				</view>	
				<view class="mid">
					<view class="total">
						<view class="">
							<text>退款金额</text>
							<text>¥899.00</text>
						</view>
						<text>退款金额将在退货回仓质检鉴别后1~3个工作日内原路退回</text>
					</view>
					<view class="out">
						<view class="">
							<text>实付金额(不含优惠)</text>
							<text>¥899.00</text>
						</view>
						<view class="">
							<text>优惠券</text>
							<text>¥10.00</text>
						</view>
						<text>优惠券将在退货完成后退回</text>
					</view>
				</view>
				<view class="sure">
					<text @click="refundAmount = false">确认</text>
				</view>
			</view>
		</u-popup>
		<!-- 退货方式 -->
		<!-- 货物状态 -->
		<u-popup v-model="returnWay" mode="bottom" border-radius="20" @touchmove.native.stop.prevent>
			<view class="statusPopup popupBot">
				<view class="title">
					<image src="" mode=""></image>
					<text>退货方式</text>
					<image src="/static/my/close.png" mode="" @click="returnWay = false"></image>
				</view>
				<view class="radios">
					<view class="" @click="way = true">
						<text>自行邮寄</text>
						<image v-if="way" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
					<view class="" @click="way = false">
						<text>顺丰上门取件</text>
						<image v-if="!way" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
				</view>
				<view class="sure">
					<text @click="returnWay = false">确认</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				imgs: [],
				statusPopup: false, // 货物状态弹窗
				status: true, // 状态 true已收到货 false未收到
				refundAmount: false ,// 退款金额
				cause: false ,// 退款原因
				cause_id: 0,
				causeList: [
					{id: 1,desc: '尺码排错/不喜欢/效果差'},
					{id: 2,desc: '材质/面料与商品描述不符'},
					{id: 3,desc: '尺寸大小与商品描述不符'},
					{id: 4,desc: '颜色/款式/图案与商品描述不符'},
					{id: 5,desc: '卖家发错货'},
					{id: 6,desc: '假冒品牌'},
					{id: 7,desc: '收到商品少件或破损'}
				],
				returnWay: false, // 退款方式
				way: true // 方式
			};
		},
		onLoad() {
			
		},
		methods:{
			// 提交退款申请
			submit(){
				uni.navigateTo({
					url: '/pages/my/refund/detail/detail'
				})
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
			pvew(e){
				uni.previewImage({
					current: e,
					urls: this.imgs
				})
			},
			del(e){
				this.imgs.splice(e, 1)
				this.$refs.uToast.show({
					title: '删除成功！',
					type: 'success'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 88rpx);
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 30rpx;
		.menus{
			padding: 0 30rpx;
			border-top: solid 14rpx #F6F5FA;
			border-bottom: solid 14rpx #F6F5FA;
			view{
				padding: 37rpx 46rpx 37rpx 6rpx;
				border-bottom: solid 1px #F6F5FA;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: url(../../../../static/serve/right.png) no-repeat right center;
				background-size: 44rpx;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			>:nth-child(3){
				>:nth-child(2){
					color: #FF4243;
				}
			}
		}
		.write{
			padding: 0 30rpx;
			>text{
				display: block;
				padding: 25rpx 7rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
			}
			.desc{
				padding: 20rpx;
				background: #F6F5FA;
				border-radius: 10rpx;
				/deep/ .u-input__textarea{
					padding: 0;
				}
				>text{
					display: block;
					width: 100%;
					text-align: right;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #BEBDC6;
				}
				.imgs{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					margin-top: 10rpx;
					.item{
						position: relative;
						margin-right: 20rpx;
						>:nth-child(1){
							height: 140rpx;
							border-radius: 10rpx;
						}
						>:nth-child(2){
							width: 35rpx;
							height: 35rpx;
							position: absolute;
							top: 0;
							right: 0;
							z-index: 99;
						}
					}
					>image{
						width: 140rpx;
						height: 140rpx;
					}
				}
			}
		}
		.submit{
			width: 690rpx;
			height: 74rpx;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #F35455;
			border-radius: 6rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
		}
		.statusPopup{
			.radios{
				view{
					padding: 28rpx 0;
					border-bottom: solid 1px #F6F5FA;
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
		}
		
		.cause{
			.causeList{
				padding: 0 30rpx;
				.item{
					padding: 28rpx 0;
					border-bottom: solid 1px #F6F5FA;
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #000000;
					}
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
				
			}
		}
		
		.refundAmount{
			.mid{
				>view{
					padding: 30rpx 0;
				}
				.total{
					border-bottom: solid 1px #F6F5FB;
					view{
						display: flex;
						justify-content: space-between;
						align-items: center;
						>:nth-child(1){
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
						>:nth-child(2){
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #FF4243;
						}
					}
					>text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #747485;
					}
				}
				.out{
					>:nth-child(2){
						padding: 10rpx 0;
					}
					view{
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					>text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #747485;
					}
				}
				
			}
		}
		
		.popupBot{
			>view{
				padding: 0 30rpx;
			}
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 33rpx 30rpx;
				border-bottom: solid 1px #F6F5FB;
				text{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
			.sure{
				width: 100%;
				height: 98rpx;
				background: #FFFFFF;
				padding: 12rpx 30rpx;
				border-top: solid 1px #F2F2F2;
				margin-top: 50rpx;
				text{
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
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
