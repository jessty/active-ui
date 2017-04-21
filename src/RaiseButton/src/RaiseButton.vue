<template>
  <button  class="ac-RaiseBtn"
    @click="handleClick"
    :primary="primary"
    :secondary="secondary"
    :disabled="disabled"
    :style="style"
    :class="[
      disabled || primary || secondary || (style && style.backgroundColor) ? '' : 'ac-RaiseBtn-default',

      disabled ? 'ac-RaiseBtn-disabled' : '',
      primary ? 'ac-RaiseBtn-primary' : '',
      secondary ? 'ac-RaiseBtn-secondary' : '',
    ]"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
  import * as colors from './config/color'
  export default {
    name: 'RaiseButton',

    props: {
      default: {
        type: Boolean,
        default: false
      },
      primary: {
        type: Boolean,
        default: false
      },
      secondary: {
        type: Boolean,
        default: false
      },
      style: {
        type: Object
      },
      disabled: Boolean,
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      },
    }
  };
</script>
