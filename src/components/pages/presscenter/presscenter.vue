
<!-- 新闻中心路由 -->

<template>
	<div class="presscenter">
		<banner>
			<img src="http://www.xiaohulaile.com/xh/p/gw/img/banner4.png" />
		</banner>
		<div class="mian">
			<div class="box_1">
				<router-link :to="{name:'tradeNews'}" class="routercolor" exact-active-class="routhei">
					行业新闻
				</router-link>
				<router-link :to="{name:'LittleGuardStory'}" class="routercolor" exact-active-class="routhei">
					小护故事
				</router-link>
				<router-link :to="{name:'Notice'}" class="routercolor" exact-active-class="routhei">
					通知公告
				</router-link>
				<router-link :to="{name:'LitteProtectKnowledge'}" class="routercolor" exact-active-class="routhei">
					小护知识中心
				</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import banner from '../../common/banner/banner.vue';
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
	.presscenter {
		width: 100%;
		.mian {
			margin: 0 auto;
			max-width: 1200px;
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
