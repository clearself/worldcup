<template>
		<div class="Popover" v-if="visible" @click="cancle">
			<div class="Popover-wrap" :class="{'active':visible}">
				<ul class="ub ub-ver Popover-list">
					<li class="ub ub-f1 ub-ac ub-pc" v-for="(item, index) in itemList" :key="index" @click.stop="itemClick(index)">{{item}}</li>
				</ul>
				<div class="ub ub-ac ub-pc Popover-cancle" @click.stop="cancle">取消</div>
			</div>
		</div>
	
</template>
<script>
	import pageChange from '../../mixins/index'
	export default {
		mixins: [pageChange],
		data() {
			return {
				visible: false
			};
		},
		props: {
			itemList:{
				type: Array,
				default:function(){
					return [];
				}
			},
			indexClick: {
				type: Function
			}
		},
		methods: {
			itemClick(index){
				if(this.indexClick) {
					this.indexClick(index);
				}
				this.cancle();
			},
			
			show() {
				this.visible = true;
			},
			cancle() {
				this.visible = false;
			},
		},
	};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
	.Popover {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000;
		/*transition: all .3s ease-in-out;*/
	}
	
	.Popover-wrap {
		position: absolute;
		z-index: 1002;
		width: 100%;
		background: #fff;
		left: 0;
		top: 100%;
		padding-top:50px;
	}
	.Popover-wrap.active{
		transform: translate(0%, -100%);
	}
	.Popover-list{
		width:90%;
		margin: 0 auto;
	}
	.Popover-list li{
		height:90px;
		font-size:28px;
		color:#333;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.Popover-cancle{
		width:90%;
		height:90px;
		font-size:32px;
		color:#1E90FF;
		margin: 30px auto;
	}
</style>