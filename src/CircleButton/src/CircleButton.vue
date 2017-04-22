<template>
  <button  class="ac-CirBtn"
    @click="handleClick"
    :primary="primary"
    :secondary="secondary"
    :disabled="disabled"
    :mini="mini"
    :style="style"
    :class="[
      mini ? 'ac-CirBtn-mini' : '',
      disabled || primary || secondary || (style && style.backgroundColor) ? '' : 'ac-CirBtn-default',
      disabled ? 'ac-CirBtn-disabled' : '',
      primary ? 'ac-CirBtn-primary' : '',
      secondary ? 'ac-CirBtn-secondary' : '',
    ]"
  >
    <i :class="['ac-fa', 'ac-fa-' + icon]"></i>
  </button>
</template>

<script>
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
      icon: {
        type: String,
        default: ''
      },
      mini: {
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
