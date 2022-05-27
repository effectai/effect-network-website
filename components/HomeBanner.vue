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

export default {
  data() {
    return {
      markerSvg: require('@/assets/img/icons/map_person.svg')
    }
  },
  components: {
  },
  mounted() {
    const points = [
      [52.377956, 4.897070],
      [41.385063, 2.173404],
      [40.712776, -74.005974],
      [-22.908333, -43.196388],
      [37.835857, -122.586814],
      [-34.2166866, 151.255740],
      [25.0757595, 37.2977663],
      [12.1202161, 15.0224395],
      [-33.4727092, -70.7699147],
      [53.5557125, -113.6328035],
      [19.39068, -99.3055288],
      [32.8829357, 13.1708263],
      [18.0671579, -16.0236009],
      [27.2306608, 2.5406943],
      [44.4378043, 26.0245981],
      [18.0671579, -16.0236009],
      [-15.4168189, 28.273713],
      [28.5273342, 77.1389452],
      [47.8915649, 106.7617896],
      [30.6584534, 103.9354627],
      [-6.2297419, 106.7594779]
    ]
    const N = points.length;
    const gData = [];
    for (let i = 0; i < points.length; i++) {
      gData.push({
        lat: points[i][0],
        lng: points[i][1],
        maxR: 3,
        propagationSpeed: .7,
        repeatPeriod: Math.floor(Math.random() * (1100 - 900 + 1)) + 900
      });
    }


    const colorInterpolator = t => `rgba(81, 88, 250,${1-t})`;
    const cameraRotationSpeed = 0.0003

    const Globe = new ThreeGlobe()
      .globeImageUrl(require('@/assets/img/maps/white.jpg'))
      .atmosphereColor('#101D56')
      .atmosphereAltitude(0.05)
      .ringsData(gData)
      .ringColor(() => colorInterpolator)
      .ringMaxRadius('maxR')
      .ringPropagationSpeed('propagationSpeed')
      .ringRepeatPeriod('repeatPeriod');

    // Setup renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth * 1.5, window.innerHeight * 1.5);
    document.getElementById('globe').appendChild(renderer.domElement);

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(Globe);
    scene.add(new THREE.AmbientLight(0xffffff));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.01));
    scene.background = null;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;
    camera.position.x = 30;
    camera.position.y = 30;
    // camera.position.multiplyScalar(.1)
    camera.updateProjectionMatrix();

    // Add camera controls
    const tbControls = new TrackballControls(camera, renderer.domElement);
    tbControls.rotateSpeed = .5;
    tbControls.noZoom = false;
    tbControls.minDistance = 275;
    tbControls.maxDistance = 275;
    // const controls = new OrbitControls( camera, renderers[0].domElement );
    // controls.autoRotate = false;
    // controls.autoRotateSpeed = 0.25
    // controls.enableZoom = false;
    // controls.rotateSpeed  = 0.1

    renderer.setClearColor( 0x000000, 0 );

    (function animate() {
      // Frame cycle
      tbControls.update();
      renderer.render(scene, camera);
      scene.rotation.x -= cameraRotationSpeed
      requestAnimationFrame(animate);
    })();

    
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
