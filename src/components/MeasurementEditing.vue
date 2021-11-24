<template>
  <EditingCard heading="Measurement">
    <div class="row">
      <div class="col-4">
        <Measurement1 class="edit-menu-icon" />
      </div>
      <div class="col-4">
        <Measurement2 class="edit-menu-icon" />
      </div>
      <div class="col-4">
        <Measurement3 class="edit-menu-icon" />
      </div>
      <div class="col-4">
        <Measurement4 class="edit-menu-icon" />
      </div>
      <div class="col-4">
        <Measurement5 class="edit-menu-icon" />
      </div>
    </div>
  </EditingCard>
</template>

<script lang='ts'>
import EditingCard from "./EditingCard.vue";
import Measurement1 from "@/assets/icons/Measurement1.svg";
import Measurement2 from "@/assets/icons/Measurement2.svg";
import Measurement3 from "@/assets/icons/Measurement3.svg";
import Measurement4 from "@/assets/icons/Measurement4.svg";
import Measurement5 from "@/assets/icons/Measurement5.svg";

export default {
  name: "MeasurementEditing",
  components: {
    EditingCard,
    Measurement1,
    Measurement2,
    Measurement3,
    Measurement4,
    Measurement5,
  },
  methods: {
    onClicked(): void {
      console.log("Yeah clicked");
    },
  },
};
</script>
