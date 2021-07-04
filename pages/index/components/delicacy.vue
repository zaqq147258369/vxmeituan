<template>
	<view>
		<view>
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
			<view class="sortlist sortliteltle" v-if="drop">
				<block v-for="(item,index) in sortlist" :key="index">
					<text>{{item.name}}</text>
				</block>
			</view>
			<!-- 筛选 -->
			<view class="sortlist sortlist-view">
				<block v-for="(item,index) in screendata" :key="index">
					<view class="sortlist-title">{{item.title}}</view>
					<view class="sortlist-flex">
						<block v-for="(itemdata,indexs) in item.datas" :key="indexs">
							<text class="Choice">{{itemdata.name}}</text>
						</block>
					</view>
				</block>
				<block v-for="(item,index) in person" :key="index">
					<view class="sortlist-title">{{item.title}}</view>
					<view class="sortlist-flex">
						<block v-for="(itemdata,indexs) in item.datas" :key="indexs">
							<text class="Choice">{{itemdata.name}}</text>
						</block>
					</view>
				</block>
				<view class="sortlist-bottom">
					<text>清空</text>
					<text>完成</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				drop: false,
				sortlist: [{
						"name": "综合排序",
						"screen": "_id",
						"num": 1
					},
					{
						"name": "起送价最低",
						"screen": "delivering",
						"num": 1
					},
					{
						"name": "配送费最低",
						"screen": "physical",
						"num": 1
					}, {
						"name": "人均高到低",
						"screen": "capita",
						"num": -1
					}, {
						"name": "人均低到高",
						"screen": "_capita",
						"num": 1
					}
				],
				screendata: [{
					"title": "商家特色(可多选)",
					"datas": [{
						"id": 1,
						"sign": "duration",
						"name": "配送最快"
					}, {
						"id": 1,
						"sign": "deliver",
						"name": "0元起送",
					}, {
						"id": 1,
						"sign": "physi",
						"name": "免配送费"
					}]
				}],
				person: [{
					"title": "人均价",
					"datas": [{
						"name": "20元以下",
						"per": {
							"$lt": 20,
						},
					}, {
						"name": "20-40元",
						"per": {
							"$lte": 40,
							"$gte": 20
						},
					}, {
						"name": "40元以上",
						"per": {
							"$gt": 20
						},
					}]
				}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.delica-view image {
		width: 30rpx;
		height: 30rpx;
		display: block;
	}

	.delica-view {
		font-size: 30rpx;
		display: flex;
		align-items: center;
		color: #666666;
		height: 70rpx;
		/* padding: 0 15rpx; */
		background-color: #ffffff;
	}

	.delica-list {
		display: flex;
		align-items: center;
	}

	.delica-right {
		justify-content: flex-end;
		flex-grow: 5;
	}

	.delica-grow {
		flex-grow: 1;
	}

	/* 排序 */
	.sortlist {
		background-color: #FFFFFF;
	}

	.sortliteltle {}

	.sortliteltle text {
		/* padding: 0 15rpx; */
		display: block;
		font-size: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-top: 1rpx solid #ededed;
	}

	/* 筛选部分----样式 */
	.sortlist-view {
		height: 700rpx;
		overflow: hidden;
		overflow-y: scroll;
		position: relative;
	}

	.sortlist-title {
		font-size: 30rpx;
		height: 60rpx;
		line-height: 60rpx;
	}

	/* 选择按钮样式 */
	.Choice {
		font-size: 28rpx;
		background: #F8F8F8;
		height: 55rpx;
		line-height: 55rpx;
		color: #666666;
		width: calc(100%-3)-15px !important;
		margin: 7.5px;
		text-align: center;
		display: block;
		border-radius: 5px;
		width: 205rpx;
	}

	.sortlist-flex {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 30rpx;
	}

	/* 底部按钮 */
	.sortlist-bottom {
		background-color: #fff;
		height: 80rpx;
		border-top: 1rpx solid #e4e4e4;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.sortlist-bottom text {
		flex-grow: 1;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}

	.sortlist-bottom text:nth-child(1) {
		border-right: 1rpx solid #E4E4E4;
	}

	.sortlist-bottom text:nth-child(2) {
		background-color: #ffd348;
	}

	.scractive {
		background-color: #fef6df !important;
		color: #f29909 !important;
	}
</style>
