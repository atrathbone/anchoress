import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService{
public isPhoneOrTabletPortrait = signal(false); 

  constructor(private responsive: BreakpointObserver) { 
    this.responsive.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe((res)=>{
      if (res.breakpoints[Breakpoints.HandsetPortrait] || res.breakpoints[Breakpoints.TabletPortrait]) {
        this.isPhoneOrTabletPortrait.set(true);
      }else{
        this.isPhoneOrTabletPortrait.set(false);
      }
    })
  }


}
