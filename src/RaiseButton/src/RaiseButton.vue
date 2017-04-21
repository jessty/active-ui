<template>
  <button :disabled="disabled" class="ac-RaiseButton"
    @click="handleClick"
    :label="label"
    :class="[
      label ? 'ac-RaiseButton-' + label : ''
    ]"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: 'RaiseButton',
    props: {
      label: {
        type: String,
        default: 'default'
      },
      disabled: Boolean,
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
