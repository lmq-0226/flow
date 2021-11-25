<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="nav_bar">
			<view class="nav">
				<u-icon name="arrow-left" color="#000" size="44" @click="back"></u-icon>
				<text class="navMid">收藏</text>
				<text class="navRit" v-if="status" @click="status = false">管理</text>
				<text class="navRit" v-else @click="status = true,checkedList = []">完成</text>
			</view>
			<view class="tabs">
				<u-tabs :list="tabList" :is-scroll="true" :current="current" @change="change" item-width="33.3%" active-color="#FC493D "></u-tabs>
			</view>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="item.id" @click="check(item.id)">
				<view class="radio" v-if="!status">
					<image v-if="checkedList.indexOf(item.id) > -1" src="/static/login/radio_on.png" mode=""></image>
					<image v-else src="/static/my/radio.png" mode=""></image>
				</view>
				<view class="left">
					<image :src="item.icon" mode=""></image>
					<text>约{{ item.time }}天到货</text>
				</view>
				<view class="right">
					<text>{{item.desc}}</text>
					<text>{{item.color + item.size + '数量x' + item.count}}</text>
					<text>¥899</text>
				</view>
			</view>
		</view>
		<view class="bottom" v-if="!status">
			<view class="botLeft" @click="allCheck">
				<image v-if="checkedList.length == list.length" src="/static/login/radio_on.png" mode=""></image>
				<image v-else src="/static/my/radio.png" mode=""></image>
				<text>全选</text>
			</view>
			<text @click="show = true">删除</text>
		</view>
		<u-empty v-if="list.length <= 0" text="数据为空" margin-top="300"></u-empty>
		<u-modal v-model="show" title="" content="确定移除所选吗？" :show-cancel-button='false' @confirm="del"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: true,
				tabList: [{
					name: '商品'
				}, {
					name: '闲置'
				}, {
					name: '寄卖'
				}],
				current: 0,
				list: [
					{
						id: 1,
						icon: require('@/static/pub/bbt.png'),
						desc: '[普通发货] 棒棒糖',
						color: '白色',
						size: 'S',
						price: 899,
						count: 99,
						time: 2
					},
					{
						id: 2,
						icon: require('@/static/pub/ch.png'),
						desc: '彩虹',
						color: '彩色',
						size: 'L',
						price: 6999,
						count: 1,
						time: 3
					},
					{
						id: 3,
						icon: require('@/static/pub/xj.png'),
						desc: '[普通发货] 相机',
						color: '粉丝',
						size: 'XXL',
						price: 1999,
						count: 1,
						time: 4
					},
					{
						id: 4,
						icon: require('@/static/pub/ttq.png'),
						desc: '甜甜圈',
						color: '粉白色',
						size: 'XL',
						price: 699,
						count: 6,
						time: 6
					}
				],
				checkedList: [],
				show: false,
			};
		},
		onLoad() {
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			change(index) {
				this.current = index;
			},
			// 单选
			check(e){
				if(this.checkedList.indexOf(e) > -1){
					let index = this.checkedList.indexOf(e)
					this.checkedList.splice(index, 1)
					return
				}else{
					this.checkedList.push(e)
				}
			},
			// 全选
			allCheck(){
				if(this.checkedList.length == this.list.length){
					this.checkedList = []
				}else{
					this.checkedList = []
					this.list.forEach(elem=>{
						this.checkedList.push(elem.id)
					})
				}
			},
			// 确认删除
			del(){
				// 逆向循环删除
				for(let i = this.list.length - 1; i >= 0; i--){
					if(this.checkedList.indexOf(this.list[i].id) > -1){
						this.list.splice(i, 1)
					}
				}
				this.checkedList = []
			}
		},
		computed:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		/* #ifdef H5 */
			padding-bottom: 100rpx;
		/* #endif */
		.nav_bar{
			position: sticky;
			top: var(--status-bar-height);
			background-color: #fff;
			z-index: 999;
		}
		.nav{
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: sticky;
			height: 100rpx;
			padding: 0 30rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
			text{
				font-weight: bold;
				color: #000000;
			}
			.navMid{
				font-size: 32rpx;
			}
			.navRit{
				font-size: 28rpx;
			}
		}
		.tabs{
			border-top: solid 1px #f8f8f8;
			border-bottom: solid 10rpx #F6F5FA;
		}
		.list{
			padding: 0 36rpx;
			.item{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: solid 1px #efefef;
				padding: 20rpx 0;
				.radio{
					image{
						width: 44rpx;
						height: 44rpx;
						margin-right: 17rpx;
					}
				}
				.left{
					margin-right: 22rpx;
					position: relative;
					image{
						width: 164rpx;
						height: 164rpx;
					}
					text{
						position: absolute;
						left: 0;
						top: 0;
						padding: 6rpx 12rpx;
						background: #F55454;
						border-top-left-radius: 10rpx;
						border-bottom-right-radius: 10rpx;
						font-size: 18rpx;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
				.right{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 164rpx;
					>:nth-child(1){
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
						overflow: hidden;
						-webkit-line-clamp: 2;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}
					>:nth-child(2){
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #6A6A79;
					}
					>:nth-child(3){
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
			}
		}
		
		.bottom{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 100rpx;
			padding: 0 36rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			border-top: solid 1px #f8f8f8;
			view{
				display: flex;
				align-items: center;
				image{
					width: 44rpx;
					height: 44rpx;
					margin-right: 23rpx;
				}
				text{
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
			>text{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
				padding: 24rpx 82rpx;
				background: #F35455;
				border-radius: 10rpx;
			}
		}
	}
</style>
