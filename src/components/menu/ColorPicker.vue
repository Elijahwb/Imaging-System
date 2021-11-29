<template>
  <div class="color-picker-container">
    <div
      v-for="(item, index) in colors"
      :key="index"
      class="color-container"
      @click="applyColor(item.value)"
    >
      <div class="color-item" :style="{ background: item.value }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Component from "vue-class-component";
import { ColorsTypes, EditType } from "@/types";

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

  applyColor(value: string): void {
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
</style>