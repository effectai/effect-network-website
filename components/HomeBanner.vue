<template>
  <div class="banner" data-aos="fade-in">
    <section class="section">
      <div class="container is-max-widescreen mt-6">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-spaced" data-aos="fade-up"><span>The Future-Of-Work is here</span></h1>
            <h1 class="subtitle has-background-white-blur pr-6" data-aos="fade-up" data-aos-delay="150"><span class="pr-6">Earn $EFX anywhere at any time by completing simple tasks.</span></h1>
            <div style="display: inline-block" data-aos="zoom-in" data-aos-delay="300"><a target="_blank" href="https://app.effect.network" class="button is-primary" :class="{'is-accent': $colorMode.value === 'dark'}">Launch App</a></div>
          </div>
        </div>  
        <div id="globe"></div>
      </div>
    </section>
  </div>
</template>
<script>
import ThreeGlobe from 'three-globe';
import * as THREE from 'three';
import TrackballControls from 'three-trackballcontrols';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import {
  CSS2DRenderer
} from "three/examples/jsm/renderers/CSS2DRenderer";

export default {
  data() {
    return {
      markerSvg: require('@/assets/img/icons/map_person.svg')
    }
  },
  components: {
  },
  mounted() {
    // Add random markers
    // TODO: make a set of predefined markers
    const N = 60;
    const gData = [...Array(N).keys()].map(() => ({
      lat: ((Math.random() - 0.5) * 180),
      lng: (Math.random() - 0.5) * 360,
      size: 60,
    }));

    let cameraRotationSpeed = 0.0003;
 
    const world = new ThreeGlobe()
      .globeImageUrl(require('@/assets/img/maps/Map_2.jpg'))
      .atmosphereColor('#101D56')
      .atmosphereAltitude(0.05)
      // .htmlElementsData(gData)
      // .htmlElement(d => {
      //   const el = document.createElement('div');
      //   el.innerHTML = `<img src="${this.markerSvg}">`;
      //   el.style.color = d.color;
      //   el.style.width = `${d.size}px`;
      //   el.style['pointer-events'] = 'auto';
      //   return el;
      // });

    // Setup renderers
    const renderers = [new THREE.WebGLRenderer(), new CSS2DRenderer()];
    renderers.forEach((r, idx) => {
      r.setSize(window.innerWidth * 1.5, window.innerHeight * 1.5);
      if (idx > 0) {
        // overlay additional on top of main renderer
        r.domElement.style.position = 'absolute';
        r.domElement.style.top = '0px';
        r.domElement.style.pointerEvents = 'none';
      }
      document.getElementById('globe').appendChild(r.domElement);
    });

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(world);
    scene.add(new THREE.AmbientLight(0xffffff));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.01));
    scene.background = null;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;
    camera.position.x = 30;
    camera.position.y = 0;
    // camera.position.multiplyScalar(.1)
    camera.updateProjectionMatrix();

    // Add camera controls
    const tbControls = new TrackballControls(camera, renderers[0].domElement);
    tbControls.rotateSpeed = .5;
    tbControls.noZoom = false;
    tbControls.minDistance = 275;
    tbControls.maxDistance = 275;
    // const controls = new OrbitControls( camera, renderers[0].domElement );
    // controls.autoRotate = false;
    // controls.autoRotateSpeed = 0.25
    // controls.enableZoom = false;
    // controls.rotateSpeed  = 0.1

    renderers[0].setClearColor( 0x000000, 0 );

    world.setPointOfView(camera.position, world.position);
    tbControls.addEventListener('change', () => world.setPointOfView(camera.position, world.position));

    (function animate() {
      tbControls.update()
      // controls.update()
      scene.rotation.x += cameraRotationSpeed      
      renderers.forEach(r => r.render(scene, camera));
      //camera.lookAt(world.position)
      world.setPointOfView(camera.position, world.position)
      requestAnimationFrame(animate);
    })();

    window.addEventListener( 'resize', () => {
      if (window.innerWidth < 1000) {
        renderers.forEach(r => () => {
          r.setSize(window.innerWidth, window.innerHeight);
          r.render(scene, camera);
        });
      } else {
        renderers.forEach(r => () => {
          r.setSize(window.innerWidth * 1.5, window.innerHeight * 1.5);
          r.render(scene, camera);
        });
      }
      camera.updateProjectionMatrix();
      world.setPointOfView(camera.position, world.position)
      tbControls.update()
    });

    
  }
}
</script>


<style lang="scss" scoped>
#globe {
  position: absolute;
  top: calc(100vh - 800px);
  left: -300px;
  z-index: -1;
  // height: 100px !important;
  @include mobile {
    top: calc(100vh - 400px);
    left: -100px;
  }
}
.banner {
  overflow: hidden;
  position: relative;
  // background: url('~assets/img/logo-3d.png');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 500px;
  height: calc(100vh - 4.25rem);
  &:before {
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;
    left: 0;
  }
  .section, .container, .columns {
    @include mobile {
      height: 100%
    }
  }
}
@include desktop {
  .title {
    font-size: 54px;
  }
}
</style>
