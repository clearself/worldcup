import Vue from 'vue'
import Router from 'vue-router'

/*路由组件区*/
const Main = r => require.ensure([], () => r(require('./view/main.vue')))
const Second = r => require.ensure([], () => r(require('./view/second.vue')))
const Third = r => require.ensure([], () => r(require('./view/third.vue')))
const Fourth = r => require.ensure([], () => r(require('./view/fourth.vue')))
const Five = r => require.ensure([], () => r(require('./view/five.vue')))
const Result = r => require.ensure([], () => r(require('./view/result.vue')))
Vue.use(Router)
export default new Router({
	base: __dirname,
	routes: [
		{
			path: '/',
			component: Main,
			meta: {
				title: '寻找世界杯预测帝'
			}
		},
		{
			path: '/result',
			component: Result,
			meta: {
				title: '寻找世界杯预测帝'
			}
		},
		{
			path: '/second',
			component: Second,
			meta: {
				title: '寻找世界杯预测帝'
			}
		},
		{
			path: '/third',
			component: Third,
			meta: {
				title: '寻找世界杯预测帝'
			}
		},
		{
			path: '/fourth',
			component: Fourth,
			meta: {
				title: '寻找世界杯预测帝'
			}
		},
		{
			path: '/five',
			component: Five,
			meta: {
				title: '寻找世界杯预测帝'
			}
		}
	],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})