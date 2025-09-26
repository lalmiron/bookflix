import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const io = new IntersectionObserver((entries) =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
    { threshold: 0.15 });

    document.querySelectorAll('section.fade').forEach(s => io.observe(s));
  }
}