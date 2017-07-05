import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name | uppercase}}</h2>
      <div>Date: {{event?.date | date:'shortDate'}}</div>
      <div [ngClass]="getStartTime()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div [ngStyle]= "getStartPriceStyle()">
        Price: {{event?.price | currency:'USD':true}}
      </div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
      <button (click) = "handleClickMe()">
      Click me!</button>
    </div>
  `,
  styles: [`
    .red { color : red !important;}
    .bold { font-wieght:bold; !important}
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: blue; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  someProperty:any = "some value";
  handleClickMe(){
      this.eventClick.emit(this.event.name);
  }

  getStartTime() {
    if (this.event && this.event.time === '8:00 am')
    {
      return 'red';
    }
    return [];
  }

    getStartPriceStyle() {
    if (this.event && this.event.price === 800)
    {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}