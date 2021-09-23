<template>
	<div class="NavigationBars">
		<div style="max-width: 1200px;display: flex;margin: 0 auto;height: 100%;">
			<!-- logo -->
			<div class="logo">
				<div class="logoImg" @click="goindex">
					<img src="http://www.xiaohulaile.com/static/img/logo.6b3b0779.png" />
				</div>
			</div>
			<!-- 列表 -->
			<div class="list">
				<ul>
					<li>
						<el-dropdown @command="handleCommand">
							<el-button type="primary">
								<router-link :to="{name:'index'}">
									居家服务
								</router-link>
								<i class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="index/ProfessionalCare">
									临床护理
								</el-dropdown-item>
								<el-dropdown-item command="index/functionalRehabilitation">
									专科护理
								</el-dropdown-item>
								<el-dropdown-item command="index/lifeCare">
									居家康复
								</el-dropdown-item>
								<!-- <el-dropdown-item command="index/sciencePharmacy">
									科学用药
								</el-dropdown-item> -->
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li>
						<el-dropdown @command="handleCommand">
							<el-button type="primary">
								<router-link :to="{name:'knowaboutus'}">
									了解我们
								</router-link>
							</el-button>

						</el-dropdown>
					</li>
					<li>
						<el-dropdown @command="handleCommand">
							<el-button type="primary">
								<router-link :to="{name:'presscenter'}">
									小护新闻
								</router-link>
								<i class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="presscenter/tradeNews">
									行业新闻
								</el-dropdown-item>
								<el-dropdown-item command="presscenter/LittleGuardStory">
									小护故事
								</el-dropdown-item>
								<el-dropdown-item command="presscenter/Notice">
									通知公告
								</el-dropdown-item>
								<el-dropdown-item command="presscenter/LitteProtectKnowledge">
									小护知识中心
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li>
						<el-dropdown @command="handleCommand">
							<el-button type="primary">
								<router-link :to="{name:'aboutus'}">
									关于我们
								</router-link>
								<i class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="aboutus/companyProfile">
									公司简介
								</el-dropdown-item>
								<el-dropdown-item command="aboutus/Partners">
									合作机构
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<!-- <li class="username">
						<el-dropdown @command="handleCommand">
							<el-button type="primary">
								<router-link :to="{name:'login'}">
									<div v-if="!phone">
										<img src="../../../assets/touxiang.png" />
									</div>
									<span v-else>{{phone}}</span>
								</router-link>
							</el-button>
							<el-dropdown-menu v-if="phone" slot="dropdown">
								<el-dropdown-item command="my">
									{{phone}}
								</el-dropdown-item>
								<el-dropdown-item command="tuichu">
									退出登录
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li> -->
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import bus from '../../../bus/bus.js'
	export default {
		name: 'NavigationBars',
		data() {
			return {
				highlight: 0,
				phone: localStorage.getItem('phone')
			};
		},

		created() {
			this.getuser()
		},

		methods: {
			//跳转到对应路由
			handleCommand(command) {
				let path = command
				if (path != "tuichu") {
					this.$router.push({
						path: "/" + path,
					});
				} else {
					this.$confirm('是否退出登录?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let storage=window.localStorage;
						// 清空缓存里的值 
						storage.clear()
						// 重定向首页
						this.$router.push({
							path: "/"
						});
						// 强制刷新，用来解决退出后还显示电话号码
						this.$router.go(0)
					}).catch(() => {
						
					});
				}
			},

			//使用bus组件通讯，拿到传递过来phone的值
			getuser() {
				bus.$on('phone', data => {
					console.log(data)
					this.phone = data
					localStorage.setItem('phone', this.phone)
				})
			},

			//点击logo跳转首页
			goindex() {
				this.$router.push({
					path: "/"
				});
			},
		},
	};
</script>

<style lang="less">
	.NavigationBars {
		max-width: 100%;
		height: 70px;
		background-color: #0067E8;

		.el-dropdown {
			line-height: 70px;

			button {
				background: none;
				border: none;
			}
		}


		.el-icon-arrow-down {
			font-size: 14px;
		}

		.logo {
			width: 50%;
			height: 100%;

			.logoImg {
				width: 250px;
				height: 100%;
				img {
					width: 60%;
					margin-top: -8px;
					margin-left: -130px;
				}
			}
		}

		.list {
			width: 50%;
			height: 100%;

			ul {
				width: 100%;
				height: 100%;
				list-style: none;
				display: flex;
				font-size: 1.125rem;
				line-height: 2.5rem;
				padding: 0px;
				margin: 0px;

				li {
					width: 20%;
					height: 100%;
					color: #fff;

					a {
						color: #fff;
						text-decoration: none;
						font-size: 16px;
					}
				}

				.username {

					// padding-left: 50px;
					a {
						display: block;

						// width: 100%;
						// height: 60px;
						// padding-top: 10px;
						div {
							width: 30px;
							height: 30px;
							border-radius: 50%;
							margin: 10px auto;

							img {
								width: 30px;
								height: 30px;
							}
						}

						// p{
						// 	margin: 0px;
						// 	padding: 0px;
						// 	font-size: 14px;
						// 	line-height: 25px;
						// }
					}
				}
			}
		}
	}
</style>
