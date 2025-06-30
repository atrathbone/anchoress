import {Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {ResponsiveService} from '../responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  @ViewChild("bgVideo") bgVideo!: ElementRef<HTMLVideoElement>;

  public resService: ResponsiveService;

  constructor(responsive: ResponsiveService, private renderer: Renderer2) {
    this.resService = responsive;
  }

  ngAfterViewInit() {
    this.renderer.listen('body', 'click', () => {
      const video = this.bgVideo.nativeElement;
      if (video.paused) {
        video.play().catch(() => {
          console.warn('Video plavback blocked!');
        });
      }
    });
  }

}
