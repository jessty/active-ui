<style scoped>
input{
  width: 500px;
  box-sizing: border-box;
  border: 0;
  border-radius: 4px;
  background: #f5f5f5;
  text-align: center;
  font-size: 14px;
  outline: none;
  margin: 0 auto;
  padding: 8px 0;
}
input:focus::-webkit-input-placeholder{
  color: transparent;
}
</style>

<template>
  <div>
    <h1>Icon 图标</h1>
    <h2>概述</h2>
    <p>activeui 的图标使用开源项目 <a href="http://ionicons.com/"><Icon type="ionic" /> ionicons</a></p>

    <h2>示例</h2>
    <p class="sep20"></p>
    <p class="center"> <input placeholder="输入英文关键词搜索，比如 home" v-model="filter"/> </p>
    <p class="sep10"></p>
    <!-- <p class="center"> 点击下面的图标按钮可以直接复制组件代码 </p> -->
    <p class="sep20"></p>

    <IonicX
      :type="item"
      :key="item"
      v-for="item in icons"
      @click.native="copyCode(item)"
    />

  </div>
</template>

<script>
import IonicX from "./icon/IonicX.vue";
import iconset from "./icon/iconset";

export default {
  components: { IonicX },
  data() {
    return {
      filter: "",
      icons: iconset
    }
  },
  methods: {
    copyCode(value) {
      document.execCommand('Copy');
    }
  },
  watch: {
    filter(){
      let self = this;
      if (self.filter === "") {
        self.icons = iconset;
      } else {
        self.icons = [];
        for( let i = 0; i < iconset.length; i ++ ) {
          if( iconset[i].indexOf((self.filter).toLowerCase()) != -1 ) {
            self.icons.push(iconset[i]);
          }
        }
      }
    }
  }
}
</script>
