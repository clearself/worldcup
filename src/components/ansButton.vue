<template>
	<div class="ub ub-ac ub-pc btn-wrap" :class="{errorC:childState.wrong,rightC:childState.right,clickC:childState.isClick}">
		<span :class="{errorC:childState.wrong,rightC:childState.right}"></span>
		<div class="ub ub-ac ub-pc line1">{{title}}</div>
	</div>
</template>

<script>
	import Bus from '../bus.js'
	export default {
		props:{
			title:{
				type:String,
				default:''
			}
		},
		data(){
			return {
				childState:{
					wrong:false,
					right:false,
					isClick:false
				}
			}
		},
		computed:{
			
		},
		mounted(){
			Bus.$on('update',res =>{
				this.childState = res;
			})
		}
	}
</script>

<style scoped lang="scss">
	.btn-wrap{
		width:100%;
		height:112px;
		border-radius:90px;
		background-color: #e2c797;
		color:#333333;
		font-size:36px;
		padding:0 100px;
		box-sizing: border-box;
		span{
			position: absolute;
			width:100px;
			height:100%;
			left:0;
			top:0;
			background-position: center;
			background-repeat: no-repeat;
			background-size: 38%;
		}
		span.errorC{
			background-image: url(../img/wrong.png);
			
		}
		span.rightC{
			background-image: url(../img/right.png);
		}
		
	}
	.btn-wrap.errorC{
		background-color: #eb9593;
	}
	.btn-wrap.rightC{
		background-color: #7ecaa4;
	}
	.btn-wrap.clickC{
		background-color: #dab068;
	}
</style>