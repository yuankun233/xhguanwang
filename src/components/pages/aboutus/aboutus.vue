
<!-- 关于我们路由 -->

<template>
	<div class="aboutus">
		<banner>
			<img src="http://www.xiaohulaile.com/xh/p/gw/img/banner1.png" />
		</banner>
		<div class="mian">
			<div class="box_1">
				<router-link :to="{name:'companyProfile'}" class="routercolor" exact-active-class="routhei">
					公司简介
				</router-link>
				<router-link :to="{name:'Partners'}" class="routercolor" exact-active-class="routhei">
					合作机构
				</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import banner from '../../common/banner/banner'
	export default {
		components: {
			banner,
		},
		data() {
			return {
				
			}
		},
	};
</script>

<style lang="less">
	.aboutus {
		.mian {
			max-width: 1200px;
			margin: 0 auto;

			.box_1 {
				height: 100px;
				display: flex;
				line-height: 100px;
				border-bottom: 1px solid #ccc;
				font-size: 20px;
				font-weight: 600;
				.routercolor{
					color: #333;
					text-decoration: none;
					margin-right: 50px;
				}
				.routhei{
					font-size: 24px;
					color: #0067E8;
					border-bottom: 3px solid #0067E8;
				}
			}

			.box_2 {
				padding: 50px 0px;
				text-align: left;
				color: #4F4F4F;
			}

			.Partners {
				.PartnersText {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					position: relative;
					margin-top: 30px;

					.PartnersImg {
						width: 20%;
						height: 220px;
						display: flex;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.Partnerstext {
						width: 75%;
						p {
							text-indent: 2em;
							margin: 0px;
						}
					}
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
	}
</style>
