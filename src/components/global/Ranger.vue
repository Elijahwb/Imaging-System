<template>
  <div class="grid-container">
    <label class="item1"><slot></slot></label>
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      :value="value"
      @change="$emit('onChange', $event.target.value)"
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
    onChange: Function,
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
/* .slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
} */
.slider {
  /* width: 100%; */
  height: 10px;
  -webkit-appearance: none;
  background: rgb(54, 53, 53);
  outline: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--dsBrandColor);
  cursor: pointer;
  border: 4px solid #333;
  box-shadow: -407px 0 0 400px var(--dsBrandColor);
}
</style>