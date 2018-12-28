import Vue from 'vue'
const LoadingConstructor = Vue.extend(require('./loading.vue'))
let removeDom = event => {
    event.target.parentNode.removeChild(event.target);

};
LoadingConstructor.prototype.close = function() {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
};
const Loading = (options = {}) => {
	var instance = new LoadingConstructor().$mount(document.createElement('div'))
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
    instance.hide = function(){
    	instance.close();
    }
    return instance
}
export default Loading