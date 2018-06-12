import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-citas',
  templateUrl: 'citas.component.html',
})
export class CitasComponent implements OnInit {

  dateRange: { from: string; to: string; };
 type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
 optionsRange: CalendarComponentOptions = {
   pickMode: 'range'
 };


  constructor() {  }

  ngOnInit() {}
}
