<template>
  <ThreeDframe />
</template>

<script lang='ts'>
import ThreeDframe from "@/components/3d/3dframe.vue";
import Vue from "vue";

export default Vue.extend({
  name: "3D",
  components: {
    ThreeDframe,
  },
});
</script>