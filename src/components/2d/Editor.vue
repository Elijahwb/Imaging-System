<template>
  <div class="body-container">
    <div class="tui-image-editor-controls">
      <div class="header">
        <span class="name"> Image Editor</span>
        <ul class="menu">
          <li class="menu-item border input-wrapper">
            Load
            <input type="file" accept="image/*" id="input-image-file" />
          </li>
          <li class="menu-item border" id="btn-download">Download</li>
        </ul>
      </div>
      <ul class="menu">
        <li class="menu-item disabled" id="btn-undo">Undo</li>
        <li class="menu-item disabled" id="btn-redo">Redo</li>
        <li class="menu-item" id="btn-clear-objects">ClearObjects</li>
        <li class="menu-item" id="btn-remove-active-object">
          RemoveActiveObject
        </li>
        <li class="menu-item" id="btn-crop">Crop</li>
        <li class="menu-item" id="btn-flip">Flip</li>
        <li class="menu-item" id="btn-rotation">Rotation</li>
        <li class="menu-item" id="btn-draw-line">DrawLine</li>
        <li class="menu-item" id="btn-draw-shape">Shape</li>
        <li class="menu-item" id="btn-add-icon">Icon</li>
        <li class="menu-item" id="btn-text">Text</li>
        <li class="menu-item" id="btn-mask-filter">Mask</li>
        <li class="menu-item" id="btn-image-filter">Filter</li>
      </ul>
      <div class="sub-menu-container" id="crop-sub-menu">
        <ul class="menu">
          <li class="menu-item" id="btn-apply-crop">Apply</li>
          <li class="menu-item" id="btn-cancel-crop">Cancel</li>
        </ul>
      </div>
      <div class="sub-menu-container" id="flip-sub-menu">
        <ul class="menu">
          <li class="menu-item" id="btn-flip-x">FlipX</li>
          <li class="menu-item" id="btn-flip-y">FlipY</li>
          <li class="menu-item" id="btn-reset-flip">Reset</li>
          <li class="menu-item close">Close</li>
        </ul>
      </div>
      <div class="sub-menu-container" id="rotation-sub-menu">
        <ul class="menu">
          <li class="menu-item" id="btn-rotate-clockwise">Clockwise(30)</li>
          <li class="menu-item" id="btn-rotate-counter-clockwise">
            Counter-Clockwise(-30)
          </li>
          <li class="menu-item no-pointer">
            <label>
              Range input
              <input
                id="input-rotation-range"
                type="range"
                min="-360"
                value="0"
                max="360"
              />
            </label>
          </li>
          <li class="menu-item close">Close</li>
        </ul>
      </div>
      <div class="sub-menu-container menu" id="draw-line-sub-menu">
        <ul class="menu">
          <li class="menu-item">
            <label>
              <input
                type="radio"
                name="select-line-type"
                value="freeDrawing"
                checked="checked"
              />
              Free drawing
            </label>
            <label>
              <input type="radio" name="select-line-type" value="lineDrawing" />
              Straight line
            </label>
          </li>
          <li class="menu-item">
            <div id="tui-brush-color-picker">Brush color</div>
          </li>
          <li class="menu-item">
            <label class="menu-item no-pointer">
              Brush width
              <input
                id="input-brush-width-range"
                type="range"
                min="5"
                max="30"
                value="12"
              />
            </label>
          </li>
          <li class="menu-item close">Close</li>
        </ul>
      </div>
      <div class="sub-menu-container" id="draw-shape-sub-menu">
        <ul class="menu">
          <li class="menu-item">
            <label>
              <input
                type="radio"
                name="select-shape-type"
                value="rect"
                checked="checked"
              />
              rect
            </label>
            <label>
              <input type="radio" name="select-shape-type" value="circle" />
              circle
            </label>
            <label>
              <input type="radio" name="select-shape-type" value="triangle" />
              triangle
            </label>
          </li>
          <li class="menu-item">
            <select name="select-color-type">
              <option value="fill">Fill</option>
              <option value="stroke">Stroke</option>
            </select>
            <label>
              <input
                type="radio"
                name="input-check-fill"
                id="input-check-transparent"
                value="transparent"
              />
              transparent
            </label>
            <label>
              <input
                type="radio"
                name="input-check-fill"
                id="input-check-filter"
                value="filter"
              />
              filter
            </label>
            <div id="tui-shape-color-picker"></div>
          </li>
          <li class="menu-item">
            <label class="menu-item no-pointer">
              Stroke width
              <input
                id="input-stroke-width-range"
                type="range"
                min="0"
                max="300"
                value="12"
              />
            </label>
          </li>
          <li class="menu-item close">Close</li>
        </ul>
      </div>
      <div class="sub-menu-container" id="icon-sub-menu">
        <ul class="menu">
          <li class="menu-item">
            <div id="tui-icon-color-picker">Icon color</div>
          </li>
          <li class="menu-item border" id="btn-register-icon">
            Register custom icon
          </li>
          <li class="menu-item icon-text" data-icon-type="arrow">➡</li>
          <li class="menu-item icon-text" data-icon-type="cancel">✖</li>
          <li class="menu-item close">Close</li>
        </ul>
      </div>
      <div class="sub-menu-container" id="text-sub-menu">
        <ul class="menu">
          <li class="menu-item">
            <div>
              <button class="btn-text-style" data-style-type="b">Bold</button>
              <button class="btn-text-style" data-style-type="i">Italic</button>
              <button class="btn-text-style" data-style-type="u">
                Underline
              </button>
            </div>
            <div>
              <button class="btn-text-style" data-style-type="l">Left</button>
              <button class="btn-text-style" data-style-type="c">Center</button>
              <button class="btn-text-style" data-style-type="r">Right</button>
            </div>
          </li>
          <li class="menu-item">
            <label class="no-pointer">
              <input
                id="input-font-size-range"
                type="range"
                min="10"
                max="100"
                value="10"
              />
            </label>
          </li>
          <li class="menu-item">
            <div id="tui-text-color-picker">Text color</div>
          </li>
          <li class="menu-item close">Close</li>
        </ul>
      </div>
      <div class="sub-menu-container" id="filter-sub-menu">
        <ul class="menu">
          <li class="menu-item border input-wrapper">
            Load Mask Image
            <input type="file" accept="image/*" id="input-mask-image-file" />
          </li>
          <li class="menu-item" id="btn-apply-mask">Apply mask filter</li>
          <li class="menu-item close">Close</li>
        </ul>
      </div>
      <div class="sub-menu-container" id="image-filter-sub-menu">
        <ul class="menu">
          <li class="menu-item align-left-top">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label
                      ><input
                        type="checkbox"
                        id="input-check-grayscale"
                      />Grayscale</label
                    >
                  </td>
                  <td>
                    <label
                      ><input
                        type="checkbox"
                        id="input-check-invert"
                      />Invert</label
                    >
                  </td>
                  <td>
                    <label
                      ><input
                        type="checkbox"
                        id="input-check-sepia"
                      />Sepia</label
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      ><input
                        type="checkbox"
                        id="input-check-sepia2"
                      />Sepia2</label
                    >
                  </td>
                  <td>
                    <label
                      ><input
                        type="checkbox"
                        id="input-check-blur"
                      />Blur</label
                    >
                  </td>
                  <td>
                    <label
                      ><input
                        type="checkbox"
                        id="input-check-sharpen"
                      />Sharpen</label
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      ><input
                        type="checkbox"
                        id="input-check-emboss"
                      />Emboss</label
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li class="menu-item align-left-top">
            <p>
              <label>
                <input type="checkbox" id="input-check-remove-white" />
                RemoveWhite
              </label>
              <br />
              <label>
                Distance
                <input
                  class="range-narrow"
                  id="input-range-remove-white-distance"
                  type="range"
                  min="0"
                  value="10"
                  max="255"
                />
              </label>
            </p>
          </li>
          <li class="menu-item align-left-top">
            <p>
              <label
                ><input
                  type="checkbox"
                  id="input-check-brightness"
                />Brightness</label
              ><br />
              <label>
                Value
                <input
                  class="range-narrow"
                  id="input-range-brightness-value"
                  type="range"
                  min="-255"
                  value="100"
                  max="255"
                />
              </label>
            </p>
          </li>
          <li class="menu-item align-left-top">
            <p>
              <label
                ><input type="checkbox" id="input-check-noise" />Noise</label
              ><br />
              <label>
                Value
                <input
                  class="range-narrow"
                  id="input-range-noise-value"
                  type="range"
                  min="0"
                  value="100"
                  max="1000"
                />
              </label>
            </p>
          </li>
          <li class="menu-item align-left-top">
            <p>
              <label>
                <input type="checkbox" id="input-check-color-filter" />
                ColorFilter
              </label>
              <br />
              <label>
                Threshold
                <input
                  class="range-narrow"
                  id="input-range-color-filter-value"
                  type="range"
                  min="0"
                  value="45"
                  max="255"
                />
              </label>
            </p>
          </li>
          <li class="menu-item align-left-top">
            <p>
              <label
                ><input
                  type="checkbox"
                  id="input-check-pixelate"
                />Pixelate</label
              ><br />
              <label>
                Value
                <input
                  class="range-narrow"
                  id="input-range-pixelate-value"
                  type="range"
                  min="2"
                  value="4"
                  max="20"
                />
              </label>
            </p>
          </li>
          <li class="menu-item align-left-top">
            <p>
              <label><input type="checkbox" id="input-check-tint" />Tint</label
              ><br />
            </p>
            <div id="tui-tint-color-picker"></div>
            <label>
              Opacity
              <input
                class="range-narrow"
                id="input-range-tint-opacity-value"
                type="range"
                min="0"
                value="1"
                max="1"
                step="0.1"
              />
            </label>
          </li>
          <li class="menu-item align-left-top">
            <p>
              <label
                ><input
                  type="checkbox"
                  id="input-check-multiply"
                />Multiply</label
              >
            </p>
            <div id="tui-multiply-color-picker"></div>
          </li>
          <li class="menu-item align-left-top">
            <p>
              <label
                ><input type="checkbox" id="input-check-blend" />Blend</label
              >
            </p>
            <div id="tui-blend-color-picker"></div>
            <select name="select-blend-type">
              <option value="add" selected>Add</option>
              <option value="diff">Diff</option>
              <option value="diff">Subtract</option>
              <option value="multiply">Multiply</option>
              <option value="screen">Screen</option>
              <option value="lighten">Lighten</option>
              <option value="darken">Darken</option>
            </select>
          </li>
          <li class="menu-item close">Close</li>
        </ul>
      </div>
    </div>
    <div class="tui-image-editor"></div>
  </div>
