<template>
  <div class="container prototype-one">
    <canvas class="one"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  methods: {
    init () {
      const canvas = document.querySelector('.one')

      const scene = new THREE.Scene()

      const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)

      const renderer = new THREE.WebGLRenderer({canvas})
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      renderer.setPixelRatio(canvas.clientWidth/canvas.clientHeight)

      // Cube object
      const boxGeo = new THREE.BoxGeometry(1,1,1)
      const material = new THREE.MeshBasicMaterial({color: 0x00FFf0})
      const cube = new THREE.Mesh(boxGeo, material)

      // Circle object
      const geometry = new THREE.CircleGeometry( 1, 32 );
      const material2 = new THREE.MeshBasicMaterial({color: 0x00FF00})
      const circle = new THREE.Mesh( geometry, material2 );

      scene.add(cube)
      scene.add(circle)

      new OrbitControls(camera, canvas)

      camera.position.z = 5

      function animate () {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
        // cube.rotation.x += 0.01
        // cube.rotation.y += 0.01
        circle.rotation.x += 0.05
        circle.rotation.y += 0.05
      }

      animate()
    },
  },
  mounted() {
    this.init()
  },
}
</script>

<style scoped>
.container {
  border:1px dotted green;
  width: 100%;
  padding: 0px;
}
canvas.one{
  width: 100%;
  height: 70vh;
}
</style>