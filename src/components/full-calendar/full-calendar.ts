import { Component } from '@angular/core';

/**
 * Generated class for the FullCalendar component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'full-calendar',
  templateUrl: 'full-calendar.html'
})
export class FullCalendar {

calendarOptions:Object = {
height: 'parent',
contentHeight: 'auto',
fixedWeekCount : false,
defaultDate: '2016-09-12',
editable: true,
eventLimit: true, // allow "more" link when too many events
defaultView: 'agendaWeek',
allDaySlot: false,
minTime: '06:00:00',
maxTime: '23:00:00',
header: {
left: '',
center: 'prev, title, next',
right: ''
},
events: [
{
title: 'All Day Event',
start: '2016-09-01'
},
{
title: 'Long Event',
start: '2016-09-07',
end: '2016-09-10'
}]
}

}