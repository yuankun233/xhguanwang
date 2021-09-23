<template>
	<div>
		<banner>
			<img src="http://www.xiaohulaile.com/xh/p/gw/img/banner5.png" />
		</banner>
		<div class="goods">
			<p class="catetitle">{{details.cate}} > {{details.title}}</p>
			<div class="goodsdetails">
				<div class="goodsImg">
					<img :src="details.pic_url2" />
				</div>
				<div class="goodstext">
					<p class="goodstitle">{{details.title}}</p>
					<p class="goodstitle2">护士上门提供{{details.title}}服务</p>
					<div class="detailgood">
						<p class="goodsprice" style="margin-top: 0px;">
							<label>价格：</label>
							<span>{{addprice}}元</span>
						</p>
						<p class="goodsnum">
							<label>服务次数：</label>
							<el-input-number @change="servenum(1)" v-model="num1" :min="1" label="耗材包">
							</el-input-number>
						</p>
						<p class="goodserve">
							<label>服务：</label>
							<el-radio-group @change="getMaterialpackage(Materialpackage)" v-model="Materialpackage">
								<el-radio-button label="需要耗材包"></el-radio-button>
								<el-radio-button label="不需要耗材包"></el-radio-button>
							</el-radio-group>
							<span v-if="dispaly"
								style="margin-left: 20px;color: #D72321;font-size: 20px;">(耗材包：<span>{{p_price}}元</span>)</span>
						</p>
						<p v-if="dispaly" style="display: flex;">
							<span>
								<label>耗材包：</label>
								<el-input-number @change="servenum(2)" v-model="num2" :min="1" :max="num1" label="耗材包">
								</el-input-number>
							</span>

							<span
								style="max-width: 300px;display: block;margin-left: 20px;font-size: 14px;">{{details.p_package}}</span>
						</p>
						<p>
							<label>服务时间：</label>
							<el-date-picker v-model="datetime" style="width: 150px;" type="date" placeholder="选择日期"
								:editable="false" :clearable="true" time-arrow-control :picker-options="{
							                                   disabledDate: time => {
							                                      return time.getTime() < Date.now() - 3600 * 1000 * -6
							                                    }, 
							                                  }" value-format="yyyy-MM-dd" />
							</el-form-item>
							<el-time-select v-if="datetime!=''" style="width: 150px;margin: 0px 20px;"
								placeholder="起始时间" v-model="startTime"
								:picker-options="{start: '08:00',step: '02:00',end: '20:00'}">
							</el-time-select>
							<el-time-select v-if="startTime!=''" style="width: 150px;" placeholder="结束时间"
								v-model="endTime"
								:picker-options="{start: '08:00',step: '02:00',end: '20:00',minTime: startTime}"
								@change="gettime">
							</el-time-select>
						</p>
						<p style="margin-bottom: 0px;">
							<label>病情描述：</label>
							<el-input type="textarea" style="width: 500px;font-size: 16px;" maxlength="300"
								placeholder="请输入内容(不超过300字)" v-model="textarea" show-word-limit>
							</el-input>
						</p>
					</div>
					<el-button style="margin: 20px 0px;" @click="dialogVisible = true" type="primary">立即购买
					</el-button>
				</div>
			</div>
		</div>
		<!-- 服务内容与流程 -->
		<div class="detail">
			<div class="detailImg">
				<p>
					服务内容与流程
				</p>
				<img src="../../../assets/Serviceprocess.png" />
			</div>
			<div class="neirong">
				<span>
					服务内容
				</span>
				<p>{{details.concept}}</p>
			</div>
			<div class="neirong">
				<span>
					操作流程
				</span>
				<p v-for="(item,index) in details.msg" :key="index">{{item.msg}}</p>
			</div>
			<div class="neirong">
				<span>
					预约须知
				</span>
				<p>{{details.notice1}}</p>
				<p>{{details.notice2}}</p>
			</div>
			<div class="neirong" style="margin-bottom: 100px;">
				<span>
					计费须知
				</span>
				<img style="width: 100%;margin-top: 20px;" src="../../../assets/jifei.png" />
			</div>
		</div>

		<!-- 模态框 -->
		<el-dialog class="eldialog" title="服务预约须知" :visible.sync="dialogVisible" width="60%">
			<p>尊敬的先生/女士：</p>
			<p>为了更好的给您和您的家人提供优质的居家专业服务，请务必仔细阅读本须知：</p>
			<p>一、请如实告知疾病诊断，不要隐瞒传染类、精神类疾病等病史，或可能影响服务人员和自身安全的因素。</p>
			<p>二、请在服务人员的服务时间内，尽可能保证有二人或二人以上人员在家。</p>
			<p>三、安全告知：小护来了居家服务项目都是常规专业内容，是帮助患者维护健康所采取的医学护理服务。由于个体的差异性、疾病的复杂性及不可抗拒的因素等，服务人员不能预测服务中或服务后患者的并发症等不良事件发生，特告知如下:
			</p>
			<p> 1、心脑疾病的突发；</p>
			<p> 2、伤口出血、疼痛、感染、异常生长等；</p>
			<p> 3、肠造口出血感染，造口狭窄，造口突出等并发症；</p>
			<p> 4、导管滑脱、移位、堵塞、感染等；</p>
			<p> 5、康复功能恢复不良等；</p>
			<p> 6、其他意外情况发生：如跌倒等。</p>
			<p> 四、您在下单后如需要更改服务时间，请提前6小时联系客服。</p>
			<p> 五、若服务人员已经接单，则所支付的金额不能全额退回。特告知：</p>
			<p> 1.服务人员已接单，扣除支付金额的30%</p>
			<p> 2.服务人员已出发，扣除支付金额的50%</p>
			<p> 3.服务人员已到达，扣除支付金额的80%</p>
			<p> 4.若用户下了多个订单，已服务过的项目正常结算。</p>
			<p> 请仔细阅读确认后下单。谢谢配合！</p>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click='gobuy'>确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import banner from '../../common/banner/banner.vue'
	export default {
		components: {
			banner,
		},
		data() {
			return {
				//商品id
				itemid: localStorage.getItem("itemId"),
				//商品详情数组
				details: [],
				//总价
				addprice: 0,
				//服务价格
				price: 0,
				//固定服务价格
				newprice: 0,
				//耗材包价格
				p_price: 0,
				//固定耗材包价格
				newp_price: 0,
				//服务次数
				num1: 1,
				//耗材包数量
				num2: 1,
				//需不需要耗材包
				Materialpackage: '需要耗材包',
				//不需要耗材包时隐藏
				dispaly: true,
				//选择日期
				datetime: '',
				//开始时间
				startTime: '',
				//结束时间
				endTime: '',
				//病情描述
				textarea: '',
				//服务预约模态框
				dialogVisible: false,
			};
		},
		created() {
			this.get_list()
		},
		methods: {
			//获取商品列表
			async get_list() {
			 const res = await this.$http({
						method: 'post',
						url: '/project/index',
						data: {
							id: this.itemid
						}
					})					
						if (res.data.code == 0) {
							console.log(res)
							//获取对象存到数组
							this.details = res.data.data
							//服务价格值
							this.price = res.data.data.price
							//固定服务价格，以后好计算，只赋值，不做操作
							this.newprice = res.data.data.price
							//耗材包价格
							this.p_price = res.data.data.p_price
							//固定耗材包，以后好计算，只赋值，不做操作
							this.newp_price = res.data.data.p_price
							//进入后，先进行一次价格的计算
							this.addprice = this.price + this.newp_price
						}
					

			},

			//服务次数
			servenum(num) {
				// console.log(num)
				//先判断是服务次数增加还是耗材包增加
				// 1==服务次数 		2==耗材包次数
				//如果num == 1 则是在操作服务次数
				if (num == 1) {
					//服务次数判断完成后，在判断需不需要耗材包
					//如果this.dispaly == true(需要耗材包)
					if (this.dispaly == true) {
						//需要耗材包，则计算的是服务次数加耗材包的价钱
						this.num2 = this.num1
						this.addprice = this.newprice * this.num1 + this.newp_price * this.num2
					} else {
						//否则(不需要耗材包)
						//不需要耗材包只计算服务次数的价格
						this.addprice = this.newprice * this.num1
					}
				} else {
					//num == 2,如果是2，则说明在操作耗材包，需要耗材包，执行服务次数加耗材包的价钱
					this.addprice = this.newprice * this.num1 + this.newp_price * this.num2
				}
			},

			//单独判断需不需要耗材包
			getMaterialpackage(value) {
				//先判断参数value是否为"需要耗材包"或者"不需要耗材包"
				//判断完成后，先进行赋值
				this.Materialpackage = value
				//如果为不需要耗材包
				if (this.Materialpackage != '需要耗材包') {
					//让耗材包选项隐藏
					this.dispaly = false
					//只计算服务次数的价格
					//为了避免未知错误，重置一下耗材包的数量和价格
					this.num2 = 0
					//重新计算
					this.addprice = this.newprice * this.num1
				}
				//如果为需要耗材包
				else if (this.Materialpackage == '需要耗材包') {
					//显示耗材包选项
					this.dispaly = true
					//将num2值重新赋回1
					this.num2 = 1
					//计算服务次数加耗材包次数的价格
					this.addprice = this.newprice * this.num1 + this.newp_price * this.num2
				}
			},

			//时间
			gettime() {
				console.log(this.datetime)
				console.log(this.startTime, this.endTime)
			},

			// 购买
			gobuy() {
				let phone = window.localStorage.getItem('phone')
				if (phone == null) {
					this.$confirm('你还没有登录, 是否登录?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					}).then(() => {
						this.$router.push({
							path: '/login',
						})
					}).catch(() => {

					});
				} else if (this.datetime == '' || this.startTime == "" || this.endTime == "") {
					this.$confirm('请填写服务时间', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					})
					return
				} else {
					this.$router.push({
						name: 'order',
						params: {
							//服务项目
							goodsdetails:this.details,
							//总价
							addprice: this.addprice,
							//服务次数
							num1: this.num1,
							//耗材包
							num2: this.num2,
							//选择日期
							datetime: this.datetime,
							//开始时间
							startTime: this.startTime,
							//结束时间
							endTime: this.endTime,
							//描述信息
							textarea:this.textarea
						}
					})
				}
				console.log(this.addprice)
			},
		},
	}
