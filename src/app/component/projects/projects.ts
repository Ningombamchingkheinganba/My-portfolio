import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projectList = [
    {
      title: 'Employee Management System',
      tech: ['Angular', 'Node.js', 'MySQL'],
      description: 'A role-based employee management system built with Angular and MySQL.',
    },
    {
      title: '3D E-commerce Platform',
      tech: ['Angular', 'Three.js', 'Sequelize'],
      description: 'E-commerce website with 3D product view using Three.js and Sequelize.',
    },
  ];

  animate = false;
  
  ngOnInit(): void {
    // Use Intersection Observer for scroll animations
    this.setupScrollAnimation();
  }

  private setupScrollAnimation(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate = true;
          // this.animateSkillBars();
        }
      });
    }, { threshold: 0.3 });

    const projectSection = document.getElementById('projects');
    if (projectSection) {
      observer.observe(projectSection);
    }
  }

}
