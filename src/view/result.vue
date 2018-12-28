<template>
	<div class="dd" ref="poster">
		<div class="bg"></div>
		<div class="ub ub-ac top" :class="{hengcenter:request1}">
			<!--<div v-if="request" class="headImage"><img :src="user.icon" alt="" /></div>-->
			<!--<div class="ub ub-ac top-right">
				<div v-if="request" class="userName">{{user.nick}}</div>
				<div class="desc">{{myMessage}}预测<span>{{firstData[0].selectGroup.teamName}}</span>队是2018世界杯冠军</div>
			</div>-->
			<div class="yuju">
				<!--<div class="triangle_border_up">
				    <span></span>
				</div>-->
				<!--<div class="whitemask-line"></div>-->
				{{tipMessage}}
				<!--<div class="ub ub-ac ub-pc ub-f1 line2"></div>-->
			</div>
		</div>
		
		<div class="imageBox" id="imageBox"></div>
		<!--bottom-->
			<!--<div v-if="request" class="ub ub-ac ub-pc bottom">
				在腾讯体育社区里有<span>{{user.supportsNum}}</span>人和你一<br/>起支持了{{firstData[0].selectGroup.teamName}}队捧杯！
			</div>
			<div v-if="!request" class="ub ub-ac ub-pc bottom">
				<div class="appicon"></div>
				<div>下载腾讯体育app，到社区里看有多少<br/>球迷与你一起支持{{firstData[0].selectGroup.teamName}}队捧杯</div>
			</div>-->
		<div class="wrapper">
			
			<!--左边第一集-->
			<!--A1-->
			<div class="ub ub-ver frst frst-one">
				<div class="ub ub-ac">
					<div class="text">A1</div>
					<div class="pic"><img :src="dataOne[0].selectGroup[0].circleImg" alt="" /></div>
					<div class="trans-line" :class="{active:dataOne[0].selectGroup[0].numberOne}"></div>
					<div class="ver-line-top" :class="{active:dataOne[0].selectGroup[0].numberOne}"></div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[0].selectGroup[0].teamName}}</div>
			</div>
			<!--B2-->
			<div class="ub ub-ver frst frst-two">
				<div class="ub ub-ac">
					<div class="text">B2</div>
					<div class="pic"><img :src="dataOne[1].selectGroup[1].circleImg" alt="" /></div>
					<div class="trans-line" :class="{active:dataOne[1].selectGroup[1].numberOne}"></div>
					<div class="ver-line-bottom" :class="{active:dataOne[1].selectGroup[1].numberOne}"></div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[1].selectGroup[1].teamName}}</div>
			</div>
			<!--C1-->
			<div class="ub ub-ver frst frst-three">
				<div class="ub ub-ac">
					<div class="text">C1</div>
					<div class="pic"><img :src="dataOne[2].selectGroup[0].circleImg" alt="" /></div>
					<div class="trans-line" :class="{active:dataOne[2].selectGroup[0].numberOne}"></div>
					<div class="ver-line-top" :class="{active:dataOne[2].selectGroup[0].numberOne}"></div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[2].selectGroup[0].teamName}}</div>
			</div>
			<!--D2-->
			<div class="ub ub-ver frst frst-four">
				<div class="ub ub-ac">
					<div class="text">D2</div>
					<div class="pic"><img :src="dataOne[3].selectGroup[1].circleImg" alt="" /></div>
					<div class="trans-line" :class="{active:dataOne[3].selectGroup[1].numberOne}"></div>
					<div class="ver-line-bottom" :class="{active:dataOne[3].selectGroup[1].numberOne}"></div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[3].selectGroup[1].teamName}}</div>
			</div>
			<!--E1-->
			<div class="ub ub-ver frst frst-five">
				<div class="ub ub-ac">
					<div class="text">E1</div>
					<div class="pic"><img :src="dataOne[4].selectGroup[0].circleImg" alt="" /></div>
					<div class="trans-line" :class="{active:dataOne[4].selectGroup[0].numberOne}"></div>
					<div class="ver-line-top" :class="{active:dataOne[4].selectGroup[0].numberOne}"></div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[4].selectGroup[0].teamName}}</div>
			</div>
			<!--F2-->
			<div class="ub ub-ver frst frst-six">
				<div class="ub ub-ac">
					<div class="text">F2</div>
					<div class="pic"><img :src="dataOne[5].selectGroup[1].circleImg" alt="" /></div>
					<div class="trans-line" :class="{active:dataOne[5].selectGroup[1].numberOne}"></div>
					<div class="ver-line-bottom" :class="{active:dataOne[5].selectGroup[1].numberOne}"></div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[5].selectGroup[1].teamName}}</div>
			</div>
			<!--G1-->
			<div class="ub ub-ver frst frst-seven">
				<div class="ub ub-ac">
					<div class="text">G1</div>
					<div class="pic"><img :src="dataOne[6].selectGroup[0].circleImg" alt="" /></div>
					<div class="trans-line" :class="{active:dataOne[6].selectGroup[0].numberOne}"></div>
					<div class="ver-line-top" :class="{active:dataOne[6].selectGroup[0].numberOne}"></div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[6].selectGroup[0].teamName}}</div>
			</div>
			<!--H2-->
			<div class="ub ub-ver frst frst-eight">
				<div class="ub ub-ac">
					<div class="text">H2</div>
					<div class="pic"><img :src="dataOne[7].selectGroup[1].circleImg" alt="" /></div>
					<div class="trans-line" :class="{active:dataOne[7].selectGroup[1].numberOne}"></div>
					<div class="ver-line-bottom" :class="{active:dataOne[7].selectGroup[1].numberOne}"></div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[7].selectGroup[1].teamName}}</div>
			</div>
			<!--右边第一集-->
			<!--B1-->
			<div class="ub ub-ver right frst-one">
				<div class="ub ub-ac">
					<div class="trans-line" :class="{active:dataOne[1].selectGroup[0].numberOne}"></div>
					<div class="ver-line-top left" :class="{active:dataOne[1].selectGroup[0].numberOne}"></div>
					<div class="pic"><img :src="dataOne[1].selectGroup[0].circleImg" alt="" /></div>
					<div class="text tx-r">B1</div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[1].selectGroup[0].teamName}}</div>
			</div>
			<!--A2-->
			<div class="ub ub-ver right frst-two">
				<div class="ub ub-ac">
					<div class="trans-line" :class="{active:dataOne[0].selectGroup[1].numberOne}"></div>
					<div class="ver-line-bottom left" :class="{active:dataOne[0].selectGroup[1].numberOne}"></div>
					<div class="pic"><img :src="dataOne[0].selectGroup[1].circleImg" alt="" /></div>
					<div class="text tx-r">A2</div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[0].selectGroup[1].teamName}}</div>
			</div>
			<!--D1-->
			<div class="ub ub-ver right frst-three">
				<div class="ub ub-ac">
					<div class="trans-line" :class="{active:dataOne[3].selectGroup[0].numberOne}"></div>
					<div class="ver-line-top left" :class="{active:dataOne[3].selectGroup[0].numberOne}"></div>
					<div class="pic"><img :src="dataOne[3].selectGroup[0].circleImg" alt="" /></div>
					<div class="text tx-r">D1</div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[3].selectGroup[0].teamName}}</div>
			</div>
			<!--C2-->
			<div class="ub ub-ver right frst-four">
				<div class="ub ub-ac">
					<div class="trans-line" :class="{active:dataOne[2].selectGroup[1].numberOne}"></div>
					<div class="ver-line-bottom left" :class="{active:dataOne[2].selectGroup[1].numberOne}"></div>
					<div class="pic"><img :src="dataOne[2].selectGroup[1].circleImg" alt="" /></div>
					<div class="text tx-r">C2</div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[2].selectGroup[1].teamName}}</div>
			</div>
			<!--E2-->
			<div class="ub ub-ver right frst-six">
				<div class="ub ub-ac">
					<div class="trans-line" :class="{active:dataOne[4].selectGroup[1].numberOne}"></div>
					<div class="ver-line-bottom left" :class="{active:dataOne[4].selectGroup[1].numberOne}"></div>
					<div class="pic"><img :src="dataOne[4].selectGroup[1].circleImg" alt="" /></div>
					<div class="text tx-r">E2</div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[4].selectGroup[1].teamName}}</div>
			</div>
			<!--F1-->
			<div class="ub ub-ver right frst-five">
				<div class="ub ub-ac">
					<div class="trans-line" :class="{active:dataOne[5].selectGroup[0].numberOne}"></div>
					<div class="ver-line-top left" :class="{active:dataOne[5].selectGroup[0].numberOne}"></div>
					<div class="pic"><img :src="dataOne[5].selectGroup[0].circleImg" alt="" /></div>
					<div class="text tx-r">F1</div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[5].selectGroup[0].teamName}}</div>
			</div>
			<!--G2-->
			<div class="ub ub-ver right frst-eight">
				<div class="ub ub-ac">
					<div class="trans-line" :class="{active:dataOne[6].selectGroup[1].numberOne}"></div>
					<div class="ver-line-bottom left" :class="{active:dataOne[6].selectGroup[1].numberOne}"></div>
					<div class="pic"><img :src="dataOne[6].selectGroup[1].circleImg" alt="" /></div>
					<div class="text tx-r">G2</div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[6].selectGroup[1].teamName}}</div>
			</div>
			<!--H1-->
			<div class="ub ub-ver right frst-seven">
				<div class="ub ub-ac">
					<div class="trans-line" :class="{active:dataOne[7].selectGroup[0].numberOne}"></div>
					<div class="ver-line-top left" :class="{active:dataOne[7].selectGroup[0].numberOne}"></div>
					<div class="pic"><img :src="dataOne[7].selectGroup[0].circleImg" alt="" /></div>
					<div class="text tx-r">H1</div>
				</div>
				<div class="ub ub-ac ub-f1 ub-pc text-name">{{dataOne[7].selectGroup[0].teamName}}</div>
			</div>
			
			
			
			
			
			<!--左边第二集-->
			<!--A1 b2-->
			<div class="pic abs second-one"><img :src="dataTwo[0].selectGroup.circleImg" alt="" /></div>
			<!--C1 D2-->
			<div class="pic abs second-two"><img :src="dataTwo[2].selectGroup.circleImg" alt="" /></div>
			<!--E1 F2-->
			<div class="pic abs second-three"><img :src="dataTwo[4].selectGroup.circleImg" alt="" /></div>
			<!--G1 H2-->
			<div class="pic abs second-four"><img :src="dataTwo[6].selectGroup.circleImg" alt="" /></div>
			
			
				<!--右边第二集-->
			<!--A2	B1-->
			<div class="pic abs-right second-one"><img :src="dataTwo[1].selectGroup.circleImg" alt="" /></div>
			<!--C2 D1-->
			<div class="pic abs-right second-two"><img :src="dataTwo[3].selectGroup.circleImg" alt="" /></div>
			<!--E2 F1-->
			<div class="pic abs-right second-three"><img :src="dataTwo[5].selectGroup.circleImg" alt="" /></div>
			<!--G2 H1-->
			<div class="pic abs-right second-four"><img :src="dataTwo[7].selectGroup.circleImg" alt="" /></div>
			
			
			<!--左边第三级-->
			<div class="pic abs-third-left third-one"><img :src="dataThree[0].selectGroup.circleImg" alt="" /></div>
			<div class="pic abs-third-left third-two"><img :src="dataThree[1].selectGroup.circleImg" alt="" /></div>
			<!--右边第三级-->
			<div class="pic abs-third-right third-one"><img :src="dataThree[2].selectGroup.circleImg" alt="" /></div>
			<div class="pic abs-third-right third-two"><img :src="dataThree[3].selectGroup.circleImg" alt="" /></div>
			
			
			<!--左边第四级-->
			<div class="pic abs-fourth-left fourth-one"><img :src="dataFour[0].selectGroup.circleImg" alt="" /></div>
			<!--右边第四级-->
			<div class="pic abs-fourth-right fourth-one"><img :src="dataFour[1].selectGroup.circleImg" alt="" /></div>
			
				
				
			<!--冠军级-->
			<div class="pic pic-numberOne"><img :src="firstData[0].selectGroup.circleImg" alt="" /></div>
			<div class="numberOne-name">{{firstData[0].selectGroup.teamName}}</div>
			
			
			
			
			
			<!--左边第二级横线-->
			<div class="trans-line abs-trans lineW second-trans-one" :class="{active:dataTwo[0].selectGroup.numberOne}"></div>
			<div class="trans-line abs-trans lineW second-trans-two" :class="{active:dataTwo[2].selectGroup.numberOne}"></div>
			<div class="trans-line abs-trans lineW second-trans-three" :class="{active:dataTwo[4].selectGroup.numberOne}"></div>
			<div class="trans-line abs-trans lineW second-trans-four" :class="{active:dataTwo[6].selectGroup.numberOne}"></div>
			<!--左边第二级竖线-->
			<div class="ver-line-top abs-ver lineH second-ver-one" :class="{active:dataTwo[0].selectGroup.numberOne}"></div>
			<div class="ver-line-top abs-ver lineH second-ver-two" :class="{active:dataTwo[2].selectGroup.numberOne}"></div>
			<div class="ver-line-top abs-ver lineH second-ver-three" :class="{active:dataTwo[4].selectGroup.numberOne}"></div>
			<div class="ver-line-top abs-ver lineH second-ver-four" :class="{active:dataTwo[6].selectGroup.numberOne}"></div>
			
			
			<!--右边第二级横线-->
			<div class="trans-line abs-trans-right lineW second-trans-one" :class="{active:dataTwo[1].selectGroup.numberOne}"></div>
			<div class="trans-line abs-trans-right lineW second-trans-two" :class="{active:dataTwo[3].selectGroup.numberOne}"></div>
			<div class="trans-line abs-trans-right lineW second-trans-three" :class="{active:dataTwo[5].selectGroup.numberOne}"></div>
			<div class="trans-line abs-trans-right lineW second-trans-four" :class="{active:dataTwo[7].selectGroup.numberOne}"></div>
			<!--右边第二级竖线-->
			<div class="ver-line-top abs-ver-right lineH second-ver-one" :class="{active:dataTwo[1].selectGroup.numberOne}"></div>
			<div class="ver-line-top abs-ver-right lineH second-ver-two" :class="{active:dataTwo[3].selectGroup.numberOne}"></div>
			<div class="ver-line-top abs-ver-right lineH second-ver-three" :class="{active:dataTwo[5].selectGroup.numberOne}"></div>
			<div class="ver-line-top abs-ver-right lineH second-ver-four" :class="{active:dataTwo[7].selectGroup.numberOne}"></div>
			
			
			
			
			<!--左边第三级横线-->
			<div class="trans-line abs-trans-third lineW third-trans-one" :class="{active:dataThree[0].selectGroup.numberOne}"></div>
			<div class="trans-line abs-trans-third lineW third-trans-two" :class="{active:dataThree[1].selectGroup.numberOne}"></div>
			<!--右边第三级横线-->
			<div class="trans-line abs-trans-third-right lineW third-trans-one" :class="{active:dataThree[2].selectGroup.numberOne}"></div>
			<div class="trans-line abs-trans-third-right lineW third-trans-two" :class="{active:dataThree[3].selectGroup.numberOne}"></div>
			
			
			
			<!--左边第三级竖线-->
			<div class="ver-line-top abs-ver-third lineH1 third-ver-one" :class="{active:dataThree[0].selectGroup.numberOne}"></div>
			<div class="ver-line-top abs-ver-third lineH1 third-ver-two" :class="{active:dataThree[1].selectGroup.numberOne}"></div>
			<!--右边第三级竖线-->
			<div class="ver-line-top abs-ver-third-right lineH1 third-ver-one" :class="{active:dataThree[2].selectGroup.numberOne}"></div>
			<div class="ver-line-top abs-ver-third-right lineH1 third-ver-two" :class="{active:dataThree[3].selectGroup.numberOne}"></div>
			
			
			<!--左边第四级横线-->
			<div class="trans-line abs-trans-fourth lineW1 fourth-trans-one" :class="{active:dataFour[0].selectGroup.numberOne}"></div>
			<!--右边第四级横线-->
			<div class="trans-line abs-trans-fourth-right lineW1 fourth-trans-one" :class="{active:dataFour[1].selectGroup.numberOne}"></div>
			
			<!--冠军竖线-->
			<div class="ver-line-top numberOne" :class="{active:firstData[0].selectGroup.numberOne}"></div>
			
			
			<!--奖杯-->
			<img class="cup" src="../img/cup.png" alt="" />
			
			<!--二维码-->
			<!--<div class="ub ub-ver ewm">
				<div>
					<img :src="imageurl" alt="" />
				</div>
				<div class="ub ub-pc line2">长按预测2018世界杯冠军</div>
			</div>-->
			
			
		</div>
		
	</div>
