<template>
	<view class="contenting">
		<Serach></Serach>
		<Preference :preferdata='perferdata'></Preference>
		<Title></Title>
		<view @click="poll()">
			<Delicacy :class="{'is_fixed' : is_fixed}" id="boxFixed"></Delicacy>
		</view>
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
				menutop:'',
				rect:'',
				is_fixed:false,
				topdata:'',
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
			},
			poll(){
				wx.pageScrollTo({
					scrollTop:this.topdata,
					duration:300
				})
			},
		},
		onLoad(){
			const quer = wx.createSelectorQuery();
			quer.select('#boxFixed').boundingClientRect();
			quer.exec((res)=>{
				this.menutop = res[0].top
				this.topdata = res[0].top
			})
		},
		// 监听页面滚动距离
		onPageScroll(e){
			this.rect = e.scrollTop
		},
		mounted(){
			this.preference();
		},
		// 计算属性
		computed: {
			namepage() {
				if(this.rect > this.menutop){
					this.is_fixed = true
				}else{
					this.is_fixed = false
				}
			}
		},
	}
</script>

<style scoped="scoped">
	.contenting{
		margin: 0 15rpx;
	}
	.is_fixed{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
	}
</style>
