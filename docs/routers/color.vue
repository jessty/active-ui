<template>
  <div>
    <h1>颜色</h1>
    <p>我们选取了很棒的颜色供大家使用</p>
    <!-- <p class="sep10"></p> -->
    <ColorX text="Red"/>
    <ColorX text="Pink"/>
    <ColorX text="Purple"/>
    <ColorX text="Deep Purple"/>
    <ColorX text="Indigo"/>
    <ColorX text="Blue"/>
    <ColorX text="Light Blue"/>
    <ColorX text="Cyan"/>
    <ColorX text="Teal"/>
    <ColorX text="Green"/>
    <ColorX text="Light Green"/>
    <ColorX text="Lime"/>
    <ColorX text="Yellow"/>
    <ColorX text="Amber"/>
    <ColorX text="Orange"/>
    <ColorX text="Deep Orange"/>
    <ColorX text="Brown"/>
    <ColorX text="Blue Grey"/>
    <ColorX text="Grey"/>
  </div>
</template>

<script>
import ColorX from "./utils/color/colorx.vue"
export default {
  components: {
    ColorX
  },
  data() {
    return {
      colors: ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue', 'Cyan', 'Teal', 'Green', 'Light Green', 'Lime', 'Yellow', 'Amber', 'Orange', 'Deep Orange', 'Brown', 'Blue Grey', 'Grey']
    }
  },
}
</script>
