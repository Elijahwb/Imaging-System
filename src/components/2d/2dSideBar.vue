<template>
  <div class="row">
    <div class="col side-bar">
      <GeneralEditing />
      <ViewPropertyEditing />
      <MeasurementEditing />
      <DrawingEditing />
      <ObjectEditing />
      <TreatmentEditing />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  GeneralEditing,
  TreatmentEditing,
  ViewPropertyEditing,
  ObjectEditing,
  MeasurementEditing,
  DrawingEditing,
} from "../";

export default Vue.extend({
  name: "SideBar",
  components: {
    GeneralEditing,
    TreatmentEditing,
    ViewPropertyEditing,
    ObjectEditing,
    MeasurementEditing,
    DrawingEditing,
  },
});
</script>>

<style  scoped>
.side-bar {
  max-width: 270px;
}
</style>>
