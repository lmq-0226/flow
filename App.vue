<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
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
</style>
