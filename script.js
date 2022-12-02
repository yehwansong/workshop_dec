var scene = new THREE.Scene();




//camera setting
var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var near = 0.1;
var far  = 1000;
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;
  camera.position.set(0, -400, 400);
  let controls = new THREE.OrbitControls(camera);
  controls.update();



//renderer setting
var renderer = new THREE.WebGLRenderer({antialias:1, alpha: 1});
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('main').appendChild( renderer.domElement );


//cube
var geometry_1 = new THREE.BoxGeometry(50, 50, 50);
var material_1 = new THREE.MeshBasicMaterial({ color: 0xff0000});
var cube_1     = new THREE.Mesh(geometry_1, material_1);
cube_1.position.x = -50
scene.add(cube_1);



//sphere
const geometry = new THREE.SphereGeometry( 25, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry, material );
sphere.position.y = -50
scene.add( sphere );



//cube with texture
let loader = new THREE.TextureLoader();
var texture_2 = loader.load( 'img/cha-01.png' );
	texture_2.wrapS = THREE.RepeatWrapping;
	texture_2.wrapT = THREE.RepeatWrapping;
	texture_2.repeat.set(1,1);
var geometry_2 = new THREE.BoxGeometry(50, 50, 50);
var material_2 = new THREE.MeshBasicMaterial({ color: 0x2196f3, map:texture_2, side: THREE.DoubleSide });
var cube_2     = new THREE.Mesh(geometry_2, material_2);
scene.add(cube_2);



//keyboard input
var texture_3 = loader.load( 'img/cha-02.png' );
	texture_3.wrapS = THREE.RepeatWrapping;
	texture_3.wrapT = THREE.RepeatWrapping;
	texture_3.repeat.set(1,1);
var geometry_3 = new THREE.BoxGeometry(50, 50, 50);
var material_3 = new THREE.MeshBasicMaterial({ color: 0x2196f3, map:texture_3, side: THREE.DoubleSide });
var cube_3     = new THREE.Mesh(geometry_3, material_3);
cube_3.position.y = -100
document.addEventListener('keydown',press)
function press(e){
	if (e.keyCode === 87 /* w */ ){
		scene.add(cube_3);
	}
}



  let fontloader = new THREE.FontLoader();
 fontloader.load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/254249/helvetiker_regular.typeface.json", function (font) {
    let message = "Cod";
    let geometry_4 = new THREE.TextGeometry(message, {
      font: font,
      size: 30,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 3,
      bevelSegments: 1
    });
    let material_4 = new THREE.MeshBasicMaterial({ 
      color: 0xff00ff
    });
    geometry.center();
    let mesh = new THREE.Mesh(geometry_4, material_4);
    scene.add(mesh);
	mesh.position.y = 50
 });











function onUpdate() {

}

function render() {
	requestAnimationFrame(render);
  	onUpdate();
	renderer.render(scene, camera);
}
render();