import icon from './src/icon.vue';

icon.install = function (Vue) {
  Vue.component(icon.name, icon);
};

export default icon;
