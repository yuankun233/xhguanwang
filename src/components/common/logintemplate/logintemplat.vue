<!-- 登录 -->

<template>
	<div class="login">
		<div class="logindiv">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'logintemplat',
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	};
</script>

<style lang="less">
	.login {
		width: 100%;
		height: 100%;
		background: url(../../../assets/loginBackg.png) no-repeat center center fixed;
		/*兼容浏览器版本*/
		// -webkit-background-size: cover;
		// -o-background-size: cover;                
		// background-size: cover;
		padding: 250px 0px;

		.logindiv {
			width: 618px;
			height: 597px;
			margin: 0px auto;
			background: url(../../../assets/loginBackimg.png) no-repeat center center;
		}
	}
</style>
