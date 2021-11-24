<template>
  <EditingCard heading="Drawing">
    <div class="row">
      <div class="col-4">
        <Drawing1 class="edit-menu-icon" @click="modeCropping" />
      </div>
      <div class="col-4">
        <Drawing2 class="edit-menu-icon" @click="addText('Type something')" />
      </div>
      <div class="col-4">
        <Drawing3 class="edit-menu-icon" @click="startLineDrawing" />
      </div>
      <div class="col-4">
        <Drawing4 class="edit-menu-icon" @click="startDrawing" />
      </div>
    </div>
  </EditingCard>
</template>

<script lang='ts'>
import Vue from "vue";
import EditingCard from "./EditingCard.vue";
import Drawing1 from "@/assets/icons/Drawing1.svg";
import Drawing2 from "@/assets/icons/Drawing2.svg";
import Drawing3 from "@/assets/icons/Drawing3.svg";
import Drawing4 from "@/assets/icons/Drawing4.svg";
import EditingModule from "@/store/modules/2d.editing.module";
import Component from "vue-class-component";

@Component({
  name: "DrawingEditing",
  components: {
    EditingCard,
    Drawing1,
    Drawing2,
    Drawing3,
    Drawing4,
  },
})
export default class DrawingEditing extends Vue {
  startLineDrawing(): void {
    EditingModule.startLineDrawing();
  }
  modeCropping(): void {
    EditingModule.modeCropping();
  }
  startDrawing(): void {
    EditingModule.startDrawing();
  }
  addText(text: string): void {
    EditingModule.addText(text);
  }
}
</script>

<style scoped>
</style>