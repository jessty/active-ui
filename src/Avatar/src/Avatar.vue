<template>
  <img
    class="ac-Avatar"
    :src='url'
    :shape='shape'
    :style="[
      style,
      shape != 'square' ? { borderRadius: '50%' } : { borderRadius: '0' },
      size ? { height: size + 'px', width: size + 'px' } : { height: '40px', width: '40px' }
    ]"
  />
</template>

<script>
  export default {
    name: 'acAvatar',
    data(){
      return {
        borderRadius: {}
      }
    },
    props: {
      url: {
        type: String,
        default: ""
      },
      shape: {
        type: String,
        default: 'circle'
      },
      style: {
        type: Object
      },
      size: {
        type: Number,
        default: 40
      }
    },
  };
</script>
