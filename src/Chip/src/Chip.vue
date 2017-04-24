<template>
  <div class="ac-Chip">
    <span><slot></slot></span>
    <i class="ac-fa ac-fa-times" @click.stop="handleClose" v-if="closable"></i>
  </div>
</template>

<script>
  export default {
    name: 'acChip',
    props: {
      closable: Boolean,
      backgroundColor: String,
    },
    methods: {
      handleClose (evt) {
        this.$emit('close', evt);
      }
    }
  };
</script>
