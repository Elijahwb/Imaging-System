<template>
  <div class="top-menu-container">
    <ColorPicker />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ColorPicker from "./ColorPicker.vue";

@Component({
  name: "TopFloatingMenu",
  components: {
    ColorPicker,
  },
})
export default class TopFloatingMenu extends Vue {}
</script>

<style scoped>
.top-menu-container {
  /* background: #484545; */
}
</style>