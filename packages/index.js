import xButton from './button/index.js';
import xRow from './row/index';
import xTag from './tag/index';
import xShowMore from './show-more/index';
import xLimitTextArea from './limit-textarea/index';
import xAlert from './alert/index';
import xLoadingBar from './loading-bar/index';
import xShade from './shade/index';
import MetaInfo from './meta-info/index';
import {xFiexdColumnTable, xResizeTable} from './table/index';


const components = [
  xButton,
  xRow,
  xTag,
  xShowMore,
  xLimitTextArea,
  xAlert,
  xResizeTable,
	xFiexdColumnTable,
]
const install = function(Vue) {
  if (install.installed) return
  //注册组件
  components.map(component => Vue.component(component.name, component));
  //注册loading
  Vue.prototype.$loading = xLoadingBar;
  //注册蒙版
Vue.prototype.$shade = xShade;
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
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
}
