import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FullCalendar } from './full-calendar';

@NgModule({
  declarations: [
    FullCalendar,
  ],
  imports: [
    IonicModule.forChild(FullCalendar),
  ],
  exports: [
    FullCalendar
  ]
})
export class FullCalendarModule {}
