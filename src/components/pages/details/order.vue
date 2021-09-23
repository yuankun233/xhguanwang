<template>
    <div class="order-container">
        <banner><img src="http://www.xiaohulaile.com/xh/p/gw/img/banner5.png" /></banner>
        <div class="title">
            <p>{{ details.title }}>提交订单</p>
            <div></div>
        </div>
        <!-- 订单信息 -->
        <div class="order-msg">
            <div class="order-date">
                <div class="top">
                    <div class="num">订单号：23333333</div>
                    <div class="pubdate">下单时间：2021-5-25 12:21:21</div>
                </div>
            </div>
            <div class="order-content">
                <p style="margin-left:2.5rem;margin-top:1rem">
                    用户：
                    <span class="light">张先生</span>
                </p>
                <p>
                    联系方式：
                    <span class="light">65436898941</span>
                </p>
                <p>
                    服务地址：
                    <span class="light">上海市闵行区联名路</span>
                    <router-link to="/my/address" style="text-decoration: none;" class="addaddress">+添加新地址</router-link>
                </p>
            </div>
        </div>
        <!-- 确认订单 -->
        <div class="order-confirm">
            <div class="top">确认订单信息</div>
            <div class="list">
                <!-- 商品 -->
                <div class="item">
                    <div class="left">
                        <span class="no">1.</span>
                        <div class="pic"><img :src="details.pic_url2" alt="" /></div>
                        <span class="name">{{ details.title }}</span>
                    </div>
                    <div class="right">
                        <span class="num">×{{ num1 }}</span>
                        <span class="price">{{ details.price }}</span>
                    </div>
                </div>
                <!-- 耗材包 -->
                <div class="item" v-if="num2 != 0">
                    <div class="left">
                        <span class="no">2.</span>
                        <div class="pic"><img :src="details.pic_url2" alt="" /></div>
                        <span class="name">耗材包</span>
                    </div>
                    <div class="right">
                        <span class="num">×{{ num1 }}</span>
                        <span class="price">{{ details.p_price }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 服务时间 -->
        <div class="servetime">
            <div class="top">服务时间</div>
            <p>
                初次上门时间：{{ datetime }} {{ startTime }}-{{ endTime }}
                <span class="edittime">更改时间</span>
            </p>
        </div>
        <!-- 支付 -->
        <div class="payment">
            <div class="right">
                <p>
                    合计
                    <span class="total">
                        {{ addprice }}
                        <span class="light">元</span>
                    </span>
                </p>
                <el-button type="primary" class="pay-btn" @click="dialogVisible = !dialogVisible">立即支付</el-button>
            </div>
        </div>
        <!-- 模态框 -->
        <el-dialog class="eldialog" :visible.sync="dialogVisible" :show-close="false">
            <div class="line"></div>
            <p class="tit">
                <img src="../../../assets/订单.png" />
                订单支付
            </p>
            <p class="payway">支付方式</p>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
                <el-tab-pane name="alipay">
                    <span slot="label" class="label">
                        <img src="../../../assets/zhifubao.png" />
                        支付宝
                    </span>
                    <div class="qrwechat item">
                        <img class="qr" src="../../../assets/qr.jpg" />
                        <p>扫一扫二维码支付</p>
                    </div>
                </el-tab-pane>

                <el-tab-pane name="wechat">
                    <span slot="label" class="label">
                        <img src="../../../assets/weixin.png" />
                        微信
                    </span>
                    <div class="qralipay item">
                        <img class="qr" src="../../../assets/qrCode.png" />
                        <p>扫一扫二维码支付</p>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <div slot="footer"><el-button class="cancel" @click="dialogVisible = !dialogVisible">取消</el-button></div>
        </el-dialog>
    </div>
</template>

<script>
import banner from '../../common/banner/banner.vue'
export default {
    components: {
        banner
    },
    data() {
        return {
            addprice: '',
            details: [],
            num1: 0,
            num2: 0,
            datetime: '',
            startTime: '',
            endTime: '',
            textarea: '',
            dialogVisible: false,
            activeName: 'wechat'
        }
    },
    created() {
        this.getDetails()
        console.log(details)
    },
    methods: {
        getDetails() {
            //总价
            this.addprice = this.$route.params.addprice
            //服务项目
            this.details = this.$route.params.goodsdetails
            //服务次数
            this.num1 = this.$route.params.num1
            //耗材包
            this.num2 = this.$route.params.num2
            //日期
            this.datetime = this.$route.params.datetime
            //开始时间
            this.startTime = this.$route.params.startTime
            //结束时间
            this.endTime = this.$route.params.endTime
            //描述信息
            this.textarea = this.$route.params.textarea
            //console.log(this.addprice,this.details,this.num1,this.num2,this.datetime,this.startTime,this.endTime,this.textarea)
        },
        handleClick(tab, event) {
            console.log(tab, event)
        }
    }
}
</script>

<style lang="less">
.order-container {
    box-sizing: border-box;

    .title {
        max-width: 1200px;
        margin: 0 auto;
        p {
            margin: 55px 0px;
            text-align: left;
        }
    }
    .order-msg {
        width: 1200px;
        height: 268px;
        margin: 40px auto 0;
        .order-date {
            .top {
                padding: 0 29px;
                height: 75px;
                display: flex;
                background: #f7f7f7;
                font-size: 22px;
                color: #000000;
                line-height: 75px;
                .num {
                    margin-right: 46px;
                }
            }
        }

        .order-content {
            padding: 0 29px;
            p {
                margin: unset;
                text-align: left;
                font-size: 20px;
                color: #878080;
                line-height: 40px;
                .light {
                    color: #000000;
                }
                .addaddress {
                    font-size: 18px;
                    color: #73b1ff;
                    line-height: 32px;
                    margin-left: 49px;
                    cursor: pointer;
                }
            }
        }
    }
    .order-confirm {
        width: 1200px;
        margin: 40px auto;
        .top {
            padding: 0 29px;
            height: 75px;
            display: flex;
            background: #f7f7f7;
            font-size: 22px;
            color: #000000;
            line-height: 75px;
        }

        .list {
            .item {
                font-size: 20px;
                color: #000000;
                line-height: 30px;
                padding: 0 29px;
                margin-top: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left {
                    width: 60%;
                    display: flex;
                    align-items: center;
                }
                .right {
                    width: 30%;
                    display: flex;
                    align-items: center;
                }
                .no {
                    font-weight: 300;
                }
                .pic {
                    margin: 0 48px 0 42px;
                    width: 68px;
                    height: 68px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .price {
                }
                .num {
                    margin-right: 191px;
                }
                .price {
                }
            }
        }
    }
    .servetime {
        width: 1200px;
        margin: 37px auto 0;
        .top {
            padding: 0 29px;
            height: 75px;
            display: flex;
            background: #f7f7f7;
            font-size: 22px;
            color: #000000;
            line-height: 75px;
        }
        p {
            padding: 0 29px;
            text-align: left;
            font-size: 20px;
            font-weight: 300;
            color: #000000;
            line-height: 30px;
            .edittime {
                margin-left: 50px;
                cursor: pointer;
                size: 18px;
                color: #73b1ff;
                line-height: 32px;
            }
        }
    }
    .payment {
        margin: 37px auto 120px;
        width: 1200px;
        .right {
            margin-left: 720px;
            width: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
                font-size: 20px;
                color: #000000;
                line-height: 32px;
                .total {
                    font-size: 44px;
                    font-weight: 500;
                    color: #0067e8;
                    line-height: 32px;
                }
            }
            .pay-btn {
                width: 186px;
                height: 55px;
                border-radius: 0;
                background-color: #0067e8;
                span {
                    font-size: 20px;
                    font-weight: 300;
                    color: #ffffff;
                    line-height: 32px;
                }
            }
        }
    }
    // 模态框
    .eldialog {
        // 分隔线
        .line {
            position: absolute;
            width: 1px;
            height: 40px;
            background-color: #bbb;
            left: 50%;
            top: 205px;
        }
        .activearr {
            position: relative;
        }

        .el-dialog__body {
            padding: unset !important;
        }
        .tit {
            font-size: 24px;
            margin-bottom: 56px;
        }
        .payway {
            margin: 0 0 40px;
            font-size: 22px;
        }
        p {
            color: #000000;
            line-height: 30px;
            text-align: center;
            img {
                vertical-align: middle;
            }
        }
        .tabs {
            margin: 0 auto;
            width: 523px;
            .el-tabs__header {
                margin: 0;
            }

            // 支付方式
            .el-tabs__nav {
                float: none;
            }
            .el-tabs__active-bar {
                display: none;
            }
            .el-tabs__nav-wrap::after {
                display: none;
            }
            // tab栏标题
            .el-tabs__item {
                height: 60px;
                width: 50%;
                padding-top: 12px;
                .label {
                    font-size: 18px !important;
                    line-height: 32px !important;
                    font-weight: 500;
                    img {
                        width: 26px;
                        height: 26px;
                        vertical-align: middle;
                    }
                }
            }
            .el-tabs__item.is-active {
                color: #06b4fd;
                position: relative;
            }
            .el-tabs__item.is-active::after {
                display: block;
                position: absolute;
                bottom: 1px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                border-left: 7px transparent solid;
                border-top: 5px transparent solid;
                border-right: 7px transparent solid;
                border-bottom: 5px #61A1F1 solid;
                content: '';
            }
            // tab内容
            .item {
                border: 1px solid #61a1f1;
                padding: 40px 0 30px;
                p {
                    font-size: 20px;
                    color: #585858;
                    line-height: 32px;
                }
                img {
                    width: 184px;
                    height: 184px;
                }
            }
        }
        // 取消按钮
        .el-dialog__footer {
            text-align: center;
            padding-bottom: 84px;
            .cancel {
                margin-top: 60px;
                width: 219px;
                height: 50px;
                background-color: #a7a7a7;
                border: none;
                color: #fff;
                font-size: 22px;
                font-weight: 300;
            }
        }
    }
}
</style>
