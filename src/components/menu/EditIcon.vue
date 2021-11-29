<template>
  <div class="edit-icon" @click="$emit('onClick')">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function,
  },
};
</script>

<style scoped>
.edit-icon {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #484545;
  text-align: center;
  justify-content: center;
  position: relative;
  margin-top: 3vh;
  cursor: pointer;
  padding-top: 9px;
}
.tooltip {
  position: relative; /* making the .tooltip span a container for the tooltip text */
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
}

.tooltip:before {
  content: attr(data-text); /* here's the magic */
  position: absolute;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}

.tooltip:hover:before {
  display: block;
}
.tooltip.left:before {
  /* reset defaults */
  left: initial;
  margin: initial;

  /* set new values */
  right: 100%;
  margin-right: 15px;
}
</style>