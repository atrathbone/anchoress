import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { LiveDate } from 'src/app/types/types';

@Component({
  selector: 'app-live-dates-list',
  templateUrl: './live-dates-list.component.html',
  styleUrls: ['./live-dates-list.component.scss']
})
export class LiveDatesListComponent implements OnInit {
@Input()
liveDates!: LiveDate[];

  constructor() { }

  ngOnInit(): void {
  }

  public getLiveDateString(liveDate: LiveDate){
    let datePart = moment(liveDate.date).format("DD.MM.YYYY")
    let liveStr = `${datePart}  ${liveDate.venue},  ${liveDate.location}`;
    if(liveDate.notes){
      liveStr += `  (${liveDate.notes})`;
    }
    return liveStr;
  }

}
