<style scoped>
div {
  float: left;
  margin: 6px 6px 6px 0;
  width: 145px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 100px;
  color: #5c6b77;
  transition: all .2s ease;
  position: relative;
  padding-top: 10px;
}
div:hover {
  color: #00BCD4;
}
div > p {
  padding-top: 15px;
}
</style>

<template>
  <div>
    <Icon :type="type" :size="32" />
    <p> {{ type }} </p>
  </div>
</template>

<script>
export default {
  name: 'IonicX',
  props: [ 'type' ],
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
