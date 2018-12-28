import Vue from 'vue'
const LoadConstructor = Vue.extend(require('./load.vue'))
let removeDom = event => {
    event.target.parentNode.removeChild(event.target);

};
LoadConstructor.prototype.close = function() {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
};
const Load = (options = {}) => {

    var instance = new LoadConstructor().$mount(document.createElement('div'))
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
export default Load