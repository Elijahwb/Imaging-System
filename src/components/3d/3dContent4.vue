<template>
  <div class="main-container">
      <div class="editing-container">
        <ImageEditor ref="imageEditor" :include-ui="false"></ImageEditor>
        <!-- <canvas class="main-canvas"></canvas> -->
      </div>

      <div class="other-perspectives">
        <canvas class="side-one"></canvas>
        <canvas class="side-two"></canvas>
        <canvas class="side-three"></canvas>
      </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import FloatingEditingMenu from "../menu/FloatingEditingMenu.vue";
// import LiveImages from "./3dLiveImages.vue";
import "tui-color-picker/dist/tui-color-picker.css";
import "tui-image-editor/dist/tui-image-editor.css";
import { ImageEditor } from "@toast-ui/vue-image-editor";
import EditingModule from "@/store/modules/2d.editing.module";
export default {
  name: "3dContentBody",
  components: {
    // FloatingEditingMenu,
    // LiveImages,
    ImageEditor,
  },
  data() {
    return {
      edit_image: "/assets/xrays/4.jpeg",
      cropped: ["5.jpeg", "4.jpeg", "3.jpeg", "2.jpeg", "1.jpeg"],
    };
  },
  mounted() {
    this.threeDRenderer();
    this.sideOneDRenderer();
    this.sideTwoDRenderer();
    this.sideThreeDRenderer();
    this.loadImage();
    EditingModule.setEditor(this.$refs.imageEditor, {
      url: document.querySelector('.side-one').toDataURL("image/png"),
      created_at: "2020-12-03 23:55",
      type: "pano",
    });
  },
  methods: {
      loadImage() {
      this.$refs.imageEditor
        .invoke("loadImageFromURL", document.querySelector('.side-one').toDataURL("image/png"), "My sample image")
        .then((result) => {
          // this.resizeEditor(result);
          console.log(result);
        });
    },
      threeDRenderer() {
        const canvas = document.querySelector('.main-canvas');
        const renderer = new THREE.WebGLRenderer({canvas});

        const fov = 45;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 10, 20);

        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 5, 0);
        controls.update();

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('white');

        //   {
        //     const planeSize = 40;

        //     const loader = new THREE.TextureLoader();
        //     const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
        //     texture.wrapS = THREE.RepeatWrapping;
        //     texture.wrapT = THREE.RepeatWrapping;
        //     texture.magFilter = THREE.NearestFilter;
        //     const repeats = planeSize / 2;
        //     texture.repeat.set(repeats, repeats);

        //     const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
        //     const planeMat = new THREE.MeshPhongMaterial({
        //     //   map: texture,
        //       side: THREE.DoubleSide,
        //     });
        //     const mesh = new THREE.Mesh(planeGeo, planeMat);
        //     mesh.rotation.x = Math.PI * -.5;
        //     scene.add(mesh);
        //   }

        {
          // create a Object 3d for the text
          var text = new THREE.Object3D();

          // set the location of the hash to 1
          var hash = document.location.hash.substr(1);

          // check on lenght 
          if (hash.length !== 0) {
            text = hash;
          }

          // create TextGeometry ( text, parameters )
          // OBS: THE FONT TYPE MUST BE DOWNLOADED AND ADDED TO THE PROJECT
          var text3d = new TextGeometry(text, {
            size: 60,
            height: 1, // this will actually make the object very thin
            curveSegments: 50,
            font: "helvetiker"
          });

          // set the material position and rotation for the text
          var textMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            overdraw: true
          });
          text = new THREE.Mesh(text3d, textMaterial);

          scene.add(text);
        }

        {
            const skyColor = 0xB1E1FF;  // light blue
            const groundColor = 0xB97A20;  // brownish orange
            const intensity = 1;
            const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            scene.add(light);
        }

        // {
        //     const color = 0xFFFFFF;
        //     const intensity = 1;
        //     const light = new THREE.DirectionalLight(color, intensity);
        //     light.position.set(0, 10, 0);
        //     light.target.position.set(-5, 0, 0);
        //     scene.add(light);
        //     scene.add(light.target);
        // }

        {
            const objLoader = new OBJLoader();
            objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (root) => {
                scene.add(root);
            });
        }

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
            renderer.setSize(width, height, false);
            }
            return needResize;
        }

        function render() {

            if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            }

            renderer.render(scene, camera);

            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
      },
      sideOneDRenderer() {
        const canvas = document.querySelector('.side-one');
        const renderer = new THREE.WebGLRenderer({canvas});

        const fov = 35;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(10, 18, 0);

        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 5, 0);
        controls.update();

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('black');

        //   {
        //     const planeSize = 40;

        //     const loader = new THREE.TextureLoader();
        //     const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
        //     texture.wrapS = THREE.RepeatWrapping;
        //     texture.wrapT = THREE.RepeatWrapping;
        //     texture.magFilter = THREE.NearestFilter;
        //     const repeats = planeSize / 2;
        //     texture.repeat.set(repeats, repeats);

        //     const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
        //     const planeMat = new THREE.MeshPhongMaterial({
        //     //   map: texture,
        //       side: THREE.DoubleSide,
        //     });
        //     const mesh = new THREE.Mesh(planeGeo, planeMat);
        //     mesh.rotation.x = Math.PI * -.5;
        //     scene.add(mesh);
        //   }

        {
          // create a Object 3d for the text
          var text = new THREE.Object3D();

          // set the location of the hash to 1
          var hash = document.location.hash.substr(1);

          // check on lenght 
          if (hash.length !== 0) {
            text = hash;
          }

          // create TextGeometry ( text, parameters )
          // OBS: THE FONT TYPE MUST BE DOWNLOADED AND ADDED TO THE PROJECT
          var text3d = new TextGeometry(text, {
            size: 60,
            height: 1, // this will actually make the object very thin
            curveSegments: 50,
            font: "helvetiker"
          });

          // set the material position and rotation for the text
          var textMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            overdraw: true
          });
          text = new THREE.Mesh(text3d, textMaterial);

          scene.add(text);
        }

        {
            const skyColor = 0xB1E1FF;  // light blue
            const groundColor = 0xB97A20;  // brownish orange
            const intensity = 1;
            const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            scene.add(light);
        }

        // {
        //     const color = 0xFFFFFF;
        //     const intensity = 1;
        //     const light = new THREE.DirectionalLight(color, intensity);
        //     light.position.set(0, 10, 0);
        //     light.target.position.set(-5, 0, 0);
        //     scene.add(light);
        //     scene.add(light.target);
        // }

        {
            const objLoader = new OBJLoader();
            objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (root) => {
                scene.add(root);
            });
        }

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
            renderer.setSize(width, height, false);
            }
            return needResize;
        }

        function render() {

            if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            }

            renderer.render(scene, camera);

            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
      },
      sideTwoDRenderer() {
        const canvas = document.querySelector('.side-two');
        const renderer = new THREE.WebGLRenderer({canvas});

        const fov = 25;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, -15, 5);

        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 5, 0);
        controls.update();

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('black');

        //   {
        //     const planeSize = 40;

        //     const loader = new THREE.TextureLoader();
        //     const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
        //     texture.wrapS = THREE.RepeatWrapping;
        //     texture.wrapT = THREE.RepeatWrapping;
        //     texture.magFilter = THREE.NearestFilter;
        //     const repeats = planeSize / 2;
        //     texture.repeat.set(repeats, repeats);

        //     const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
        //     const planeMat = new THREE.MeshPhongMaterial({
        //     //   map: texture,
        //       side: THREE.DoubleSide,
        //     });
        //     const mesh = new THREE.Mesh(planeGeo, planeMat);
        //     mesh.rotation.x = Math.PI * -.5;
        //     scene.add(mesh);
        //   }

        {
            const skyColor = 0xB1E1FF;  // light blue
            const groundColor = 0xB97A20;  // brownish orange
            const intensity = 1;
            const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            scene.add(light);
        }

        // {
        //     const color = 0xFFFFFF;
        //     const intensity = 1;
        //     const light = new THREE.DirectionalLight(color, intensity);
        //     light.position.set(0, 10, 0);
        //     light.target.position.set(-5, 0, 0);
        //     scene.add(light);
        //     scene.add(light.target);
        // }

        {
            const objLoader = new OBJLoader();
            objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (root) => {
                scene.add(root);
            });
        }

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
            renderer.setSize(width, height, false);
            }
            return needResize;
        }

        function render() {

            if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            }

            renderer.render(scene, camera);

            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
      },
      sideThreeDRenderer() {
        const canvas = document.querySelector('.side-three');
        const renderer = new THREE.WebGLRenderer({canvas});

        const fov = 45;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, -10, 5);

        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 5, 0);
        controls.update();

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('black');

        //   {
        //     const planeSize = 40;

        //     const loader = new THREE.TextureLoader();
        //     const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
        //     texture.wrapS = THREE.RepeatWrapping;
        //     texture.wrapT = THREE.RepeatWrapping;
        //     texture.magFilter = THREE.NearestFilter;
        //     const repeats = planeSize / 2;
        //     texture.repeat.set(repeats, repeats);

        //     const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
        //     const planeMat = new THREE.MeshPhongMaterial({
        //     //   map: texture,
        //       side: THREE.DoubleSide,
        //     });
        //     const mesh = new THREE.Mesh(planeGeo, planeMat);
        //     mesh.rotation.x = Math.PI * -.5;
        //     scene.add(mesh);
        //   }

        {
            const skyColor = 0xB1E1FF;  // light blue
            const groundColor = 0xB97A20;  // brownish orange
            const intensity = 1;
            const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            scene.add(light);
        }

        // {
        //     const color = 0xFFFFFF;
        //     const intensity = 1;
        //     const light = new THREE.DirectionalLight(color, intensity);
        //     light.position.set(0, 10, 0);
        //     light.target.position.set(-5, 0, 0);
        //     scene.add(light);
        //     scene.add(light.target);
        // }

        {
            const objLoader = new OBJLoader();
            objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (root) => {
                scene.add(root);
            });
        }

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
            renderer.setSize(width, height, false);
            }
            return needResize;
        }

        function render() {

            if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            }

            renderer.render(scene, camera);

            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
      },
    },
};
</script>

<style scoped>
.main-canvas {
    width: 100%;
    height: 100%;
}
.editing-container {
    /* background: red; */
}
.editing-container {
  /* height: calc(100vh - var(--topBarHeight) - 500px); */
  /* height: 70vh; */
  height: calc(70vh - 50px);
  width: calc(100vw - 330px);
  border: solid 1px;
  margin-bottom: 8px;
  text-align: center;
}
.main-container {
  position: relative;
  z-index: 300;
}

.other-perspectives {
  height: 18vw;
  border: 1px solid orange;
  display: flex;
}
.other-perspectives canvas {
  width: 100%;
}
</style>