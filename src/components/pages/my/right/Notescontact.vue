<template>
	<div class="Notescontact">
		<p>联系客服</p>
		<div class="lianxikefu">
			<img src="../../../../assets/294505bfcbfef17ee8aa8022c6635d9e.png" />
			<p class="fuwurexian">服务热线</p>
			<p class="dianhua">400-9155-291</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Notescontact',
		data() {
			return{
				
			}
		}
	}
</script>

<style lang="less">
	.Notescontact{
		width: 100%;
		box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);
		text-align: left;
		margin-top: 40px;
		p {
			margin: 0px;
			padding: 20px 20px;
			background-color: #f7f7f7;
			font-size: 18px;
		}
		
		.lianxikefu{
			width: 100%;
			position: relative;
			img{
				width: 100%;
			}
			.fuwurexian{
				position: absolute;
				left: 5%;
				top: 10%;
				font-size: 22px;
				margin: 0px;
				padding: 0px;
			}
			
			.dianhua{
				position: absolute;
				left: 5%;
				top: 40%;
				font-size: 30px;
				font-weight: bold;
				margin: 0px;
				padding: 0px;
			}
		}
	}
</style>
