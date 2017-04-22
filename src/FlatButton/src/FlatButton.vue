<template>
  <button  class="ac-FlatBtn"
    @click="handleClick"
    :primary="primary"
    :secondary="secondary"
    :disabled="disabled"
    :style="style"
    :class="[
      disabled || primary || secondary || (style && style.backgroundColor) ? '' : 'ac-FlatBtn-default',
      disabled ? 'ac-FlatBtn-disabled' : '',
      primary ? 'ac-FlatBtn-primary' : '',
      secondary ? 'ac-FlatBtn-secondary' : '',
    ]"
  >
    <i class="ac-fa ac-fa-spinner ac-fa-spin" v-if="!iconRight && loading"></i>
    <i :class="['ac-fa', 'ac-fa-' + icon]" v-if="!iconRight && icon && !loading"></i>
    <span><slot></slot></span>
    <i class="ac-fa ac-fa-spinner ac-fa-spin" v-if="iconRight && loading"></i>
    <i :class="['ac-fa', 'ac-fa-' + icon]" v-if="iconRight && icon && !loading"></i>
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
      iconRight: {
        type: Boolean,
        default: false
      },
      loading: Boolean,
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
