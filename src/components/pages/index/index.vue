<!-- 居家服务路由 -->

<template>
	<div class="index">
		<banner>
			<img src="http://www.xiaohulaile.com/xh/p/gw/img/banner3.png" />
		</banner>
		<div class="main" style="position: relative;">
			<img style="width: 40%;position: absolute;z-index: 999;left: 0px;top: -400px;" src="../../../assets/bannerText.png" />
			<div class="box_1">
				<router-link :to="{name:'ProfessionalCare'}" class="routercolor" exact-active-class="routhei">
					临床护理
				</router-link>
				<router-link :to="{name:'functionalRehabilitation'}" class="routercolor" exact-active-class="routhei">
					专科护理
				</router-link>
				<router-link :to="{name:'lifeCare'}" class="routercolor" exact-active-class="routhei">
					居家康复
				</router-link>
				<!-- <router-link :to="{name:'sciencePharmacy'}" class="routercolor" exact-active-class="routhei">
					科学用药
				</router-link> -->
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import banner from '../../common/banner/banner.vue'
	export default {
		components: {
			banner,
		},
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="less">
	.index {
		width: 100%;
		.main {
			margin: 0 auto;
			max-width: 1200px;
			.box_1 {
				height: 100px;
				display: flex;
				line-height: 100px;
				border-bottom: 1px solid #ccc;
				font-size: 20px;
				font-weight: 600;
				.routercolor {
					color: #333;
					text-decoration: none;
					margin-right: 50px;
				}
				.routhei {
					font-size: 24px;
					color: #0067E8;
					border-bottom: 3px solid #0067E8;
				}
			}
			.sortord {
				height: 50px;
				margin-top: 40px;
				button {
					padding: 10px;
					margin: 5px 10px;
					font-size: 14px;
					font-weight: 1000;
					border: none;
					outline: none;
					border-radius: 5px;
				}
			}
			.box_2 {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.boxitem {
					width: 48%;
					height: 156px;
					display: flex;
					justify-content: space-between;
					margin-top: 50px;
					.boxitemImg {
						max-width: 227px;
						height: 100%;
						img {
							width: 100%;
							height: auto;
						}
					}
					.namepricr {
						max-width: 180px;
						height: 100%;
						text-align: left;
						.name {
							color: #333;
							font-size: 20px;
							font-weight: 700;
							margin: 0px 0px;
						}
						.price {
							color: #848484;
							font-weight: 600;
							font-size: 19px;
							margin: 0px 0px;
							margin-top: 80px;
							display: block;
							width: 131px;
							height: 50px;
							
							span {
								color: #F5881D;
								font-size: 36px;
								font-weight: 700;
							}
						}
					}

					.Ewm {
						width: 180px;
						
						button {
							margin-top: 100px;
							width: 100%;
							height: 50px;
							border: none;
							border-radius: 5px;
							background-color: #2F6BEC;
							color: #ffffff;
							font-size: 18px;
							font-weight: 600;
						}
					}
				}
			}

			.sortordBtn {
				background-color: #2F6BEC;
				color: #fff;
				box-shadow: 2px 2px 8px 1.5px rgba(047, 107, 236, 0.5);
			}

			.el-pagination {
				margin-top: 30px;
				height: 40px;
				margin-bottom: 30px;

				span {
					font-size: 18px;
					line-height: 40px;
				}

				button {
					width: 40px;
					height: 40px;
				}

				ul {
					height: 40px;

					li {
						height: 100%;
						line-height: 40px;
						width: 40px;
					}
				}
			}
		}
	}
</style>
