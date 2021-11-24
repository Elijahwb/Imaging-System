<template>
  <EditingCard heading="Treatment">
    <div class="grid-container">
      <p class="text-center">Annotation List</p>
      <div class="container-list"></div>
      <p class="text-center">Object List</p>
      <div class="container-list"></div>
    </div>
  </EditingCard>
</template>

<script lang='ts'>
import EditingCard from "./EditingCard.vue";
export default {
  name: "TreatmentEditing",
  components: {
    EditingCard,
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto;
  width: 100%;
}
.container-list {
  border: solid 2px;
  /* margin: 2px; */
  width: 100%;
  height: 150px;
}
.text-center {
  text-align: center;
}
</style>