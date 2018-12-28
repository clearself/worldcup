<template>
    <transition name='fade'>
    <div v-show='visible' :class='position' class='toast'>
         <span>{{message}}</span>
    </div>
    </transition>
</template>

<script>
    import pageChange from '../../mixins/index'
	export default {
		mixins: [pageChange],
        data() {
            return {
                visible: false,
                message : '',
                position : ''
            };
        }
    }
</script>


<style scoped lang="scss">
.toast {
    position: fixed;
    left:50%;
    transform:translate(-50%,-50%) scale(1);
    word-wrap:break-word;
    padding:16px 40px;
    text-align: center;
    z-index:9999;
    font-size:26px;
    max-width:80%;
    color: #fff;
    font-size:"微软雅黑";
    border-radius: 60px;
    background: rgba(0,0,0,0.5);
    overflow: hidden;
}
.toast.middle{
    top:50%;
}
.toast.top{
    top:20%;
}
.toast.bottom{
    top:80%;
}
.toast.leave{
    top:200%;
}
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter, .fade-leave-active {
	transform:translate(-50%,-50%) scale(0);
}
</style>
