<template>
	<logintemplat>
		<div class="loginD">
			<!-- 二维码登录 -->
			<div class="erCodeImg">
				<p @click="erCode" class="erCodetext">返回密码登录
					<img style="width: 40px;height: 40px;" src="../../../../assets/mima.png" />
				</p>
			</div>
			<p style="font-size: 24px;">扫码登录</p>
			<!-- 二维码区域 -->
			<div class="erCode">
				<img src="../../../../assets/qrCode.png" />
			</div>
			<p style="font-size: 20px;">打开手机微信，扫描二维码</p>
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

			}
		},
		methods: {
			erCode() {
				this.$router.push({
					path: "/login"
				});
			},
		}
	};
</script>

<style lang="less">
	.loginD {
		width: 544px;
		height: 524px;
		margin: 0 auto;
		padding-top: 20px;

		.erCode {
			width: 233px;
			height: 233px;
			margin: 0 auto;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>