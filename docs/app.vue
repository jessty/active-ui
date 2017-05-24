<style lang="less">
  @import "../src/styles/index.less";
  @import "./styles/normalize";
</style>
<style>
nav { margin: 20px 0 40px; width: 20%; float: left;}
ul { display: flex; flex-flow: column wrap; }
li { display: inline-block; }
/*li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px;}*/
.container{ padding: 10px 40px; }
nav + div { width: 80%; float: left;}
.v-link-active { color: #bbb; }
</style>

<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/button">Button</router-link></li>
        <li><router-link to="/color">Color</router-link></li>
        <li><router-link to="/icon">Icon</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {

      }
    },
    mounted: function() {

    },
    beforeDestroy: function() {

    },
    methods: {

    }
  }
</script>
