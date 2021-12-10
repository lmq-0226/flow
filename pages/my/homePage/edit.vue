<template>
	<view class="content">
		<view class="items">
			<view class="item" @click="upload(1)">
				<text>头像</text>
				<image style="border-radius: 50%;" :src="avatar" mode="heightFix" @click.stop="pvew(avatar)"></image>
			</view>
			<view class="item">
				<text>名字</text>
				<u-input v-model="name" type="text" placeholder="请输入姓名" input-align="right" :clearable="false" />
			</view>
			<view class="item" @click="genderPopup = true">
				<text>性别</text>
				<u-input :value="gender == 1 ? '男' : '女'" type="text" placeholder="请选择性别" input-align="right" disabled :clearable="false" @click="genderPopup = true" />
			</view>
			<view class="item">
				<text>签名</text>
				<u-input v-model="sign" type="text" placeholder="请输入签名" input-align="right" :clearable="false" />
			</view>
			<view class="item" @click="timePopup = true">
				<text>生日</text>
				<u-input v-model="birthday" type="text" placeholder="请选择生日" input-align="right" disabled :clearable="false" @click="timePopup = true"/>
			</view>
			<view class="item" @click="regionPopup = true">
				<text>城市</text>
				<u-input v-model="region" type="text" placeholder="请选择所在城市" input-align="right" disabled :clearable="false" @click="regionPopup = true" />
			</view>
			<view class="item">
				<text>学校</text>
				<u-input v-model="school" type="text" placeholder="请输入学校" input-align="right" :clearable="false" />
			</view>
			<view class="item" @click="upload(2)">
				<text>背景图</text>
				<image style="border-radius: 10rpx;" :src="topbg" mode="heightFix" @click.stop="pvew(topbg)"></image>
			</view>
		</view>
		<u-popup v-model="genderPopup" mode="center" border-radius="20">
			<view class="gender">
				<view class="radio">
					<view class="" @click="sex = 1">
						<text>男</text>
						<image v-if="sex == 1" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
					<view class="" @click="sex = 0">
						<text>女</text>
						<image v-if="sex == 0" src="/static/login/radio_on.png" mode=""></image>
						<image v-else src="/static/login/radio.png" mode=""></image>
					</view>
				</view>
				<view class="sure" @click="sure">
					<text>确认</text>
				</view>
			</view>
		</u-popup>
		<u-picker mode="time" v-model="timePopup" :params="params" @confirm="selBir"></u-picker>
		<u-picker mode="region" v-model="regionPopup" @confirm="selReg"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: require('@/static/comm/avatar.png'),
				name: '', // 姓名
				gender: 1, // 性别
				sign: '', // 签名
				birthday: '', // 生日
				region: '', // 城市
				school: '', // 学校
				topbg: require('@/static/pub/fj.jpg'), // 背景图
				imgType: 1,
				genderPopup: false,
				sex: 1,
				timePopup: false,
				params: {
					year: true,
					month: true,
					day: true
				},
				regionPopup: false,
			};
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', res => {
				if(this.imgType == 1){
					this.avatar = res
				}else{
					this.topbg = res
				}
			})
		},
		onBackPress() {
			// 返回上一个页面携带参数
			var pages = getCurrentPages();
			var prevPage = pages[pages.length - 2]; //上一个页面
			// 修改头像和背景图
			prevPage.$vm.avatar = this.avatar
			prevPage.$vm.bgimg = this.topbg
		},
		onLoad() {
			this.sex = this.gender
		},
		methods:{
			// 选择生日
			selBir(e){
				if(this.birthday == e.year + '-' + e.month + '-' + e.day){
					return
				}else{
					this.birthday = e.year + '-' + e.month + '-' + e.day
					uni.showToast({
						title: '设置成功',
						icon: 'none'
					})
				}
			},
			// 城市
			selReg(e){
				if(this.region == e.area.label + '-' + e.city.label + '-' + e.province.label){
					return
				}else{
					this.region = e.area.label + '-' + e.city.label + '-' + e.province.label
					uni.showToast({
						title: '设置成功',
						icon: 'none'
					})
				}
			},
			// 性别
			sure(){
				console.log(this.sex, '****')
				this.genderPopup = false
				if(this.gender == this.sex){
					return
				}else{
					this.gender = this.sex
					uni.showToast({
						title: '设置成功',
						icon: 'none'
					})
				}
			},
			upload(e){
				this.imgType = e
				let width = ''
				let height = ''
				if(e == 1){
					width = 270
					height =270
				}else{
					width = 300
					height = 240
				}
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
				this.$u.route({
					// 关于此路径，请见下方"注意事项"
					url: '/node_modules/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					// 内部已设置以下默认参数值，可不传这些参数
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: width,
						destHeight: height,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: width,
						rectHeight: height,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			pvew(e){
				console.log(e)
				let arr = []
				arr.push(e)
				uni.previewImage({
					urls: arr,
					current: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.items{
			padding: 20rpx 30rpx;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100rpx;
				padding-right: 38rpx;
				border-bottom: solid 1px #F7F7FB;
				background: url(../../../static/serve/right.png) no-repeat right center;
				background-size: 44rpx 44rpx;
				text{
					display: block;
					width: 20%;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
				}
				image{
					height: 80rpx;
				}
			}
		}
		.gender{
			width: 300rpx;
			height: 280rpx;
			border-radius: 20rpx;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.radio{
				view{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 30rpx;
					text{
						font-size: 28rpx;
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
			.sure{
				width: 100%;
				height: 80rpx;
				background: #FC493D;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 10rpx;
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #fff;
				}
			}
		}
	}
</style>
