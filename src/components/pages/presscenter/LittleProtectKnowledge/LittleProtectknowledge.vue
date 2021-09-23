
<!-- 小护知识中心 -->

<template>
	<div class="box_2" v-loading="loading">
		<div class="details" v-if="details">
			<div v-for="(item,index) in listText" class="box_msg">
				<div v-show="item.img?true:false" style="width: 380px;height: 160px;overflow: hidden;">
					<img @click="navto(item)" :src="item.img" style="width: 100%;height: auto;"/>
				</div>
				<div class="btn" style="margin-left: 20px;">
					<h2>
						{{item.title}}
					</h2>
					<button type="button" @click="navto(item)">查看详情</button>
				</div>
			</div>
		</div>
		<div v-else>
			<h2><el-button type="primary" @click="fanhui" style="margin-right: 100%;" icon="el-icon-back">返回</el-button></h2>
			<div class="listdetails" v-for="(item,index) in listdetails">
				<h2 :class="item.type==0?'texthinght':''">{{item.msg}}</h2>
			</div>
		</div>
		<div v-show="details">
			<el-pagination background :current-page="currentPage" @current-change="handleCurrentChange"
				layout="total,prev, pager,next,jumper" :total="total" :page-size="page_size"></el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//小护知识中心大分类
				listText:[],
				//知识详情
				listdetails:[],
				// newlistdetails:[],
				//点击详情，关闭大分类
				details:true,
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
				if(this.details == true){
				this.getlist()
				}else{
					this.navto()
				}
			},
			//获取列表数据
			getlist() {
				this.listText = []
				this.loading = true
				this.title = 0
				this.$http({
						method: 'post',
						url: 'news/get_list',
						data: {
							type: 4,
							page_no: this.currentPage,
							page_size: this.page_size,
						}
					})
					.then((res) => {
						console.log(res)
						if (res.status == 200) {
							this.listText = res.data.data.data
							this.total = res.data.data.page.tr
							// console.log(this.listText.length)
						}
						this.loading = false
					})
					.catch((err) => {
						this.loading = false
					})
			},
			//跳转详情页
			navto(item) {
				console.log(item.id)
				this.listdetails = []
				this.title = 0 
				this.details = false
				this.$http({
						method: 'post',
						url: 'news/index',
						data: {
							id:item.id,
						}
					})
					.then((res) => {
						console.log(res)
						if (res.status == 200) {
							this.listdetails = res.data.data.msg
						}
					})
					.catch((err) => {
						
					})
			},
			fanhui(){
				this.details = true
				this.getlist()
			}
		}
	};
</script>

<style scoped lang="less">
	.box_msg{
		display: flex;
		margin-top: 30px;
		box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);
		padding: 20px;
		
		.btn{
			width: 750px;
			h2{
				margin: 0px;
			}
			button{
				width: 100px;
				height: 40px;
				border: none;
				background-color: #2F6BEC;
				color: white;
				border-radius: 4px;
				margin-top: 90px;
			}
		}
	}
	
	.listdetails{
		text-align: left;
		.texthinght{
			font-size: 18px;
			font-weight: normal;
		}
	}
</style>
