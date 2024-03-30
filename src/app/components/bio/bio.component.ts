import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/responsive.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})

export class BioComponent {
  resService: ResponsiveService;
  constructor(private responsive: ResponsiveService){
    this.resService = responsive;
  }
}
