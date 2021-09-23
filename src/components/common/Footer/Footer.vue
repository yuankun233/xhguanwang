<template>
	<div class="boxfoot">
		<div class="footer">
			<div class="Leftfooter">
				<ul class="listul">
					<li>
						<router-link :to="{name:'index'}">
							居家服务
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'knowaboutus'}">
							了解我们
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'presscenter'}">
							小护新闻
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'aboutus'}">
							关于我们
						</router-link>
					</li>
				</ul>
				<ul class="listul">
					<li>
						<router-link :to="{name:'ProfessionalCare'}" class="routercolor">
							专业护理
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'knowaboutus'}">
							品牌项目
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'tradeNews'}" class="routercolor">
							行业新闻
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'companyProfile'}" class="routercolor">
							公司简介
						</router-link>
					</li>
				</ul>
				<ul class="listul">
					<li>
						<router-link :to="{name:'functionalRehabilitation'}" class="routercolor">
							功能康复
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'knowaboutus'}">
							我的优势
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'LittleGuardStory'}" class="routercolor">
							小护故事
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'Partners'}" class="routercolor">
							合作机构
						</router-link>
					</li>
				</ul>
				<ul class="listul">
					<li>
						<router-link :to="{name:'lifeCare'}" class="routercolor">
							生活照料
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'index'}">
							服务流程
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'Notice'}" class="routercolor">
							通知公告
						</router-link>
					</li>
				</ul>
				<ul class="listul">
					<li>
						<router-link :to="{name:'sciencePharmacy'}" class="routercolor">
							科学用药
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'sciencePharmacy'}" class="routercolor">
							
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'LitteProtectKnowledge'}" class="routercolor">
							小护知识
						</router-link>
					</li>
				</ul>
			</div>
			<div class="rightfooter">
				<p>关注我们，了解更多</p>
				<img src="../../../assets/qrCode.png" />
			</div>
		</div>
		<h3 class="beian" @click="navtobeiAn">备案号：沪ICP备19003420号</h3>
	</div>

</template>

<script>
	export default {
		name: 'Footer',
		data() {
			return {
				indexro: 'https://beian.miit.gov.cn/'
			};
		},
		methods: {
			navtobeiAn() {
				this.$confirm('请复制此内容'+" "+'“沪ICP备19003420号”'+" "+'，点击确认后将跳转到备案页面查询', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					window.open(this.indexro, '_blank') // 在新窗口打开外链接
				}).catch(() => {

				});
			},
		}
	};
</script>

<style lang="less">
	.boxfoot {
		width: 100%;
		background-color: #f0f0f0;
		
		.footer {
			max-width: 1200px;
			margin: 0 auto;
			padding-bottom: 20px;
			display: flex;
			.Leftfooter {
				width: 50%;
				ul {
					width: 100%;
					display: flex;
					height: 20px;
					padding-left: 0px;
					li {
						width: 25%;
						text-align: left;
						list-style: none;
						height: 30px;
						line-height: 30px;
						color: #666;
						
						a {
							text-decoration: none;
							color: #666;
							font-size: 18px;
							line-height: 30px;
						}
					}
				}
				ul:nth-child(1) {
					padding-top: 30px;
					a{
						color: black;
						font-size: 20px;
					}
				}
			}
			.rightfooter {
				width: 50%;
				text-align: right;
				img {
					width: 170px;
					height: 170px;
				}
				p {
					font-size: 19px;
					font-family: Source Han Sans CN;
					color: #333333;
					line-height: 30px;
				}
			}
		}
	}
	.beian {
		width: 100%;
		height: 100px;
		line-height: 100px;
		background-color: #d1d1d1;
		font-size: 18px;
		font-family: Source Han Sans CN;
		color: #666;
		margin-top: 0px;
		margin-bottom: 0px;
	}
</style>
