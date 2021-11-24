<template>
  <div class="grid-container">
    <label class="item1"><slot></slot></label>
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      :value="value"
      class="slider item2"
    />
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    label: String,
    value: { default: 0 },
  },
};
</script>

<style scoped>
.item1 {
  grid-area: icon;
}
.item2 {
  grid-area: slider;
}
.grid-container {
  display: grid;
  grid-template-areas: "icon slider slider";
  padding: 8px 8px;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 8px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: #ff9500;
  cursor: pointer;
  border-radius: 8px;
  color: #43e5f7;
}

.slider::-webkit-slider-runnable-track {
  color: #ff9500;
}

.slider::-moz-range-progress {
  background: #ff9500;
}

.slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: #ff9500;
  cursor: pointer;
  border-radius: 8px;
}
</style>