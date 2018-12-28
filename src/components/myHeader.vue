<template>
	<div class="ub header" :class="{'fixed':fixed}" :style="styleObj">
		<div class="left-l" :class="{'back':backArrow?true:false}"  @click="back"></div>
		<div class="ub ub-ac ub-pc ub-f1 center">
			{{title}}
		</div>
		<div class="left-r"></div>
	</div>
</template>
<script>
	export default {
		props:{
			title:{
				type: String
			},
			headerBg:{
				type: String,
				default:'lightseagreen'
			},
			styleObj:{
				type: Object,
				default: function () {
				    return {
							'backgroundColor':this.headerBg
						}
				 }
			},
			fixed:{
				type: Boolean,
				default:false
			},
			backArrow:{
				type: Boolean,
				default:true
			},
			backClick:{
				type: Boolean,
				default:true
			}
		},
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{
			back(){
				if(this.backClick){
					history.back();
				}else{
					return ;
				}
				
			}
		}
	}
</script>

<style lang='scss' scoped>
.header {
    width: 100%;
    height: 90px;
    background-color: lightseagreen;
}

.header>div {
    height: 100%;
}

.header>div.left-r {
    width: 100px;
}
.fixed{
	position: fixed;
	z-index: 99999;
}
.header>div.left-l {
    width: 100px;
}
.header>div.back {
    background-image: url(./back.png);
    background-position: 20px center;
    background-repeat: no-repeat;
    background-size: 26%;
}
.header>div.center {
    color: #fff;
    line-height: 90px;
    text-align: center;
    font-size: 36px;
}
</style>