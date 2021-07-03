<template>
	<view>
		<view >
			<!-- 筛选区 -->
			<view class="delica-view">
				<view class="delica-list delica-grow">
					<text>综合排序</text>
					<image src="../../../static/coen/paixu.png" mode="widthFix"></image>
				</view>
				<view class="delica-grow">销量高</view>
				<view class="delica-grow">速度快</view>
				<view class="delica-grow">津贴联盟</view>
				<view class="delica-list delica-right">
					<text>筛选</text>
					<image src="../../../static/coen/shaixuan.png" mode=""></image>
				</view>
			</view>
			<!-- 综合排序筛选 -->
			<!-- 综合排序 -->
			<view class="sortlist sortliteltle" >
				<block v-for="(item,index) in sortlist" :key="index">
					<text>{{item.name}}</text>
				</block>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sortlist:[
					{
						"name":"综合排序",
						"screen":"_id",
						"num":1
					},
					{
						"name":"起送价最低",
						"screen":"delivering",
						"num":1
					},
					{
						"name":"配送费最低",
						"screen":"physical",
						"num":1
					},{
						"name":"人均高到低",
						"screen":"capita",
						"num":-1
					},{
						"name":"人均低到高",
						"screen":"_capita",
						"num":1
					}
				],
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.delica-view image{
		width: 30rpx;
		height: 30rpx;
		display: block;
	}
	.delica-view{
		font-size: 30rpx;
		display: flex;
		align-items: center;
		color: #666666;
		height: 70rpx;
		/* padding: 0 15rpx; */
		background-color: #ffffff;
	}
	.delica-list{
		display: flex;
		align-items: center;
	}
	.delica-right{
		justify-content: flex-end;
		flex-grow: 5;
	}
	.delica-grow{
		flex-grow: 1;
	}
	/* 排序 */
	.sortlist{
		background-color: #FFFFFF;
	}
	.sortliteltle{}
	.sortliteltle text{
		/* padding: 0 15rpx; */
		display: block;
		font-size: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-top: 1rpx solid #ededed;
	}
	.activeb{
		color: #f89903 !important;
	}
</style>
