<template>
  <div class="top-menu-container">
    <ColorPicker @onSelectionChanged="onColorChanged" />
    <div class="slider-container">
      <Slider :value="8" @onChange="changeFontSize" />
    </div>
    <div class="text-styles">
      <span class="style-icon" @click="toggleFontWeight">
        <i class="fa fa-bold" aria-hidden="true"></i>
      </span>
      <span class="style-icon" @click="toggleFontStyle">
        <i class="fa fa-italic" aria-hidden="true"></i>
      </span>
      <span class="style-icon" @click="toggleUnderline">
        <i class="fa fa-underline" aria-hidden="true"></i>
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
  name: "TextEditingMenu",
  components: {
    ColorPicker,
    Slider,
  },
})
export default class TextEditingMenu extends Vue {
  isBold = false;
  isItalic = false;
  isUnderlined = false;
  color = "";

  changeFontSize(size: string): void {
    EditingModule.changeTextStyle({ fontSize: parseInt(size, 10) });
  }
  onColorChanged(color: string): void {
    if (color !== this.color) {
      this.color = color;
      EditingModule.changeTextStyle({ fill: color });
    }
  }
  toggleFontWeight(): void {
    this.isBold = !this.isBold;
    EditingModule.changeTextStyle({
      fontWeight: this.isBold ? "bold" : undefined,
    });
  }
  toggleFontStyle(): void {
    this.isItalic = !this.isItalic;
    EditingModule.changeTextStyle({
      fontStyle: this.isItalic ? "italic" : "normal",
    });
  }
  toggleUnderline(): void {
    this.isUnderlined = !this.isUnderlined;
    EditingModule.changeTextStyle({
      textDecoration: this.isUnderlined ? "underline" : undefined,
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