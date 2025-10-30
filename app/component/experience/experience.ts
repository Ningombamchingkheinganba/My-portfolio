import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements OnInit {
  
  animate = false;
  
  ngOnInit(): void {
    this.setUpScrollAnimation();
  }

  private setUpScrollAnimation(): void {
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          this.animate = true;
        }
      })
    }, {threshold: 0.3});

    const experienceSection = document.getElementById("experience");
    if(experienceSection) {
      observer.observe(experienceSection);
    }
  }
  
}
