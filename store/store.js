//因为uniapp内部已经内置了vuex，只要正确引用就可以
//1.根目录创建store文件->index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: uni.getStorageSync('userInfo') || {}, // 登录用户信息
		registerID: '' // 极光注册id
	},
	mutations: {
		setUserInfo(state, data){
			state.userInfo = data
		},
		setRegisterID(state, data){
			state.registerID = data
		}
	},
	getters: {

	},
	actions: {

	}
})

export default store
