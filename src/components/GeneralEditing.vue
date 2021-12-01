<template>
  <EditingCard heading="General">
    <div class="row">
      <div class="col-4">
        <SearchIcon class="edit-menu-icon" @click="zoomChange('in')" />
      </div>
      <div class="col-4">
        <MenuIcon class="edit-menu-icon" @click="zoomChange('out')" />
      </div>
      <div class="col-4">
        <General3 class="edit-menu-icon" @click="addShape" />
      </div>
      <div class="col-4">
        <General4 class="edit-menu-icon" />
      </div>
      <div class="col-4">
        <General5 class="edit-menu-icon" />
      </div>
    </div>
  </EditingCard>
</template>

<script lang='ts'>
import Vue from "vue";
import EditingCard from "./EditingCard.vue";
import SearchIcon from "@/assets/icons/General1.svg";
import MenuIcon from "@/assets/icons/General2.svg";
import General3 from "@/assets/icons/General3.svg";
import General4 from "@/assets/icons/General4.svg";
import General5 from "@/assets/icons/General5.svg";
import EditingModule from "@/store/modules/2d.editing.module";
import Component from "vue-class-component";

@Component({
  name: "GeneralEditing",
  components: {
    EditingCard,
    SearchIcon,
    MenuIcon,
    General3,
    General4,
    General5,
  },
})
export default class GeneralEditing extends Vue {
  zoomChange(type: string): void {
    EditingModule.zoomChange(type);
  }
  addShape(): void {
    EditingModule.activateShapeMode({
      type: "rect",
      options: {
        fill: { type: "color", color: "transparent" },
        stroke: "blue",
        strokeWidth: 4,
        height: 200,
        width: 200,
      },
    });
  }
}
</script>
<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
