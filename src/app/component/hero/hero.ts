import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  // animate = false;

  // ngOnInit(): void {
  //   setTimeout(() => (this.animate = true), 100); // trigger animation
  // }

  // ngAfterViewInit(): void {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  //   const renderer = new THREE.WebGLRenderer({ canvas: <HTMLCanvasElement>document.getElementById('heroCanvas'), alpha: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   camera.position.z = 5;

  //   const geometry = new THREE.SphereGeometry(1, 32, 32);
  //   const material = new THREE.MeshStandardMaterial({ color: 0x007bff });
  //   const sphere = new THREE.Mesh(geometry, material);
  //   scene.add(sphere);

  //   const light = new THREE.PointLight(0xffffff, 1, 100);
  //   light.position.set(10, 10, 10);
  //   scene.add(light);

  //   const animateScene = () => {
  //     requestAnimationFrame(animateScene);
  //     sphere.rotation.y += 0.01;
  //     sphere.rotation.x += 0.005;
  //     renderer.render(scene, camera);
  //   };

  //   animateScene();
  // }


  @ViewChild('heroCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  animate = false;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private animationId: number = 0;

  ngOnInit(): void {
    // Trigger animations
    setTimeout(() => {
      this.animate = true;
    }, 500);

    // Initialize Three.js
    this.initThreeJS();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThreeJS(): void {
    const canvas = this.canvasRef.nativeElement;
    
    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Create particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
      opacity: 0.6
    });
    
    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
    
    this.camera.position.z = 1000;
    
    this.animateParticles();
    this.handleResize();
  }

  private animateParticles(): void {
    this.animationId = requestAnimationFrame(() => this.animateParticles());
    
    this.particles.rotation.x += 0.0005;
    this.particles.rotation.y += 0.0005;
    
    this.renderer.render(this.scene, this.camera);
  }

  private handleResize(): void {
    window.addEventListener('resize', () => {
      if (this.camera && this.renderer) {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
