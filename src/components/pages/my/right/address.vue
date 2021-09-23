<template>
		<div class="location">
			<div class="locationdiv">
				<p class="locationp">
					<span style="width: 50%;text-align: left;display: inline-block;">
						地址管理
					</span>
					<span class="router" @click="dialogVisible = true">
						<span>+</span>添加新地址
					</span>
				</p>
			</div>
			<div class="addlocationdiv" >
				<div class="addlocation" v-for="(item,index) in addresslist">
					<p style="font-size: 20px;font-weight: bold;margin-top: 5px;">{{item.addressname}}</p>
					<p
						style="font-size: 16px;color: #848484;border-bottom: 1px solid #ccc;margin: 0px;padding-bottom: 10px;">
						{{item.addhome}}</p>
					<el-switch
					  v-model="item.value"
					  @change="elwitch(1)"
					   style="margin: 0px;padding-top: 10px;font-size: 16px;color: #737373;"
					  active-text="是否默认地址"
					  active-color="#13ce66"
					  inactive-color="#ff4949">
					</el-switch>
				</div>
			</div>
			
			<el-dialog
			  title="新增服务地址"
			  :visible.sync="dialogVisible"
			  width="30%">
			  
			  <el-form label-width="90px">
			  	<el-form-item label="姓名:">
			  		<el-input v-model="username"></el-input>
			  	</el-form-item>
			  	<el-form-item label="电话:">
			  		<el-input v-model="phone" maxlength="11"></el-input>
			  	</el-form-item>
			  	<el-form-item label="详细地址">
			  		<el-input v-model="site"></el-input>
			  	</el-form-item>
			  </el-form>
			  <el-switch
			    v-model="addvalue"
			    @change="addvalue"
			    active-text="是否默认地址"
			    active-color="#13ce66"
			    inactive-color="#ff4949">
			  </el-switch>
			  
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="quxiao">取 消</el-button>
			    <el-button type="primary" @click="add">确 定</el-button>
			  </span>
			</el-dialog>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				addressname: '何先生',
				addressphone: localStorage.getItem('username'),
				
				tdefault: false,
				//新增服务地址
				dialogVisible: false,
				//新增地址
				username:'',
				phone:'',
				site:'',
				//新增服务地址时是否为默认地址
				addvalue:false,
				
				addresslist:[{
					"addressname": '贺先生',
					"addhome": '上海市闵行区联明路xxxx小区xx栋xx号',
					"value":false,
				},{
					"addressname": '何先生',
					"addhome": '上海市闵行区联明路xxxx小区xx栋xx号',
					"value":true,
				},{
					"addressname": '贺先生',
					"addhome": '上海市闵行区联明路xxxx小区xx栋xx号',
					"value":false,
				},{
					"addressname": '何先生',
					"addhome": '上海市闵行区联明路xxxx小区xx栋xx号',
					"value":true,
				},{
					"addressname": '何先生',
					"addhome": '上海市闵行区联明路xxxx小区xx栋xx号',
					"value":true,
				},]
			}
		},
		methods:{
			elwitch(num){
				
			},
			add(){
				// console.log(this.username,this.phone,this.site,this.addvalue)
				if(this.username==""){
					this.$confirm('请填写姓名', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					})
					return
				}else if(this.phone==""){
					this.$confirm('请填写电话', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					})
					return
				}else if(this.site == ""){
					this.$confirm('请填写地址', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					})
					return
				}else{
					// console.log("=============sadsad=============")
				}
			},
			quxiao(){
				this.dialogVisible = false
				this.username = ""
				this.phone = ""
				this.site = ""
			}
		}
	}
</script>

<style lang="less">
		.location {
			width: 100%;
			box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);
			margin-top: 40px;

			.locationdiv {
				padding: 5px 20px;
				font-size: 18px;
				background-color: #f7f7f7;

				p {
					.router {
						width: 50%;
						text-align: right;
						display: inline-block;
						color: #73B1FF;
						text-decoration: none;
					}
				}
			}

			.addlocationdiv {
				padding:0px 20px;
				display: flex;
				flex-wrap: wrap;
				.addlocation {
					width: 30%;
					padding: 10px;
					text-align: left;
					border-radius: 4px;
					box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.5);
					margin: 20px 5px;
				}
			}
		}
</style>
