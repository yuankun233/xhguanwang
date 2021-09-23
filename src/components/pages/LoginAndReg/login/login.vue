<!-- 登录 -->

<template>
  <logintemplat>
    <div class="loginD">
      <!-- 二维码登录 -->
      <div class="erCodeImg">
        <p class="erCodetext">
          扫码登录更安全
          <img
            style="width: 40px;height: 40px;"
            src="../../../../assets/erCode.png"
          />
        </p>
      </div>
      <!-- 密码 短信登录 -->
      <div class="PaswordMessageDiv">
        <div class="PDDiv">
          <ul>
            <!-- <li>
							<a href="#" :class="heightLingnum==1?'heightLing':''" @click="qiehuan(1)">
								密码登录
							</a>
						</li> -->
            <li>
              <a
                href="#"
                :class="heightLingnum == 2 ? 'heightLing' : ''"
                @click="qiehuan(2)"
              >
                短信登录
              </a>
            </li>
          </ul>
        </div>
        <!-- 密码登录区域 -->
        <!-- <div class="PasswordDiv" v-show="heightLingnum==1">
					<el-input placeholder="" v-model="username" clearable>
						<i slot="prefix" style="font-size: 24px;line-height: 50px;padding-left: 5px;"
							class="el-icon-user-solid el-icon-search"></i>
					</el-input>
					<el-input placeholder="" v-model="password" clearable show-password>
						<i slot="prefix" style="font-size: 24px;line-height: 50px;padding-left: 5px;"
							class="el-icon-unlock el-icon-unlock"></i>
					</el-input>
				</div> -->

        <!-- 短信登录 -->
        <div class="PasswordDiv" v-show="heightLingnum == 2">
          <el-input placeholder="请输入手机号" v-model="phone" clearable>
            <i
              slot="prefix"
              style="font-size: 24px;line-height: 50px;padding-left: 5px;"
              class="el-icon-user-solid el-icon-search"
            ></i>
          </el-input>
          <div class="Message">
            <el-input
              placeholder="请输入验证码"
              v-model="Messages"
              minlength="4"
              maxlength="4"
              oninput="value=value.replace(/[^\d]/g,'')"
            >
              <i
                slot="prefix"
                style="font-size: 24px;line-height: 50px;padding-left: 5px;"
                class="el-icon-message el-icon-message"
              ></i>
            </el-input>

            <el-button type="warning" :disabled="disabled" @click="getcode">{{
              ver_text
            }}</el-button>
          </div>
        </div>

        <!-- 忘记密码 -->
        <!-- <div class="forget">
					<router-link :to="{name:'forget'}">
						忘记密码？
					</router-link>
				</div> -->

        <!-- 登录按钮 -->
        <div class="loginBtn">
          <el-button
            type="primary"
            :loading="loading"
            @click="loginBtn(heightLingnum)"
            >登录</el-button
          >
        </div>

        <!-- 去注册 -->
        <!-- <div class="goreg">
					<p>
						还没有账号?
						<router-link :to="{name:'reg'}">
							立即注册
						</router-link>
					</p>
				</div> -->
        <div class="disanfang" style="margin-top: 30px;">
          推荐使用第三方登录
          <div
            style="display: flex;justify-content: space-between;padding: 0px 120px;margin-top: 20px;"
          >
            <div style="height: 40px;width: 40px;">
              <img style="width: 100%;" src="../../../../assets/weixin.png" />
            </div>
            <div @click="Alipaylogin" style="height: 40px;width: 40px;">
              <img style="width: 100%;" src="../../../../assets/zhifubao.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 人机验证 -->
    <Vcode :show="isShow" @success="success" @close="close" />
  </logintemplat>
</template>

