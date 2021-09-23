<template>
	<div>
		<div class="myorder">
			<p class="myorderP">
				<span class="myorderPspan">2021-11-12 18:12</span>
				<span>订单号 : <strong style="color: #000;">dsada</strong></span>
			</p>
			<div class="myorderdiv">
				<div class="myorderImgD">
					<div class="myorderImg">
						<img src="../../../../assets/jifei.png" />
					</div>
					<div class="myorderImgP">
						<p>姑姑金属后</p>
					</div>
				</div>
				<div class="myorderUL">
					<ul>
						<li class="fuwu">
							<p>服务 X 1</p>
							<p>耗材包 X 1</p>
						</li>
						<li class="xingming">
							<p>张先生</p>
						</li>
						<li class="caozuo">
							<button>
								去支付
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="myorder">
			<p class="myorderP">
				<span class="myorderPspan">2021-11-12 18:12</span>
				<span>订单号 : <strong style="color: #000;">dsada</strong></span>
			</p>
			<div class="myorderdiv">
				<div class="myorderImgD">
					<div class="myorderImg">
						<img src="../../../../assets/jifei.png" />
					</div>
					<div class="myorderImgP">
						<p>姑姑金属后</p>
					</div>
				</div>
				<div class="myorderUL">
					<ul>
						<li class="fuwu">
							<p>服务 X 1</p>
							<p>耗材包 X 1</p>
						</li>
						<li class="xingming">
							<p>张先生</p>
						</li>
						<li class="caozuo">
							<button>
								待服务
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="myorder">
			<p class="myorderP">
				<span class="myorderPspan">2021-11-12 18:12</span>
				<span>订单号 : <strong style="color: #000;">dsada</strong></span>
			</p>
			<div class="myorderdiv">
				<div class="myorderImgD">
					<div class="myorderImg">
						<img src="../../../../assets/jifei.png" />
					</div>
					<div class="myorderImgP">
						<p>姑姑金属后</p>
					</div>
				</div>
				<div class="myorderUL">
					<ul>
						<li class="fuwu">
							<p>服务 X 1</p>
							<p>耗材包 X 1</p>
						</li>
						<li class="xingming">
							<p>张先生</p>
						</li>
						<li class="caozuo">
							<button>
								去评价
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'myorder',
		data() {
			return {

			}
		}
	}
</script>

<style lang="less">
	.myorder {
		width: 100%;
		box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);
		text-align: left;
		margin-top: 40px;
		.myorderP {
			padding: 20px;
			background-color: #f7f7f7;
			font-size: 16px;
			color: #8E8C8C;
			margin: 0px;

			.myorderPspan {
				margin-right: 50px;
			}
		}

		.myorderdiv {
			display: flex;

			.myorderImgD {
				width: 40%;
				display: flex;

				.myorderImg {
					width: 50%;
					margin-left: 23px;
					margin-top: 23px;
					margin-bottom: 19px;

					img {
						width: 130px;
						height: 130px;
					}
				}

				.myorderImgP {
					width: 50%;
					text-align: center;
					line-height: 130px;
					font-size: 18px;
				}
			}

			.myorderUL {
				width: 60%;

				ul {
					width: 100%;
					height: 100%;
					padding: 0px;
					margin: 0px;
					list-style: none;
					display: flex;

					li {
						width: 33%;
						height: 100%;
						border-left: 1px solid #ccc;
						text-align: center;
					}

					p {
						margin: 0px;
						padding: 0px;
						margin-top: 48px;
					}

					.caozuo {
						button {
							width: 80px;
							height: 40px;
							margin-top: 70px;
							background-color: #2A62D8;
							border: none;
							border-radius: 4px;
							outline: none;
							font-size: 14px;
							color: #fff;
						}
					}
				}

			}
		}
	}
</style>