</template>

<script>
	var getPixelRatio = function(context) {
		var backingStore = context.backingStorePixelRatio ||
			context.webkitBackingStorePixelRatio ||
	    	context.mozBackingStorePixelRatio ||
	    	context.msBackingStorePixelRatio ||
	    	context.oBackingStorePixelRatio ||
	    	context.backingStorePixelRatio || 1;
		return (window.devicePixelRatio || 1) / backingStore;
	};

	import app from '../public.js'
	import datas from '../data.js'
	export default {
		data(){
			return {
				imageurl:'http://img1.gtimg.com/sports/pics/hv1/158/222/2279/148248743.png',
				tipMessage:'',
				request:true,
				request1:false,
				myMessage:'',
				user:{
					"nick": "",
					"icon": "",
					"supportsNum": ""
				},
				dataOne:datas.dataOne,
				dataTwo:datas.dataTwo,
				dataThree:datas.dataThree,
				dataFour:datas.dataFour,
				firstData:datas.firstData
			}
		},
		created(){
			/*冠军*/
		 	this.firstData = app.getsessionStorage('firstData');
		 	console.log(this.firstData)
		 	this.firstData[0].selectGroup.numberOne = true;
		 	var firstId = this.firstData[0].selectGroup.id;
		 	var everyNum = Math.floor(Math.random()*this.firstData[0].selectGroup.text.length);
		 	console.log('everyNum',everyNum)
		 	this.tipMessage = this.firstData[0].selectGroup.text[everyNum];
		 	/*16进8*/
		 	var dataOnePre = app.getsessionStorage('secondData')
		 	this.dataOne = dataOnePre.map(function(item){
		 		console.log(item.selectGroup[0].id,item.selectGroup[1].id)
		 		if(item.selectGroup[0].id === firstId){
		 			item.selectGroup[0].numberOne = true;
		 		}
		 		if(item.selectGroup[1].id === firstId){
		 			item.selectGroup[1].numberOne = true;
		 		}
		 		return item;
		 	});
		 		
		 	/*8进4*/
		 	var dataTwoPre = app.getsessionStorage('thirdData')
		 	this.dataTwo = dataTwoPre.map(function(item,index){
		 		if(item.selectGroup.id === firstId){
		 			item.selectGroup.numberOne = true;
		 		}
		 		return item;
		 	});
		 	
		 	/*4进2*/
		 	var dataThreePre = app.getsessionStorage('fourthData')
		 	this.dataThree = dataThreePre.map(function(item,index){
		 		console.log(item.selectGroup.id)
		 		if(item.selectGroup.id === firstId){
		 			console.log('HHEHEHE',item.selectGroup.teamName,index)
		 			item.selectGroup.numberOne = true;
		 		}
		 		return item;
		 	});
		 	
		 	/*2进1*/
		 	var dataFourPre = app.getsessionStorage('fiveData')
		 	this.dataFour = dataFourPre.map(function(item,index){
		 		if(item.selectGroup.id === firstId){
		 			console.log('HHEHEHE',item.selectGroup.teamName,index)
		 			item.selectGroup.numberOne = true;
		 		}
		 		return item;
		 	});
		},
		 mounted() {
		 	var that = this;
		 	let content_html = this.$refs.poster;　　　//要转化的div
			let width = content_html.offsetWidth;
			let height = content_html.offsetHeight;
			let offsetTop = content_html.offsetTop;
			let canvas = document.createElement('canvas');
			let context = canvas.getContext('2d');
			var scaleBy = getPixelRatio(context);
			canvas.width = width*scaleBy;
			canvas.height = height*scaleBy;//+offsetTop
			canvas.style.width = width + 'px';
			canvas.style.height = height + 'px';
			context.scale(scaleBy,scaleBy);
			var opts = {
			  useCORS:true,
			  allowTaint:false,//允许加载跨域的图片
			  tainttest:true, //检测每张图片都已经加载完成
			  scale:scaleBy, // 添加的scale 参数
			  canvas:canvas, //自定义 canvas
			  logging: false, //日志开关，发布的时候记得改成false
			  width:width, //dom 原始宽度
			  height:height //dom 原始高度,
			};
			 setTimeout(function(){
				html2canvas(content_html,opts).then(function (canvas) {
				  var dataUrl = canvas.toDataURL();
				  var img = document.createElement("img");
					img.src = dataUrl;
				  	img.style.width = width+'px';
				  	img.style.height = height+'px';
					document.getElementById('imageBox').appendChild(img);
			  });
			},1000)
//			app.getAction('worldCup2018/myWorldCup',{
//				teamId:1
//			},function(res){
//				if(res.code ==0){
//					that.user.nick = res.data.nick;
//					that.user.supportsNum = res.data.supportsNum;
//					var headImg = new Image();
//					   headImg.src = res.data.icon;
//					   headImg.onerror = () => { // 图片加载错误时
//						   that.request = false;
//						   that.request1 = true;
//						   that.myMessage = '我';
//						   setTimeout(function(){
//								html2canvas(content_html,opts).then(function (canvas) {
//								  var dataUrl = canvas.toDataURL();
//								  var img = document.createElement("img");
//									img.src = dataUrl;
//								  	img.style.width = width+'px';
//								  	img.style.height = height+'px';
//									document.getElementById('imageBox').appendChild(img);
//							  });
//							},1000)
//						}
//					   headImg.onload = () => { // 图片加载成功后把地址给原来的img
//					    that.user.icon = headImg.src
//					    setTimeout(function(){
//							html2canvas(content_html,opts).then(function (canvas) {
//							  var dataUrl = canvas.toDataURL();
//							  var img = document.createElement("img");
//								img.src = dataUrl;
//							  	img.style.width = width+'px';
//							  	img.style.height = height+'px';
//								document.getElementById('imageBox').appendChild(img);
//						  });
//						},1000)
//					   }
//						
//				}else{
//					that.request = false;
//					that.request1 = true;
//					that.myMessage = '我';
//				setTimeout(function(){
//						html2canvas(content_html,opts).then(function (canvas) {
//						  var dataUrl = canvas.toDataURL();
//						  var img = document.createElement("img");
//							img.src = dataUrl;
//						  	img.style.width = width+'px';
//						  	img.style.height = height+'px';
//							document.getElementById('imageBox').appendChild(img);
//					  });
//					},1000)
//				}
//			},function(error){
//				that.request = false;
//				that.request1 = true;
//				that.myMessage = '我';
//				setTimeout(function(){
//						html2canvas(content_html,opts).then(function (canvas) {
//						  var dataUrl = canvas.toDataURL();
//						  var img = document.createElement("img");
//							img.src = dataUrl;
//						  	img.style.width = width+'px';
//						  	img.style.height = height+'px';
//							document.getElementById('imageBox').appendChild(img);
//					  });
//					},1000)
//			})
			
	   },
	   methods:{
	   	
	   }
	}
