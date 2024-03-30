import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/responsive.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
resService: ResponsiveService

constructor(private responsive: ResponsiveService){
  this.resService = responsive;
}
}
