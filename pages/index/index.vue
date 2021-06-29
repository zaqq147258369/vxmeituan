<template>
	<view class="contenting">
		<Serach></Serach>
		<Preference></Preference>
		<Title></Title>
		<Delicacy></Delicacy>
		<Takeout></Takeout>
	</view>
</template>

<script>
	//引进子组件
	import Serach from './components/search.vue'
	import Preference from './components/preference.vue'
	import Title from './components/title.vue'
	import Delicacy from './components/delicacy.vue'
	import Takeout from './components/takeout.vue'
	
	export default {
		components: {
			Serach,
			Preference,
			Title,
			Delicacy,
			Takeout,
		}, 
		data() {
			return {
				title: 'Hello'
			}
		},
		methods: {
			// 为你优选
			preference(){
				uni.request({
					url:'https://meituan.thexxdd.cn/api/forshop/getprefer',
					method:'GET',
				})
				.then((res)=>{
					console.log(res)
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		mounted(){
			this.preference();
		}
	}
</script>

<style scoped="scoped">
	.contenting{
		margin: 0 15rpx;
	}
</style>
