<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
  >
    <title :id="iconName" lang="en">{{ iconName }}</title>
    <g :fill="iconColor">
      <!-- <slot /> -->
      <path
        id="Drawing_1"
        data-name="Drawing 1"
        d="M4876-9561h-27a1,1,0,0,1-1-1v-27a1,1,0,0,1,1-1h27a1,1,0,0,1,1,1v27A1,1,0,0,1,4876-9561Zm-26-28a1,1,0,0,0-1,1v25a1,1,0,0,0,1,1h25a1,1,0,0,0,1-1v-25a1,1,0,0,0-1-1Z"
        transform="translate(-4848.001 9590)"
      />
    </g>
  </svg>
</template>
<script lang='ts'>
export default {
  props: {
    viewBox: { type: String, default: "0 0 24 24" },
    iconName: { type: String, default: "" },
    width: { type: [Number, String], default: 18 },
    height: { type: [Number, String], default: 18 },
    iconColor: { type: String, default: "#345343" },
  },
};
</script>