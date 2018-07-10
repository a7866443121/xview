<template>
  <div 
  	class="x-shade" 
  	:style="{
  		zIndex: zIndex[0]
  	}"
  >
  	啊啊啊啊
  </div>
</template>
<script>
export default {
	name: 'XShade',
  data() {
    return {
    	shadeList:[],
      zIndex: [],
    };
  },
  computed: {
  },
  mounted(){
  	this.shadeList = document.getElementsByClassName('shade');
  	this.getZIindex();
  	
  },
  methods: {
  	getZIindex(){
  		var _this = this;
  		if (_this.shadeList.length > 0) {
  			for (var i = 0; i < _this.shadeList.length; i++) {
  				_this.zIndex[index] = _this.shadeList[i].style.zIndex;
  				
  			}
  			_this.zIndex.sort(function(a,b){return b - a;});
  			//保证当前遮罩在所有遮罩中层级最高
  			_this.$el.style.zIndex = (_this.zIndex[0] - 0) + 1
  		} else{
  			_this.$el.style.zIndex = 9999;
  		}
			document.body.appendChild(_this.$el);
  	}
  }
};
</script>