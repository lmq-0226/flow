export const url = 'http://app.51liuxiang.com/api/'
export const ImgUrl = 'http://app.51liuxiang.com'
export const socketurl = 'wss://chat.51liuxiang.com'
import store from '../store/store.js'
// 全局token
let token = uni.getStorageSync('userInfo').token || ''
export default (options) => {
	return new Promise((resolved, rejected) => {
		// uni.showLoading({
		// 	title: '加载中...'
		// })
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
			method: options.method || 'POST', // 方法从options中获取，如果没有传入method，则默认为POST，
			data: options.data, // 请求接口参数
			dataType: 'json',
			header: options.header || {
				'content-type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer' + token
			},
			success: (res) => {
				console.log(res.data.msg, res)
				if(res.statusCode == 200){
					if(res.data.code != 1 && options.url != 'userauth/info'){
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				}else if(res.statusCode == 401 && options.url != 'wanlshop/chat/lists' && options.url != 'wanlshop/find/find/get_topic' && options.url != 'wanlshop/user/refresh'){
					uni.showToast({
						title: '请登录后操作',
						icon: 'none'
					})
				}else if(res.statusCode == 500){
					uni.showToast({
						title: '服务器错误',
						icon: 'none'
					})
				}
				resolved(res)
			},
			fail: (err) => {
				rejected(err)
			},
			complete(all) {
				// 关闭加载中的特效
				// uni.hideLoading()
				console.log('------------------------end------------------');
			}
		})
	})
}
export const date = (format, timeStamp) => {
	if('' + timeStamp.length <= 10){
		timeStamp = + timeStamp * 1000;
	}else{
		timeStamp = + timeStamp;
	}
	let _date = new Date(timeStamp),
		Y = _date.getFullYear(),
		m = _date.getMonth() + 1,
		d = _date.getDate(),
		H = _date.getHours(),
		i = _date.getMinutes(),
		s = _date.getSeconds();
	
	m = m < 10 ? '0' + m : m;
	d = d < 10 ? '0' + d : d;
	H = H < 10 ? '0' + H : H;
	i = i < 10 ? '0' + i : i;
	s = s < 10 ? '0' + s : s;
	return Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s
	// return format.replace(/[YmdHis]/g, key=>{
	// 	return {Y,m,d,H,i,s}[key];
	// });
}
