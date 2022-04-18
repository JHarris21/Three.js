// grid line sizes
var size = 30;
var divisions = 30;


// grid scene
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 9;
camera.position.y = 3;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("black");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper);

var controls = new THREE.OrbitControls(camera,renderer.domElement);


// geometry material of cube
var geometry = new THREE.BoxGeometry(10, 1, 10);
var material = new THREE.MeshPhongMaterial({color:0xFFCC00});
var mesh = new THREE.Mesh(geometry,material);
mesh.position.x = 0;
mesh.position.y = 2;
scene.add(mesh);

// cube outside of rotating cube
var geometry = new THREE.BoxGeometry(2, 2, 1);
var material = new THREE.MeshPhongMaterial({color:0xFFCC00});
var mesh = new THREE.Mesh(geometry,material);
mesh.position.x = 0;
mesh.position.y = 3.5;
scene.add(mesh);

// rotating cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhongMaterial({color:0xFFCC00});
var mesh = new THREE.Mesh(geometry,material);
mesh.position.x = 0;
mesh.position.y = 3.5;
scene.add(mesh);

// light
var light = new THREE.SpotLight(0xFFCC00,1,70);
light.position.set(1, 10, 1);
scene.add(light);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
   
    camera.updateProjectionMatrix();
});
    



function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.15;
    mesh.rotation.y += 0.15;
    
//autoRotate timer
    var timer = Date.now() * 0.0005;

    camera.position.x = Math.cos(timer)*10;
    camera.position.z = Math.sin(timer)*10;

    camera.lookAt(scene.position);
    renderer.render(scene,camera);
    

}
animate();



