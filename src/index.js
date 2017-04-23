import acAvatar from './Avatar/'
import acChip from './Chip/'
import acCircleButton from './CircleButton/'
import acFlatButton from './FlatButton/'
import acRaiseButton from './RaiseButton/'



import './styles/main.less'

const Components = {
  acAvatar,
  acChip,
  acCircleButton,
  acFlatButton,
  acRaiseButton,
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
