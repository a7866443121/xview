import xButton from './button/index.js';
import xRow from './row/index';
import xTag from './tag/index';
import xIcon from './icon/index';
import xShowMore from './show-more/index';
import xLimitTextArea from './limit-textarea/index';
import xAlert from './alert/index';
import MetaInfo from './meta-info/index';
import {xFiexdColumnTable, xResizeTable} from './table/index';


import xLoadingBar from './loading-bar/index';
import xShade from './shade/index';
import xTost from './tost/index';


const components = [
  xIcon,
  xButton,
  xRow,
  xTag,
  xShowMore,
  xLimitTextArea,
  xAlert,
  xResizeTable,
	xFiexdColumnTable,
]

const glbComponents = [
  xLoadingBar,
  xShade,
  xTost
]
const install = function(Vue) {
  if (install.installed) return
  //注册组件
  components.map(component => Vue.component(component.name, component));
  
  //注册loading
  Vue.prototype.$loading = xLoadingBar;
  //注册蒙版
  Vue.prototype.$shade = xShade;
  //注册蒙版
  Vue.prototype.$Tost = xTost;
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  xIcon,
  xButton,
  xRow,
  xTag,
  xShowMore,
  xLimitTextArea,
  xAlert,
  xLoadingBar,
	xShade,
	xResizeTable,
	xFiexdColumnTable,
  MetaInfo,
  xTost
}
