import acButton from './src/button';

acButton.install = function(Vue) {
  Vue.component(acButton.name, acButton);
};

export default acButton;
