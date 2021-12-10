//因为uniapp内部已经内置了vuex，只要正确引用就可以
//1.根目录创建store文件->index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {} // 登录用户信息
	},
	mutations: {
		setUserInfo(state, data){
			state.userInfo = data
		}
	},
	getters: {

	},
	actions: {

	}
})

export default store
