<script>
	export default {
		onLaunch() {
			// 检测客户端更新
			this.$store.dispatch('update/update');
			// 仅首次打开一次性加载数据
			this.$store.dispatch('common/init');
			// 同步购物车 本地 & 网络
			this.$store.dispatch('cart/get');
			// 同步 动态数据
			this.$store.dispatch('statistics/get');
		},
		onShow() {
			// 启动或重启即时通讯
			this.$store.dispatch('chat/start');
		},
		onHide() {
			// 断开即时通讯
			this.$store.dispatch('chat/close');
		}
	}
</script>

<style lang="scss">                         
	/* #ifdef APP-VUE */
		@import "uview-ui/index.scss";
		// 适配自定义导航栏
		.status_bar {
			position: sticky;
			top: 0;
			height: var(--status-bar-height);
			width: 100%;
			background: #ffffff;
			z-index: 9999;
		}
		
		/deep/.uni-scroll-view::-webkit-scrollbar {
			/* 隐藏滚动条，但依旧具备可以滚动的功能 */
			display: none
		}
		body,uni-view,uni-text,span,div,input,*{
			font-family: AliHYAiHei, Helvetica Neue, Helvetica, sans-serif, PingFang SC;
		}
		*{
			margin: 0;
			padding: 0;
			touch-action: default;
		}
	/* #endif */
	/* #ifdef H5 */
		@import "uview-ui/index.scss";
		.status_bar {
			position: sticky;
			top: 0;
			height: var(--status-bar-height);
			width: 100%;
			background: #ffffff;
			z-index: 9999;
		}
		
		/deep/.uni-scroll-view::-webkit-scrollbar {
			/* 隐藏滚动条，但依旧具备可以滚动的功能 */
			display: none
		}
		*{
			margin: 0;
			padding: 0;
			touch-action: default;
		}
	/* #endif */
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
	@import 'static/style/colorui.css';
	@import 'static/style/wanlshop.css';
	@import 'static/style/iconfont.css';
	/* #endif */
</style>
