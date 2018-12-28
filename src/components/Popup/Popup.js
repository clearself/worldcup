import Vue from 'vue';
import Popup from './Popup.vue';
const PopupConstructor = Vue.extend(Popup);
const div = document.createElement('div');
PopupConstructor.show = (options) => {
	document.body.appendChild(div);
	const propsData = Object.assign({}, options);
	const PopupInstance = new PopupConstructor({
		propsData,
	}).$mount(div);
	PopupInstance.show();
};
export default PopupConstructor;