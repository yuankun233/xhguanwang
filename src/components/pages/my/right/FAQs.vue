<template>
	<div class="FAQsDiv">
		<p>常见问答</p>
		<el-collapse v-model="activeNames" @change="handleChange" font-size="16px" accordion>
			<el-collapse-item title="小护你好：请问你们是什么性质的公司?主要服务内涵有哪些？" name="1">
				<div>你好！我们是《小护来了》网约护士平台，也是大数据居家护理服务平台。</div>
				<div>
					自成立以来我们一直在探索建立“互联网+整体护理”模式，为客户提供安全、专业、可靠、便捷的居家护理服务。我们已能实现为客户定制个性化护理项目包，具体包括专业护理、生活护理和康复指导等服务内容。
				</div>
			</el-collapse-item>
			<el-collapse-item title="小护你好：贵公司上门服务人员都是专业的吗？" name="2">
				<div>你好，旗下注册的护理人员和康复师均经过专业化培训，并有合法合规的上岗资格证明。</div>
			</el-collapse-item>
			<el-collapse-item title="小护你好：我表兄刚做完腹膜透析，那个肚子里的管子一直要放在里面的？全家人都很担心" name="3">
				<div>你好，一般来说腹膜透析是终生的治疗方案之一。但各项条件允许的话可以进行肾移植。那么可以停止腹膜透析治疗了。</div>
			</el-collapse-item>
			<el-collapse-item title="小护你好：兄长7个月前在医院做了POUT，那个埋在肉里的东西要紧吗？摸上去和肉长在一起了" name="4">
				<div>你好，这个是为了确保长期输液治疗而置管的。只要定期做好维护不会有风险的。治疗结束医生会取出的。</div>
			</el-collapse-item>
			<el-collapse-item title="小护你好：你们护士上门会带些什么工具？" name="5">
				<div>你好，我们护士上门会带一些健康测量的工具的，如血压器等。也会根据服务的内容准备好相应的物品。</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				addressname: '何先生',
				addressphone: localStorage.getItem('username'),
				activeNames: ['0']
			}
		},
		methods: {
			handleChange(val) {
				// console.log(val);
			}
		}
	}
</script>

<style lang="less">
	.FAQsDiv {
		width: 100%;
		box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);
		text-align: left;
		margin-top: 40px;
		p {
			margin: 0px;
			// text-indent: 2em;
			padding: 20px 20px;
			font-size: 18px;
			background-color: #f7f7f7;
		}

		.el-collapse-item {
			text-indent: 2em;
			
			.el-collapse-item__header {
				font-size: 16px;
			}

			.el-collapse-item__content {
				font-size: 16px;
			}
		}
	}
</style>
