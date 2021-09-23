<template>
	<div class="mydiv">
		<div class="gerenzhongxin" style="margin-bottom: 20px;box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);">
			<p style="">| 个人中心</p>
		</div>

		<div class="my">
			<div class="right">
				<ul class="rightUl">
					<li style="font-size: 24px;text-align: center;">账号管理</li>
					<li>
						<router-link :to="{name:'myorder'}" class="router" exact-active-class="highlight">
							全部订单
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'address'}" class="router" exact-active-class="highlight">
							地址管理
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'FAQs'}" class="router" exact-active-class="highlight">
							常见问答
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'Notescontact'}" class="router" exact-active-class="highlight">
							联系客服
						</router-link>
					</li>
				</ul>
			</div>
			<!-- 主体 -->
			<div class="addresstop">
				<div class="addressuser">
					<div class="addressImg">
						<img src="../../../assets/qrCode.png" />
					</div>
					<div class="addressname">
						<p>{{addressname}}</p>
					</div>
					<div class="addressphone">
						<p>{{addressphone}}</p>
					</div>
				</div>
				<div class="addressorder">
					<div class="fukuan">
						<img src="../../../assets/daifukuan.png" />
						<p>待付款
							<p />
					</div>
					<div class="fuwu">
						<img src="../../../assets/daifukuan.png" />
						<p>待服务
							<p />
					</div>
					<div class="pingjia">
						<img src="../../../assets/daipingjia.png" />
						<p>待评价
							<p />
					</div>
					<div class="quanbu">
						<img src="../../../assets/quanbu.png" />
						<p>全部订单
							<p />
					</div>
				</div>
				<router-view></router-view>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				addressname: '何先生',
				addressphone: localStorage.getItem('phone'),
			}
		},
		
	};
</script>

<style lang="less">
	.mydiv {
		.gerenzhongxin {
			width: 100%;

			p {
				max-width: 1200px;
				margin: 0 auto;
				text-align: left;
				font-size: 20px;
				padding: 20px 0px;
			}
		}
	}

	.my {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;

		.right {
			width: 200px;
			margin-right: 20px;

			.rightUl {
				list-style: none;
				width: 200px;
				padding: 0px;
				margin: 0px;
				box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);

				li {
					width: 100%;
					padding: 10px 0px;

					.router {
						color: #000000;
						font-size: 18px;
						text-decoration: none;
						display: block;
					}

					.highlight {
						color: #0067E8;
						border-left: 3px solid #0067E8;
					}
				}
			}
		}

		.addresstop {
			width: 100%;

			.addressuser {
				display: flex;
				width: 100%;
				background-image: linear-gradient(-90deg, #EBEFF5, #DEE9F5);

				.addressImg {
					width: 70px;
					height: 70px;
					margin-top: 50px;
					margin-left: 70px;

					img {
						width: 70px;
						height: 70px;
						border-radius: 50%;
					}
				}

				.addressname {
					width: 70px;
					height: 70px;
					margin: 50px 80px 50px 70px;
					font-size: 20px;

					p {
						margin: 0px;
						line-height: 70px;
					}
				}

				.addressphone {
					width: 120px;
					height: 70px;
					margin-top: 50px;
					font-size: 20px;

					p {
						margin: 0px;
						line-height: 70px;
					}
				}
			}

			.addressorder {
				display: flex;
				width: 100%;
				background-color: #fff;
				padding-top: 30px;
				padding-bottom: 20px;
				font-size: 16px;
				margin-bottom: 30px;
				box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);

				div {
					width: 25%;
				}
			}
		}
	}
</style>
