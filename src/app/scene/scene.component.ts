import {
  Component,
  AfterViewInit,
  ElementRef,
  OnInit,
  ViewChild,
  Input,
  SimpleChanges,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements AfterViewInit {
  constructor() {}
 /**
  * Initializing the variables for the scene
  */
  lastScrollTop = 0;
  @ViewChild('canvas')
  private canvasRef: ElementRef;
  rotationSpeedX: number = 0.05;
  rotationSpeedY: number = 0.002;
  textureLoader = new THREE.TextureLoader();
  planet1Texture: THREE.Texture = this.textureLoader.load('assets/Planet1.png');
  planet2Texture = this.textureLoader.load('assets/NormalMap.jpg');
  geometry = new THREE.IcosahedronBufferGeometry(80, 6);
  material = new THREE.MeshPhongMaterial({
    emissive: 0xf7ce68,
    emissiveIntensity: 0.7,
    shininess: 0,
    normalMap: this.planet1Texture,
  });
  material2 = new THREE.MeshPhongMaterial({
    emissive: 0xfbab7e,
    emissiveIntensity: 0.7,
    shininess: 50,
    normalMap: this.planet2Texture,
  });
  shape: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  shape2: THREE.Mesh = new THREE.Mesh(this.geometry, this.material2);
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  private camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
 /**
  * AfterViewInit start rendering
  */
  ngAfterViewInit(): void {
    this.createScene();
    this.startRender();
    window.addEventListener('resize', () => {
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.render(this.scene, this.camera);
    });
  }

/**
 * Adding the created objects,lighting to the scene
 */
  private createScene() {
    var light = new THREE.HemisphereLight(0xffffff, 0x0c056d, 0.4);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.TextureLoader().load(
      'assets/blurry-gradient-haikei (1).svg'
    );
    this.scene.add(light);
    this.shape.position.set(50, 10, 10);
    this.shape2.position.set(225, 3, -190);
    this.camera.position.set(60, 0, 200);
    this.scene.add(this.shape);
    this.scene.add(this.shape2);
    this.shape.position.y = 1;
  }

  /**
   * Start the render,(optimized by locking framerate to 30fps and disabling antialiasing when pixel ratio is >1 since there is no apparent visual gain while performance tanks)
   */

  startRender() {
    console.log(window.devicePixelRatio)
    let AA = window.devicePixelRatio > 1 ? false : true;
    this.renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      canvas: this.canvas,
      antialias: AA,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: SceneComponent = this;
    component.renderer.render(component.scene, component.camera);
    render();
    function render() {
      setTimeout(() => {
        console.log(component.renderer.info.render.frame);
      }, 1000);
      setTimeout(() => {
        requestAnimationFrame(render);
        component.animateSphere();
        component.renderer.render(component.scene, component.camera);
      }, 1000 / 15);
    }
    window.addEventListener('scroll', () => {
      this.shape.rotation.y += this.rotationSpeedY * 2;
      component.renderer.render(component.scene, component.camera);
    });
  }

  animateSphere() {
    //this.shape.rotation.x+=this.rotationSpeedX
    this.shape.rotation.y += this.rotationSpeedY;
    // this.shape2.rotation.x+=this.rotationSpeedX
    this.shape2.rotation.y += 0.002;
  }
}
