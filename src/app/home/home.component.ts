import {Component, ViewEncapsulation} from '@angular/core';
import {ResponsiveService} from '../responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  public resService: ResponsiveService;

  constructor(responsive: ResponsiveService) {
    this.resService = responsive;
  }

}
