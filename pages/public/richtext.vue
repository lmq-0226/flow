<template>
	<view>
		<rich-text :nodes="value"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			};
		},
		onLoad(option) {
			console.log(option)
			if(option.url == 'index/agreement'){
				this.getData2(option)
			}else{
				this.getData()
			}
		},
		methods:{
			getData(){
				this.request({
					url: 'service/index/service_agreement'
				}).then(res=>{
					if(res.data.code == 1){
						this.value = res.data.data
					}
				})
			},
			getData2(e){
				this.request({
					url: 'index/agreement',
					data: {
						cate: e.type
					}
				}).then(res=>{
					if(res.data.code == 1){
						this.value = res.data.data.content
					}
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
