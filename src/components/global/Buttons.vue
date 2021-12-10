<template>
  <div class="button-container" 
    :style="'background:' + background + ' !important'"
    :class="{
        'transparent': transparent,
        'cancel': cancel,
        'info': info,
        'gradient': gradient,
        'min-width': label === null,
      }">
    <!--Icon Section of the button-->
    <div v-if="icon !== null || svg !== null" :style="'color:' + color + ' !important'">
      <div v-if="!svg && iconCircle" class="icon-area circle">
        <i :class="icon"></i>
      </div>

      <i v-if="!svg && !iconCircle" :class="icon" class="icon-area"></i>

      <div class="svg-icon" v-if="svg" v-html="svg"></div>
    </div>
    <!--End of the Icon Section of the button-->

    <div v-if="label !== null " class="label" :class="{'margined': icon !== null}" :style="'color:' + color + ' !important'">{{ label }}</div>
  </div>
</template>

<script>
import { Component } from 'preact';

export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    background: {
      type: String,
      default: null,
    },
    // Icon section of the button { optional }
    // used to specify if the button is going to have an icon
    icon: {
      type: String,
      default: null,
    },
    // Icon Circle section of the button { optional }
    // used to specify if the icon should be wrapped in a circle
    iconCircle: {
      type: Boolean,
      default: false,
    },
    // SVG section of the button { optional }
    // used to specify the svg icon of the button
    svg: {
      type: Component,
      default: null,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    gradient: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (document.querySelector('svg-icon')) {
      document.querySelector('svg-icon').classList.add('customize-svg');
    }
  },
};
</script>

<style scoped>
.label.margined {
  margin-left: 5px;
}
.label {
  padding: 0px;
  margin-left: 0px;
}
.customize-svg.svg-icon svg g path{
  fill: #ff782e !important;
}
.svg-icon{
  margin-right: 5px;
}
.icon-area.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 4px;
  border:1px solid #fff;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-area {
  margin-right: 0px;
}
.icon-area i, i.icon-area {
  color: inherit !important;
  font-size: 14px !important;
}
.button-container:hover .icon-area {
  border-color: #ff782e;
}

.button-container.cancel:hover {
  background: #fff;
  border-color: crimson;
  color: crimson;
}

.button-container.cancel.transparent:hover {
  color: #fff;
  background: crimson !important;
}
.button-container.cancel.transparent {
  color: crimson;
  border-color: crimson;
}
.button-container.cancel {
  background: crimson;
  border-color: crimson;
  color: #fff;
}

.button-container.info.transparent:hover {
  background: #0088FF !important;
  color: #fff;
  border-color: #0088FF;
}
.button-container.info.transparent {
  color: #0088FF;
  border-color: #0088FF;
}
.button-container.info:hover {
  background: #fff;
  color: #0088FF;
  border-color: #0088FF;
}
.button-container.info {
  background: #0088FF;
  color: #fff;
  border-color: #0088FF;
}

.button-container.transparent:hover {
  background: #ff782e;
  border-color: #ff782e;
  color: #fff;
}
.button-container.transparent {
  background: transparent;
  color: inherit;
  border-color: #ff782e;
  color: #ff782e;
}
.button-container.min-width {
  min-width: 40px !important;
}
.button-container:hover {
  color: #ff782e;
  background: transparent;
  border-color:#ff782e;
  cursor: pointer;
}
.button-container {
  min-width: 120px !important;
  transition: all 300ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff782e;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1.5px solid transparent;
  font-size: 14.5px !important;
}
</style>
