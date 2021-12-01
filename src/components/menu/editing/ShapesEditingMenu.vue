<template>
  <div class="top-menu-container">
    <ColorPicker @onSelectionChanged="onColorChanged" />
    <div class="slider-container">
      <Slider :value="8" @onChange="changeFontSize" />
    </div>
    <div class="text-styles">
      <span class="style-icon" @click="addShapeRect">
        <i class="fa fa-square-o" aria-hidden="true"></i>
      </span>
      <span class="style-icon" @click="addShapeCicle">
        <i class="fa fa-circle-o" aria-hidden="true"></i>
      </span>
      <span class="style-icon" @click="addShapeTriangle">
        <i class="fas fa-caret-up" aria-hidden="true"></i>
      </span>
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
  name: "ShapesEditingMenu",
  components: {
    ColorPicker,
    Slider,
  },
})
export default class ShapesEditingMenu extends Vue {
  isBold = false;
  isItalic = false;
  isUnderlined = false;
  color = "";

  changeFontSize(size: string): void {
    EditingModule.changeShapeStype({ strokeWidth: parseInt(size, 10) });
  }
  onColorChanged(color: string): void {
    if (color !== this.color) {
      this.color = color;
      EditingModule.changeShapeStype({ stroke: color });
    }
  }
  addShapeRect(): void {
    this.isBold = !this.isBold;
    EditingModule.addShape({
      type: "rect",
      options: {},
    });
  }
  addShapeCicle(): void {
    this.isItalic = !this.isItalic;
    EditingModule.addShape({
      type: "circle",
      options: {
        rx: 50,
        ry: 50,
      },
    });
  }
  addShapeTriangle(): void {
    this.isUnderlined = !this.isUnderlined;
    EditingModule.addShape({
      type: "triangle",
      options: {},
    });
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
.text-styles {
  display: block;
}
.style-icon {
  color: aliceblue;
  margin-right: 10px;
  padding: 5px 6px;
  background-color: #484545;
  border-radius: 3px;
  cursor: pointer;
}
</style>