<script>
import logintemplat from "../../../common/logintemplate/logintemplat.vue"
import bus from "../../../../bus/bus.js"
//引入人机验证
import Vcode from "vue-puzzle-vcode"
export default {
  components: {
    logintemplat,
    Vcode
  },
  data() {
    return {
      phone: "",
      // password: '',
      Messages: "", //验证码
      disabled: false,
      loading: false,
      heightLingnum: 2,
      //验证码状态
      ver_text: "获取验证码",

      // 人机验证
      isShow: false,
      //支付宝登录接口
      Alipay:
        "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2021002146658570&scope=auth_base&redirect_uri=https://www.xiaohulaile.com/xh/p/gw/login/alilogin&state=init"
    }
  },
  methods: {
    //切换密码登录还是短信登录
    // qiehuan(num) {
    // 	console.log(num)
    // 	this.heightLingnum = num
    // 	this.username = ''
    // 	this.password = ''
    // 	this.Messages = ''
    // },

    erCode() {
      this.$router.push({
        path: "/erCode"
      })
    },

    loginBtn(num) {
      //如果后期有账号密码登录，则把注释解开
      // if (num == 1) {
      // 	// console.log(this.username, this.password)
      // 	// localStorage.setItem('ID', this.username)
      // 	bus.$emit('username',this.username)
      // 	this.$router.push({
      // 		path: "/my"
      // 	});
      // } else
      // {
      // let code = localStorage.getItem('code')

      // if (this.Messages !== code) {
      // 	this.$alert('验证码不对，请重新输入', '警告', {
      // 		confirmButtonText: '确定',
      // 	});
      // 	return
      // } else {
      this.$http({
        method: "post",
        url: "login/phone_login",
        data: {
          phone: this.phone,
          code: this.Messages
        }
      })
        .then((res) => {
          if (res.data.code == 200) {
            // console.log(res.data)
            localStorage.setItem("id", res.data.data.id)
            localStorage.setItem("phone", res.data.data.phone)
            localStorage.setItem("user_token", res.data.data.user_token)
            //使用组件通讯，抛出一个phone值，然后在导航处监听
            bus.$emit("phone", this.phone)
            this.$router.push({
              path: "/my"
            })
          } else if (res.data.code == 500) {
            this.$alert(res.data.msg, "警告", {
              confirmButtonText: "确定"
            })
            return
          }
        })
        .catch((err) => {})
      // }
      // }
    },

    //支付宝登录
    Alipaylogin() {
      window.open(this.Alipay, "_blank")
    },

    // 用户点击遮罩层，关闭模态框
    close() {
      this.isShow = false
    },

    //获取验证码逻辑
    //判断是否为人机
    getcode() {
      if (!/^1[3-9]\d{9}$/.test(this.phone) || this.phone == "") {
        this.$alert("手机号不正确", "警告", {
          confirmButtonText: "确定"
        })
        return
      }
      // 是否开启模态框
      this.isShow = true
    },

    // 用户通过了验证
    success() {
      this.isShow = false // 通过验证后，隐藏模态框
      this.disabled = true
      let time = 60
      let timer = null
      this.ver_text = time + "秒后重新获取"
      timer = setInterval((e) => {
        time--
        this.ver_text = time + "秒后重新获取"
        //如果time=0,则解封time
        if (time == 0) {
          clearInterval(timer)
          this.disabled = false
          this.ver_text = "获取验证码"
          timer = null
        }
      }, 1000)

      this.$http({
        method: "post",
        url: "sms/send_sms",
        data: {
          sms_type: 1,
          phone: this.phone
        }
      })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.code == 0) {
              this.$alert("验证码已发送", "警告", {
                confirmButtonText: "确定"
              })
              localStorage.setItem("code", res.data.data.code)
            } else if (res.data.code == 1) {
              this.$alert(res.data.message, "警告", {
                confirmButtonText: "确定"
              })
            }
          }
        })
        .catch((err) => {})
    }
  }
}
</script>

<style lang="less">
.loginD {
  width: 544px;
  height: 524px;
  margin: 0 auto;
  padding-top: 20px;

  .erCodeImg {
    text-align: right;

    .erCodetext {
      font-size: 18px;
      color: #0067e8;
      margin-right: 3px;
    }
  }

  .PaswordMessageDiv {
    padding: 0px 84px;

    .PDDiv {
      ul {
        padding: 0px;
        display: flex;

        li {
          font-size: 22px;
          list-style: none;

          a {
            text-decoration: none;
            color: black;
            margin-right: 36px;
          }
        }

        .heightLing {
          border-bottom: 3px solid #0067e8;
        }
      }
    }

    .PasswordDiv {
      input {
        width: 376px;
        height: 50px;
        border: none; // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        font-size: 16px;
        background-color: #f4f4f4;
        color: black;
      }

      .el-input {
        margin-top: 40px;

        input {
          padding-left: 40px;
        }
      }
    }

    .Message {
      display: flex;
      justify-content: space-between;

      .el-input {
        width: 196px;

        input {
          width: 100%;
        }
      }

      button {
        width: 164px;
        height: 50px;
        font-size: 14px;
        margin-top: 40px;
      }
    }

    .forget {
      margin: 20px 0px;

      a {
        display: block;
        color: #a9a9a9;
        font-size: 16px;
        text-align: right;
        text-decoration: none;
      }
    }

    .loginBtn {
      margin-top: 50px;

      button {
        width: 100%;
        height: 55px;
        font-size: 24px;
      }
    }

    .goreg {
      margin-top: 38px;
      font-size: 16px;

      a {
        color: #0067e8;
      }
    }
  }
}
</style>
