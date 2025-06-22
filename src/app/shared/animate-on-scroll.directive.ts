import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'opacity-100');
          this.renderer.addClass(this.el.nativeElement, 'translate-y-0');
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }

}
