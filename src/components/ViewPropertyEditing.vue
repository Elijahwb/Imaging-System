<template>
  <EditingCard heading="Viewer Property">
    <div class="row">
      <Slider :value="8" @onChange="changeBrightness"
        ><LightIcon></LightIcon
      ></Slider>
      <Slider :value="15" @onChange="applyContrast"><BrightnessIcon /></Slider>
      <Slider :value="5" @onChange="applyPixelated"><MeasurementIcon /></Slider>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            @change="sharpenImage($event.target.checked)"
            id="flexCheckSharpen"
          />
          <label class="form-check-label" for="flexCheckSharpen">
            Sharpen
          </label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            @change="invertImage($event.target.checked)"
            id="flexCheckInvert"
          />
          <label class="form-check-label" for="flexCheckInvert"> Invert </label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckUnsharp"
            @change="unSharpenImage($event.target.checked)"
          />
          <label class="form-check-label" for="flexCheckUnsharp"> Gray </label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            @change="denoiseImage($event.target.checked)"
            id="flexCheckDenoise"
          />
          <label class="form-check-label" for="flexCheckDenoise">
            Denoise
          </label>
        </div>
      </div>
    </div>
  </EditingCard>
</template>

<script lang='ts'>
import Vue from "vue";
import EditingCard from "./EditingCard.vue";
import Slider from "./global/Ranger.vue";
import LightIcon from "@/assets/icons/Viewerproperty1.svg";
import BrightnessIcon from "@/assets/icons/Viewerproperty2.svg";
import MeasurementIcon from "@/assets/icons/Viewerproperty3.svg";
import Component from "vue-class-component";
// import CustomRange from './global/CustomRange.vue'
import EditingModule from "@/store/modules/2d.editing.module";
import { FilterType } from "@/types";

@Component({
  name: "ViewPropertyEditing",
  components: {
    EditingCard,
    Slider,
    LightIcon,
    BrightnessIcon,
    MeasurementIcon,
    // CustomRange
  },
})
export default class ViewPropertyEditing extends Vue {
  sharpenImage(checked: boolean): void {
    EditingModule.applyOrRemoveFilter({
      applying: checked,
      type: FilterType.sharpen,
      options: {},
    });
  }
  invertImage(checked: boolean): void {
    EditingModule.applyOrRemoveFilter({
      applying: checked,
      type: FilterType.invert,
      options: {},
    });
  }
  unSharpenImage(checked: boolean): void {
    EditingModule.applyOrRemoveFilter({
      applying: checked,
      type: FilterType.grayscale,
      options: {},
    });
  }
  denoiseImage(checked: boolean): void {
    EditingModule.applyOrRemoveFilter({
      applying: checked,
      type: FilterType.noise,
      options: {
        noise: parseInt("200", 10),
      },
    });
  }
  changeBrightness(value: string): void {
    EditingModule.applyOrRemoveFilter({
      applying: true,
      type: FilterType.brightness,
      options: {
        brightness: parseInt(value, 10) / 255,
      },
    });
  }
  applyContrast(value: string): void {
    EditingModule.applyOrRemoveFilter({
      applying: true,
      type: FilterType.removeColor,
      options: {
        color: "#FFFFFF",
        useAlpha: false,
        distance: parseInt(value, 10) / 255,
      },
    });
  }
  applyPixelated(value: string): void {
    EditingModule.applyOrRemoveFilter({
      applying: true,
      type: FilterType.blendColor,
      options: {
        // blocksize: parseInt(value, 10),
        alpha: parseFloat(value),
      },
    });
  }
}
</script>
<style scoped>
/* <div class="custom-control form-control-lg custom-checkbox">  
    <input type="checkbox" class="custom-control-input" id="customCheck1">  
    <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>  
</div> */
.custom-control-label:before {
  background-color: red;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: black;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='red' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}
.custom-control-input:active ~ .custom-control-label::before {
  background-color: green;
}

/** focus shadow pinkish **/
.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(255, 0, 247, 0.25);
}
</style>