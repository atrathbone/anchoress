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
@Input()
sortByYear: boolean = false;

public orderedDates: LiveDate[] = [];
public sortedByYear: {[key: string]: LiveDate[]} = {};
public dateKeys: string[] = [];
  constructor() { 
  }

  ngOnInit(): void {
    this.orderedDates = this.liveDates.sort((a, b) => b.date.getTime() - a.date.getTime());
    for(let date of this.liveDates){
      let dStr = date.date.getFullYear().toString();
      if(this.sortedByYear[dStr]){
        console.log("old")
        this.sortedByYear[dStr].push(date);
      }
      else{
        console.log("new")
        this.sortedByYear[dStr] = [date]
        this.dateKeys.push(dStr);
      }
    }
    Object.keys(this.sortedByYear).forEach((k)=>{
      this.sortedByYear[k] = this.sortedByYear[k].sort((a, b) => b.date.getTime() - a.date.getTime());
    })
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
