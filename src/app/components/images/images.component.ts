import {Component} from '@angular/core';
import {ResponsiveService} from 'src/app/responsive.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {
  resService: ResponsiveService

  constructor(private responsive: ResponsiveService) {
    this.resService = responsive;
  }

}
