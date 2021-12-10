export const url = 'http://app.51liuxiang.com'
import store from '../store/store.js'
// 全局token
let token = uni.getStorageSync('userInfo').token || ''
export default (options) => {
	return new Promise((resolved, rejected) => {
		uni.showLoading({
			title: 'loading...'
		})
		console.log('------------------------start------------------');
		console.log('接口地址:' + url + options.url);
		if (JSON.stringify(options.data) !== '{}') {
			console.log('请求参数:');
			for (let field in options.data) {
				console.log(field + ':' + options.data[field]);
			}
		}
		// request请求封装
		uni.request({
			url: url + options.url, // 请求接口地址
			method: options.method || 'GET', // 方法从options中获取，如果没有传入method，则默认为GET，
			data: options.data, // 请求接口参数
			dataType:'json',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'token': token
			},
			success: (res) => {
				console.log(res, '9999')
				uni.showToast({
					title: res.data.msg,
					icon: 'none'
				})
				resolved(res)
			},
			fail: (err) => {
				rejected(err)
			},
			complete() {
				// 关闭加载中的特效
				uni.hideLoading()
				console.log('------------------------end------------------');
			}
		})
	})
}
