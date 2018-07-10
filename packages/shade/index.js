import shade from './src/shade'

shade.install = function(Vue) {
  Vue.component(shade.name, shade)
}

export default shade

