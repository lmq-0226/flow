<template>
	<view class="content">
		<scroll-view :style="{bottom: showMore ? '440rpx' : '104rpx'}" ref="list" class="list" :scroll-y="true" :show-scrollbar="false" @click.stop="hide" :scroll-top="scrollTop" :scroll-with-animation="scrollAnimation" :scroll-into-view="scrollToView" @scrolltoupper="toupper" :upper-threshold="0">
			<!-- 加载历史数据动画 -->
			<view class="loading" v-if="loading">
				 <!--  -->
				<view class="spinner">
					<view class="rect1"></view>
					<view class="rect2"></view>
					<view class="rect3"></view>
					<view class="rect4"></view>
					<view class="rect5"></view>
				</view>
			</view>
			<view class="msgItem" v-for="(item, index) in dataList" :key="item.id" :id="'msg' + item.msg.id">
				<view class="message" :ref="'item' + index">
					<block v-if="item.type == 'system'">
						<view class="system">
							<text class="system_text">{{item.msg.content.text}}</text>
						</view>
					</block>
					<block v-else-if="item.type == 'user'">
						<view class="time" v-if="item.msg.time">
							<text class="time_text">{{item.msg.time}}</text>
						</view>
						<!-- 左侧收到的消息 -->
						<view class="left_msg" v-if="item.msg.userinfo.uid != 0">
							<view class="avatar">
								<image class="avatar_img" src="/static/HM-chat/avatar_left.png" mode=""></image>
							</view>
							<view class="desc" v-if="item.msg.type == 'text'">
								<rich-text :nodes="item.msg.content.text"></rich-text>
								<!-- <text class="desc_text">{{item.msg.content.text}}</text> -->
							</view>
							<view class="imgs" v-else-if="item.msg.type == 'image'">
								<image class="imgs_img" :src="item.msg.content.url" mode="widthFix" @click.stop="pvew(item.msg.content.url)"></image>
							</view>
							<!-- 语音消息 -->
							<view v-else-if="item.msg.type == 'vioce'" :style="{width: item.msg.content.length*7 + 'rpx'}" class="vioce desc" @click.stop="play(item.msg.content)">
								<text class="length">{{item.msg.content.length}}</text>
								<image class="vioce_img" src="/static/HM-chat/vioce_left.png" mode=""></image>
								<text class="point" v-if="playVioceIds.indexOf(item.msg.content.voiceId) <= -1"></text>
							</view>
						</view>
						<!-- 右侧自己发送的消息 -->
						<view class="right_msg" v-else>
							<view class="desc" v-if="item.msg.type == 'text'">
								<u-loading class="sendLoading" mode="flower" v-if="sendLoading && index == dataList.length - 1"></u-loading>
								<!-- <text class="desc_text">{{item.msg.content.text}}</text> -->
								<rich-text :nodes="item.msg.content.text"></rich-text>
							</view>
							<view class="imgs" v-else-if="item.msg.type == 'image'">
								<image class="imgs_img" :src="item.msg.content.url" mode="widthFix" @click.stop="pvew(item.msg.content.url)"></image>
								<view class="mask" v-if="sendLoading && index == dataList.length - 1">
									
								</view>
								<u-loading v-if="sendLoading && index == dataList.length - 1" class="sendLoading" mode="flower"></u-loading>
							</view>
							<!-- 语音消息 -->
							<view class="vioce desc" :style="{width: item.msg.content.length*7 + 'rpx'}" v-else-if="item.msg.type == 'vioce'" @click.stop="play(item.msg.content)">
								<u-loading class="sendLoading" mode="flower" v-if="sendLoading && index == dataList.length - 1"></u-loading>
								<image class="vioce_img" style="" src="/static/HM-chat/vioce_right.png" mode=""></image>
								<text class="length">{{item.msg.content.length}}</text>
							</view>
							<view class="avatar">
								<image class="avatar_img" src="/static/HM-chat/avatar_right.png" mode=""></image>
							</view>
						</view>		
					</block>
				</view>
			</view>
		</scroll-view>
		<view class="bottom" :class="showMore ? 'showMore' : ''">
			<view class="bot">
				<view class="bot_img margin-top" @click="changeCut">
					<image v-if="cut" class="img" src="/static/HM-chat/record.png" mode=""></image>
					<image v-else class="img" src="/static/HM-chat/keyboard.png" mode=""></image>
				</view>
				<view class="write" v-if="cut" style="position: relative;">
					<scroll-view :scroll-y="true" style="width: calc(100% - 55rpx);max-height: 300rpx;">
						<textarea
							class="input" 
							:auto-height="true" maxlength="300"
							:show-confirm-bar="false" cursor-spacing="90" 
							v-model="value"
						/>
					</scroll-view>
					<view class="bot_img" style="position: absolute;right: 19rpx;top: 16rpx;" @click.stop="showMore = true,showEm = false,hideEmoji=false">
						<image class="img" src="/static/HM-chat/face.png" mode=""></image>
					</view>
				</view>
				<view class="record" v-else @touchstart="recordStart" @touchmove.stop.prevent="recordIng" @touchend="recordEnd">
					<u-input 
						class="input" 
						v-model="vioceTis" 
						input-align="center" 
						
						:clearable="false" 
						placeholder-style="font-size: 28rpx;font-weight: bold;color: #000000;line-height: 80rpx;"
						disabled
					 ></u-input>
				</view>
				<!-- sendTextMsg -->
				<!-- sendTextMsg -->
				
				<view class="send" @click="sendSocketMessage()">
					<text>发送</text>
					<!-- <image class="img" src="/static/HM-chat/face.png" mode=""></image> -->
				</view>
				<view class="bot_img margin-top" @click.stop="showMore = true,showEm = true,hideEmoji = true">
					<image class="img" src="/static/HM-chat/more.png" mode=""></image>
				</view>
			</view>
			
			<view class="more" v-if="showEm">
				<view class="" @click="sendPhoto('album')">
					<view class="">
						<image src="/static/HM-chat/photo.png" mode=""></image>
					</view>
					<text>相册</text>
				</view>
				<view class="" @click="sendPhoto('camera')">
					<view class="">
						<image src="/static/HM-chat/camera.png" mode=""></image>
					</view>
					<text>拍照</text>
				</view>
			</view>
			<view :class="{ hidden: hideEmoji }">
				<view class="emojis">
					<scroll-view class="emojinav" scroll-x scroll-with-animation>
						<view class="item">
							<view :class="item == TabCur ? 'emojibg' : ''" v-for="(item, index) in emojiList.categories" :key="index" @click.stop="tabSelect"
							 :data-id="item" :style="{ backgroundImage: 'url(' + emojiList.groups[item][0].url + ')' }"></view>
						</view>
					</scroll-view>
					<!-- 列表 -->
					<scroll-view v-for="(emoji, groups) in emojiList.groups" :key="groups" v-if="TabCur == groups" class="subject"
					 scroll-y scroll-with-animation>
						<view class="item grid margin-bottom text-center col-5">
							<view v-for="(item, index) in emoji" :key="index" @click.stop="addEmoji(item.value)" :style="{ backgroundImage: 'url(' + item.url + ')' }"></view>
						</view>
					</scroll-view>
				</view>
			</view>
			<!-- <view class="more emoji" v-else>
			 	<image class="emoji-item" v-for="(emojiItem, key, index) in emoji.map" :key="index" :src="emoji.url + emojiItem" @click="selectEmoji(key)" ></image>
			 </view> -->
		</view>
		
		<view class="anima" v-if="show">
			<image class="anima_img" :src="recordImg" mode=""></image>
			<text class="anima_text">{{ recordTis }}</text>
		</view>
	</view>
