<template>
  <div class="top-menu-container">
    <ColorPicker @onSelectionChanged="onColorChanged" />
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
import EditingModule from "@/store/modules/2d.editing.module";
import { Colors, TextStyle } from "@/types";

@Component({
  name: "TextEditingMenu",
  components: {
    ColorPicker,
    Slider,
  },
})
export default class TextEditingMenu extends Vue {
  styles: TextStyle = {
    color: Colors.black,
    fontSize: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "overline",
    textAlign: "center",
  };
  changeFontSize(size: string): void {
    this.styles.fontSize = parseInt(size, 10);
    EditingModule.changeTextStyle(this.styles);
  }
  onColorChanged(color: string): void {
    this.styles.color = color;
    EditingModule.changeTextStyle(this.styles);
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