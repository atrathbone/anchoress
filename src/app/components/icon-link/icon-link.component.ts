import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IconLink} from 'src/app/types/types';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconLinkComponent implements OnInit {
  @Input()
  iconLink!: IconLink

  constructor() {
  }

  ngOnInit(): void {
  }

}
