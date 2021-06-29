<template>
	<view class="prefer-content">
		<view class="prefer-title">
			为您优选
		</view>
		<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
			<view  class="prefer-dis">
				<block v-for="(item,index) in preferdata" :key="index">
					<view class="prefer-view">
						<image :src="item.image" mode="aspectFill"></image>
						<text>{{item.title}}</text>
						<text>{{item.lable}}</text>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				preferdata: [
					{
						'image':'../../../static/coen/caia.jpg',
						'title':'特别推荐',
						'lable':'晚餐必备'
					},
					{
						'image':'../../../static/coen/caib.jpg',
						'title':'特别推荐',
						'lable':'晚餐必备'
					},
					{
						'image':'../../../static/coen/caic.jpg',
						'title':'特别推荐',
						'lable':'晚餐必备'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.prefer-content{
		margin: 30rpx 0;
	}
	.prefer-title{
		font-size: 35rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin-bottom: 20rpx;
	}
	.scroll{
		white-space: nowrap;
		width: 100%;
		height: 300rpx;
	}
	.prefer-dis{
		display: flex;
		justify-content: space-between;
	}
	.prefer-view{
		height: 300rpx;
		width: 300rpx;
		padding: 0 8rpx;
	}
	.prefer-view image{
		width: 300rpx;
		height: 200rpx;
		border-radius: 8rpx;
	}
	.prefer-view text{
		height: 45rpx;
		line-height: 45rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:1;
		overflow: hidden;
	}
	.prefer-view text:nth-child(2){
		font-size: 30rpx;
	}
	.prefer-view text:nth-child(3){
		font-size: 27rpx;
		color: #9c9c9c;
	}
	.prefer-dis view:nth-child(2){
		padding: 0 7rpx !important;
	}
	
</style>
