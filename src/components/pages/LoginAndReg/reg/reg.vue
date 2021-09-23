<template>
	<logintemplat>
		<div class="loginD">
			<p class="regtext">{{winregtext}}</p>
			<!-- 注册密码 -->
			<div class="loginDiv" v-if="reg">
				<el-form label-width="90px">
					<el-form-item label="输入手机号:">
						<el-input v-model="username"></el-input>
					</el-form-item>

					<el-form-item label="输入密码:">
						<el-input v-model="password" show-password>

						</el-input>
					</el-form-item>

					<el-form-item label="确认密码:">
						<el-input v-model="password2" show-password>
							
						</el-input>
					</el-form-item>
					
					<div class="Message">
						<el-form-item label="短信验证码:">
							<el-input minlength="6" maxlength="6" v-model="Messages" oninput="value=value.replace(/[^\d]/g,'')">
								
							</el-input>
						</el-form-item>
						
						<el-button type="warning" :disabled='disabled' @click="getcode">{{ver_text}}</el-button>
					</div>
				</el-form>
				
				<!-- 去登陆 -->
				<div class="loginBtn">
					<el-button type="primary" @click="loginBtn">注册</el-button>
				</div>
				
				<!-- 去注册 -->
				<div class="goreg">
					<p>
						已有账号?
						<router-link :to="{name:'login'}">
							立即登录
						</router-link>
					</p>
				</div>
			</div>
			<div v-else>
				<img src="../../../../assets/success.png" />
				<p>注册成功，三秒后返回</p>
			</div>
		</div>
	</logintemplat>
</template>

<script>
	import logintemplat from '../../../common/logintemplate/logintemplat.vue'
	export default {
		components: {
			logintemplat,
		},
		data() {
			return {
					username: '',
					password: '',
					password2: '',
					Messages: '',
					ver_text:'获取验证码',
					disabled:false,
					winregtext:"注册账号",	//注册成功之后隐藏
					reg:true ,//注册成功之后隐藏，弹出提示
			}
		},
		methods: {
			erCode() {
				this.$router.push({
					path: "/login"
				});
			},
			
			//获取验证码逻辑
			getcode() {
				this.disabled = true
				let time = 60;
				let timer = null;
				this.ver_text = time + "秒后重新获取"
				timer = setInterval(e => {
					time--;
					this.ver_text = time + "秒后重新获取"
					//如果time=0,则解封time
					if (time == 0) {
						clearInterval(timer);
						this.disabled = false;
						this.ver_text = "获取验证码";
						timer = null;
					}
				}, 1000)
			},
			
			//注册
			loginBtn(){
				if(!/^1[3-9]\d{9}$/.test(this.username)||this.username == ''){
					this.$alert('手机号不正确', '警告', {
						confirmButtonText: '确定',
					});
					return
				}else if(this.password == ''){
					this.$alert('密码不能为空', '警告', {
						confirmButtonText: '确定',
					});
					return
				}else if(this.password2 == ''){
					this.$alert('确认密码不能为空', '警告', {
						confirmButtonText: '确定',
					});
					return
				}else if(this.password!==this.password2){
					this.$alert('俩次密码不正确', '警告', {
						confirmButtonText: '确定',
					});
					return
				}else if(this.Messages == ''){
					this.$alert('验证码不能为空', '警告', {
						confirmButtonText: '确定',
					});
					return
				}
				
				// console.log(this.username,this.password,this.password2,this.Messages)
				this.reg = false
				
				if(this.reg==false){
					localStorage.setItem('username', this.username)
					let time = 60;
					let timer = null;
					timer = setInterval(e => {
						time--;
						//如果time=0,则解封time
						if (time == 0) {
							clearInterval(timer);
							timer = null;
							this.$router.push({
								path:'/knowaboutus'
							})
						}
					}, 1000)
				}
			}
		}
	}
</script>

<style lang="less">
	.loginD {
		width: 544px;
		height: 524px;
		margin: 0 auto;
		padding-top: 20px;

		.regtext {
			margin-top: 60px;
			font-size: 22px;
		}

		.loginDiv {
			padding: 0px 84px;

			.el-form {
				text-align: right;

				.el-form-item {
					margin-bottom: 0px;

					.el-form-item__label {
						margin-top: 30px;
					}
				}

				input {
					width: 100%;
					height: 40px;
					border: none; // 去除未选中状态边框
					outline: none; // 去除选中状态边框
					font-size: 16px;
					background-color: #f4f4f4;
					color: black;
				}

				.el-input {
					margin-top: 30px;
					
					input {
						padding-left: 20px;
					}
				}

				.Message {
					display: flex;
					justify-content: space-between;

					.el-input {
						width: 150px;

						input {
							width: 100%;
						}
					}

					button {
						width: 118px;
						height: 40px;
						font-size: 14px;
						margin-top: 30px;
						padding: 0px;
					}
				}
			}
			
			.loginBtn{
				width: 302px;
				height: 48px;
				margin:20px auto 0px auto;
				
				button{
					width: 100%;
					height: 100%;
					font-size: 24px;
				}
			}
			
			.goreg {
				font-size: 16px;
				a {
					color: #0067E8;
				}
			}
		}
	}
</style>
