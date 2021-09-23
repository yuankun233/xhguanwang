<template>
	<logintemplat>
		<div class="loginD">
			<p style="font-size: 22px;margin-top: 40px;">绑定账号</p>
			<el-steps :active="active+1" align-center style="margin-top: 50px;">
				<el-step title="输入手机号"></el-step>
				<el-step title="绑定手机号"></el-step>
				<el-step title="绑定成功"></el-step>
			</el-steps>

			<div class="phone" v-if="active == 0">
				<el-input placeholder="请输入当前手机号" v-model="phone"></el-input>
			</div>

			<div class="forgetD" v-else-if="active == 1">
				<!-- <p>手机号：{{phone}}</p> -->
				<el-form label-width="90px">
					<!-- <el-form-item label="新密码:">
						<el-input v-model="password" show-password>
				
						</el-input>
					</el-form-item>
				
					<el-form-item label="确认密码:">
						<el-input v-model="password2" show-password>
							
						</el-input>
					</el-form-item> -->
					
					<div class="Message" style="margin-top: 50px;">
						<el-form-item label="验证码:">
							<el-input minlength="6" maxlength="6" v-model="Messages" oninput="value=value.replace(/[^\d]/g,'')">
								
							</el-input>
						</el-form-item>
						
						<el-button type="warning" :disabled='disabled' @click="getcode">{{ver_text}}</el-button>
					</div>
				</el-form>
			</div>

			<div class="success" v-else="active == 2">
				<img src="../../../../assets/success.png" />
				<p>密码重置成功，{{san}}秒后自动跳转至登陆页面或<router-link :to="{name:'knowaboutus'}">立即跳转</router-link></p>
				
			</div>
			
			<button class="nextBtn" v-if="active !== 2" @click="next()">{{nextText}}</button>
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
				active: 0,
				phone: '',
				password:'',
				password2:'',
				Messages:'',
				ver_text:'短信验证码',
				disabled:false,
				nextText: '下一步',
				san:3
			};
		},
		methods: {
			next() {
				if(!/^1[3-9]\d{9}$/.test(this.phone)||this.phone == ''){
					this.$alert('手机号不正确', '警告', {
						confirmButtonText: '确定',
					});
					return
				}
				
				if (this.active !== 1) {
					this.nextText = '确认绑定'
				}
				
				if(this.nextText = '确认绑定'){
					this.getcode()
				}
				if (this.active++ == 1){
					localStorage.setItem('phone', this.phone)
				}
				if(this.active == 2){
					let timers = null;
					timers = setInterval(e => {
						this.san--;
						//如果time=0,则解封time
						if (this.san == 0) {
							clearInterval(timers);
							timer = null;
							this.$router.push({
								path: "/knowaboutus"
							});
						}
					}, 1000)
				}
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
		}
	}
</script>

<style lang="less">
	.loginD {
		width: 544px;
		height: 524px;
		margin: 0 auto;

		.phone {
			width: 376px;
			height: 50px;
			margin: 0 auto;
			margin-top: 70px;
			
			input {
				width: 100%;
				height: 50px;
				border: none; // 去除未选中状态边框
				outline: none; // 去除选中状态边框
				font-size: 16px;
				background-color: #f4f4f4;
				color: black;
				text-align: center;
			}
		}
		
		.forgetD {
			padding: 0px 84px;
		
			.el-form {
				text-align: right;
		
				.el-form-item {
					margin-bottom: 22px;
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
						padding: 0px;
					}
				}
			}
	
			.goreg {
				font-size: 16px;
				a {
					color: #0067E8;
				}
			}
		}
		
		.success{
			
			
			img{
				width: 197px;
				height: 197px;
				margin: 20px auto;
			}
		}
		
		.nextBtn{
			width: 370px;
			height: 48px;
			margin-top: 26px;
			background-color: #0067E8;
			color: #fff;
			border: none; // 去除未选中状态边框
			outline: none; // 去除选中状态边框
			border-radius: 4px;
		}
	}
</style>
