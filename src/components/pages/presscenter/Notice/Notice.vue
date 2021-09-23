
<!-- 通知公告路由 -->

<template>
	 <div v-if="Newsdetails" class="box_2" v-loading="loading">
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
			<div class="msgtime">
				<p>
					{{item.time}}
				</p>
			</div>
		</div>
		<div>
			<el-pagination background :current-page="currentPage" @current-change="handleCurrentChange"
				layout="total,prev, pager,next,jumper" :total="total" :page-size="page_size"></el-pagination>
		</div>
	</div>
	<div v-else class="box_3">
		<div class="Newsdetail">
			<p class="place location">{{place}}>{{this.title}}</p>
			<h2><el-button type="primary" @click="fanhui" style="margin-right: 100%;" icon="el-icon-back">返回</el-button>{{this.title}}</h2>
			<p class="place">{{time}}</p>
		</div>
		<div class="detail-text">
			<p v-for="(item,index) in listdetail.msg">{{item.msg}}</p>
			<div style="margin-top: 20px;" v-for="(item,index) in listdetail.pic">
				<img :src="item.url" />
			</div>
		</div>
	</div>
		
</template>

<script>
	export default {
		data() {
			return {
				//新闻列表
				listText:[],
				//新闻详情
				listdetail: [],
				//保存title，传给详情
				title: '',
				Newsdetails: true,
				//新闻详情中你所在位置
				place: '通知公告', //默认行业新闻
				//加载中
				loading: false,
				//总条数
				total: 0,
				//每页显示个数
				page_size: 5,
				//当前页数
				currentPage: 1,
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
							type: 3,
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
				this.listdetail = []
				this.loading = true
				this.Newsdetails = false
				this.title = item.title
				this.time = item.time
				this.$http({
						method: 'post',
						url: 'news/index',
						data: {
							id: item.id
						}
					})
					.then((res) => {
						console.log(res)
						if (res.status == 200) {
							this.listdetail = res.data.data
						}
						this.loading = false
					})
					.catch((err) => {
						this.loading = false
					})
			},
			fanhui(){
				this.Newsdetails = true
				this.getlist()
			}
		}
	};
</script>

<style scoped lang="less">
	.box_2 {
		width: 100%;

		.box_msg {
			height: 100%;
			display: flex;
			box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);
			margin-top: 30px;

			.presstext {
				width: 500px;
				text-align: left;
				margin-left: 50px;
				margin-top: 20px;
				position: relative;
				h3{
					margin-top: 0px;
				}
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
				margin: 20px 20px;
				height: 160px;
				overflow: hidden;
				img {
					width: 100%;
				}
			}

			.msgtime {
				width: 100px;
				text-align: right;
				margin-left: 5%;
				padding: 20px;
				color: #2F6BEC;
				font-weight: 600;
				p{
					margin-top: 0px;
				}
			}
		}
	}
	
	
	.box_3 {
		width: 100%;
	
		.Newsdetail {
			.place {
				font-size: 14px;
				color: #B1B1B1;
			}
	
			.location {
				width: 150px;
				height: 20px;
				text-align: left;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	
		.detail-text {
			text-align: left;
	
			img {
				width: 100%;
			}
		}
	}
</style>
