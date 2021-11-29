<template>
  <div class="top-menu-container">
    <ColorPicker />
    <div class="slider-container">
      <Slider :value="8" @onChange="changeFontSize" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ColorPicker from "../ColorPicker.vue";
import Slider from "@/components/global/Ranger.vue";

@Component({
  name: "TextEditingMenu",
  components: {
    ColorPicker,
    Slider,
  },
})
export default class TextEditingMenu extends Vue {
  changeFontSize(size: string): void {
    const brushWidth = parseInt(size, 10);
  }
}
</script>

<style scoped>
.top-menu-container {
  display: flex;
}
.slider-container {
  width: 300px;
}
</style>