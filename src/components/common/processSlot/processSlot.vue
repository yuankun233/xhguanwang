<template>
	<div class="box4-abso2-box">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'processSlot',
		data() {
			return {
				
			};
		}
	};
</script>

<style lang="less">
	.box4-abso2-box{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #0D6ADE;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 20px;
		font-weight: 700;
		margin-top: 100px;
	}
</style>
