/**
 * Scene
 */
const scene = new THREE.Scene()


/**
 * Camera
 */
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
const camera = new THREE.PerspectiveCamera(50, windowWidth / windowHeight)
camera.position.z = 3
scene.add(camera)


const renderer = new THREE.WebGLRenderer({
    antialias: true
})

/**
->Particle
**/
let particleCount = 1000

const allParticle = new THREE.Object3D()
scene.add(allParticle)

var particle

for (var p = 0; p < particleCount; p++) {


    let pX = Math.random() * 500 - 250
    let pY = Math.random() * 500 - 250
    let pZ = Math.random() * 500 - 250

    const geometry = new THREE.SphereGeometry(0.5, 0.5, 0.5)
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.3,
        roughness: 0.8


    })




    particle = new THREE.Mesh(geometry, material)
    particle.receiveShadow = true
    particle.position.x = pX
    particle.position.y = pY
    particle.position.z = pZ
    allParticle.add(particle)


}

/**
->Particle 2
**/
let particleCount2 = 1000

const allParticle2 = new THREE.Object3D()
scene.add(allParticle2)

var particle2

for (var p = 0; p < particleCount2; p++) {


    let pX2 = Math.random() * 500 - 250
    let pY2 = Math.random() * 500 - 250
    let pZ2 = Math.random() * 500 - 250

    const geometry2 = new THREE.SphereGeometry(0.5, 0.5, 0.5)
    const material2 = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.3,
        roughness: 0.8

    })
    particle2 = new THREE.Mesh(geometry2, material2)
    particle2.position.x = pX2
    particle2.position.y = pY2
    particle2.position.z = pZ2
    allParticle2.add(particle2)


}


/**
 * PointLights
 **/
const ambientLight2 = new THREE.AmbientLight(0x1000ff, 10)
scene.add(ambientLight2)

const ambientLight3 = new THREE.AmbientLight(0xff0000, 10)
scene.add(ambientLight3)


/**
 * Lights
 **/
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)
/*
const pointLight = new THREE.PointLight(0xffffff, 1.5)
pointLight.position.z = 0.78
pointLight.position.y = 0.2
pointLight.castShadow = true
scene.add(pointLight)
*/

const directionLight = new THREE.DirectionalLight(0xffffff, 0.1)
directionLight.position.x = 1
directionLight.position.y = 1
directionLight.position.z = 1
directionLight.castShadow = true
directionLight.shadow.camera.top = 1.20
directionLight.shadow.camera.right = 1.20
directionLight.shadow.camera.bottom = -1.20
directionLight.shadow.camera.left = -1.20
scene.add(directionLight)

/**
 * Renderer
 **/
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(windowWidth, windowHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

/**
 * Resize
 */
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    camera.aspect = windowWidth / windowHeight
    camera.updateProjectionMatrix()

    renderer.setSize(windowWidth, windowHeight)
})





/**
mouse
**/


const mouse = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX / windowWidth - 0.5
    mouse.y = event.clientY / windowHeight - 0.5
})


/**
loops
**/
let z = 0

const loop = () => {


    window.requestAnimationFrame(loop)
    z += 0.001


    allParticle.rotation.y += 0.001
    allParticle2.rotation.y += 0.0015
    /*allParticle.rotation.y += hGain.gain.value / 1000
    allParticle2.rotation.y += mGain.gain.value / 1000
    directionLight.position.x = (lGain.gain.value) * 10
    BackGround.rotation.z += 0.0005
    tv.position.y = Math.cos(z) + 0.75
    bed.position.y = Math.sin(z)
    windowAll.position.y = Math.sin(z) * 0.75
    djController.position.y = Math.sin(z) * -0.2
    bureauPc.position.y = Math.cos(z) * 0.2*/
    camera.position.x = mouse.x * 3
    camera.position.y = -mouse.y * 3
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
}

loop()


/**
 * CLIC
 */

const body = document.querySelector('body')

body.addEventListener('mousedown', () => {

    console.log(event.clientX)

    if (event.clientX < 750) {


        ambientLight2.isAmbientLight = false
        ambientLight3.isAmbientLight = true
    }


    if (event.clientX > 750) {


        ambientLight2.isAmbientLight = true
        ambientLight3.isAmbientLight = false

    }





})
