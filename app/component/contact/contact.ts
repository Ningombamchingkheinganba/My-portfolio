import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  mail = "ningchingkhei@gmail.com"

  animate = false;
  
  ngOnInit(): void {
    setTimeout (() => {
      this.animate = true;
    }, 200)
  }
}
