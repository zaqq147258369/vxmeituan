<template>
	<view>
		<!-- 定位 -->
		<view class="search-view">
			<image src="../../../static/loading/address-shouhuo.svg" mode="widthFix"></image>
			<text class="search-text">阿里西溪园区</text>
			<text>></text>
		</view>
		<!-- 搜索 -->
		<view class="search-cont">
			<view class="search" @click="seaRch()">
				<image src="../../../static/search/sousuo.png" mode="widthFix" class="search-img"></image>
				<input type="text" value="" placeholder="麻辣烫" disabled/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>/* scoped 可以使得该样式只在本页面生效 */
	/* 定位 */
	.search-view{
		font-size: 30rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		height: 80rpx;
	}
	.search-view image{
		width: 35rpx;
		height: 35rpx;
	}
	.search-text{
		padding: 0 10rpx;
	}
	/* 搜索 */
	.search-cont{
		display: flex;
		justify-content: space-between;
		height: 70rpx;
		align-items: center;
	}
	.search{
		height: 70rpx;
		line-height: 70rpx;
		width: 100%;
		display: flex;
		flex-direction: flex;
		background: #eff3f4;
		border-radius: 10rpx;
	}
	.search-img{
		margin: auto 0 auto 20rpx;
		width: 40rpx;
		height: 40rpx;
	}
	.search input{
		height: 70rpx;
		line-height: 70rpx;
		width: 100%;
		font-size: 25rpx;
		color: #666666;
	}
	
</style>
