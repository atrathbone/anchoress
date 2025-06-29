import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IconLink} from '../../types/types'

@Component({
  selector: 'app-links-container',
  templateUrl: './links-container.component.html',
  styleUrls: ['./links-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LinksContainerComponent implements OnInit {
  @Input()
  iconLinks!: IconLink[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
