var scene = new THREE.Scene();




//camera setting
var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var near = 0.1;
var far  = 1000;
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;



//renderer setting
var renderer = new THREE.WebGLRenderer({antialias:1, alpha: 1});
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('main').appendChild( renderer.domElement );


//cube
var geometry_1 = new THREE.BoxGeometry(1, 1, 1);
var material_1 = new THREE.MeshBasicMaterial({ color: 0xff0000});
var cube_1     = new THREE.Mesh(geometry_1, material_1);
cube_1.position.x = -1
scene.add(cube_1);



//sphere
const geometry = new THREE.SphereGeometry( 0.5, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry, material );
sphere.position.y = -1
scene.add( sphere );



//cube with texture
let loader = new THREE.TextureLoader();
var texture = loader.load( 'img/cha-01.png' );
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(1,1);
var geometry_2 = new THREE.BoxGeometry(1, 1, 1);
var material_2 = new THREE.MeshBasicMaterial({ color: 0x2196f3, map:texture, side: THREE.DoubleSide });
var cube_2     = new THREE.Mesh(geometry_2, material_2);
scene.add(cube_2);




function onUpdate() {

}

function render() {
	requestAnimationFrame(render);
  	onUpdate();
	renderer.render(scene, camera);
}
render();