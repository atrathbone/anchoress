import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService{
public showCount = signal(false); 

  constructor(private responsive: BreakpointObserver) { }
}
