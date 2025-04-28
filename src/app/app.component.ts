import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  @ViewChild('starsContainer', { static: true }) starsContainer!: ElementRef;
  numStars: number = 100;

  ngOnInit() {
    const container = this.starsContainer.nativeElement;
    container.innerHTML = '';

    for (let i = 0; i < this.numStars; i++) {
      let star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';

      let isLarge = Math.random() > 0.9;
      let size = isLarge ? Math.random() * 4 + 2 : 2;
      star.style.width = size + 'px';
      star.style.height = size + 'px';

      star.style.background = isLarge ? 'lightblue' : 'white';
      star.style.animationDuration = (Math.random() * 4 + 6) + 's';
      star.style.animationDelay = (Math.random() * 3) + 's';

      container.appendChild(star);
    }
  }
}