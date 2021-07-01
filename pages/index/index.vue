<template>
	<view class="contenting">
		<Serach></Serach>
		<Preference :preferdata='perferdata'></Preference>
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
	
	// 引入封装的api接口
	import {listing} from '../../api/api.js'
	//引入请求地址
	import {getpreferurl} from '../../api/request.js'
	
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
				title: 'Hello',
				//为你优选
				perferdata:[]
			}
		},
		methods: {
			// 为你优选
			preference(){
				listing(getpreferurl)
				.then((res)=>{
					console.log(res);
					this.perferdata = res[1].data;
				})
				.catch((err)=>{
					console.log(err);
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
