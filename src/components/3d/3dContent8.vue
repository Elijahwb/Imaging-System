<template>
  <canvas></canvas>
</template>

<script>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  methods: {
    init () {
      let camera, scene, renderer, canvas

      // Renderer size variables
      let width = window.innerWidth, height = window.innerHeight

      // Drawing variables
      let line, MAX_POINTS = 6000, drawCount, splineArray = []

      canvas = document.querySelector('canvas')

      // Renderer initialization & setting
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })

      renderer.setSize(width, height)

      renderer.setPixelRatio(width /  height)

      // Scene initialization & setting
      scene = new THREE.Scene()

      scene.background = new THREE.Color('black')

      // Camera initialization & setting
      camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)

      camera.position.set(0, 0, 20)

      const skyColor = 0xB1E1FF  // light blue

      const groundColor = 0xB97A20  // brownish orange

      // Contrast lighting section
      const contrastColor = 0x868686

      let contrastLight = new THREE.HemisphereLight(contrastColor, contrastColor, intensity)

      let intensity = 0.5
      
      let light = new THREE.HemisphereLight(skyColor, groundColor, intensity)

      scene.add(light)

      {
        const color = 0xffffff
        const intensity = 1
        const light = new THREE.DirectionalLight(color, intensity)
        light.position.set(0, 10, 0)
        light.target.position.set(-5, 0, 0)
        scene.add(light)
        scene.add(light.target)
      }

      // Loading the required Object into the scene Code Block
        // Instanciate the Object Loader class on the Threejs
        const objLoader = new OBJLoader()
        // Global Object
        let globalObject;
        let mainObjectChildren = []
        // Load the actual object
        objLoader.load('/img/Teeth.obj', (object) => {
          // Equate the global object container to the new loaded object
          object.name = 'mainObject'
          // Set the object to the center of the canvas/scene
          object.position.y = 1
          
          globalObject = object
          // Add the object to the scene
          scene.add(object)
          
          let ourObject = scene.getObjectByName('mainObject')

          mainObjectChildren = ourObject.children
        })

      init()
      animate()

      function init() {

        // geometry
        var geometry = new THREE.BufferGeometry()

        // attributes
        var positions = new Float32Array( MAX_POINTS * 3 )

        // 3 vertices per point
        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) )

        // drawcalls
        drawCount = 2 // draw the first 2 points, only
        
        geometry.setDrawRange( 0, drawCount )

        // material
        var material = new THREE.LineBasicMaterial( { color: 0xffddff, linewidth: 2 } )

        // line
        line = new THREE.Line( geometry,  material )

        scene.add( line );

        // update positions
        updatePositions()
          
        document.addEventListener('mousedown', onMouseDown, false)

      }

      // update positions
      function updatePositions() {

        var positions = line.geometry.attributes.position.array;

        var index = 0;
        
        for ( var i = 0; i < splineArray.length;  i ++ ) {
          positions[ index ++ ] = splineArray[i].x;
          positions[ index ++ ] = splineArray[i].y;
          positions[ index ++ ] = splineArray[i].z;
        
        }
      }

      // render
      function render() {
        renderer.render( scene, camera );

      }

      function onMouseMove(evt) {
        if(renderer) {
          let x = ( event.clientX / window.innerWidth ) * 2 - 1;
          let y =  - ( event.clientY / window.innerHeight ) * 2 + 1;
          let vNow = new THREE.Vector3(x, y, 0);

          vNow.unproject(camera);
          splineArray.push(vNow);
            
        }
      }

      function onMouseUp(evt) {
        document.removeEventListener("mousemove", onMouseMove, false);
      }

      function onMouseDown(evt) {   
        if(evt.which == 3) return;
      
        let x = ( event.clientX / window.innerWidth ) * 2 - 1;
        let y =  - ( event.clientY / window.innerHeight ) * 2 + 1;
      
        // do not register if right mouse button is pressed.
        
        let vNow = new THREE.Vector3(x, y, 0);
        vNow.unproject(camera);
        console.log(vNow.x + " " + vNow.y+  " " + vNow.z); 
        splineArray.push(vNow);
        
        document.addEventListener("mousemove",onMouseMove,false);
        document.addEventListener("mouseup",onMouseUp,false);
      }

      function animate() {
        requestAnimationFrame( animate );

        drawCount = splineArray.length;

        line.geometry.setDrawRange( 0, drawCount );

        updatePositions();

        line.geometry.attributes.position.needsUpdate = true; // required after the first render

        render();

      }

      function resize () {
        width = window.innerWidth

        height = window.innerHeight

        renderer.setSize(width, height)
      }
      
      window.addEventListener('resize', resize)
    }
  },
  mounted() {
    this.init()
  },
}
</script>