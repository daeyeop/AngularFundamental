import {Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    selector: 'events-list',
    template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class = "row">
        <div *ngFor = "let event of events" class = "col-md-5">
            <event-thumbnail  #thumbnail
            (eventClick) = "handleEventClicked($event)"
            [event]="event">
            </event-thumbnail>
         <h3>{{thumbnail.someProperty}}</h3>
         </div>
    </div>
  </div>
  `

})
export class EventsListComponent implements OnInit {

    events:IEvent[];

  constructor(private eventService: EventService, private route:ActivatedRoute) {
  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data)
  {
      console.log('received:', data);
  }
}