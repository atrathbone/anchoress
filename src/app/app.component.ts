import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'anchoress';

  ngOnInit(): void {
    this.setVh();
  }

  @HostListener('window:resize')
  @HostListener('window:orientationchange')
  onResize() {
    this.setVh();
  }

  setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
