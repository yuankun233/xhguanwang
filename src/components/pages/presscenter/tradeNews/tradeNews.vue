
<!-- 行业新闻路由 -->

<template>
	<div class="box_2" v-loading="loading">
		<div v-for="(item,index) in listText" class="box_msg">
			<div class="pressImg">
				<img :src="item.img" />
			</div>
			<div class="presstext">
				<h3>
					{{item.title}}
				</h3>
				<p>
					{{item.name}}
				</p>
				<button id="navtodet" @click="navto(item)">
					查看详情
				</button>
			</div>
		</div>
		<div>
			<el-pagination background :current-page="currentPage" @current-change="handleCurrentChange"
				layout="total,prev, pager,next,jumper" :total="total" :page-size="page_size"></el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//新闻列表
				listText: [],
				//加载中
				loading: false,
				//总条数
				total: 0,
				//每页显示个数
				page_size: 5,
				//当前页数
				currentPage: 1,
				//跳转地址
				indexro:''
			}
		},
		created() {
			this.getlist()
		},
		methods: {
			//切换分页
			handleCurrentChange(newPage) {
				this.currentPage = newPage
				this.getlist()
			},
			//获取列表数据
			getlist() {
				this.loading = true
				this.$http({
						method: 'post',
						url: 'news/get_list',
						data: {
							type: 1,
							page_no: this.currentPage,
							page_size: this.page_size
						}
					})
					.then((res) => {
						// console.log(res)
						if (res.status == 200) {
							this.listText = res.data.data.data
							this.total = res.data.data.page.tr
							console.log(this.listText.length)
						}
						this.loading = false
					})
					.catch((err) => {
						this.loading = false
					})
			},
			//跳转详情页
			navto(item) {
				this.indexro = item.url
				window.open(this.indexro, '_blank')
			}
		}
	};
</script>

<style scoped lang="less">
	.box_2 {
		width: 100%;
		.box_msg {
			width: 100%;
			height: 100%;
			display: flex;
			box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);
			margin-top: 30px;
			.presstext {
				max-width: 700px;
				text-align: left;
				margin-left: 50px;
				margin-top: 0px;
				padding: 0px 10px;
				position: relative;
				p {
					color: #999999;
				}
				button {
					background: none;
					border: none;
					outline: none;
					position: absolute;
					bottom: 20px;
					color: #2F6BEC;
				}
			}
			.pressImg {
				max-width: 380px;
				height: 160px;
				margin: 20px 20px;
				overflow: hidden;
				img {
					width: 100%;
				}
			}
		}
	}
</style>
