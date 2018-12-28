<template>
	<div class="dd">
		<div class="bg"></div>
		<div class="top">
			<div><img src="../img/16.png" alt="" /></div>
			<!--<div>请在每组选出两支球队进行晋级</div>-->
		</div>
		<div class="btn" @click="nextStep"><img src="../img/untel.jpg"/></div>
		<div class="wrapper" ref="wrapper">
		  	<div class="ub ub-ver content">
		  		<div class="ub ub-pj ub-f1 group">
		  			<div class="group-teams">
		  				<div class="ub ub-f1 ub-ver ub-ac ub-pc group-title">
		  					<div class="ub ub-ac ub-pc">GroupA</div>
		  					<div class="group_icon"></div>
		  				</div>
		  				<div class="ub ub-ver left">
		  					<div v-for="(item, index) in dataA.teams" :key="index" class="ub ub-ac item-box" :class="{active:item.isSelected}" @click="selectGroupA(item,index)">
		  						<span></span>
		  						<div><img class="pic" :src="item.imgUrl" alt="" /></div>
		  						<div class="ub ub-f1 ub-ac name">{{item.teamName}}</div>
		  						<div class="circle" :class="{active:item.isSelected}">
		  							<span :class="{active:item.isSelected}">{{item.message}}</span>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  			<div class="group-teams">
		  				<div class="ub ub-f1 ub-ver ub-ac ub-pc group-title">
		  					<div class="ub ub-ac ub-pc">GroupB</div>
		  					<div class="group_icon"></div>
		  				</div>
		  				<div class="ub ub-ver left">
		  					<div v-for="(item, index) in dataB.teams" :key="index" class="ub ub-ac item-box" :class="{active:item.isSelected}" @click="selectGroupB(item,index)">
		  						<span></span>
		  						<div class="circle right" :class="{active:item.isSelected}">
		  							<span :class="{active:item.isSelected}">{{item.message}}</span>
		  						</div>
		  						<div class="ub ub-f1 ub-ac ub-pe name nameright">{{item.teamName}}</div>
		  						<div><img class="pic" :src="item.imgUrl" alt="" /></div>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		<div class="ub ub-pj ub-f1 group">
		  			<div class="group-teams">
		  				<div class="ub ub-f1 ub-ver ub-ac ub-pc group-title">
		  					<div class="ub ub-ac ub-pc">GroupC</div>
		  					<div class="group_icon"></div>
		  				</div>
		  				<div class="ub ub-ver left">
		  					<div v-for="(item, index) in dataC.teams" :key="index" class="ub ub-ac item-box" :class="{active:item.isSelected}" @click="selectGroupC(item,index)">
		  						<span></span>
		  						<div><img class="pic" :src="item.imgUrl" alt="" /></div>
		  						<div class="ub ub-f1 ub-ac name">{{item.teamName}}</div>
		  						<div class="circle" :class="{active:item.isSelected}">
		  							<span :class="{active:item.isSelected}">{{item.message}}</span>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  			<div class="group-teams">
		  				<div class="ub ub-f1 ub-ver ub-ac ub-pc group-title">
		  					<div class="ub ub-ac ub-pc">GroupD</div>
		  					<div class="group_icon"></div>
		  				</div>
		  				<div class="ub ub-ver left">
		  					<div v-for="(item, index) in dataD.teams" :key="index" class="ub ub-ac item-box" :class="{active:item.isSelected}" @click="selectGroupD(item,index)">
		  						<span></span>
		  						<div class="circle right" :class="{active:item.isSelected}">
		  							<span :class="{active:item.isSelected}">{{item.message}}</span>
		  						</div>
		  						<div class="ub ub-f1 ub-ac ub-pe name nameright">{{item.teamName}}</div>
		  						<div><img class="pic" :src="item.imgUrl" alt="" /></div>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		<div class="ub ub-pj ub-f1 group">
		  			<div class="group-teams">
		  				<div class="ub ub-f1 ub-ver ub-ac ub-pc group-title">
		  					<div class="ub ub-ac ub-pc">GroupE</div>
		  					<div class="group_icon"></div>
		  				</div>
		  				<div class="ub ub-ver left">
		  					<div v-for="(item, index) in dataE.teams" :key="index" class="ub ub-ac item-box" :class="{active:item.isSelected}" @click="selectGroupE(item,index)">
		  						<span></span>
		  						<div><img class="pic" :src="item.imgUrl" alt="" /></div>
		  						<div class="ub ub-f1 ub-ac name">{{item.teamName}}</div>
		  						<div class="circle" :class="{active:item.isSelected}">
		  							<span :class="{active:item.isSelected}">{{item.message}}</span>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  			<div class="group-teams">
		  				<div class="ub ub-f1 ub-ver ub-ac ub-pc group-title">
		  					<div class="ub ub-ac ub-pc">GroupF</div>
		  					<div class="group_icon"></div>
		  				</div>
		  				<div class="ub ub-ver left">
		  					<div v-for="(item, index) in dataF.teams" :key="index" class="ub ub-ac item-box" :class="{active:item.isSelected}" @click="selectGroupF(item,index)">
		  						<span></span>
		  						<div class="circle right" :class="{active:item.isSelected}">
		  							<span :class="{active:item.isSelected}">{{item.message}}</span>
		  						</div>
		  						<div class="ub ub-f1 ub-ac ub-pe name nameright">{{item.teamName}}</div>
		  						<div><img class="pic" :src="item.imgUrl" alt="" /></div>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		<div class="ub ub-pj ub-f1 group">
		  			<div class="group-teams">
		  				<div class="ub ub-f1 ub-ver ub-ac ub-pc group-title">
		  					<div class="ub ub-ac ub-pc">GroupG</div>
		  					<div class="group_icon"></div>
		  				</div>
		  				<div class="ub ub-ver left">
		  					<div v-for="(item, index) in dataG.teams" :key="index" class="ub ub-ac item-box" :class="{active:item.isSelected}" @click="selectGroupG(item,index)">
		  						<span></span>
		  						<div><img class="pic" :src="item.imgUrl" alt="" /></div>
		  						<div class="ub ub-f1 ub-ac name">{{item.teamName}}</div>
		  						<div class="circle" :class="{active:item.isSelected}">
		  							<span :class="{active:item.isSelected}">{{item.message}}</span>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  			<div class="group-teams">
		  				<div class="ub ub-f1 ub-ver ub-ac ub-pc group-title">
		  					<div class="ub ub-ac ub-pc">GroupH</div>
		  					<div class="group_icon"></div>
		  				</div>
		  				<div class="ub ub-ver left">
		  					<div v-for="(item, index) in dataH.teams" :key="index" class="ub ub-ac item-box" :class="{active:item.isSelected}" @click="selectGroupH(item,index)">
		  						<span></span>
		  						<div class="circle right" :class="{active:item.isSelected}">
		  							<span :class="{active:item.isSelected}">{{item.message}}</span>
		  						</div>
		  						<div class="ub ub-f1 ub-ac ub-pe name nameright">{{item.teamName}}</div>
		  						<div><img class="pic" :src="item.imgUrl" alt="" /></div>
		  					</div>
		  				</div>
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
		data(){
			return {}
		},
		computed:{
			dataA(){
				return this.$store.state.main.data.groupA;
			},
			dataB(){
				return this.$store.state.main.data.groupB;
			},
			dataC(){
				return this.$store.state.main.data.groupC;
			},
			dataD(){
				return this.$store.state.main.data.groupD;
			},
			dataE(){
				return this.$store.state.main.data.groupE;
			},
			dataF(){
				return this.$store.state.main.data.groupF;
			},
			dataG(){
				return this.$store.state.main.data.groupG;
			},
			dataH(){
				return this.$store.state.main.data.groupH;
			}
		},
		created(){
			
		},
		 mounted() {
		 	var that = this;
		 	this.$nextTick(() => {
	        this.scroll = new BScroll(this.$refs.wrapper, {
	        	bounce:false,
	        	click:true,
	        	//scrollbar:true
	        })
	        that.scroll.scrollTo(0, 0, 10);
	        console.log( this.scroll)
	      })
	   },
	   methods:{
	   	 //跳到下一步
	   		nextStep(){
	   			if(this.$store.getters.r1.find(item => item.selectGroup.length === 0)){
	   				app.toast('请选择16支球队');
	   				return;
	   			}
	   			if(this.$store.getters.r1.find(item => item.selectGroup.length === 1)){
	   				app.toast('每一组请选择2支球队');
	   				return;
	   			}
	   			if(this.$store.getters.r1.every(item => item.selectGroup.length === 2)){
	   				app.setsessionStorage('secondData',this.$store.getters.r1);
	   				this.$router.push({
						path: '/second'
					});
	   			}else{
	   				app.toast('请选择16支球队');
	   			}
	   		  
	   		},
	   		selectGroupA(item,index){
	   			this.$store.dispatch('selectGroupA',{item,index});
	   		},
	   		selectGroupB(item,index){
	   			this.$store.dispatch('selectGroupB',{item,index});
	   		},
	   		selectGroupC(item,index){
	   			this.$store.dispatch('selectGroupC',{item,index});
	   		},
	   		selectGroupD(item,index){
	   			this.$store.dispatch('selectGroupD',{item,index});
	   		},
	   		selectGroupE(item,index){
	   			this.$store.dispatch('selectGroupE',{item,index});
	   		},
	   		selectGroupF(item,index){
	   			this.$store.dispatch('selectGroupF',{item,index});
	   		},
	   		selectGroupG(item,index){
	   			this.$store.dispatch('selectGroupG',{item,index});
	   		},
	   		selectGroupH(item,index){
	   			this.$store.dispatch('selectGroupH',{item,index});
	   		}
	   }
	}
