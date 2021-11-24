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

<script>
import {
  GeneralEditing,
  TreatmentEditing,
  ViewPropertyEditing,
  ObjectEditing,
  MeasurementEditing,
  DrawingEditing,
} from "../";

export default {
  name: "SideBar3D",
  components: {
    GeneralEditing,
    TreatmentEditing,
    ViewPropertyEditing,
    ObjectEditing,
    MeasurementEditing,
    DrawingEditing,
  },
};
</script>

<style  scoped>
.side-bar {
  max-width: 270px;
}
</style>>
