<template>
  <div class="main-container">
    <FloatingEditingMenu />
    <div class="row">
      <!-- <div class="col-12 editing-container"> -->
      <div class="col-12 editing-container">
        <canvas class="main-canvas"></canvas>
        <!-- <img
          src="@/assets/xrays/7.jpeg"
          alt="image"
          width="100%"
          height="100%"
          class="image-container"
        /> -->
      </div>
      <div class="col-12 image-list">
        <LiveImages :images="cropped" />
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import FloatingEditingMenu from "../menu/FloatingEditingMenu.vue";
import LiveImages from "./3dLiveImages.vue";
export default {
  name: "3dContentBody",
  components: {
    FloatingEditingMenu,
    LiveImages,
  },
  data() {
    return {
      edit_image: "/assets/xrays/4.jpeg",
      cropped: ["5.jpeg", "4.jpeg", "3.jpeg", "2.jpeg", "1.jpeg"],
    };
  },
  mounted() {
    this.threeDRenderer()
  },
  methods: {
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

        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(0, 10, 0);
            light.target.position.set(-5, 0, 0);
            scene.add(light);
            scene.add(light.target);
        }

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
        }
    },
};
</script>

<style scoped>
.main-canvas {
    width: 100%;
    height: 100%;
}
.editing-container {
    background: red;
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

.image-list {
  height: 18vw;
  border: solid 1px;
}
</style>