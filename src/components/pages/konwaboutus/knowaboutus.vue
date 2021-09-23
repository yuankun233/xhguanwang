<template>
	<div class="knowaboutus">
		<banner>
			<img src="http://www.xiaohulaile.com/xh/p/gw/img/banner2.png" />
		</banner>

		<div class="main">
			<img style="width: 40%;position: absolute;z-index: 999;left: 0px;top:-400px" src="../../../assets/bannerText.png" />
			<div class="BrandProject">
				<span>品牌项目</span>
			</div>

			<div class="main_box1" @mouseover="showshade(-1)" @mouseout="falshade(-1)">
				<img src="http://www.xiaohulaile.com/xh/p/gw/img/pinpaixiangmu.jpg" />
				<div v-show="shadeNum == -1">
					<div class="shade"></div>
					<div class="shadetext">
						<h1>
							01 品牌项目-{{text.title}}
						</h1>
						<p>
							专业的护士服务
						</p>
						<button @click="subscribe(text)">
							立即预约
						</button>
					</div>
				</div>
			</div>

			<div class="main_box2">
				<!-- @mouseout="falshade(index)" -->
				<a class="box2item" v-for="(item,index) in list" @click="subscribe(item)" @mouseover="showshade(index)"
					@mouseout="falshade(index)" :key="index">
					<img :src="item.pic_url" alt="" />
					<div v-show="shadeNum == index">
						<div class="shade"></div>
						<div class="shadeText">
							<h4>{{item.title}}</h4>
							<h5>{{item.name}}</h5>
						</div>
					</div>
				</a>
			</div>
			<div class="main_box3">
				<div class="main_box3_1">
					<p>我们的服务优势</p>
					<p><span>1</span> 专科护理与康养结合</p>
					<p><span>2</span> 信息化健康管理</p>
					<p><span>3</span> 一对一个性化服务</p>
				</div>
				<div class="main_box3_2">
					<img src="http://www.xiaohulaile.com/xh/p/gw/img/fuwuyoushi.png" />
				</div>
			</div>
			<div class="main_box4">
				<div class="box4-left"></div>
				<div class="box4-right"></div>
				<div class="box4-abso1">
					服务流程
				</div>
				<div class="box4-abso2">
					<process-slot>01</process-slot>
					<div class="xian"></div>
					<process-slot>02</process-slot>
					<div class="xian"></div>
					<process-slot>03</process-slot>
					<div class="xian"></div>
					<process-slot>04</process-slot>
					<div class="xian"></div>
					<process-slot>05</process-slot>
					<div class="box4-abso-text1 box4-abso-text">
						<h5>通过微信“小护来了”小程序、公众号或官网下单</h5>
						<h4>下单预约</h4>
					</div>
					<div class="box4-abso-text2 box4-abso-text">
						<h4>评估确认</h4>
						<h5>人工电话回访确认</h5>
					</div>
					<div class="box4-abso-text3 box4-abso-text">
						<h5>专业人员上门实施服务项目</h5>
						<h4>上门服务</h4>
					</div>
					<div class="box4-abso-text4 box4-abso-text">
						<h4>建立档案</h4>
						<h5>针对所需疾病建立健康档案</h5>
					</div>
					<div class="box4-abso-text5 box4-abso-text">
						<h5>服务完成对此服务进行评价</h5>
						<h4>系统评价</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import banner from '../../common/banner/banner.vue'
	import processSlot from '../../common/processSlot/processSlot'
	export default {
		components: {
			banner,
			processSlot
		},
		data() {
			return {
				// 腹膜透析ID:3	PICC:ID:
				text:{title:'腹膜透析',id:3},
				list: [],
				shadeToF: false,
				shadeNum: 0
			}
		},
		methods: {
			subscribe(item) {
				localStorage.setItem('itemId', JSON.stringify(item.id))
				localStorage.setItem('title', JSON.stringify(item.title))
				this.$router.push({
					path: '/details',
				});
			},
			showshade(index) {
				this.shadeNum = index
				this.shadeToF = true
			},
			falshade(index) {
				this.shadeNum = index
				this.shadeToF = false
			},
			getclass_list(){
				this.$http.post('project/class_list')
					.then((res) => {
						// console.log(res.data)
						this.list = res.data.data
					})
					.catch((err) => {
						// console.log(err)
					})
			},
			
			//如果支付宝登录，则进入这里
			Alipay(){
				let userid = this.$route
				let user_id = this.$route.query.user_id
				// localStorage.setItem("userid", JSON.stringify(userid))
				// localStorage.setItem("user_id", JSON.stringify(user_id))
				console.log(userid,11)
				console.log(user_id,22)
			}
		},
		created() {
			this.getclass_list(),
			this.Alipay()
		},
	};
