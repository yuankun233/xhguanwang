
<!-- 物品详情页路由 -->

<template>
	<div class="main" v-loading="loading">
		<div class="left">
			<div class="location" @click="goBack">
				 详情页 > <span>{{details.title}}</span> 
			</div>
			<div style="border-left: 10px solid #ccc;padding:0px 20px;border-right: 10px solid #ccc;">
				<div>
					<h4 class="service_process">服务介绍</h4>
					<P style="text-align: left;text-indent: 2em;">
						{{details.concept}}
					</P>
				</div>	
				<div class="Serviceprofile">
					<h4 class="service_process">内容与流程</h4>
					<div v-for="(item,index) in details.msg">
						<div style="text-align: left;">
							<p>{{item.msg}}</p>
						</div>
					</div>
				</div>
				<div>
					<h4 class="service_process">预约须知</h4>
					<div class="service_process_box">
						<P style="text-indent: 2em;">{{details.notice1}}</P>
						<P>{{details.notice2}}</P>
					</div>
				</div>
			</div>
		</div>
		<div class="right" style="border-right: 10px solid #ccc;">
			<p class="right_p">{{details.title}}</p>
			<p class="right_p2">￥{{details.price}}</p>
			<div class="QuickMark">
				<div class="QuickMarkImg">
					<img src="../../../assets/qrCode.png" />
				</div>
				<div class="QuickMarkText">
					<p>手机微信扫码下单</p>
					<p>微信扫码下单，方便又快捷</p>
				</div>
			</div>
		</div>
		<div class="potionfiexd_box">
			<h1>
				预约热线：400-9155-291
			</h1>
		</div>
		<div class="nvimg">
			<img src="../../../assets/beiicon.png" />
			<!-- <button class="subBtn">
				立即预约
			</button>
			<button class="refundBtn">
				退款须知
			</button> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//从上个页面拿过来的参数
				item:localStorage.getItem("itemId"),
				//加载中
				loading: false,
				//获取到的参数
				details:''
			};
		},
		created() {
			this.getdetails()
		},
		methods: {
			goBack(){
				this.$router.push({
					path: '/index',
				})
			},
			getdetails(){
				this.loading = true
				this.$http({
					method: 'post',
					url: '/project/index',
					data: {
						id:this.item
					}
				})
				.then((res) => {
					console.log(res.data.data)
					this.loading = false
					if(res.status == 200){
						this.details = res.data.data
					}
				})
				.catch((err) => {
					console.log(err)
					this.loading = false
				})
			}
		}
	};
</script>

<style lang="less">
	.main{
		max-width: 1200px;
		margin: 0 auto;
		justify-content: space-between;
		position: relative;
		margin-bottom: 100px;
		.nvimg{
			width: 180px;
			height: 230px;
			img{
				position: fixed;
				left: 19%;
				bottom: 100px;
			}
			.subBtn{
				position: fixed;
				right: 400px;
				bottom: 150px;
			}
			.refundBtn{
				position: fixed;
				bottom: 40px;
			}
		}
		.left{
			
			width: 49%;
			.location{
				padding: 30px 0px;
				color: #999999;
				font-size: 30px;
			}
			.service_process{
				font-size: 18px;
				width: 100px;
				height: 40px;
				border: none;
				outline: none;
				background: #4178F0;
				color: #fff;
				border-radius: 10px;
				text-align: center;
				line-height: 40px;	
			}
			.service_process_box{
				text-align: left;
			}
			.Serviceprofile{
				img{
					width: 100%;
				}
			}
		}
		.right{
			width: 31%;
			position: fixed;
			font-weight: 1000;
			left: 50%;
			top: 100px;
			.right_p{
				font-size: 30px;
				color: #4178F0;
				margin: 0px;
			}
			.right_p2{
				font-size: 48px;
				color: #FA0023;
				margin: 0px;
			}
			.QuickMark{
				display: flex;
				justify-content: center;
				.QuickMarkImg{
					img{
						width: 100%;
					}
				}
				.QuickMarkText{
					margin-top: 70px;
					font-weight: none;
				}
			}
		}
		.potionfiexd_box{
			width: 100%;
			height: 130px;
			background-color: #000;
			opacity: 0.6;
			position: fixed;
			left: 0px;
			bottom: 100px;
			h1{
				width: 100%;
				color: #fff;
				font-size: 40px;
				line-height: 70px;
			}
			
		}
		
		.refundBtn,.subBtn{
			font-size: 18px;
			width: 100px;
			height: 40px;
			border: none;
			outline: none;
			background: #4178F0;
			color: #fff;
			border-radius: 10px;
			margin-left: -50%;
			margin-top: 30px;
		}
	}
</style>