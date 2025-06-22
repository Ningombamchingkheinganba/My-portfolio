import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  animate = false;
  
  ngOnInit(): void {
    setTimeout (() => {
      this.animate = true;
    }, 200)
  }
}
