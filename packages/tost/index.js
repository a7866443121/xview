import Vue from 'vue';
import tost from './src/tost.vue'

export default function(o){
  var option = {};
  if(typeof o == 'string'){
    option = {
      message: arguments[0] || ' ',
      type: arguments[1] || 'success',
      times: arguments[2] || 3000,
      icon: arguments[3]
    }
  }else{
    Object.assign(option,o)
  }

  var div = document.createElement('div');
  //新建实例
  var vueClass = Vue.extend(tost);
  //传入值
  let vm = new vueClass({
      el: div,
      propsData: {
          message: option.message,
          type: option.type,
          times: option.times,
          icon: option.icon
      },
  });
  //挂载后获取节点对象
  var el = vm.$mount().$el;
  //加入dom树中
  document.body.appendChild(el);
  //固定时间消除
  var stm = setTimeout(function(){
    document.body.removeChild(el);
    clearTimeout(stm);
  }, option.times || 3000);
}
