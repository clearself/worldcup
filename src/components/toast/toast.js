import Vue from 'vue'
import ToastVue from './toast.vue'
const ToastConstructor = Vue.extend(ToastVue)
let removeDom = event => {
    event.target.parentNode.removeChild(event.target);

};
ToastConstructor.prototype.close = function() {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
};
const Toast = (options = {}) => {

    var instance = new ToastConstructor().$mount(document.createElement('div'))
    let duration = options.duration || 2500;
    instance.message = typeof options === 'string' ? options : options.message
    instance.position = options.position || 'leave'
    document.body.appendChild(instance.$el);
    instance.visible = true;
    Vue.nextTick(() => {
        instance.timer = setTimeout(function() {
            instance.close();
        }, duration);
    })
    return instance
}


export default Toast