</script>

<style lang="less">
	.knowaboutus {
		width: 100%;
		.main {
			max-width: 1200px;
			margin: 0 auto;
			position: relative;
			.BrandProject {
				width: 100%;
				height: 170px;
				line-height: 170px;
				font-size: 40px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #333333;
				span {
					padding-bottom: 10px;
					border-bottom: 4px solid #0067E8;
				}
			}

			.main_box1 {
				width: 100%;
				position: relative;
				img {
					width: 100%;
				}
				.shade {
					position: absolute;
					width: 50%;
					height: 99%;
					opacity: 0.5;
					background-color: #000000;
					top: 0px;
					right: 0px;
				}

				.shadetext {
					width: 50%;
					height: 100%;
					position: absolute;
					top: 10%;
					right: 0px;
					color: #ffffff;
					p {
						font-size: 24px;
					}
					button {
						width: 140px;
						height: 45px;
						border-radius: 50px;
						font-size: 16px;
						color: #ffffff;
						font-weight: 1000;
						background-color: #FFBF13;
						border: none;
						outline: none;
					}
				}
			}
		}

		.main_box2 {
			width: 100%;
			margin: 50px auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.box2item {
				width: 20%;
				display: block;
				height: 220px;
				position: relative;
				color: #ffffff;
				display: block;
				.shade {
					width: 100%;
					height: 25%;
					opacity: 0.5;
					background: #000;
					position: absolute;
					left: 0px;
				}

				.shadeText {
					width: 100%;
					height: 25%;
					position: absolute;
					left: 0px;
					h4 {
						margin:5px 0px 5px 0px;
					}
					h5 {
						margin: 0px;
					}
				}
			}

			img {
				width: 100%;
			}
		}

		.main_box3 {
			width: 100%;
			height: 430px;
			display: flex;
			.main_box3_1 {
				width: 50%;
				height: 100%;
				background: #2F6BEC;
				color: #fff;
				font-weight: 1000;
				p:nth-child(1) {
					text-align: left;
					margin-left: 20%;
					margin-top: 80px;
					font-size: 36px;
				}
				p {
					text-align: left;
					margin-left: 30%;
					font-size: 30px;

					// span {
					// 	text-shadow: -15px 10px rgba(255, 255, 255, 0.2);
					// }
				}
			}
			.main_box3_2{
				width: 50%;
				img{
					width: 100%;
				}
			}
		}

		.main_box4 {
			overflow: hidden;
			height: 600px;
			position: relative;
			.box4-left {
				width: 35%;
				height: 100%;
				background-color: #FFCA3B;
				float: left;
			}
			.box4-right {
				width: 65%;
				height: 100%;
				background-color: #2F6BEC;
				float: right;
			}
			.box4-abso1 {
				width: 30%;
				height: 200px;
				position: absolute;
				background-color: #fff;
				top: 200px;
				left: 10%;
				font-size: 48px;
				font-weight: 1000;
				color: #207BEC;
				line-height: 200px;
			}
			.box4-abso2 {
				width: 50%;
				height: 250px;
				position: absolute;
				top: 200px;
				right: 70px;
				display: flex;
				justify-content: space-between;
				.xian{
					margin-top: 120px;
					width: 100px;
					height: 2px;
					background-color: #0D6ADE;
				}
				.box4-abso-text {
					position: absolute;
					h4 {
						color: #FFFFFF;
					}
					h5 {
						color: #E8E8E8;
						font-size: 16px;
						font-weight: none;
					}
				}

				.box4-abso-text1 {
					left: -2%;
					top: -40px;
					width: 180px;
					text-align: left;
				}

				.box4-abso-text2 {
					left: 22%;
					top: 140px;
					width: 200px;
					text-align: left;
				}

				.box4-abso-text3 {
					left: 43%;
					top: -40px;
					width: 150px;
					text-align: left;
				}

				.box4-abso-text4 {
					left: 70%;
					top: 140px;
					width: 180px;
					text-align: left;
				}

				.box4-abso-text5 {
					right: -10%;
					top: -40px;
					width: 120px;
					text-align: left;
				}
			}
			margin-bottom: 50px;
		}
	}
</style>
