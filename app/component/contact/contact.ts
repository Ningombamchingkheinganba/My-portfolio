import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {


  public emailForm!: FormGroup;

  public mail = "ningchingkhei@gmail.com"
  private serviceId: string = "service_hk5glvs";
  private templateId: string = "template_jsih104";
  private publicKey:string = "dSs0D0rbHUWOn6y4g";
  animate = false;


  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required]]
    })
  }
  
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

  public sendEmail(): void {
    emailjs.send(
      this.serviceId,
      this.templateId,
      this.emailForm.value,
      this.publicKey
    ).then(
      (response: EmailJSResponseStatus) => {
        alert('✅ Message sent successfully!');
      },
      (error) => {
        alert('❌ Failed to send message.');
        console.error(error);
      }
    )
  }

}
