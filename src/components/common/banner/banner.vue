<template>
	<div class="banner">
		<div class="banner">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'banner',
		data() {
			return {
				
			};
		},
		
	};
</script>

<style lang="less">
	.banner{
		width: 100%;
		img{
			width: 100%;
		}
	}
</style>
