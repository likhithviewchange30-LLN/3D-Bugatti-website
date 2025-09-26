// Handle contact form submission (demo only)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! We'll contact you soon 🚗💨");
});

// card flip
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
});
// ---for 3D model code---
// Setup scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Setup camera
const camera = new THREE.PerspectiveCamera(
  50, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);
camera.position.set(0, 1, 5);

// Setup renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("car-container").appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Load 3D model
const loader = new THREE.GLTFLoader();
loader.load(
  "models/car.gltf", // change this to your model path
  function (gltf) {
    const car = gltf.scene;
    car.scale.set(1.5, 1.5, 1.5);
    car.position.set(0, -1, 0);
    scene.add(car);
  },
  undefined,
  function (error) {
    console.error("Error loading model:", error);
  }
);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Handle resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
