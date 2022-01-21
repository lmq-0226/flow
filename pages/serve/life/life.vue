<template>
	<view class="content">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="go('./store?detail=' + JSON.stringify(item))">
				<image :src="ImgUrl + item.image" mode=""></image>
				<view class="right">
					<text class="name">{{item.name}}</text>
					<view class="middle">
						<view class="mid_left">
							<text>人均{{item.consumption}}元</text>
							<text>{{item.hours}}</text>
						</view>
						<view class="mid_right">
							<view class="map" @click.stop="openMap(item)">
								<image src="/static/serve/location.png" mode=""></image>
								<text>地图</text>
							</view>
							<view class="tell" @click.stop="call(item.phone)">
								<image src="/static/serve/call.png" mode=""></image>
								<text>电话</text>
							</view>
						</view>
					</view>
					<text class="area">{{item.address}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				this.request({
					url: 'service/index/life_service',
					data: {
						token: uni.getStorageSync('userInfo').token
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.list = res.data.data.list
					}
				})
			},
			go(e){
				uni.navigateTo({
					url: e
				})
			},
			openMap(e){
				
				uni.openLocation({
					latitude: parseFloat(e.lat),
					longitude: parseFloat(e.lng),
					success: function () {
						console.log('success')
					},
					complete: (all) => {
						console.log(all)
					}
				})
				
			},
			call(e){
				uni.makePhoneCall({
				    phoneNumber: e //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.list{
			padding: 0 20rpx;
			.item{
				display: flex;
				justify-content: flex-start;
				// align-items: center;
				padding: 30rpx 0;
				border-bottom: solid 1px #F7F7FB;
				>image{
					width: 160rpx;
					height: 160rpx;
					min-width: 160rpx;
					background: #F4F4F4;
					border-radius: 6rpx;
					margin-right: 20rpx;
				}
				.right{
					width: calc(100% - 160rpx);
					.name{
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
					.middle{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.mid_left{
							text{
								display: block;
								font-size: 24rpx;
								font-family: PingFang SC;
							}
							>:nth-child(1){
								font-weight: bold;
								color: #F55454;
							}
							>:nth-child(2){
								font-weight: 500;
								color: #5F646A;
							}
						}
						.mid_right{
							display: flex;
							justify-content: flex-end;
							align-items: center;
							view{
								text-align: center;
								image{
									width: 44rpx;
									height: 44rpx;
								}
								text{
									display: block;
									font-size: 18rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #9392A0;
								}
							}
							.map{
								margin-right: 75rpx;
							}
						}
					}
					.area{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #5F646A;
					}
				}
			}
		}
	}
</style>
