import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  // animate = false;

  // ngOnInit(): void {
  //   setTimeout (() => {
  //     this.animate = true;
  //   }, 200)
  // }

  // @HostListener('window:scroll', [])
  // onScroll() {
  //   const offset = window.scrollY;
  //   if (offset > 1) this.animate = true;
  // }

  animate = false;

  skills: Skill[] = [
    { name: 'Angular', percentage: 90, color: 'from-red-500 to-pink-500' },
    { name: 'Node.js', percentage: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Three.js', percentage: 80, color: 'from-blue-500 to-cyan-500' },
    { name: 'MySQL', percentage: 85, color: 'from-orange-500 to-yellow-500' },
    { name: 'TypeScript', percentage: 88, color: 'from-purple-500 to-indigo-500' },
    { name: 'Express.js', percentage: 82, color: 'from-gray-600 to-gray-800' }
  ];

   startDate = new Date('2023-11-01');
   currentDate = new Date();
   diffInMonths = (this.currentDate.getFullYear() - this.startDate.getFullYear()) * 12 + (this.currentDate.getMonth() - this.startDate.getMonth());
   experienceYears = (this.diffInMonths / 12).toFixed(1);

  stats = [
    { value: '1.8', label: 'Years Experience' },
    { value: '2', label: 'Projects Completed' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  ngOnInit(): void {
    // Use Intersection Observer for scroll animations
    this.setupScrollAnimation();
  }

  private setupScrollAnimation(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate = true;
          this.animateSkillBars();
        }
      });
    }, { threshold: 0.3 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }

  private animateSkillBars(): void {
    setTimeout(() => {
      this.skills.forEach((skill, index) => {
        setTimeout(() => {
          const skillBar = document.getElementById(`skill-${index}`);
          if (skillBar) {
            skillBar.style.width = `${skill.percentage}%`;
          }
        }, index * 200);
      });
    }, 500);
  }
}