</script>

<style scoped lang="scss">
		@import '../scss/style.scss';
		.top{
	        position: fixed;
	        width:100%;
	        height:135px;
	        /*background-color: #020d3a;*/
	        div:nth-child(1){
	            padding:20px 0;
	            text-align: center;
	            font-size:0;
	            img{
	                width:305px;
	                height:81px;
	            }
	        }
	    }
	
	
	.content{
		width:94%;
		margin: 0 auto;
		
	}
	.content>div:last-child{
		margin-bottom: 16px;
	}
	.group{
		margin-top: 0;
	}
	
	.pic{
		display: block;
		width:90px;
		height:60px;
		border:2px solid #fff;
		border-radius:$borderW;
		box-sizing: border-box;
	}
	.group-teams{
		width:48%;
		margin-top: 10px;
	}
	.left,{
		width:100%;
	}
	.item-box{
		width:100%;
		height:60px;
		border:2px solid $gray;
		margin-bottom: 10px;
		border-radius:$borderW;
	}
	.item-box>span{
		position: absolute;
		left:0;
		top:0;
		right:0;
		bottom:0;
		z-index: 3;
		background-color: rgba(0,0,0,.3);
	}
	.item-box.active{
		color:#fff;
		background-color: #32b16c;
		border-color:rgba(0,0,0,0)
	}
	.item-box.active>span{
		background-color: rgba(0,0,0,0);
	}
	.group-title{
		padding:10px 0;
		div:nth-child(1){
			padding:10px 0;
			font-size:32px;
			color:#fff;
		}
		div:nth-child(2){
			width:151px;
			height:17px;
			background-image: url(../img/group_icon.png);
		    background-size: 100% 100%;
		    background-repeat: no-repeat;
		    background-position: center;
		}
	}
	.circle{
		width:26px;
		height:26px;
		border:2px solid $gray;
		border-radius:50%;
		position: relative;
		margin-right: 12px;
		span{
			position: absolute;
			width:26px;
			height:26px;
			left:0;
			top:0;
			text-align: center;
			line-height: 26px;
			font-size:22px;
			color:#fff;
			display: none;
		}
		span.active{
			display: block;
		}
	}
	.circle.right{
		margin-right: 0;
		margin-left: 12px;
	}
	.marginR{
		margin-right: 10px;
	}
	.marginL{
		margin-left: 10px;
	}
	.circle.active{
		border:none;
	}
	.name{
		color:#fff;
		font-size:32px;
		padding-left:14px;
	}
	.nameright{
		text-align: right;
		padding-right:14px;
	}
	</style>