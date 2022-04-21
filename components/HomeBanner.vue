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
      </div>
      <div id="globe"></div>
    </section>
  </div>
</template>
<script>
import ThreeGlobe from 'three-globe';
import * as THREE from 'three';
import TrackballControls from 'three-trackballcontrols';
import { CSS2DRenderer } from 'three-css2drender'

export default {
  data() {
    return {
      markerSvg: require('@/assets/img/icons/map_person.svg')
    }
  },
  components: {
  },
  mounted() {
    const markerSvg = `<svg viewBox="-4 0 36 36">
      <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
      <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>`;
    // Gen random data
    const N = 30;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: 60,
      color: 'blue'
    }));

    const world = new ThreeGlobe()
      .showGlobe(false)
      .atmosphereColor('#fff')
      .htmlElementsData(gData)
      .htmlElement(d => {
        console.log('d', d)
        const el = document.createElement('div');
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;
        el.style['pointer-events'] = 'auto';
        el.style.cursor = 'pointer';
        console.log(el)
        el.onclick = () => console.info(d);
        return el;
      });

    // TODO: replace this
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries => {
      world.hexPolygonsData(countries.features)
      world.hexPolygonResolution(1)
      world.hexPolygonMargin(0.1)
      world.hexPolygonColor(() => `rgba(0,0,0,0.3)`)
    });

    // Setup renderers
    const renderers = [new THREE.WebGLRenderer(), new THREE.CSS2DRenderer()];
    renderers.forEach((r, idx) => {
      r.setSize(window.innerWidth, window.innerHeight);
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
    scene.add(new THREE.AmbientLight(0xbbbbbb));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6));
    scene.background = null;

    // Setup camera
    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 250;

    // Add camera controls
    const tbControls = new TrackballControls(camera, renderers[0].domElement);
    tbControls.enableZoom = false;
    tbControls.rotateSpeed = 1;
    tbControls.zoomSpeed = 0;
    renderers[0].setClearColor( 0x000000, 0 );

    world.setPointOfView(camera.position, world.position);
    tbControls.addEventListener('change', () => world.setPointOfView(camera.position, world.position));

    // Kick-off renderer
    (function animate() { // IIFE
      // Frame cycle
      tbControls.update();
      scene.rotation.x += 0.0005
      renderers.forEach(r => r.render(scene, camera));
      requestAnimationFrame(animate);
    })();
  }
}
</script>


<style lang="scss" scoped>
.banner {
  overflow: hidden;
  position: relative;
  // background: url('~assets/img/logo-3d.png');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: bottom right;
  height: 50vw;
  min-height: 500px;
  max-height: 950px;
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
}
@include desktop {
  .title {
        font-size: 54px;
  }
}
</style>