</template>

<script>
	const emotions = require('@/static/json/emotions.json');
	const recorderManager = uni.getRecorderManager();
	// const innerAudioContext = uni.createInnerAudioContext();
	// innerAudioContext.autoplay = true;
	export default {
		components: {
			
		},
		data() {
			return {
				shop_id: '',
				hideEmoji: true,
				emojiList: this.emojiData(),
				TabCur: '默认',
				loading: false,
				value: '', // 输入框内容
				vioceTis: '按住 说话',
				show: false, // 录音效果是否显示
				recordImg: require('@/static/HM-chat/vioce.png'), // 发送/取消 图片
				recordTis: "手指上划 取消发送", // 发送/取消 文字
				send: true, // 是否发送
				cut: true, // 键盘/录音 切换
				opera: false,
				dataList: [
					{
						type: "user",
						msg: {
							id: 1,
							type: "text",
							time: "12:56",
							userinfo: {
								uid: 0,
								username: "双马尾"
							},
							content: {
								text: "为什么温度会相差那么大？"
							}
						}
					},
					{
						type: "user",
						msg: {
							id: 2,
							type: "text",
							time: "12:57",
							userinfo: {
								uid: 1,
								username: "小黄帽"
							},
							content: {
								text: "这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"
							}
						}
					},
					{
						type: "user",
						msg: {
							id: 3,
							type: "text",
							time: "12:59",
							userinfo: {
								uid: 1,
								username: "小黄帽"
							},
							content: {
								text: "Hello World !!!!"
							}
						}
					},
					{
						type: "user",
						msg: {
							id: 4,
							type: "image",
							time: "13:05",
							userinfo: {
								uid: 0,
								username: "双马尾"
							},
							content: {
								url: require('@/static/pub/zy.jpg')
							}
						}
					},
					{
						type: "user",
						msg: {
							id: 5,
							type: "image",
							time: "13:14",
							userinfo: {
								uid: 0,
								username: "双马尾"
							},
							content: {
								url: require('@/static/pub/fj.jpg')
							}
						}
					},
					{
						type: "user",
						msg: {
							id: 6,
							type: "image",
							time: "13:59",
							userinfo: {
								uid: 1,
								username: "小黄帽"
							},
							content: {
								url: require('@/static/pub/zy.jpg')
							}
						}
					},
					{
						type: "system",
						msg: {
							id: 7,
							type: "text",
							content: {
								text: "欢迎进入客服中心"
							}
						}
					},{
						type: "user",
						msg: {
							id: 8,
							type: "text",
							userinfo: {
								uid: 0,
								username: "双马尾"
							},
							content: {
								text: "欢迎进入客服中心"
							}
						}
					},{
						type: "user",
						msg: {
							id: 9,
							type: "text",
							userinfo: {
								uid: 1,
								username: "小黄帽"
							},
							content: {
								text: "欢迎进入客服中心"
							}
						}
					},{
						type: "user",
						msg: {
							id: 10,
							type: "vioce",
							userinfo: {
								uid: 1,
								username: "小黄帽"
							},
							content: {
								url:"/static/voice/2.mp3",
								length: 31,
								voiceId: 1
							}
						}
					},{
						type: "user",
						msg: {
							id: 11,
							type: "vioce",
							userinfo: {
								uid: 0,
								username: "双马尾"
							},
							content: {
								url:"/static/voice/1.mp3",
								length: 32,
								voiceId: 2
							}
						}
					},{
						type: "system",
						msg: {
							id: 12,
							type: "text",
							content: {
								text: "欢迎进入客服中心"
							}
						}
					}
				],
				startY: '', // 纵向手指上划距离
				scrollTop: '', 
				scrollToView: '', // 滚动到指定元素位置，根据元素id来确定
				scrollAnimation: false, // 滚动动画
				isHistoryLoading: false ,// 防止重复加载（请求）
				audio: uni.createInnerAudioContext(),
				clickNum: 0, // 判断暂停/重新播放
				currentTime: null ,// 暂停时间用于继续播放
				playVioceIds: [],// 已播放的语音
				sendLoading: false, // 发送消息加载动画
				showMore: false ,// 底部操作栏
				showEm: true
			};
		},
		onReady() {
			
		},
		onLoad(option) {
			this.shop_id = option.id
			this.getShop()
			console.log(option)
			// 录音结束事件(本地回调文件)模拟录音消息
			recorderManager.onStop((res) => {
				// this.recordEnd(res.tempFilePath)
				console.log(this.send, '是否发送')
				console.log('录音结束，回调文件', res.tempFilePath)
				if(this.send){
					//实际应用中，此处应该提交长连接，模板仅做本地处理。
					var nowDate = new Date();
					let lastid = this.dataList[this.dataList.length-1].msg.id
					lastid ++
					let msg = {
						type:'user',
						msg:{
							id: lastid,
							time: (nowDate.getHours() < 10 ? '0' + nowDate.getHours() : nowDate.getHours()) + ":" + (nowDate.getMinutes() < 10 ? '0' + nowDate.getMinutes() : nowDate.getMinutes()),
							type: 'vioce',
							userinfo:{
								uid: 0,
								username: "双马尾",
							},
							content:{
								length: 6,
								url: res.tempFilePath, 
								voiceId: Math.floor(Math.random()*1000+1)
							}
						}
					}
					// 发送消息
					this.sendMsg(msg)
					// 定时器模拟对方回复,三秒
					let timer = setTimeout(()=>{
						lastid = this.dataList[this.dataList.length-1].msg.id
						lastid ++
						msg = {
							type:'user',
							msg:{
								id: lastid,
								time: (nowDate.getHours() < 10 ? '0' + nowDate.getHours() : nowDate.getHours()) + ":" + (nowDate.getMinutes() < 10 ? '0' + nowDate.getMinutes() : nowDate.getMinutes()),
								type: 'vioce',
								userinfo:{
									uid: 1,
									username: "小黄帽",
								},
								content:{
									length: 6,
									url: res.tempFilePath, 
									voiceId: Math.floor(Math.random()*1000+1)
								}
							}
						}
						this.sendMsg(msg)
						clearTimeout(timer)
					},3000)
				}
			})
			// 开始播放事件
			this.audio.onPlay(()=>{
				this.clickNum = 0
			})
			// 播放暂停事件
			this.audio.onPause(()=>{
				console.log(this.audio.currentTime)
				this.currentTime =  this.audio.currentTime
			})
			// 播放结束事件，销毁实例
			this.audio.onEnded(()=>{
				this.audio.src = ''
				this.audio.destroy()
			})
			// 播放错误事件
			this.audio.onError((res) => {
				console.log(res)
			})
		},
		onShow() {
			// 滚动到底部
			this.$nextTick(function() {
				let lastid = this.dataList[this.dataList.length-1].msg.id
				this.scrollToView = 'msg' + lastid
			})
		},
		methods: {
			getShop(){
				this.request({
					url: 'wanlshop/chat/getShopChat',
					header: {
						token: uni.getStorageSync('userInfo').token
					},
					data: {
						id: this.shop_id,
						type: "chat"
					}
				}).then(res=>{
					if(res.data.code == 1){
						uni.setNavigationBarTitle({
							title: res.data.data.shopname //这是修改后的导航栏文字
						})
						var socketTask = uni.connectSocket({
						    url: this.socketurl, //仅为示例，并非真实接口地址。
						    complete: (res)=> {
								console.log(res)
							}
						});
						// 监听 WebSocket 连接打开事件
						uni.onSocketOpen((res)=> {
							console.log('WanlChat 连接已打开！')
						})
						uni.onSocketMessage((res)=>{
							let data = JSON.parse(res.data)
							console.log(data)
							if (data.type == 'init') {
								// 绑定 client_id 到 uid
								this.request({
									url: 'wanlshop/chat/shake',
									header: {
										token: uni.getStorageSync('userInfo').token
									},
									data: {'client_id': data.client_id},
								}).then(res=>{
									uni.setStorageSync("wanlshop:chat_client_id", res.data.data);
								})
							// 心跳回执
							}else if(data.type == 'ping'){
								// 通过 WebSocket 连接发送数据
								uni.sendSocketMessage({data: '{"type":"pong"}'});
							// 客服消息
							}
						})
					}
				})
			},
			sendSocketMessage() {
			    uni.sendSocketMessage({
			      data: '1111'
			    })
			},
			// 触顶模拟加载历史消息
			toupper(){	
				this.loading = true
				if(this.isHistoryLoading){
					return ;
				}
				this.isHistoryLoading = true;//参数作为进入请求标识，防止重复请求
				this.scrollAnimation = false;//关闭滑动动画
				let Viewid = this.dataList[0].msg.id;//记住第一个信息ID
				let timer = setTimeout(()=>{
					// 消息列表
					let list = [
						{
							type: "user",
							msg: {
								id: 1,
								type: "text",
								time: "12:56",
								userinfo: {
									uid: 0,
									username: "双马尾"
								},
								content: {
									text: "为什么温度会相差那么大？"
								}
							}
						},
						{
							type: "user",
							msg: {
								id: 2,
								type: "text",
								time: "12:57",
								userinfo: {
									uid: 1,
									username: "小黄帽"
								},
								content: {
									text: "这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"
								}
							}
						},
						{
							type: "user",
							msg: {
								id: 3,
								type: "text",
								time: "12:59",
								userinfo: {
									uid: 1,
									username: "小黄帽"
								},
								content: {
									text: "Hello World !!!!"
								}
							}
						},
						{
							type: "user",
							msg: {
								id: 4,
								type: "image",
								time: "13:05",
								userinfo: {
									uid: 0,
									username: "双马尾"
								},
								content: {
									url: require('@/static/pub/zy.jpg')
								}
							}
						}
					]
					// 获取消息中的图片,并处理显示尺寸
					for(let i = list.length - 1;i >= 0; i--){
						list[i].msg.id = Math.floor(Math.random()*1000+1);
						this.dataList.unshift(list[i]);
					}
					//这段代码很重要，不然每次加载历史数据都会跳到顶部
					this.$nextTick(function() {
						this.scrollToView = 'msg'+Viewid;//跳转上次的第一行信息位置
						this.$nextTick(function() {
							this.scrollAnimation = true;//恢复滚动动画
						});
					});
					this.isHistoryLoading = false;
					this.loading = false
				}, 2000)
			},
			// 录音开始
			recordStart(e) {
				this.startY = e.changedTouches[0].clientY
				recorderManager.start() // 录音开始
				this.show = true
				this.send = true
			},
			// 录音中
			recordIng(e) {
				if (this.startY - e.changedTouches[0].clientY >= 44) {
					this.recordTis = '松开手指 取消发送'
					this.recordImg = require('@/static/HM-chat/cancel.png')
					this.send = false
				} else {
					this.recordTis = '手指上划 取消发送'
					this.recordImg = require('@/static/HM-chat/vioce.png')
					this.send = true
				}
			},
			// 录音结束
			recordEnd(e) {
				recorderManager.stop() // 录音结束
				this.show = false
				this.recordTis = '手指上划 取消发送'
				this.recordImg = require('@/static/HM-chat/vioce.png')
			},
			// 语音/消息切换
			changeCut() {
				this.showMore = false
				this.cut = !this.cut
				if (!this.cut) {
					uni.hideKeyboard()
				}
			},
			// 图片预览
			pvew(e){
				uni.previewImage({
					urls: [e],
					longPressActions: {
						itemList: ['复制', '保存图片', '转发'],
						success: res => {
							console.log(res);
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			},
			longend() {
				console.log(222)
				// this.opera = false
			},
			hide() {
				this.opera = false
				console.log(333)
			},
			// 播放语音
			play(e){
				if(this.playVioceIds.indexOf(e.voiceId) <= -1){
					this.playVioceIds.push(e.voiceId)
				}
				this.clickNum ++
				// 如何是同一个audio再次点击就执行暂停/继续播放，否则先销毁实例避免无法播放，重新创建实例并赋值
				if(this.audio.src == e.url){
					if(this.clickNum % 2 != 0){
						this.audio.pause()
					}else{
						this.audio.startTime = this.currentTime
						this.audio.play()
					}
				}else{
					this.audio.destroy()
					this.audio = uni.createInnerAudioContext()
					this.audio.src = e.url
					this.audio.play()
				}
			},
			// 发送消息
			sendMsg(e){
				this.dataList.push(e);
				if(e.msg.userinfo.uid != 0){
					uni.vibrateLong()
				}else{
					this.sendLoading = true
					let timer = setTimeout(()=>{
						this.sendLoading = false
						clearTimeout(timer)
					}, 2000)
				}
				this.$nextTick(function() {
					// 滚动到底
					this.scrollToView = 'msg' + this.dataList[this.dataList.length-1].msg.id
				})
			},
			// 模拟文字消息
			sendTextMsg(){
				if(this.value == '') return;
				let Rvalue = this.replaceEmoji(this.value)
				let Lvalue = this.replaceEmoji(this.value)
				//实际应用中，此处应该提交长连接，模板仅做本地处理。
				var nowDate = new Date();
				let lastid = this.dataList[this.dataList.length-1].msg.id
				lastid ++
				let msg = {
					type:'user',
					msg:{
						id: lastid,
						time: (nowDate.getHours() < 10 ? '0' + nowDate.getHours() : nowDate.getHours()) + ":" + (nowDate.getMinutes() < 10 ? '0' + nowDate.getMinutes() : nowDate.getMinutes()),
						type: 'text',
						userinfo:{
							uid: 0,
							username: "双马尾",
						},
						content:{
							text: Rvalue
						}
					}
				}
				// 发送消息
				this.sendMsg(msg)
				this.showMore = false
				// 定时器模拟对方回复,三秒
				let timer = setTimeout(()=>{
					lastid = this.dataList[this.dataList.length-1].msg.id
					lastid ++
					msg = {
						type:'user',
						msg:{
							id: lastid,
							time: (nowDate.getHours() < 10 ? '0' + nowDate.getHours() : nowDate.getHours()) + ":" + (nowDate.getMinutes() < 10 ? '0' + nowDate.getMinutes() : nowDate.getMinutes()),
							type: 'text',
							userinfo:{
								uid: 1,
								username: "小黄帽",
							},
							content:{
								text: Lvalue
							}
						}
					}
					this.sendMsg(msg)
					this.value = '' // 此处应该写到发送消息后，情况输入框内容
					clearTimeout(timer)
				},3000)
			},
			selectEmoji (emojiKey) {
				this.value += emojiKey
			},
			// 发送图片
			sendPhoto(e){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: [e], //从相册选择
				    success: (res)=>{
				        console.log(res)
						// return
						//实际应用中，此处应该提交长连接，模板仅做本地处理。
						var nowDate = new Date()
						let lastid = this.dataList[this.dataList.length-1].msg.id
						lastid ++
						let msg = {
							type: "user",
							msg: {
								id: lastid,
								type: "image",
								time: "13:14",
								userinfo: {
									uid: 0,
									username: "双马尾"
								},
								content: {
									url: res.tempFilePaths[0]
								}
							}
						}
						// 发送消息
						this.sendMsg(msg)
						// 定时器模拟对方回复,三秒
						let timer = setTimeout(()=>{
							lastid = this.dataList[this.dataList.length-1].msg.id
							lastid ++
							msg = {
								type: "user",
								msg: {
									id: lastid,
									type: "image",
									time: "13:14",
									userinfo: {
										uid: 1,
										username: "小黄帽"
									},
									content: {
										url: res.tempFilePaths[0]
									}
								}
							},
							this.sendMsg(msg)
							clearTimeout(timer)
						},3000)
				    }
				});
			},
			// 表情tab
			tabSelect(e) {
				this.showMore = true
				this.TabCur = e.currentTarget.dataset.id;
			},
			//添加表情
			addEmoji(em) {
				this.value += em;
			},
			//替换表情符号为图片
			replaceEmoji(str) {
				// 这里处理 链接   换行符
				let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
					return '<img src="' + this.emojiList.map[item] + '" width="18rpx">';
				});
				return replacedStr.replace(/(\r\n)|(\n)/g, '<br>');
			},
			// 表情数据
			emojiData() {
				var groups = {},
					categories = [],
					map = {};
				emotions.forEach(emotion => {
					var cate = emotion.category.length > 0 ? emotion.category : '默认';
					if (!groups[cate]) {
						groups[cate] = [];
						categories.push(cate);
					}
					groups[cate].push(emotion);
					map[emotion.phrase] = emotion.icon;
				});
				return { groups, categories, map };
			},
		},
		onHide() {
			this.audio.stop()
		},
		onUnload(){
			this.audio.stop()
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		.list {
			position: absolute;
			background: #F6F5FA;
			width: calc(100% - 60rpx);
			padding: 0 30rpx;
			top: 0;
			bottom: 104rpx;
			// 历史消息加载动画
			.loading{
				position: absolute;
				top: 0;
				left: 50%;
				transform: translateX(-50%);
				//loading动画
				display: flex;
				justify-content: center;
				@keyframes stretchdelay {
					0%, 40%, 100% {
						transform: scaleY(0.6);
					}
					20% {
						transform: scaleY(1.0);
					}
				}
				.spinner {
					width: 60rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					view {
						background-color: #f06c7a;
						height: 50rpx;
						width: 6rpx;
						border-radius: 6rpx;
						animation: stretchdelay 1.2s infinite ease-in-out;
					}
					.rect2 {
					  animation-delay: -1.1s;
					}
					.rect3 {
					  animation-delay: -1.0s;
					}
					.rect4 {
					  animation-delay: -0.9s;
					}
					.rect5 {
					  animation-delay: -0.8s;
					}
				}
			}
			
			.msgItem{
				margin: 30rpx 0;
			}
			
			.message {
				
				.left_msg,
				.right_msg {
					display: flex;
					flex-direction: row;
					.sendLoading{
						position: absolute;
						left: -40rpx;
					}
					.avatar {

						.avatar_img {
							width: 74rpx;
							height: 74rpx;
							background: #fff;
							border-radius: 50%;
						}
					}

					.desc {
						padding: 20rpx;
						border-radius: 20rpx;
						position: relative;
						word-break: break-word;
						.desc_text {
							// width: 510rpx;
							max-width: 510rpx;
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: 500;
						}
						
					}

					.imgs {
						position: relative;
						overflow: hidden;
						border-radius: 16rpx;
						.imgs_img {
							width: 270rpx;
							border-radius: 16rpx;
						}
						.sendLoading{
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translateX(-50%);
							transform: translateY(-50%);
						}
						.mask{
							position: absolute;
							top: 0;
							left: 0;
							width: 270rpx;
							height: 999rpx;
							background: #333;
							opacity: 0.5;
							z-index: 999999;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
					.vioce{
						display: flex;
						justify-content: space-between;
						align-items: center;
						position: relative;
						min-width: 140rpx;
						.point{
							display: inline-block;
							width: 10rpx;
							height: 10rpx;
							border-radius: 50%;
							background: #F54837;
							position: absolute;
						}
						.vioce_img{
							width: 30rpx;
							height: 30rpx;
						}
						.length{
							font-size: 28rpx;
						}
					}
				}

				.left_msg {
					display: flex;
					justify-content: flex-start;

					.avatar {
						margin-right: 20rpx;
					}

					.desc {
						background: #FFFFFF;
						color: #000;
						.desc_text,.length {
							color: #000000;
						}
						.point{
							right: -20rpx;
						}
					}
				}

				.right_msg {
					display: flex;
					justify-content: flex-end;
					
					.avatar {
						margin-left: 20rpx;
					}

					.desc {
						background: #F55555;
						color: #fff;
						.desc_text,.length {
							color: #FFFFFF;
						}
					}
				}
				
				.time{
					display: flex;
					justify-content: center;
					padding: 30rpx 0;
					.time_text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #9392A0;
					}
				}
				
				.system{
					display: flex;
					justify-content: center;
					padding: 30rpx 0;
					.system_text{
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #66656f;
					}
				}
			}
		}

		.bottom {
			position: fixed;
			width: 100%;
			bottom: 0;
			transform: translateY(336rpx);
			transition: transform 0.3s;
			.bot{
				display: flex;
				width: 100%;
				min-height: 104rpx;
				padding: 12rpx 19rpx 12rpx 0;
				// padding-right: 19rpx;
				background: #FFFFFF;
				justify-content: space-around;
				// align-items: center;
				.bot_img {
					
					.img {
						width: 48rpx;
						height: 48rpx;
						margin-left: 19rpx;
					}
				}
				.margin-top{
					margin-top: 16rpx;
				}
				.write,.record{
					flex: 1;
					margin-left: 19rpx;
					background-color: #F6F5FA;
					border-radius: 36rpx;
					min-height: 80rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0rpx 20rpx !important;
					.input {
						width: 100%;
						max-height: 300rpx;
						font-size: 28rpx;
						font-weight: bold;
						color: #000000;
					}
				}
				.send{
					width: 100rpx;
					height: 60rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					background: rgb(245,85,85);
					border-radius: 10rpx;
					margin-left: 19rpx;
					margin-top: 10rpx;
					text{
						font-size: 26rpx;
						font-weight: bold;
						color: #fff;
					}
				}
			}
			
			.more{
				width: 100%;
				height: 336rpx;
				background: #fff;
				display: flex;
				justify-content: flex-start;
				padding: 30rpx 36rpx;
				>view{
					display: flex;
					flex-direction: column;
					align-items: center;
					view{
						width: 116rpx;
						height: 116rpx;
						background: #F6F5FA;
						border-radius: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 58rpx;
							height: 58rpx;
						}
					}
					text{
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
				}
				>:not(:first-child){
					margin-left: 66rpx;
				}
			}
			
			.emoji{
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				image{
					height: 100rpx;
					width: 100rpx;
				}
			}	
		}
		.showMore{
			transform: translateY(0rpx);
			transition-property:transform;
			transition-duration: 0.3s;
		}
		.anima {
			position: fixed;
			width: 300rpx;
			height: 300rpx;
			margin-left: 225rpx;
			margin-top: 400rpx;
			background: #000000;
			opacity: 0.7;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-radius: 20rpx;

			.anima_img {
				width: 110rpx;
				height: 110rpx;
			}

			.anima_text {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
		.hidden {
			display: none !important;
		}
		.emojis{
			.emojinav {
				background-color: #f8f8f8;
				.item {
					display: flex;
					align-items: center;
					height: 100rpx;
					padding-left: 10rpx;
					.emojibg {
						background-color: #dedede;
					}
					> view {
						margin: 0 25rpx;
						width: 60rpx;
						height: 60rpx;
						border-radius: 18rpx;
						background-repeat: no-repeat;
						background-size: 80%;
						background-position: center;
					}
				}
			}
			.subject {
				height: 380rpx;
				background-color: #f1f1f1;
				.item {
					padding: 25rpx;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					> view {
						background-repeat: no-repeat;
						background-size: 56%;
						background-position: center;
						width: 12.5%;
						height: 100rpx;
					}
				}
			}
		}
	}
</style>