</script>

<style scoped lang="scss">
	.dd{
		width:100%;
		height:100%;
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	}
	.bg{
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    z-index:0;
	    bottom:0;
	    background-image: url(../img/bg.jpg);
	    background-size: 100% 100%;
	    background-repeat: no-repeat;
	    background-position: center;
	}
	.top{
		position: fixed;
		width:100%;
		height:110px;
		z-index: 1;
		/*background-color: #3b75e0;*/
	
	}
	.headImage{
		width:60px;
		height:60px;
		margin-left: 20px;
		img{
			vertical-align: top;
			width:100%;
			height:100%;
		}
	}
	.top-right{
		padding-left:5px;
	}
	.userName{
		color:#e9f823;
		font-size:30px;
		font-weight: 600;
	}
	.desc{
		color:#fff;
		font-size:24px;
		margin-left: 12px;
		span{
			color:#e9f823;
			font-size:28px;
			font-weight: 600;
		}
	}
	.wrapper{
		width:750px;
		position: fixed;
	    top: 175px;
	    left: 50%;
	    right: 0;
	    bottom:0;
	    margin-left: -375px;
	    z-index:2;
	 	overflow: hidden;
	}
	
	
	
	/*画图*/
	.frst{
		width:150px;
		position: absolute;
		left:0;
	}
	.right{
		width:150px;
		position: absolute;
		right:0;
	}
	.frst-one{
		top:0;
	}
	.frst-two{
		top:110px;
	}
	.frst-three{
		top:210px;
	}
	.frst-four{
		top:320px;
	}
	.frst-five{
		top:420px;
	}
	.frst-six{
		top:540px;
	}
	.frst-seven{
		top:640px;
	}
	.frst-eight{
		top:760px;
	}
	.text{
		width:30px;
		color:#fff;
		font-size:18px;
	}
	.pic{
		z-index: 100;
		width:50px;
		height:50px;
		border-radius:50%;
		img{
			display: block;
			width:100%;
			height:100%;
			border-radius:50%;
		}
	}
	.trans-line{
		width:70px;
		border-bottom:4px solid #fff;
	}
	.trans-line.active{
		border-bottom:4px solid #fef102;
	}
	.ver-line-top{
		height:30px;
		position: absolute;
		right:0;
		top:24px;
		border-left:4px solid #fff;
	}
	.ver-line-top.active{
		border-left:4px solid #fef102;
	}
	.ver-line-top.left{
		left:0;
	}
	.ver-line-bottom{
		height:50px;
		position: absolute;
		right:0;
		bottom:24px;
		border-left:4px solid #fff;
	}
	.ver-line-bottom.active{
		border-left:4px solid #fef102;
	}
	.ver-line-bottom.left{
		left:0;
	}
	.text-name{
		margin-top: 6px;
		color:#fff;
		font-size:18px;
	}
	
	/*第二级*/
	.abs{
		position: absolute;
		left:120px;
	}
	.abs-right{
		position: absolute;
		right:120px;
	}
	.second-one{
		top:50px;
	}
	.second-two{
		top:260px;
	}
	.second-three{
		top:470px;
	}
	.second-four{
		top:690px;
	}
	/*第二级横线*/
	.lineW{
		width:40px;
	}
	.abs-trans{
		position: absolute;
		left:170px;
	}
	.abs-trans-right{
		position: absolute;
		right:170px;
	}
	.second-trans-one{
		top:70px;
	}
	.second-trans-two{
		top:283px;
	}
	.second-trans-three{
		top:492px;
	}
	.second-trans-four{
		top:706px;
	}
	
	/*第二级竖线*/
	.lineH{
		height:82px;
	}
	.abs-ver{
		position: absolute;
		left:210px;
	}
	.abs-ver-right{
		position: absolute;
		right:210px;
	}
	.second-ver-one{
		top:70px;
	}
	.second-ver-two{
		top:204px;
	}
	.second-ver-three{
		top:492px;
	}
	.second-ver-four{
		top:627px;
	}
	/*第三级*/
	.abs-third-left{
		position: absolute;
		left:190px;
	}
	.abs-third-right{
		position: absolute;
		right:190px;
	}
	.third-one{
		top:152px;
	}
	.third-two{
		top:574px;
	}
	/*第三极横线*/
	.abs-trans-third{
		position: absolute;
		left:240px;
	}
	.abs-trans-third-right{
		position: absolute;
		right:240px;
	}
	.third-trans-one{
		top:175px;
	}
	.third-trans-two{
		top:595px;
	}
	/*第三级竖线*/
	.lineH1{
		height:187px;
	}
	.abs-ver-third{
		position: absolute;
		left:280px;
	}
	.abs-ver-third-right{
		position: absolute;
		right:280px;
	}
	.third-ver-one{
		top:175px;
	}
	.third-ver-two{
		top:412px;
	}
	/*左边第四级*/
	.abs-fourth-left{
		position: absolute;
		left:260px;
	}
	.abs-fourth-right{
		position: absolute;
		right:260px;
	}
	.fourth-one{
		top:362px;
	}
	/*第四级横线*/
	.lineW1{
		width:68px;
	}
	.abs-trans-fourth{
		position: absolute;
		left:310px;
	}
	.abs-trans-fourth-right{
		position: absolute;
		right:310px;
	}
	.fourth-trans-one{
		top:385px;
		
	}
	
	/*冠军*/
	.pic-numberOne{
		position: absolute;
		left:350px;
		top:200px;
	}
	.numberOne-name{
		position: absolute;
		min-width: 80px;
		text-align: center;
		font-size:28px;
		color:#fff;
		left:335px;
		top:260px;
	}
	/*冠军竖线*/
	.numberOne{
		position: absolute;
		left:372px;
		top:304px;
		height:85px;
	}
	
	/*奖杯*/
	.cup{
		position: absolute;
		width:200px;
		height:200px;
		left:280px;
		top:-5px;
		/*width:57px;
		height:115px;
		left:350px;
		top:60px;*/
	}
	.ewm{
		position: absolute;
		width:260px;
		left:50%;
		bottom:150px;
		margin-left: -130px;
		div:nth-child(1){
			width:100%;
			text-align: center;
			img{
				vertical-align: top;
				width:150px;
				height:150px;
			}
		}
		div:nth-child(2){
			text-align: center;
			color:#fff;
			margin-top: 10px;
			font-size:20px;
		}
	}
	/*底部样式*/
	.bottom{
		width:100%;
		height:90px;
		position: absolute;
		left:0;
		bottom:0;
		color:#fff;
		text-align: center;
		span{
			font-size:28px;
			font-weight: 600;
			color:#e9f823;
		}
	}
	.imageBox{
		position: absolute;
		width:100%;
		height:100%;
		left:0;
		top:0;
		z-index:99999;
	}
	.yuju{
		position: absolute;
		width:90%;
		padding:10px 10px;
		/*overflow: hidden;*/
		box-sizing: border-box;
		font-size:26px;
		left:5%;
		 /*transform:translate(-50%,0);*/
		text-align: center;
		color:yellow;
		/*border:4px solid #222;*/
		top:90px;
		/*background-color: #fff;*/
		border-radius:20px;
		
		
		/*向上*/
			.triangle_border_up{
			    width:0;
			    height:0;
			    border-width:0 16px 16px;
			    border-style:solid;
			    border-color:transparent transparent #333;/*透明 透明  灰*/
			   border-bottom-color:transparent transparent #fff;/*透明 透明  灰*/
			    position:absolute;
			    /*z-index: 99;*/
			    left:40%;
				top:-16px;
				margin-left: -26px;
			}
			.triangle_border_up span{
			    display:block;
			    width:0;
			    height:0;
			    border-width:4px 38px 38px;
			    border-style:solid;
			    border-color:transparent transparent #fff;/*透明 透明  黄*/
			    position:absolute;
			    top:1px;
			    left:-38px;
			   
			}
		/*.whitemask-line{
			position: absolute;
			width:52px;
			height:29px;
			left:50%;
			top:-27px;
			z-index: 999;
			margin-left: -26px;
			background-image: url(../img/sanjiao.png);
		    background-size: 100% 100%;
		    background-repeat: no-repeat;
		    background-position: center;
		}*/
		.whitemask{
			width:60%;
			height:6px;
			position: absolute;
			left:50%;
			top:0px;
			z-index: 9999;
			background-color: #fff;
			transform:translate(-50%,0);
		}
	}
	.hengcenter{
		  -webkit-box-pack:center;
		  box-pack:center;
		}
		.appicon{
			width:66px;
			height:66px;
			background-image: url(../img/appicon.png);
		    background-size: 100% 100%;
		    background-repeat: no-repeat;
		    margin-right: 20px;
		    background-position: center;
		}
		
	</style>