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
}
</style>