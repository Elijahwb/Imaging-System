<template>
  <div class="col-12 menu-icon d-flex align-items-end flex-column">
    <EditIcon @onClick="crop"
      ><span> <i class="fa fa-crop" aria-hidden="true"></i> </span
    ></EditIcon>
    <EditIcon @onClick="cancle">Cancel</EditIcon>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EditIcon from "@/components/menu/EditIcon.vue";
import Component from "vue-class-component";
import EditingModule from "@/store/modules/2d.editing.module";

@Component({
  name: "CroppingMenu",
  components: {
    EditIcon,
  },
})
export default class CroppingMenu extends Vue {
  crop(): void {
    EditingModule.crop();
  }
  cancle(): void {
    EditingModule.cancleCropping();
  }
}
</script>

<style scoped>
</style>