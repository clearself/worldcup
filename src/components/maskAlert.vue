<template>
	<div class="mask-alert">
		<transition name='fade'>
			<div class="wrap" @click="closeRank" :style="{ width: wrapWidth}">
				<span class="close" @click="close"></span>
				<div class="mask-container" @click.stop="noFun">
					<div class="ruleTop" v-if="rule"></div>
					<div class="sureTop" v-if="sure">
						<div class="ub ub-ac ub-pc teanZY">{{teanZYName}}阵营</div>
					</div>
			      	<slot></slot>
			    </div>
	   		 </div>
	    </transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:{
			closeBtn: {
				type: Function,
			},
			wrapWidth:{
				type:String,
				default:'86%'
			},
			teanZYName:{
				type:String,
				default:''
			},
			isRank:{
				type:Boolean,
				default:false
			},
			rule:{
				type:Boolean,
				default:false
			},
			sure:{
				type:Boolean,
				default:false
			}
			
		},
		methods: {
			close(){
				this.$emit('closeFun');
			},
			noFun(){
				return;
			},
			closeRank(){
				if(this.isRank){
					this.$emit('closeFun');
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.mask-alert {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000;
		/*transition: all .3s ease-in-out;*/
	}
	.wrap {
		position: absolute;
		z-index: 1002;
		width: 86%;
		background: #fff;
		left: 50%;
		top: 50%;
		/*padding:62px;*/
		box-sizing: border-box;
		transition: all .3s ease-in-out;
		transform: translate(-50%, -50%) scale(1);
		border-radius: 30px;
	}
	.close{
		width:44px;
		height:42px;
		position: absolute;
		right:20px;
		top:20px;
		background-image: url(../img/close.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size:100%;
	}
	.ruleTop,.sureTop{
		width:100%;
		height:189px;
		font-size:0;
		border-radius:30px 30px 0 0;
		background-color: #f6bd59;
		background-image: url(../img/ruleBg.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.sureTop{
		height:237px;
		background-color: rgba(0,0,0,0);
		background-image: url(../img/sureBg.png);
		position: relative;
		.teanZY{
			width:100%;
			height:54px;
			color:#ffffff;
			font-size:30px;
			position: absolute;
			left:0;
			bottom:31px;
		}
	}
</style>