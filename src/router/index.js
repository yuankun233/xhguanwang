import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import index from '../components/pages/index/index'; //居家服务
import knowaboutus from '../components/pages/konwaboutus/knowaboutus'; //首页
import presscenter from '../components/pages/presscenter/presscenter'; //新闻中心
import aboutus from '../components/pages/aboutus/aboutus'; //关于我们
import order from '../components/pages/details/order.vue'; //订单页
import my from '../components/pages/my/my.vue'; //个人中心
import address from '../components/pages/my/right/address.vue' //地址管理
import FAQs from '../components/pages/my/right/FAQs.vue' //常见问答
import Notescontact from '../components/pages/my/right/Notescontact.vue' //联系客服
import myorder from '../components/pages/my/right/myorder.vue' //全部订单

import details from '../components/pages/details/details.vue';

// import newDetails from '../components/pages/details/newDetails.vue'; //详情页

//注册页路由
// import reg from '../components/pages/LoginAndReg/reg/reg.vue';

//登录页路由
// import login from '../components/pages/LoginAndReg/login/login.vue';

//二维码登录路由
// import erCode from '../components/pages/LoginAndReg/erCode/erCode.vue';

//绑定手机号路由
import BindingPhone from '../components/pages/LoginAndReg/BindingPhone/BindingPhone.vue';

//居家服务子路由
import ProfessionalCare from '../components/pages/index/ProfessionalCare/ProfessionalCare'; //专业护理
import functionalRehabilitation from '../components/pages/index/functionalRehabilitation/functionalRehabilitation'; //功能康复
import lifeCare from '../components/pages/index/lifeCare/lifeCare'; //生活照料
import sciencePharmacy from '../components/pages/index/sciencePharmacy/sciencePharmacy'; //科学用药

//小护新闻子路由
import tradeNews from '../components/pages/presscenter/tradeNews/tradeNews'; //行业新闻
import Notice from "../components/pages/presscenter/Notice/Notice"; //小护故事
import LitteProtectKnowledge from "../components/pages/presscenter/LittleProtectKnowledge/LittleProtectknowledge"; //通知公告
import LittleGuardStory from '../components/pages/presscenter/LittleGuardStory/LittleGuardStory'; //小护知识中心

//关于我们子路由
import companyProfile from '../components/pages/aboutus/companyProfile/companyProfile'; //公司简介
import Partners from '../components/pages/aboutus/Partners/Partners'; //合作机构

Vue.use(VueRouter)

const routes = [
	// {
	// 	path: '',
	// 	redirect: '/knowaboutus'
	// },
	{
		path: '/',
		name: 'knowaboutus',
		component: knowaboutus,
	},
	{
		path: '/index',
		name: 'index',
		component: index,
		redirect: '/index/ProfessionalCare',
		children: [
			{
				path: 'ProfessionalCare',
				name: 'ProfessionalCare',
				component: ProfessionalCare
			},
			{
				path: 'functionalRehabilitation',
				name: 'functionalRehabilitation',
				component: functionalRehabilitation,
			},
			{
				path: 'lifeCare',
				name: 'lifeCare',
				component: lifeCare,
			}
		]
	}, {
		path: '/presscenter',
		name: 'presscenter',
		component: presscenter,
		redirect: '/presscenter/tradeNews',
		children: [{
				path: 'tradeNews',
				name: 'tradeNews',
				component: tradeNews
			},
			{
				path: 'LittleGuardStory',
				name: 'LittleGuardStory',
				component: LittleGuardStory,
			},
			{
				path: 'Notice',
				name: 'Notice',
				component: Notice
			},
			{

				path: 'LitteProtectKnowledge',
				name: 'LitteProtectKnowledge',
				component: LitteProtectKnowledge
			}
		]
	}, {
		path: '/aboutus',
		name: 'aboutus',
		component: aboutus,
		redirect: '/aboutus/companyProfile',
		children: [{
				path: 'companyProfile',
				name: 'companyProfile',
				component: companyProfile
			},
			{
				path: 'Partners',
				name: 'Partners',
				component: Partners,
			}
		]
	},

	// {
	// 	path: '/newDetails',
	// 	name: 'newDetails',
	// 	component: newDetails
	// },
	{
		path: '/details',
		name: 'details',
		component: details
	},
	// {
	// 	path: '/reg',
	// 	name: 'reg',
	// 	component: reg,
	// },
	// {
	// 	path: '/login',
	// 	name: 'login',
	// 	component: login,
	// 	beforeEnter: (to, from, next) => {
	// 		if(!localStorage.getItem("phone")){
	// 			next()
	// 		}else{
	// 			console.log("有值")
	// 			return
	// 		}
			
	// 	}
	// },
	// {
	// 	path: '/erCode',
	// 	name: 'erCode',
	// 	component: erCode,
	// },
	{
		path: '/BindingPhone',
		name: 'BindingPhone',
		component: BindingPhone,
	},
	{
		path: '/order',
		name: 'order',
		component: order,
	},
	{
		path: '/my',
		name: 'my',
		component: my,
		redirect: '/my/myorder',
		children: [{
				path: 'address',
				name: 'address',
				component: address
			},
			{
				path: 'FAQs',
				name: 'FAQs',
				component: FAQs,
			},
			{
				path: 'Notescontact',
				name: 'Notescontact',
				component: Notescontact
			},
			{
				path: 'myorder',
				name: 'myorder',
				component: myorder
			}
		]
	}
]


const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) { // 解决vue页面之间跳转，页面不是在顶部的问题
		return {
			x: 0,
			y: 0
		}
	},

})

export default router
