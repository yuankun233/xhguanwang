<template>
	<div id="app">
		<NavigationBars></NavigationBars>
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
	import NavigationBars from './components/common/NavigationBars/NavigationBars';
	import Footer from './components/common/Footer/Footer'
	export default {
		name: 'App',
		components: {
			NavigationBars,
			Footer
		},
	};
</script>

<style lang="less">
	#app {
		font-family: "Source Han Sans CN";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 0;
		padding: 0;
	}

	#nav {
		// padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
