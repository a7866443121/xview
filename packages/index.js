/**
 * @author monkeywang
 * Date: 17/11/9
 */
import xButton from './button/index.js';
import xRow from './row/index';
import xTag from './tag/index';
import xShowMore from './show-more/index';
import xLimitTextArea from './limit-textarea/index';
import MetaInfo from './meta-info/index';
import xAlert from './alert/index';
import xLoadingBar from './loading-bar/index';
import xShade from './shade/index';

const components = [
  xButton,
  xRow,
  xTag,
  xShowMore,
  xLimitTextArea,
  xAlert,
  xShade
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = xLoadingBar
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
  MetaInfo,
  xAlert,
  xLoadingBar,
  xShade,
}
