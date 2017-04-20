import acButton from './button/'

const Components = [
  acButton
];

const install = function (Vue, locale) {
  for ( let i in components ) {
    Vue.component(i, Components[i]);
  }

  // Vue.directive('')
  window.acLocale = locale || 'zh'
}

if ( typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);  
}

Components.install = install;

module.exports = Components;