</template>

<script>
export default {
  name: "Editor",
};
</script>

<style scoped>
.border {
  border: 1px solid black;
}
.body-container {
  width: 1000px;
}
.tui-image-editor-controls {
  min-height: 250px;
}
.menu {
  padding: 0;
  margin-bottom: 5px;
  text-align: center;
  color: #544b61;
  font-weight: 400;
  list-style-type: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}
.header .name {
  padding: 10px;
  line-height: 50px;
  font-size: 30px;
  font-weight: 100;
  vertical-align: middle;
}
.header .menu {
  display: inline-block;
}
.menu-item {
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
}
.menu-item a {
  text-decoration: none;
}
.menu-item.no-pointer {
  cursor: default;
}
.menu-item.active,
.menu-item:hover {
  background-color: #f3f3f3;
}
.menu-item.disabled {
  cursor: default;
  color: #bfbebe;
}
.align-left-top {
  text-align: left;
  vertical-align: top;
}
.range-narrow {
  width: 80px;
}
.sub-menu-container {
  font-size: 14px;
  margin-bottom: 1em;
  display: none;
}
.tui-image-editor {
  height: 500px;
}
.tui-image-editor-canvas-container {
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  border: 1px dashed black;
  overflow: hidden;
}
.tui-colorpicker-container {
  margin: 5px auto 0;
}
.tui-colorpicker-palette-toggle-slider {
  display: none;
}
.input-wrapper {
  position: relative;
}
.input-wrapper input {
  cursor: pointer;
  position: absolute;
  font-size: 999px;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.btn-text-style {
  padding: 5px;
  margin: 3px 1px;
  border: 1px dashed #bfbebe;
  outline: 0;
  background-color: #eee;
  cursor: pointer;
}
.icon-text {
  font-size: 20px;
}
.select-line-type {
  outline: 0;
  vertical-align: middle;
}
#tui-color-picker {
  display: inline-block;
  vertical-align: middle;
}
#tui-text-palette {
  display: none;
  position: absolute;
  padding: 10px;
  border: 1px solid #bfbebe;
  background-color: #fff;
  z-index: 9999;
}
</style>