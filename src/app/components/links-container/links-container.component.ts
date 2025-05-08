import {Component, Input, OnInit} from '@angular/core';
import {IconLink} from '../../types/types'

@Component({
  selector: 'app-links-container',
  templateUrl: './links-container.component.html',
  styleUrls: ['./links-container.component.scss']
})
export class LinksContainerComponent implements OnInit {
  @Input()
  iconLinks!: IconLink[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
