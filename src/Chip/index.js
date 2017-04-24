import acChip from './src/Chip';

acChip.install = function(Vue) {
  Vue.component(acChip.name, acChip);
};

export default acChip;
