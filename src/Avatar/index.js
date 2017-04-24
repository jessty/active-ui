import acAvatar from './src/Avatar';

acAvatar.install = function(Vue) {
  Vue.component(acAvatar.name, acAvatar);
};

export default acAvatar;
