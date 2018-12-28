<template>
	<div class="dd">
		<div class="bg">
			<div class="top">
				<div><img src="../img/8.png" alt="" /></div>
				<!--<div>请在每组选出一支球队晋级</div>-->
			</div>
			<div class="btn">
					<img @click="nextStep()" src="../img/untel.jpg" />
				</div>
			<div class="ub ub-ac wrapper">
				<div class="content">
					<div class="ub ub-ac ub-pj secondItem" v-for="(item, index) in getData" :key="index">
						<div class="ub ub-ac left" :class="{active:item.left.isSelected}" @click="selectTeam(item.left,index)">
							<div><img :src="item.left.imgUrl" alt="" /></div>
							<div>{{item.left.teamName}}</div>
							<span></span>
						</div>
						<span class="vs"></span>
						<div class="ub ub-ac ub-pe right" :class="{active:item.right.isSelected}" @click="selectTeam(item.right,index)">
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
	export default {
		data() {
			return {
				show: false,
				copyData: []
			}
		},
		computed: {
			getData() {
				console.log(this.$store.state.second.data, 111)
				return this.$store.state.second.data;
			}
		},
		mounted() {
			var that = this
			var data = app.getsessionStorage('secondData');

			console.log(data)
			data = data.map(function(item) {
				item.selectGroup[0].isSelected = false;
				item.selectGroup[1].isSelected = false;
				return item;
			});
			console.log(data, 222)
			data = [{
					'left': data[0].selectGroup[0],
					'right': data[1].selectGroup[1]
				},
				{
					'left': data[1].selectGroup[0],
					'right': data[0].selectGroup[1]
				},
				{
					'left': data[2].selectGroup[0],
					'right': data[3].selectGroup[1]
				},
				{
					'left': data[3].selectGroup[0],
					'right': data[2].selectGroup[1]
				},
				{
					'left': data[4].selectGroup[0],
					'right': data[5].selectGroup[1]
				},
				{
					'left': data[5].selectGroup[0],
					'right': data[4].selectGroup[1]
				},
				{
					'left': data[6].selectGroup[0],
					'right': data[7].selectGroup[1]
				},
				{
					'left': data[7].selectGroup[0],
					'right': data[6].selectGroup[1]
				}
			]
		
			console.log(data, 333)
			this.copyData = data;
			this.$store.dispatch('getSecond', {
				data
			});
		},
		methods: {
			//跳到下一步
			nextStep() {
				if(this.$store.getters.r2.every(item => item.selectGroup.isSelected === true)) {
					app.setsessionStorage('thirdData', this.$store.getters.r2);
					this.$router.push({
						path: '/third'
					});
				} else {
					app.toast('请选择8支球队');
				}
			},
			selectTeam(item, index) {
				console.log(1111)
				console.log(item)
				var that = this;
				if(index === 0) {
					if(item.message === 'A1') {
						if(item.isSelected === false) {
							that.copyData[0].left.isSelected = true;
							that.copyData[0].right.isSelected = false;
						} else {
							that.copyData[0].left.isSelected = false;
						}
					} else {
						if(item.isSelected === false) {
							that.copyData[0].right.isSelected = true;
							that.copyData[0].left.isSelected = false;
						} else {
							that.copyData[0].right.isSelected = false;
						}
					}
					var data = that.copyData;
					this.$store.dispatch('getSecond', {
						data
					});
				}
				if(index === 1) {
					if(item.message == 'B1') {
						if(item.isSelected === false) {
							that.copyData[1].left.isSelected = true;
							that.copyData[1].right.isSelected = false;
						} else {
							that.copyData[1].left.isSelected = false;
						}
					} else {
						if(item.isSelected === false) {
							that.copyData[1].right.isSelected = true;
							that.copyData[1].left.isSelected = false;
						} else {
							that.copyData[1].right.isSelected = false;
						}
					}
					var data = that.copyData;
					this.$store.dispatch('getSecond', {
						data
					});
				}
				if(index === 2) {
					if(item.message == 'C1') {
						if(item.isSelected === false) {
							that.copyData[2].left.isSelected = true;
							that.copyData[2].right.isSelected = false;
						} else {
							that.copyData[2].left.isSelected = false;
						}
					} else {
						if(item.isSelected === false) {
							that.copyData[2].right.isSelected = true;
							that.copyData[2].left.isSelected = false;
						} else {
							that.copyData[2].right.isSelected = false;
						}
					}
					var data = that.copyData;
					this.$store.dispatch('getSecond', {
						data
					});
				}
				if(index === 3) {
					if(item.message == 'D1') {
						if(item.isSelected === false) {
							that.copyData[3].left.isSelected = true;
							that.copyData[3].right.isSelected = false;
						} else {
							that.copyData[3].left.isSelected = false;
						}
					} else {
						if(item.isSelected === false) {
							that.copyData[3].right.isSelected = true;
							that.copyData[3].left.isSelected = false;
						} else {
							that.copyData[3].right.isSelected = false;
						}
					}
					var data = that.copyData;
					this.$store.dispatch('getSecond', {
						data
					});
				}
				if(index === 4) {
					if(item.message == 'E1') {
						if(item.isSelected === false) {
							that.copyData[4].left.isSelected = true;
							that.copyData[4].right.isSelected = false;
						} else {
							that.copyData[4].left.isSelected = false;
						}
					} else {
						if(item.isSelected === false) {
							that.copyData[4].right.isSelected = true;
							that.copyData[4].left.isSelected = false;
						} else {
							that.copyData[4].right.isSelected = false;
						}
					}
					var data = that.copyData;
					this.$store.dispatch('getSecond', {
						data
					});
				}
				if(index === 5) {
					var F3 = {};
					if(item.message == 'F1') {
						if(item.isSelected === false) {
							that.copyData[5].left.isSelected = true;
							that.copyData[5].right.isSelected = false;
							F3 = that.copyData[5].left;
						} else {
							that.copyData[5].left.isSelected = false;
						}
					} else {
						if(item.isSelected === false) {
							that.copyData[5].right.isSelected = true;
							that.copyData[5].left.isSelected = false;
							F3 = that.copyData[5].right;
						} else {
							that.copyData[5].right.isSelected = false;
						}
					}
					var data = that.copyData;
					this.$store.dispatch('getSecond', {
						data
					});
				}
				if(index === 6) {
					var G3 = {};
					if(item.message == 'G1') {
						if(item.isSelected === false) {
							that.copyData[6].left.isSelected = true;
							that.copyData[6].right.isSelected = false;
							G3 = that.copyData[6].left;
						} else {
							that.copyData[6].left.isSelected = false;
						}
					} else {
						if(item.isSelected === false) {
							that.copyData[6].right.isSelected = true;
							that.copyData[6].left.isSelected = false;
							G3 = that.copyData[6].right;
						} else {
							that.copyData[6].right.isSelected = false;
						}
					}
					var data = that.copyData;
					this.$store.dispatch('getSecond', {
						data
					});
				}
				if(index === 7) {
					var H3 = {};
					if(item.message == 'H1') {
						if(item.isSelected === false) {
							that.copyData[7].left.isSelected = true;
							that.copyData[7].right.isSelected = false;
							H3 = that.copyData[7].left;
						} else {
							that.copyData[7].left.isSelected = false;
						}
					} else {
						if(item.isSelected === false) {
							that.copyData[7].right.isSelected = true;
							that.copyData[7].left.isSelected = false;
							H3 = that.copyData[7].right;
						} else {
							that.copyData[7].right.isSelected = false;
						}
					}
					var data = that.copyData;
					this.$store.dispatch('getSecond', {
						data
					});
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
		div:nth-child(1) {
			padding: 20px 0;
			text-align: center;
			font-size: 0;
			img {
				vertical-align: top;
				width: 305px;
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
	
	
</style>