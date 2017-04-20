<template>
  <button :disabled="disabled" class="ac-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
      type ? 'ac-button--' + type : ''
    ]"
  >
  </button>
</template>

<script>
  export default {
    name: 'acButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      nativeType: {
        type: String,
        default: 'button'
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
