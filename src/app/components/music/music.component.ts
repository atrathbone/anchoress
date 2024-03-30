import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/responsive.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {

  resService: ResponsiveService;
  constructor(private responsive: ResponsiveService){
    this.resService = responsive;
  }

}
