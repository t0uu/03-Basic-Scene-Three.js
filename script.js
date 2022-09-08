console.log("Hello Three.js");
console.log(THREE);
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Contenedor
const scene = new THREE.Scene()

// We need to create a Mesh

// Combination of a geometry (the shape) and a material (how it looks)
// Start with a BoxGeometry and a MeshBasicMaterial

// Red Cube - BoxGeometry
const geometry = new THREE.BoxGeometry(1,1,1)
// MeshBasicMaterial
const material = new THREE.MeshBasicMaterial({color: '#ff0000'})
// Create Mesh
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)


// Sizes PerspectiveCamera
const sizes = {
    width: 800,
    height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


console.log(canvas);
// Renderer
const renderer = new THREE.WebGLRenderer({
canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)