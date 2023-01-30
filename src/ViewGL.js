import * as THREE from "three";
import {Clock} from "three";



export default class ViewGL {
  constructor(canvasRef, rect) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      60,
      rect.clientWidth / rect.clientHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      antialias: false,
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(rect.clientWidth, rect.clientHeight);
    this.clock = new Clock();
    this.clock.start();
    this.camera.position.setZ(30);
    this.uniformData = {
        u_time: {type: 'f', value: this.clock.getElapsedTime()},
        u_resolution: {value: new THREE.Vector2(rect.clientHeight, rect.clientWidth)} 
    }

    const boxGeometry = new THREE.BoxGeometry(16, 100, 1);
    const boxMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniformData,
      fragmentShader: this.fragmentShader()
    });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    this.scene.add(boxMesh);


    this.renderer.render(this.scene, this.camera);
    this.update();
  }

  // ******************* PUBLIC EVENTS ******************* //
  onMouseMove() {
    // Mouse moves
  }

  onWindowResize(rect) {
    console.log("onWindowResize", rect);
    this.uniformData.u_resolution.value = new THREE.Vector2(rect.clientHeight, rect.clientWidth);
    this.camera.aspect= rect.clientWidth / rect.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(rect.clientWidth, rect.clientHeight);
    this.update()
  }

  destroy() {
    this.renderer.forceContextLoss();
    this.renderer.dispose();
    this.scene.dispose();
    this.clock.dispose();
  }

  // ******************* RENDER LOOP ******************* //
  update() {
    this.uniformData.u_time.value = this.clock.getElapsedTime();
    window.requestAnimationFrame(this.update.bind(this));

    this.renderer.render(this.scene, this.camera);
  }

  }
}