</script>

<style lang="less">
	.goods {
		max-width: 1200px;
		margin: 0 auto;

		.catetitle {
			margin: 55px 0px;
			text-align: left;
		}

		.goodsdetails {
			display: flex;

			.goodsImg {
				width: 470px;
				height: 100%;
				margin-right: 50px;

				// border: 1px solid #ccc;
				img {
					width: 100%;
					height: 100%;
					border: 1px solid #ccc;
				}
			}

			.goodstext {
				width: calc(1200px - 520px);

				p {
					margin: 0px;
					padding: 0px;
					text-align: left;
				}

				.goodstitle {
					font-size: 24px;
					color: black;
					text-align: left;
					font-weight: bold;
				}

				.goodstitle2 {
					font-size: 16px;
					color: #666;
					margin: 18px 0px;
				}

				.detailgood {
					background-color: #F0F6FE;
					padding: 15px 10px 5px 10px;

					p {
						margin: 20px 0px;
					}

					label {
						width: 80px;
						display: inline-table;
					}

					.goodsprice {
						span {
							font-size: 32px;
							color: #D72321;
							font-weight: bold;
						}
					}
				}
			}
		}
	}

	.detail {
		max-width: 1200px;
		margin: 0 auto;

		.detailImg {
			p {
				font-size: 26px;
				color: black;
				font-weight: bold;
				margin: 0px;
			}

			img {
				width: 400px
			}
		}

		.neirong {
			text-align: left;
			margin-top: 50px;
			font-size: 22px;

			span {
				font-weight: bold;
				border-bottom: 3px solid #0067E8;
				margin-bottom: 30px;
			}
		}
	}

	.eldialog {
		p {
			text-align: left;
			font-size: 20px;
			margin: 10px 0px;
		}
	}
</style>
