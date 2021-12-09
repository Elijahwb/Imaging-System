<template>
  <canvas></canvas>
</template>

<script>
import * as THREE from 'three'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  methods: {
    init () {
      let camera, scene, renderer, canvas

      canvas = document.querySelector('canvas')

      // Renderer initialization & setting
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })

      renderer.setSize(window.innerWidth, window.innerHeight)

      // Scene initialization & setting
      scene = new THREE.Scene()

      scene.background = new THREE.Color('black')

      // Camera initialization & setting
      camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);

      camera.position.set(0, 0, 20)
    }
  },
  mounted() {
    this.init()
  },
}
</script>