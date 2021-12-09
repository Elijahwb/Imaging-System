<template>
  <div class="main-container">
      <div class="editing-container">
        <canvas class="main-canvas6"></canvas>
        <div class="controls">
          <div class="control draw" :class="{'active': activeControl === 'draw'}" @click="toggleControl('draw')"><i class="fas fa-pencil-alt"></i></div>
          <div class="control text" :class="{'active': activeControl === 'text'}" @click="toggleControl('text')"><i class="fas fa-book-open"></i></div>
          <div class="control adjust" :class="{'active': activeControl === 'adjust'}" @click="toggleControl('adjust')"><i class="fas fa-adjust"></i></div>
          <div class="control increase-light" @click="toggleControl('add')"><i class="fas fa-sun">+</i></div>
          <div class="control decrease-light" @click="toggleControl('minus')"><i class="fas fa-sun">-</i></div>
          <div class="control reset-light" @click="toggleControl('reset')"><i class="fas fa-undo"></i></div>
        </div>
        <div class="notes" v-if="activeControl === 'text'">
          <textarea name="" id="" cols="30" rows="10" v-model="notes"></textarea>
        </div>
      </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  name: "3dContent",
  data(){
    return {
      activeControl: null,
      notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure fugit deleniti facilis debitis perferendis minus labore? A iusto, dolores itaque facilis at inventore perferendis atque ab asperiores eveniet delectus. Vero?',
    }
  },
  methods: {
    toggleControl (control) {
      if(this.activeControl === control) this.activeControl = null
      else this.activeControl = control

    },
    threeDRenderer () {
        const canvas = document.querySelector('.main-canvas6')

        var mouseIsPressed, mouseX, mouseY, pmouseX, pmouseY;

        let raycaster = new THREE.Raycaster()
    
        let mouse = new THREE.Vector2()

        const renderer = new THREE.WebGLRenderer({canvas})

        let editMode = false

        let isAddText = false

        let isContrast = false

        renderer.setSize(canvas.clientWidth, canvas.clientHeight)

        renderer.setPixelRatio(canvas.clientWidth / canvas.clientHeight)

        const fov = 20
        let aspect = canvas.clientWidth / canvas.clientHeight  // the canvas default
        const near = 0.1
        const far = 1000
        // const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
        camera.position.set(0, 0, 20)

        const scene = new THREE.Scene()
        scene.background = new THREE.Color('black')

        scene.fog = new THREE.Fog(0xffffff, 0, 750);

        
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

        let controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 5, 0)


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
          object.position.y = 5
          
          globalObject = object
          // Add the object to the scene
          scene.add(globalObject)
          
          let ourObject = scene.getObjectByName('mainObject')

          mainObjectChildren = ourObject.children
        });
        

        function onMouseMove( event ) {

          // calculate mouse position in normalized device coordinates
          // (-1 to +1) for both components

          mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
          mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1

        }

        window.addEventListener( 'mouse', onMouseMove, false )

        document.querySelectorAll('.control').forEach(( control ) => {
          control.addEventListener('click', () => {
            
            let allControls = document.querySelectorAll('.control')
            // let oneControlIsActive = false

            for (let i = 0; i < allControls.length; i++) {
              if ('active' in allControls[i].classList) {
                editMode = allControls[i] !== this ? false : true
                break
              }
            }

            if (!editMode) {
              controls.disabled
              editMode = true
            }
            else {
              controls.enabled
              editMode = false
            }
          })
        })

        // document.querySelector('.draw').addEventListener('click', function() {
        //     console.log('This is the editing block')
        //     canvas.addEventListener('click', function (event) {
        //       // calculate mouse position in normalized device coordinates
        //       // (-1 to +1) for both components
        //       // mouse.x = ( event.clientX / innerWidth ) * 2 - 1
        //       // mouse.y = - ( event.clientY / innerHeight ) * 2 + 1
              
        //       const canvasPosition = canvas.getBoundingClientRect()

        //       if (editMode) {
        //         console.log('supposed to mark')
        //         mouse.x = ((event.clientX - (canvasPosition.left )) / canvas.width) * 2 - 1
        //         mouse.y = -((event.clientY - (canvasPosition.top )) / canvas.height) * 2 + 1
        //         console.log('mouse coordinates below')
        //         console.log(mouse)
        //         // console.log(mouse)

        //         // // Make some computations here
        //         // let canv = document.createElement('canvas')
        //         // let context = canv.getContext('2d')
                
        //         // context.font = '500 10px Arial'
        //         // context.fillStyle = 'rgba(255, 0, 0, 1)'
        //         // context.fillText('Imaging', 0, 10)

        //         // let texture = new THREE.Texture(canv)
        //         // texture.needsUpdate = true

        //         // let material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide })
        //         // material.transparent = true

        //         // let mesh1 = new THREE.Mesh(new THREE.PlaneGeometry(50, 10), material)

        //         // mesh1.position.set(mouse.x, mouse.y, -5)
        //         // // mesh1.rotation.x = -0.9
        //         // scene.add(mesh1)
        //         // update the picking ray with the camera and mouse position
                
        //       }

        //     })
        // })

        // Add Text Functionality Code Block
        document.querySelector('.text').addEventListener('click', function () {
          editMode = false
        })

        // Contrast Functionality Code Block
        document.querySelector('.adjust').addEventListener('click', function () {
          light.intensity
          // Check if contrast is not active
          if (!isContrast) {
            // Remove the normal lighting from the scene
            scene.remove(light)
            // Add the contrast lighting to the scene
            scene.add(contrastLight)
            // Activate the contrast
            isContrast = true
            // Add the brand color background to notify the user that contrast is active
            this.classList.add('active')

          } else {
            // Remove the contrasting lighting from the scene
            scene.remove(contrastLight)
            // Add the normal lighting to the scene
            scene.add(light)
            // Deactivate the contrast
            isContrast = false
            // Remove the brand color background to notify the user that contrast is not active
            this.classList.remove('active')
          }
          // Activate the orbit controls but falsifying the edit mode
          editMode = false
          // Update all the lights in scene with the current brightness/intensity
          updateLightIntensity()

        })

        document.querySelector('.increase-light').addEventListener('click', function () {
          // Store the value of maximum brightness that can be achieved
          let maxIntensity = 1
          // Compute the new increase in intensity needed
          let newIntensity = intensity + 0.05
          // Check if the new intended intensity is greater than the maximum brightness that can be achieved
          // return the the maximum brightness that can be achieved
          if(newIntensity > maxIntensity) intensity = maxIntensity
          // If the intended brightness is still in the range of the maximum brightness,
          // then update the intensity with the new computed value
          else intensity = newIntensity
          // Activate the orbit controls but falsifying the edit mode
          editMode = false
          // Update all the lights in scene with the current brightness/intensity
          updateLightIntensity()

        })

        document.querySelector('.decrease-light').addEventListener('click', function () {
          // Store the value of minimum brightness that can be achieved
          let minIntensity = 0
          // Compute the new decrease in intensity needed
          let newIntensity = intensity - 0.05
          // Check if the new intended intensity is less than the minimum brightness that can be achieved
          // return the the minimum brightness that can be achieved
          if(newIntensity < minIntensity) intensity = minIntensity
          // If the intended brightness is still in the range of the minimum brightness,
          // then update the intensity with the new computed value
          else intensity = newIntensity
          // Activate the orbit controls but falsifying the edit mode
          editMode = false
          // Update all the lights in scene with the current brightness/intensity
          updateLightIntensity()

        })

        document.querySelector('.reset-light').addEventListener('click', function () {
          // Equate intensity to the chosen default value
          intensity = 0.5
          // Activate the orbit controls but falsifying the edit mode
          editMode = false
          // Update all the lights in scene with the current brightness/intensity
          updateLightIntensity()

        })

        function updateLightIntensity () {
          // Update the main light intensity
          light.intensity = intensity
          // Update the contrast light intensity
          contrastLight.intensity = intensity

        }

        mouseIsPressed = false
        mouseX = 0
        mouseY = 0
        pmouseX = 0
        pmouseY = 0
        var setMouse = function () {
          mouseX = event.clientX
          mouseY = event.clientY
        }


        canvas.addEventListener( 'mousedown', function (event) {
          setMouse()
          mouseIsPressed = true 
          if (typeof mousePressed !== 'undefined') mousePressed()
        })


        canvas.addEventListener( 'mousemove', function (event) { 
          pmouseX = mouseX
          pmouseY = mouseY
          setMouse(event)
          if (mouseIsPressed) {
            if (typeof mouseDragged !== 'undefined') mouseDragged() 
          }
          if (typeof mouseMoved !== 'undefined') mouseMoved()
        })


        canvas.addEventListener( 'mouseup', function () { 
          mouseIsPressed = false 
          if (typeof mouseReleased !== 'undefined') mouseReleased() 
        })



        // If a setup function is defined, call it
        if (typeof setup !== 'undefined') setup()


        let material; // A line material
        let selected; // Object that was picked

        function setup () {
          material = new THREE.LineBasicMaterial( {color:0xffffff, depthWrite:false, linewidth : 4 } );
        }

        const particles = 100000

        function mousePressed() {
          // const radius = 400;

          // let geometry = new THREE.BufferGeometry();

          // const positions = []

          // const colors = []

          // const sizes = []

          // const color = new THREE.Color();

          // for ( let i = 0; i < particles; i ++ ) {
          //   positions.push( ( Math.random() * 2 - 1 ) * radius )

          //   positions.push( ( Math.random() * 2 - 1 ) * radius )

          //   positions.push( ( Math.random() * 2 - 1 ) * radius )

          //   color.setHSL( i / particles, 1.0, 0.5 )

          //   colors.push( color.r, color.g, color.b )

          //   sizes.push( 20 )
          // }

          // geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
          // geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
          // geometry.setAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1 ).setUsage( THREE.DynamicDrawUsage ) );

          // let particleSystem = new THREE.Points( geometry, material );

          // scene.add( particleSystem );
          console.log('mouse points')
          console.log(mouseX, mouseY)

          var point = new THREE.Vector3 (mouseX,mouseY,0);

          var geometry = new THREE.BufferGeometry();

          let positions = []

          positions.push(point)

          geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) )

          // geometry.setAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1 ).setUsage( THREE.DynamicDrawUsage ) )

          var line = new THREE.Line (geometry, material);

          scene.add (line);

          selected = line;
        }

        function mouseDragged() {
          let line = selected

          let point = new THREE.Vector3 (mouseX,mouseY,0)

          let oldgeometry = line.geometry

          let newgeometry = new THREE.BufferGeometry()

          let vertices = []

          vertices.push(point)

          newgeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

          newgeometry.position.vertices = oldgeometry.position.vertices

          newgeometry.position.vertices.push(point)

          line.geometry = newgeometry
        }

        function mouseMoved () {
          console.log('mouse has been moved')
        }

        function mouseReleased () {
          console.log('mouse has been released')
        }

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement
            const width = canvas.clientWidth
            const height = canvas.clientHeight
            const needResize = canvas.width !== width || canvas.height !== height
            if (needResize) {
            renderer.setSize(width, height, false)
            }
            return needResize
        }

        function render() {
          controls.enabled = editMode ? false : true

          controls.update();

          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement
            camera.aspect = canvas.clientWidth / canvas.clientHeight
            camera.updateProjectionMatrix()
          }

          // update the picking ray with the camera and mouse position
          raycaster.setFromCamera( mouse, camera )

          // update the picking ray with the camera and mouse position
          raycaster.setFromCamera( mouse, camera );

          // calculate objects intersecting the picking ray
          const intersects = raycaster.intersectObjects( scene.children );

          for ( let i = 0; i < intersects.length; i ++ ) {

            // intersects[ i ].object.material.color.set( 0xFF782E )

          }

          renderer.render(scene, camera)

          requestAnimationFrame(render)
        }

        requestAnimationFrame(render)
    },
  },
  mounted() {
    this.threeDRenderer()
  },
};
</script>

