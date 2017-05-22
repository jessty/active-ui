<template>
  <button >
    <span><slot></slot></span>
  </button>
</template>

<script>
  const prefixCls = 'ac-btn';
  export default{
    name: 'Button',
    data () {
      return {
      };
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt);
      }
    },
    mounted () {
      // this.showSlot = this.$slots.default !== undefined;
    }
  }
</script>
