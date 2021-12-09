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

      let mouse = {
        x: undefined,
        y: undefined,
        z: 0.5,
      }

      const raycaster = new THREE.Raycaster()

      const scene = new THREE.Scene()

      const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)

      const renderer = new THREE.WebGLRenderer({canvas})

      renderer.setSize(canvas.clientWidth, canvas.clientHeight)

      renderer.setPixelRatio(canvas.clientWidth/canvas.clientHeight)

      // Plane
      const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10)

      const material = new THREE.MeshPhongMaterial(
        {
          color: 0xffff00, 
          side: THREE.DoubleSide,
          flatShading: THREE.FlatShading,
        }
      );
      
      const plane = new THREE.Mesh(planeGeometry, material)

      const { array } = plane.geometry.attributes.position

      // for(let i = 0; i < array.length; i += 3) {
      //   const x = array[i]
      //   const y = array[i + 1]
      //   const z = array[i + 2]
        
      //   array[i + 2] = z + Math.random()
      // }

      scene.add(plane)

      // Lights section
      const light = new THREE.DirectionalLight(0xffffff, 1)

      const backLight = new THREE.DirectionalLight(0xffffff, 1)

      light.position.set(0, 0, 1)

      backLight.position.set(0, 0, -1)

      scene.add(light)

      scene.add(backLight)

      // Adding orbit controls to the scene
      new OrbitControls(camera, canvas)

      camera.position.z = 5

      function animate () {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
        // plane.rotation.x += 0.01
        // plane.rotation.y += 0.01

        raycaster.setFromCamera(mouse, camera)

        const intersects = raycaster.intersectObject(plane)

        if(intersects.length > 0) {
          console.log('intersecting the object')
        }
      }

      animate()

      addEventListener('mousemove', function(event) {
        mouse.x = (event.clientX / this.innerWidth) * 2 -1

        mouse.y = -(event.clientY / canvas.clientHeight) * 2 + 1

        console.log(mouse)
      })
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