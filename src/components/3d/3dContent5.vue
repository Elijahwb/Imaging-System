<template>
  <div class="main-container">
      <div class="editing-container">
        <canvas class="main-canvas5"></canvas>
        <div class="controls"></div>
      </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SubsurfaceScatteringShader } from 'three/examples/jsm/shaders/SubsurfaceScatteringShader'
import  { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import Stats from 'three/examples/jsm/libs/stats.module'
// import FloatingEditingMenu from "../menu/FloatingEditingMenu.vue";
// import LiveImages from "./3dLiveImages.vue";
export default {
  name: "Prototype5",
  methods: {
    mainInitialization () {
      const canvas = document.querySelector('.main-canvas5')
      let container, stats;
      let camera, scene, renderer;
      let model;
      container = document.querySelector('.editing-container')

      init()
      animate()

      function init() {
        camera = new THREE.PerspectiveCamera( 40, canvas.clientWidth / canvas.clientHeight, 1, 5000 )
        camera.position.set( 0.0, 300, 400 * 4 )

        scene = new THREE.Scene();

        // Lights

        scene.add( new THREE.AmbientLight( 0x888888 ) );

        const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.03 );
        directionalLight.position.set( 0.0, 0.5, 0.5 ).normalize();
        scene.add( directionalLight );

        const pointLight1 = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0x888888 } ) );
        pointLight1.add( new THREE.PointLight( 0x888888, 7.0, 300 ) );
        scene.add( pointLight1 );
        pointLight1.position.x = 0;
        pointLight1.position.y = - 50;
        pointLight1.position.z = 350;

        const pointLight2 = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0x888800 } ) );
        pointLight2.add( new THREE.PointLight( 0x888800, 1.0, 500 ) );
        scene.add( pointLight2 );
        pointLight2.position.x = - 100;
        pointLight2.position.y = 20;
        pointLight2.position.z = - 260;

        renderer = new THREE.WebGLRenderer( { canvas } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( canvas.clientWidth, canvas.clientHeight );
        renderer.outputEncoding = THREE.sRGBEncoding;

        //

        stats = new Stats();
        container.appendChild( stats.dom );

        const controls = new OrbitControls( camera, container );

        window.addEventListener( 'resize', onWindowResize );

        initMaterial();

      }


      function initMaterial() {
        const loader = new THREE.TextureLoader();
        const imgTexture = loader.load( 'img/texture3.jpg' );
        const thicknessTexture = loader.load( 'img/texture4.jpg' );
        imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;

        const shader = SubsurfaceScatteringShader;
        const uniforms = THREE.UniformsUtils.clone( shader.uniforms );

        // uniforms[ 'map' ].value = imgTexture;

        uniforms[ 'diffuse' ].value = new THREE.Vector3( 1.0, 0.2, 0.2 );
        uniforms[ 'shininess' ].value = 500;

        uniforms[ 'thicknessMap' ].value = thicknessTexture;
        uniforms[ 'thicknessColor' ].value = new THREE.Vector3( 0.5, 0.3, 0.0 );
        uniforms[ 'thicknessDistortion' ].value = 0.1;
        uniforms[ 'thicknessAmbient' ].value = 0.4;
        uniforms[ 'thicknessAttenuation' ].value = 0.8;
        uniforms[ 'thicknessPower' ].value = 2.0;
        uniforms[ 'thicknessScale' ].value = 16.0;

        const material = new THREE.ShaderMaterial( {
          uniforms: uniforms,
          vertexShader: shader.vertexShader,
          fragmentShader: shader.fragmentShader,
          lights: true
        } );
        material.extensions.derivatives = true;

        // LOADER

        const objLoader = new OBJLoader()
        objLoader.load('/img/Teeth.obj', (object) => {
          model = object.children[ 0 ];
          model.position.set( 0, 0, 10 );
          model.scale.setScalar( 1 );
          model.material = material;
          scene.add(model);
        });

        initGUI( uniforms );

      }


      function initGUI( uniforms ) {

        const gui = new GUI( { title: 'Thickness Control' } );

        const ThicknessControls = function () {

          this.distortion = uniforms[ 'thicknessDistortion' ].value;
          this.ambient = uniforms[ 'thicknessAmbient' ].value;
          this.attenuation = uniforms[ 'thicknessAttenuation' ].value;
          this.power = uniforms[ 'thicknessPower' ].value;
          this.scale = uniforms[ 'thicknessScale' ].value;

        };

        const thicknessControls = new ThicknessControls();

        gui.add( thicknessControls, 'distortion' ).min( 0.01 ).max( 1 ).step( 0.01 ).onChange( function () {

          uniforms[ 'thicknessDistortion' ].value = thicknessControls.distortion;
          console.log('distortion')

        } );

        gui.add( thicknessControls, 'ambient' ).min( 0.01 ).max( 5.0 ).step( 0.05 ).onChange( function () {

          uniforms[ 'thicknessAmbient' ].value = thicknessControls.ambient;

        } );

        gui.add( thicknessControls, 'attenuation' ).min( 0.01 ).max( 5.0 ).step( 0.05 ).onChange( function () {

          uniforms[ 'thicknessAttenuation' ].value = thicknessControls.attenuation;

        } );

        gui.add( thicknessControls, 'power' ).min( 0.01 ).max( 16.0 ).step( 0.1 ).onChange( function () {

          uniforms[ 'thicknessPower' ].value = thicknessControls.power;

        } );

        gui.add( thicknessControls, 'scale' ).min( 0.01 ).max( 50.0 ).step( 0.1 ).onChange( function () {

          uniforms[ 'thicknessScale' ].value = thicknessControls.scale;

        });

      }

      function onWindowResize() {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( canvas.clientWidth, canvas.clientHeight );

      }

      function animate() {

        requestAnimationFrame( animate );

        render();

        stats.update();

      }

      function render() {
        if ( model ) model.rotation.y = performance.now() / 5000;

        renderer.render( scene, camera );

      }
    }
  },

  mounted() {
    this.mainInitialization()
  },
};
</script>

<style scoped>
.controls {
  position: absolute;
  height: 100%;
  width: 100px;
  border:1px solid blue;
  right: 0;
  top: 0;
}
.main-canvas5 {
    width: 100%;
    height: 100%;
    border: 2px solid olivedrab;
}
.editing-container {
  /* height: calc(100vh - var(--topBarHeight) - 500px); */
  /* height: 70vh; */
  height: calc(70vh - 50px);
  border: solid 1px;
  margin-bottom: 8px;
  text-align: center;
  background: red;
}
.main-container {
  position: relative;
  z-index: 300;
}

.other-perspectives {
  height: 18vw;
  display: flex;
}
.other-perspectives .perspective-item {
  width: 100%;
  height: 100%;
  position: relative;
}
.perspective-item canvas {
  width: 100%;
  height: 100%;
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