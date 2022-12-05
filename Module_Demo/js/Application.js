import "babel-polyfill";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import font loader
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
//add text geometry
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

export default class Application {
  constructor() {
    //-----------------------this.scene-----------------------
    this.scene = new THREE.Scene();

    //-----------------------this.camera-----------------------
    //this.camera setting
    // var fov = 75;
    // var aspect = window.innerWidth / window.innerHeight;
    // var near = 0.1;
    // var far  = 1000;
    // var this.camera = new THREE.Perspectivethis.camera(fov, aspect, near, far);
    // this.camera.position.set(0, -400, 400);

    this.camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -500,
      500
    );
    this.camera.position.set(0, 10, 10);
    // this.camera.rotation.x = -45

    this.scene.add(this.camera);

    // //-----------------------controls-----------------------
    // let controls = new OrbitControls(this.camera, this.renderer.domElement);
    // controls.update();

    //-----------------------mesh-----------------------
    //shapes
    // BoxGeometry
    // CapsuleGeometry
    // CircleGeometry
    // ConeGeometry
    // CylinderGeometry
    // DodecahedronGeometry
    // EdgesGeometry
    // ExtrudeGeometry
    // IcosahedronGeometry
    // LatheGeometry
    // OctahedronGeometry
    // PlaneGeometry
    // PolyhedronGeometry
    // RingGeometry
    // ShapeGeometry
    // SphereGeometry
    // TetrahedronGeometry
    // TorusGeometry
    // TorusKnotGeometry
    // TubeGeometry

    //materials
    // Material
    // MeshBasicMaterial
    // MeshDepthMaterial
    // MeshLambertMaterial
    // MeshMatcapMaterial
    // MeshNormalMaterial
    // MeshPhongMaterial
    // MeshPhysicalMaterial
    // MeshStandardMaterial
    // MeshToonMaterial

    //cube
    var geometry_1 = new THREE.BoxGeometry(50, 50, 50);
    var material_1 = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    var cube_1 = new THREE.Mesh(geometry_1, material_1);
    cube_1.castShadow = true;
    this.scene.add(cube_1);

    //sphere
    const geometry = new THREE.SphereGeometry(25, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.y = -50;
    // this.scene.add( sphere );

    //cube with texture
    let loader = new THREE.TextureLoader();
    var texture_2 = loader.load("img/cha-01.png");
    texture_2.wrapS = THREE.RepeatWrapping;
    texture_2.wrapT = THREE.RepeatWrapping;
    texture_2.repeat.set(1, 1);
    var geometry_2 = new THREE.BoxGeometry(50, 50, 50);
    var material_2 = new THREE.MeshPhongMaterial({
      color: 0x2196f3,
      map: texture_2,
      side: THREE.DoubleSide,
      opacity: 0.5,
    });
    var cube_2 = new THREE.Mesh(geometry_2, material_2);
    // cube_2.castShadow = true;
    cube_2.position.x = -50;
    // this.scene.add(cube_2);

    var texture = loader.load("img/cha-00.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    // const plane = new THREE.Mesh( new THREE.PlaneGeometry( 500, 500 ), new THREE.MeshBasicMaterial( {map:texture, side: THREE.DoubleSide} ) );
    //     plane.rotation.x=degrees_to_radians(90)
    //     plane.position.x = final_length_val/2 - 0.5
    //     plane.position.x = 0.5
    //     plane.position.y = -1.5
    //     this.scene.add(plane)

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1200, 1200),
      new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        side: THREE.DoubleSide,
      })
    );
    plane.receiveShadow = true;
    plane.rotation.x = this.degrees_to_radians(90);
    plane.position.y = -25;
    this.scene.add(plane);

    //group
    const group = new THREE.Group();
    this.scene.add(group);

    let fontloader = new FontLoader();
    fontloader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/254249/helvetiker_regular.typeface.json",
      function (font) {
        let message = "Threejs";
        let geometry_4 = new TextGeometry(message, {
          font: font,
          size: 30,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 3,
          bevelSize: 3,
          bevelSegments: 1,
        });
        let material_4 = new THREE.MeshBasicMaterial({
          color: 0xff00ff,
        });
        geometry.center();
        let mesh = new THREE.Mesh(geometry_4, material_4);
        mesh.position.y = 50;
        this.scene.add(mesh);
      }
    );

    //-----------------------light-----------------------
    // const color = 0xFF0000;
    // const pointLight = new THREE.PointLight(color);
    // pointLight.position.set(0, 300, 200);
    // this.scene.add(pointLight);

    const color = 0xffffff;
    const intensity = 0.5;
    const light = new THREE.AmbientLight(color, intensity);
    this.scene.add(light);

    const directionalLight = new THREE.SpotLight(
      0xffffff,
      1,
      0,
      Math.PI / 4,
      1
    );
    directionalLight.castShadow = true;
    directionalLight.position.set(0, 100, 80);
    this.scene.add(directionalLight);

    //-----------------------fog-----------------------
    // {
    //   const color = 0xFF0000;  // white
    //   const near = 10;
    //   const far = 100;
    //   this.scene.fog = new THREE.Fog(color, near, far);
    // }

    // {
    //   const color = 0x00FF00;
    //   const density = 0.1;
    //   this.scene.fog = new THREE.FogExp2(color, density);
    // }

    // //-----------------------animations-----------------------
    // var time = 0;

    // function onUpdate() {
    //   //   time++;
    //   //   if (time < 1000) {
    //   //     this.camera.position.y = animation_calucator(time, 0, 1000, 0, -100);
    //   //   } else if (time < 2000) {
    //   //     this.camera.position.y = animation_calucator(time, 1000, 1100, -100, -300);
    //   //   }
    // }
    // function animation_calucator(time, start, end, value_1, value_2) {
    //   var modified_time =
    //     easeInOutCubic((time - start) / (end - start)) * (end - start) + start;
    //   return (
    //     value_1 +
    //     ((value_2 - value_1) * (modified_time - start)) / (end - start)
    //   );
    // }
    // //https://easings.net/
    // function easeOutCubic(x) {
    //   return 1 - Math.pow(1 - x, 3);
    // }
    // function easeInOutCubic(x) {
    //   return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    // }

    //-----------------------keyboard input-----------------------
    //keyboard input
    var texture_3 = loader.load("img/cha-02.png");
    texture_3.wrapS = THREE.RepeatWrapping;
    texture_3.wrapT = THREE.RepeatWrapping;
    texture_3.repeat.set(1, 1);
    var geometry_3 = new THREE.BoxGeometry(50, 50, 50);
    var material_3 = new THREE.MeshBasicMaterial({
      color: 0x2196f3,
      map: texture_3,
      side: THREE.DoubleSide,
    });
    var cube_3 = new THREE.Mesh(geometry_3, material_3);
    cube_3.position.y = -100;
    // document.addEventListener("keydown", press);
    // function press(e) {
    //   if (e.keyCode === 87 /* w */) {
    //     this.scene.add(cube_3);
    //   }
    // }

    //-----------------------this.renderer-----------------------
    this.renderer = new THREE.WebGLRenderer({ antialias: 1, alpha: 1 });
    this.renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById("main").appendChild(this.renderer.domElement);

    //-----------------------controls-----------------------
    let controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.update();

    this.render();

    //
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    // this.onUpdate();
    this.renderer.render(this.scene, this.camera);
  }

  degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
  }
}
