<template>
  <div class="top-menu-container">
    <ColorPicker @onSelectionChanged="onColorChanged" />
    <div class="slider-container">
      <Slider :value="5" @onChange="onSliderChange" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ColorPicker from "../ColorPicker.vue";
import Slider from "@/components/global/Ranger.vue";
import EditingModule from "@/store/modules/2d.editing.module";

@Component({
  name: "FreeDrawingEditingMenu",
  components: {
    ColorPicker,
    Slider,
  },
})
export default class FreeDrawingEditingMenu extends Vue {
  brushWidth = 5;
  color = "#000000";
  onSliderChange(size: string): void {
    this.brushWidth = parseInt(size, 10);
    EditingModule.startDrawing({ width: this.brushWidth, color: this.color });
  }
  onColorChanged(color: string): void {
    this.color = color;
    EditingModule.startDrawing({ width: this.brushWidth, color: this.color });
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