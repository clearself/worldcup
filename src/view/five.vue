<template>
	<div class="dd">
		<div class="bg">
			<div class="top">
				<div><img src="../img/1.png" alt="" /></div>
				<!--<div>请选出一支球队成为冠军</div>-->
			</div>
			<div class="btn">
					<img @click="nextStep()" src="../img/untel.jpg" />
				</div>
			<div class="ub ub-ac wrapper">
				<div class="content">
					<div class="ub ub-ac ub-pj secondItem itemH" v-for="(item, index) in getData" :key="index">
						<div class="ub ub-ac left leftMarPadding" :class="{active:item.left.isSelected}" @click="selectTeam(item.left,index)">
							<div><img :src="item.left.imgUrl" alt="" /></div>
							<div>{{item.left.teamName}}</div>
							<span></span>
						</div>
						<span class="vs"></span>
						<div class="ub ub-ac ub-pe right rightMarPadding" :class="{active:item.right.isSelected}" @click="selectTeam(item.right,index)">
							<div>{{item.right.teamName}}</div>
							<div><img :src="item.right.imgUrl" alt="" /></div>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import app from '../public.js'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				copyData:[]
			}
		},
		computed: {
			getData() {
				console.log(this.$store.state.five.data,111)
				return this.$store.state.five.data;
			}
		},
		mounted(){
			var that = this
			var data = app.getsessionStorage('fiveData');
			console.log('fiveData',data)
			data[0].selectGroup.message = 'A5';
			data[1].selectGroup.message = 'B5';
			data = data.map(function(item){
				item.selectGroup.isSelected = false;
				item.selectGroup.isSelected = false;
				return item;
			});
			console.log(data,222)
			data = [
						{'left':data[0].selectGroup,'right':data[1].selectGroup}
					]
			
			console.log(data,333)
			this.copyData = data;
			this.$store.dispatch('getFive',{data});
		},
		methods: {
			nextStep(){ 
				if(this.$store.getters.r5.every(item => item.selectGroup.isSelected === true)){
		   				app.setsessionStorage('firstData',this.$store.getters.r5);
		   				this.$router.push({
							path: '/result'
						});
		   			}else{
		   				app.toast('请选择2支球队');
		   			}
		  },
	   		selectTeam(item,index){
	   			console.log(1111)
	   			console.log(item)
	   			var that = this;
	   			if(index===0){
	   				if(item.message === 'A5'){
	   					if(item.isSelected === false){
	   						that.copyData[0].left.isSelected = true;
	   						that.copyData[0].right.isSelected = false;
	   						
	   					}else{
	   						that.copyData[0].left.isSelected = false;
	   					}
	   				}else{
	   					if(item.isSelected === false){
	   						that.copyData[0].right.isSelected = true;
	   						that.copyData[0].left.isSelected = false;
	   					}else{
	   						that.copyData[0].right.isSelected = false;
	   					}
	   				}
	   				var data = that.copyData;
	   				this.$store.dispatch('getFive',{data});
	   			}
	   		}
		}
	}
</script>

<style scoped lang="scss">
@import '../scss/style.scss';
@import '../scss/fly.scss';
	.top {
		width: 100%;
		height: 135px;
		/*background-color: #020d3a;*/
		div:nth-child(1) {
			padding: 20px 0;
			text-align: center;
			font-size: 0;
			img {
				width: 302px;
				height: 81px;
			}
		}
		div:nth-child(2) {
			color:#fff;
			font-size:22px;
			text-align: center;
			opacity: .7;
		}
	}
	$W:38%;
	$H:150px;
	.itemH{
	   height:$H;
	}

	.leftMarPadding{
		width:$W;
		margin-left: -$H;
        padding-left:$H;
	}
	.rightMarPadding{
		width:$W;
		margin-right: -$H;
        padding-right:$H;
	}
</style>