import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventResolver,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
} from './events/index'

import { JQ_TOKEN,
  TOASTR_TOKEN, 
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
 } 
  from './common/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './route';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { HttpModule } from '@angular/http'

declare let toastr: any;
declare let jQuery : Object;

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    ],
  providers: [
    EventService,
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    {
      provide : TOASTR_TOKEN, useValue : toastr
    },
    { provide: JQ_TOKEN, useValue: jQuery
    },
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
    }
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}


function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}