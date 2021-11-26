<template>
  <div class="image-editor">
    <DynamicFloatingMenu>
      <template v-if="isCropping"><CroppingMenu /></template>
    </DynamicFloatingMenu>
    <ImageEditor ref="imageEditor" :include-ui="false"></ImageEditor>
    <input
      class="input-image"
      type="file"
      accept="image/*"
      id="input-image-file"
      @change="loadLocalFile"
    />
    <div class="images-container">
      <div class="saved-images" v-for="(image, index) in images" :key="index">
        <img :src="image.url" height="100" width="150" />
      </div>
    </div>
  </div>
</template>

<script >
import "tui-color-picker/dist/tui-color-picker.css";
import "tui-image-editor/dist/tui-image-editor.css";
import demo from "@/assets/xrays/6.jpeg";
import { ImageEditor } from "@toast-ui/vue-image-editor";
import EditingModule from "@/store/modules/2d.editing.module";
import DynamicFloatingMenu from "../menu/DynamicFloatingMenu.vue";
import CroppingMenu from "@/components/menu/editing/CroppingMenu.vue";

export default {
  name: "Editor2d",
  components: {
    ImageEditor,
    DynamicFloatingMenu,
    CroppingMenu,
  },
  mounted() {
    EditingModule.loadInitialEditor({
      editor: this.$refs.imageEditor,
      image: {
        url: demo,
        created_at: "2020-12-03 23:55",
        type: "Pano",
      },
    });
    EditingModule.loadSavedImages();
  },
  methods: {
    loadLocalFile(event) {
      EditingModule.loadLocalFile(event);
    },
  },
  computed: {
    isCropping() {
      return EditingModule.isCropping;
    },
    images() {
      return EditingModule.files;
    },
  },
};
</script>

<style scoped>
.image-editor {
  width: 100%;
  height: 80%;
  color: var(--dsBrandColor);
  text-align: center;
}
.input-image {
  display: none;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.saved-images {
  display: flex;
  flex-flow: row;
}
.images-container {
  display: flex;
  flex-wrap: wrap;
}
</style>