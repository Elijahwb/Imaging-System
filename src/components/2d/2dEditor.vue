<template>
  <div class="image-editor">
    <ImageEditor ref="imageEditor" :include-ui="false"></ImageEditor>
    <button v-if="isCropping" class="btn btn-primary pb-36" @click="crop()">
      crop
    </button>
    <label for="input-image-file"
      ><span class="btn btn-dark pb-36">Load Image</span></label
    >
    <input
      class="input-image"
      type="file"
      accept="image/*"
      id="input-image-file"
      @change="loadLocalFile"
    />
    <span class="btn btn-success pb-36" @click="zoomChange('in')">Zoom +</span>
    <span class="btn btn-secondary pb-36" @click="zoomChange('out')"
      >Zoom -</span
    >
  </div>
</template>

<script >
import "tui-color-picker/dist/tui-color-picker.css";
import "tui-image-editor/dist/tui-image-editor.css";
import demo from "@/assets/xrays/6.jpeg";
import { ImageEditor } from "@toast-ui/vue-image-editor";
import EditingModule from "@/store/modules/2d.editing.module";

export default {
  name: "Editor2d",
  components: {
    ImageEditor,
  },
  mounted() {
    this.loadImage();
    EditingModule.setEditor(this.$refs.imageEditor, {
      url: demo,
      created_at: "2020-12-03 23:55",
      type: "pano",
    });
  },
  methods: {
    loadImage() {
      this.$refs.imageEditor
        .invoke("loadImageFromURL", demo, "My sample image")
        .then((result) => {
          // this.resizeEditor(result);
          console.log(result);
        });
    },
    loadLocalFile(event) {
      EditingModule.loadLocalFile(event);
    },
    crop() {
      EditingModule.crop();
    },
    zoomChange(type) {
      EditingModule.zoomChange(type);
    },
  },
  computed: {
    isCropping() {
      return EditingModule.isCropping;
    },
  },
};
</script>

<style scoped>
.image-editor {
  width: 100%;
  height: 80%;
  color: green;
  text-align: center;
}
.input-image {
  display: none;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>