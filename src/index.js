import acRaiseButton from './RaiseButton/'
import acFlatButton from './FlatButton/'
import acCircleButton from './CircleButton/'
import Avatar from './Avatar/'
import './styles/main.less'

const Components = {
  acRaiseButton,
  acFlatButton,
  acCircleButton,
  Avatar
};

const install = function (Vue, locale) {
  for ( let i in Components ) {
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
