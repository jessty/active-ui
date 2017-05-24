import 'core-js/fn/array/find-index';

import Button from './components/button';
import Icon from './components/icon';

const activeui = {
  Button,
  Icon
};

const install = function (Vue, opts = {}) {
  Object.keys(activeui).forEach((key) => {
    Vue.component(key, activeui[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign( activeui, {install} );
