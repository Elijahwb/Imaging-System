<template>
  <div class="color-picker-container">
    <div
      v-for="(item, index) in colors"
      :key="index"
      class="color-container"
      :class="
        selectedColor == item.value ? 'selected-color' : 'unselected-color'
      "
      @click="applyColor(item.value)"
    >
      <div class="color-item" :style="{ background: item.value }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Component from "vue-class-component";
import { Colors, ColorsTypes, EditType } from "@/types";

const ColorPickerProps = Vue.extend({
  props: {
    editType: { type: String as PropType<EditType>, default: "text" },
  },
});

@Component({
  name: "ColorPicker",
})
export default class ColorPicker extends ColorPickerProps {
  colors = ColorsTypes;
  selectedColor = Colors.black.toString();

  applyColor(value: string): void {
    this.selectedColor = value;
    this.$emit("onSelectionChanged", value);
  }
}
</script>

<style scoped>
.color-item {
  width: 20px;
  height: 20px;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.color-picker-container {
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
}
.selected-color {
  border: 1px solid #ff00ff;
}
.unselected-color {
  border: unset;
}
</style>