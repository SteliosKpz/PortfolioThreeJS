import { Component,AfterViewInit,ElementRef,OnInit,ViewChild, Input, SimpleChanges } from '@angular/core';
import * as THREE from "three"

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit {
  constructor() { }
  lastScrollTop = 0;
  @ViewChild('canvas')
  private canvasRef:ElementRef
  rotationSpeedX:number=0.05
  rotationSpeedY:number=0.002
  @Input() scrolled=false
  private camera=new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 10000)
  private get canvas():HTMLCanvasElement{
    return this.canvasRef.nativeElement
  }
  ngOnChanges(changes: SimpleChanges) {

    if (changes.scrolled.currentValue==true){
      const myAxis = new THREE.Vector3(0, 1, 0);
    //  this.camera.quaternion.slerp(new THREE.Quaternion(this.shape2.geometry.getAttribute('position').array[0],this.shape2.geometry.getAttribute('position').array[1],this.shape2.geometry.getAttribute('position').array[2],.1),.1)
    }


}
  private textureLoader =new THREE.TextureLoader()
  private texture=this.textureLoader.load('assets/NormalMap.jpg')
  private planetTexture=this.textureLoader.load('assets/Planet.png')
  private geometry= new THREE.IcosahedronGeometry(80,7)
  private material= new THREE.MeshPhongMaterial({emissive: 0x6600FF,emissiveIntensity: 0.9, shininess: 0,normalMap:this.planetTexture})
  private material2= new THREE.MeshPhongMaterial({emissive: 0x00CC99,emissiveIntensity: 0.6, shininess: 50,normalMap:this.texture})
  private shape:THREE.Mesh=new THREE.Mesh(this.geometry,this.material)
  private shape2:THREE.Mesh=new THREE.Mesh(this.geometry,this.material2)
  private renderer!:THREE.WebGLRenderer
  private scene!:THREE.Scene
  currPlanet=this.shape
  ngAfterViewInit():void{
    console.log("hg")
    this.createScene()
    this.startRender()
    window.addEventListener( 'resize', ()=>{
    console.log('res')
    const aspect = window.innerWidth / window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.render(this.scene,this.camera)

    } );

  }

private animateCube(){
  //this.shape.rotation.x+=this.rotationSpeedX
 this.shape.rotation.y+=this.rotationSpeedY
 // this.shape2.rotation.x+=this.rotationSpeedX
  this.shape2.rotation.y+=0.001
}
  private createScene(){
    var light = new THREE.HemisphereLight(0xffffff, 0x0C056D,.7);
    this.scene=new THREE.Scene()
    this.scene.background=new THREE.TextureLoader().load('assets/blurry-gradient-haikei.svg')
    this.scene.add(light)

    this.shape.position.set(50,10,30)
    this.shape2.position.set(225,3,-150)
    this.camera.position.set(60, 0, 200);
    this.scene.add(this.shape)
    this.scene.add(this.shape2)
    let aspectRatio=this.getaspectRatio()
    // this.camera=new THREE.PerspectiveCamera(this.fov,aspectRatio,)
    // this.camera.position.z=this.cameraZ
    // this.camera.position.x=0
    this.shape.position.y=1
  //  this.camera.position.applyAxisAngle( new THREE.Vector3(0,0,0),50)

    this.setPoints
  }


  setPoints(min,max){
    var noise=Math.floor(Math.random()*(max-min+1)+min);
    console.log(noise)
   for(var i=0; i< this.geometry.attributes.position.array.length; i++){
    var v1 = this.geometry.attributes.position.array[i]
     var v2 = this.geometry.attributes.position.array[i+1];
     var v3 = this.geometry.attributes.position.array[i+2];
     v1 += -noise/2 + Math.random()*noise;
     v2 += -noise/2 + Math.random()*noise;
     v3 += -noise/2 + Math.random()*noise;
     }
console.log(this.geometry)
  }
  private getaspectRatio(){
    return this.canvas.clientWidth/this.canvas.clientHeight
  }


  private startRender(){
    this.renderer=new THREE.WebGLRenderer({canvas:this.canvas,antialias:true})
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight)
    let component:SceneComponent=this;
    component.renderer.render(component.scene,component.camera)
    render()
    function render(){
      requestAnimationFrame(render)
      component.animateCube()
      component.renderer.render(component.scene,component.camera)
    }
    window.addEventListener( 'scroll',()=>{
      this.currPlanet=this.currPlanet==this.shape?this.shape2:this.shape
    //  this.shape.rotation.x+=this.rotationSpeedX*2
      this.shape.rotation.y+=this.rotationSpeedY*2
     component.renderer.render(component.scene,component.camera)
    })

  }

}
