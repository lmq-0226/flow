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
		onLoad() {
			this.getData()
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
			}
		}
	}
</script>

<style lang="scss">

</style>