<style scoped>
.control {
  background: #484545;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 20px;
  color: var(--dsBrandColor);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.control.active {
  background: var(--dsBrandColor) !important;
  color: #fff;
}
.notes {
  position: absolute;
  top: 0;
  right: 100px;
  width: 300px;
  bottom: 0;
}
.notes textarea {
  width: 100%;
  height: 100%;
  box-shadow: 5px 0px 10px rgba(255, 255, 255, 0.192), -5px 0px 10px rgba(255, 255, 255, 0.192);
  outline: none;
  resize: none;
  padding: 5px;
  /* background: #484545; */
  background: #000;
  color: rgba(255, 255, 255, 0.781);
}
.notes textarea::-webkit-scrollbar {
    width: 4px;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.notes textarea::-webkit-scrollbar-track {
    background: transparent;
}
.notes textarea::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 3px solid var(--dsBrandColor);
}
.controls {
  position: absolute;
  height: 100%;
  width: 100px;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.main-canvas6 {
    width: 100%;
    height: 100%;
    display: block;
}
.editing-container {
  height: calc(100vh - var(--topBarHeight) - 500px);
  /* height: 70vh; */
  /* height: calc(70vh - 50px); */
  /* border: solid 1px; */
  margin-bottom: 8px;
  text-align: center;
}
.main-container {
  position: relative;
}

.other-perspectives {
  height: 29.5vh;
  display: flex;
  align-items: center;
  border: 1px solid tomato;
}
.other-perspectives .perspective-item {
  width: 100%;
  height: 100%;
  position: relative;
}
.perspective-item canvas {
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
}
.guide-line {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  /* background: green; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.vertical-line .line {
  height: 100%;
  width: 1px;
  background: blue;
}
.perspective-item:last-child .vertical-line .line {
  background: green;
}

.horizontal-line .line {
  height: 1px;
  width: 100%;
  background: crimson;
}

.perspective-item:first-child .horizontal-line .line {
  background: green;
}

.guide-line.label {
  align-items: flex-start;
}

.guide-line.label .label {
  background: orange;
  width: inherit;
  padding: 2px 5px;
}
</style>