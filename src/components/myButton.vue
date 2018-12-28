<template>
	<div>
		<div class="ub ub-ac ub-pc button" @click="buttonClick" :style="{ color: activeColor, fontSize: fontSize,backgroundColor: activeBgc }"><span :class="{'start':startBg,'move':startBg,'end':endBg}" ref="buttonMask"></span>{{title}}</div>
	</div>
</template>

<script>
	export default {
		props:{
			title:{
				type: String,
				default:'确定'
			},
			activeColor:{
				type: String,
				default:'#333333'
			},
			activeBgc:{
				type: String,
				default:'#ffffff'
			},
			fontSize:{
				type: String,
				default:'14px'
			},
			buttonClick:{
				type: Function
			}
		},
		data(){
			return{
				startBg:false,
				endBg:false
			}
		},
		mounted(){
			var that = this;
			this.$refs.buttonMask.addEventListener("touchstart",function(e){
				that.startBg = true;
				that.endBg = false;
		    },false);
		    this.$refs.buttonMask.addEventListener("touchmove",function(e){
				that.startBg = true;
				that.endBg = false;
		    },false);
		    this.$refs.buttonMask.addEventListener("touchend",function(e){
		    	that.startBg = false;
				that.endBg = true;
		    },false);
		},
		methods:{
			
		}
	}
</script>

<style lang='scss' scoped>
	.button {
	    width: 100%;
	    height: 90px;
	    border:1px solid rgba(0,0,0,.2);
	    border-radius:10px;
	   position: relative;
	}
	.button>span{
		position: absolute;
		width:100%;
		height:100%;
		border-radius:10px;
		transition: all .3 linear;
	}
	.button>span.start{
		background-color: rgba(0,0,0,.2);
	}
	.button>span.move{
		background-color: rgba(0,0,0,.2);
	}
	.button>span.end{
		background-color: rgba(0,0,0,0);
	}
</style>