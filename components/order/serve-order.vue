<template>
	<view>
		<u-empty v-if="orderList.length <= 0" margin-top="400" text="暂无数据" mode="order"></u-empty>
	</view>
</template>

<script>
	export default {
		name:"leave-order",
		data() {
			return {
				orderList: []
			};
		}
	}
</script>

<style lang="scss">

</style>
