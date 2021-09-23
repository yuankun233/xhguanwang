
<!-- 生活照料路由 -->

<template>
	<div v-loading="loading">
		<div class="sortord">
			<button @click="sortord(true)" :class="sortordBtn == true?'sortordBtn':'' ">价格由低到高</button>
			<button @click="sortord(false)" :class="sortordBtn == false?'sortordBtn':'' ">价格由高到低</button>
		</div>
		<div class="box_2">
			<div class="boxitem" v-for="(item,index) in listli2" :key="index">
				<div class="boxitemImg">
					<img :src="item.pic_url" />
				</div>
				<div class="namepricr">
					<p class="name">{{item.title}}</p>
					<p class="price"><span>￥{{item.price}}</span>/次</p>
					
				</div>
				<div class="Ewm">
					<button @click="yuyue(item)">
						查看详情
					</button>
					<!-- <p>扫码下单</p>
					<div class="EwmImg">
						<img src="../../../../assets/qrCode.png" />
					</div> -->
				</div>
			</div>
		</div>
		<div>
			<el-pagination background :current-page="currentPage" @current-change="handleCurrentChange"
				layout="total, prev, pager, next, jumper, slot" :total="total" :page-size="page_size">
			</el-pagination>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				listli2: [], //列表数组
				spanBtn: 0,
				//价格排序高亮
				sortordBtn: true,
				//加载中
				loading: false,
				//总条数
				total: 0,
				//每页显示个数
				page_size: 8,
				//页码
				currentPage: 1,
			};
		},
		created() {
			this.getlist2()
		},
		methods: {
			//切换分页
			handleCurrentChange(newPage) {
				this.currentPage = newPage
				this.getlist2()
			},
			//通过价格排序
			sortord(num) {
				// console.log(num)
				if (num == true) {
					this.sortordBtn = true
					this.getlist2()
				} else {
					this.sortordBtn = false
					this.getlist2()
				}
			},
			//获取数据
			 getlist2() {
				this.loading = true
				this.listli2 = []
				this.$http({
						method: 'post',
						url: 'project/get_list',
						data: {
							cate: 3,
							page_no: this.currentPage,
							page_size: this.page_size,
							type: this.sortordBtn == true ? '' : 1
						}
					})
					.then((res) => {
						// console.log(res)
						if (res.status == 200) {
							this.loading = false
							this.listli2 = res.data.data.data
							this.total = res.data.data.page.tr //总条数
						}
					})
					.catch((err) => {
						this.loading = false
					})
			},
			yuyue(item) {
				localStorage.setItem('itemId', JSON.stringify(item.id))
				localStorage.setItem('title', JSON.stringify(item.title))
				this.$router.push({
					path: '/details',
				});
			}
		}
	};
</script>

<style>
	
</style>
