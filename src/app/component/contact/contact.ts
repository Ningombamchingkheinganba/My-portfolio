import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  mail = "ningchingkhei@gmail.com"

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

    const contactSection = document.getElementById("contact");
    if(contactSection) {
      observer.observe(contactSection);
    }
  }
}
