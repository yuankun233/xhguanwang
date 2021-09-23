
<!-- 合作机构路由 -->

<template>
	<div class="Partners" v-loading="loading">
		<div class="PartnersText" v-for="item in Partners" :key="item.id" @click="showFoT(item)">
			<div class="PartnersImg">
				<img :src="item.pic_url" />
			</div>
			<div class="Partnerstext">
				<p style="font-size: 24px;font-weight: bold;">{{item.name}}</p>
				<p style="font-size: 20px;margin-top: 30px;text-align: left;">{{item.content}}</p>
			</div>
		</div>
		<el-pagination background :hide-on-single-page="total<=10?true:false" :current-page="currentPage"
			@current-change="handleCurrentChange" layout="total,prev, pager,next" :total="total">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//合作机构数组
				Partners: [],
				//加载中
				loading: false,
				//以后如果要把图片和文字分开，就加进去
				// showText: true,
				//页码
				p: 1,
				total: 0,
				currentPage: 1,
				//合作机构详情
				// text: '',
				name: '',
				pic_url: ''
			}
		},
		created() {
			this.getnursing()
		},
		methods: {
			//获取合作机构
			getnursing() {
				this.loading = true
				this.Partners = []
				this.$http({
						method: 'post',
						url: 'nursing/index',
						data: {
							page_no: this.currentPage
						}
					})
					.then((res) => {
						this.loading = false;
						this.Partners = res.data.data.data
						this.total = res.data.data.page.tr
					})
					.catch((err) => {
						this.loading = false;
					})
			},
			handleCurrentChange(newPage) {
				this.loading = true;
				this.currentPage = newPage
				this.getnursing()
			},
		}
	};
</script>

<style>
</style>
