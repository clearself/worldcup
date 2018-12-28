// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import store from './store'
Vue.filter('getNum', function(n) {
	return n < 99999 ? n : '99999+';
})
import LoadingBar from './components/loading-bar';
LoadingBar.config({
   color: '#5cb85c'
})
router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if(to.meta.title) {
		document.title = to.meta.title;
	}
	LoadingBar.start();
	next();
})
Vue.directive("longtouch", function(el, binding) {
    var oDiv = el,
        value = binding.value,
        x = 0,
        y = 0,
        z = 0,
        timer = null;
    oDiv.addEventListener("touchstart", function(e) {
        if (e.touches.length > 1) {
            return false;
        }
        z = 0;
        timer = setTimeout(function() {
            z = 1;
        }, 500);
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        e.preventDefault();
    }, false);
    document.addEventListener("touchmove", function(e) {
        if (x != e.touches[0].clientX || y != e.touches[0].clientY) {
            clearTimeout(timer);
            return false;
        }
    }, false);
    document.addEventListener("touchend", function(ev) {
        if (z != 1) {
            clearTimeout(timer);
            x = 0;
            y = 0;
            return false;
        } else {
            x = 0;
            y = 0;
            z = 0;
            alert("长按了啊")
        }
    }, false);
})
router.afterEach(transition => {
	LoadingBar.finish();
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
