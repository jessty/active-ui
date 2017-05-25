<style scoped>
div{
  width: 25%;
  margin: 20px 0;
  float: left;
}
ul li {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  margin: 0;
  color: #000;
  font-size: 14px;
}
</style>

<template>
  <div>
    <ul>
      <li :style="{background: chmp.value, color: chmp.fgColor}">
        <span style="font-size:16px;margin-bottom:30px;">{{text}}</span>
      </li>
      <li :style="{background: chmp.value, color: chmp.fgColor}">
        <span>{{chmp.name}}</span>
        <span>{{chmp.value}}</span>
      </li>
      <li v-for="item in colors" :style="{background:item.value, color:item.fgColor}">
        <span>{{item.name}}</span>
        <span>{{item.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import _colors from "./colors";
import { getContrastRatio } from "./../../../../src/utils/colorManipulator"

export default {
  props: [ 'text' ],
  data(){
    return {
      chmp: {},
      colors: []
    }
  },
  mounted() {
    let set = _colors[this.text];
    for(let item in set) {
      const bgColor = set[item];
      let fgColor = "rgb(0,0,0)";
      const constrastRadio = getContrastRatio(bgColor, fgColor);
      if(constrastRadio < 7) { fgColor = "rgb(255,255,255)"; }
      if(item.indexOf('500') > -1) {
        this.chmp = {
          name: item,
          value: bgColor.toUpperCase(),
          fgColor: fgColor
        };
      }
      this.colors.push({
        name: item,
        value: bgColor.toUpperCase(),
        fgColor: fgColor
      });
    }
  }
}
</script>
