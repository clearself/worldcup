<template>
		<div class="alert" v-if="visible">
			<transition name='fade'>
				<div class="wrap">
					<div class="head">{{title}}</div>
					<div class="body">
						<slot>
							<p>{{message}}</p>
						</slot>
					</div>
					<div class="foot">
						<div v-if="type === 'confirm'" style="text-align: center;">
							<button class="btn-base" @click="sure">确定</button>
							<button class="btn-gray" @click="cancel">取消</button>
						</div>
						<div v-else-if="type === 'inform'" style="text-align: center;">
							<button class="btn-base" @click="cancel">取 消</button>
						</div>
					</div>
				</div>
			</transition>
		</div>
	
</template>
<script>
	import pageChange from '../../mixins/index'
	export default {
		mixins: [pageChange],
		data() {
			return {
				visible: false,
			};
		},
		props: {
			title: {
				type: String,
				default: '提示',
			},
			message: {
				type: String,
			},
			type: { // 可以有confirm, 和inform两个类型
				type: String,
				default: 'confirm',
				validator(value) {
					return value === 'confirm' || value === 'inform';
				},
			},
			sureBtn: {
				type: Function,
			},
			cancelBtn: {
				type: Function,
			},
			context: {
				type: Object,
			},
		},
		methods: {
			cancel() {
				if(this.cancelBtn) {
					this.cancelBtn.apply(this.context);
				}
				this.close();
			},
			sure() {
				if(this.sureBtn) {
					this.sureBtn.apply(this.context);
				}
				this.close();
			},
			show() {
				this.visible = true;
			},
			close() {
				this.visible = false;
			},
		},
	};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
	.alert {
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
		width: 70%;
		background: #fff;
		left: 50%;
		top: 50%;
		transition: all .3s ease-in-out;
		transform: translate(-50%, -50%) scale(1);
		border-radius: 10px;
	}
	
	.head {
		height: 80px;
		line-height: 80px;
		border-bottom: 1px solid #dedede;
		text-align: center;
		color:#000;
		font-size:30px;
	}
	
	.body {
		padding: 40px;
		text-align: center;
		font-size:28px;
	}
	
	.foot {
		height: 100px;
		text-align: center;
		button {
			margin-right: 40px;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	.btn-base{
		display: inline-block;
		padding:10px 0;
		width:100px;
		vertical-align: top;
		background-color: #fff;
		color:limegreen;
		font-size:30px;
	}
	.btn-gray{
		display: inline-block;
		padding:10px 0;
		width:100px;
		vertical-align: top;
		background-color: #fff;
		color:#333;
		font-size:30px;
	}
</style>