<template>
  <div class="prototype-three">
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import MeshSurfaceSampler from '@/packages/MeshSurfaceSampler'

export default {
  methods: {
    init () {
      const scene = new THREE.Scene()

      let mouse = {
        x: undefined,
        y: undefined,
      }

      const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)

      // camera.position.set(1, 1, 2)

      const renderer = new THREE.WebGLRenderer()

      renderer.setSize(innerWidth, innerHeight)

      document.querySelector('.prototype-three').appendChild(renderer.domElement)

      // new OrbitControls(camera, renderer.domElement)

      const controls = new OrbitControls(camera, renderer.domElement);

      console.clear();

      // const scene = new THREE.Scene();
      // const camera = new THREE.PerspectiveCamera(
      //   75,
      //   window.innerWidth / window.innerHeight,
      //   0.1,
      //   1000
      // );

      // const renderer = new THREE.WebGLRenderer({
      //   antialias: true,
      //   alpha: true
      // });
      // renderer.setSize(window.innerWidth, window.innerHeight);
      // document.body.appendChild(renderer.domElement);

      camera.position.z = 300;
      camera.position.y = 100;

      const group = new THREE.Group();
      scene.add(group);

      let sampler = null;
      let elephant = null;
      let path = null;
      new OBJLoader().load(
        "https://assets.codepen.io/127738/Mesh_Elephant.obj",
        (obj) => {
          sampler = new THREE.MeshSurfaceSampler(obj.children[0]).build();
          
          path = new Path();
          group.add(path.line);
          
          renderer.setAnimationLoop(render);
        },
        (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
        (err) => console.error(err)
      );

      /* Vector to sample a random point */
      const tempPosition = new THREE.Vector3();

      class Path {
        constructor () {
          /* The array with all the vertices of the line */
          this.vertices = [];
          /* The geometry of the line */
          this.geometry = new THREE.BufferGeometry();
          /* The material of the line */
          this.material = new THREE.LineBasicMaterial({color: 0x14b1ff, transparent: true, opacity: 0.5});
          /* The Line object combining the geometry & the material */
          this.line = new THREE.Line(this.geometry, this.material);
          
          /* Sample the first point of the line */
          sampler.sample(tempPosition);
          this.previousPoint = tempPosition.clone();
        }
        update () {
          /* Variable used to exit the while loop when we find a point */
          let pointFound = false;
          /* Loop while we haven't found a point */
          while (!pointFound) {
            /* Sample a random point */
            sampler.sample(tempPosition);
            /* If the new point is less 30 units from the previous point */
            if (tempPosition.distanceTo(this.previousPoint) < 30) {
              /* Add the new point in the vertices array */
              this.vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
              /* Store the new point vector */
              this.previousPoint = tempPosition.clone();
              /* Exit the loop */
              pointFound = true;
            }
          }
          /* Update the geometry */
          this.geometry.setAttribute("position", new THREE.Float32BufferAttribute(this.vertices, 3));
        }
      }

      function render() {
        group.rotation.y += 0.002;
        
        /* Stop the progression once we have reached 10,000 points */
        if (path.vertices.length < 30000) {
          path.update();
        }

        controls.update();
        renderer.render(scene, camera);
      }

      window.addEventListener("resize", onWindowResize, false);

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

    },
  },
  mounted() {
    this.init()
  },
}
</script>

<style scoped>

</style>