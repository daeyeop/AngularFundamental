/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/events-app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../app/user/auth.service';
import * as import9 from '../../app/nav/navbar.component';
import * as import10 from './nav/navbar.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import13 from '../../app/events/shared/event.service';
import * as import14 from '@angular/router/src/router_outlet_map';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
import * as import16 from '@angular/router/src/directives/router_outlet';
export class Wrapper_EventsAppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.EventsAppComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.EventsAppComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_EventsAppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_EventsAppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.EventsAppComponent>;
  _EventsAppComponent_0_3:Wrapper_EventsAppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_EventsAppComponent_Host0,renderType_EventsAppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'events-app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_EventsAppComponent0(this.viewUtils,this,0,this._el_0);
    this._EventsAppComponent_0_3 = new Wrapper_EventsAppComponent(this.injectorGet(import8.AuthService,this.parentIndex));
    this.compView_0.create(this._EventsAppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._EventsAppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.EventsAppComponent) && (0 === requestNodeIndex))) { return this._EventsAppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._EventsAppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const EventsAppComponentNgFactory:import7.ComponentFactory<import0.EventsAppComponent> = new import7.ComponentFactory<import0.EventsAppComponent>('events-app',View_EventsAppComponent_Host0,import0.EventsAppComponent);
const styles_EventsAppComponent:any[] = ([] as any[]);
var renderType_EventsAppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_EventsAppComponent,{});
export class View_EventsAppComponent0 extends import1.AppView<import0.EventsAppComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import9.NavBarComponent>;
  _NavBarComponent_1_3:import10.Wrapper_NavBarComponent;
  _text_2:any;
  _el_3:any;
  /*private*/ _vc_3:import11.ViewContainer;
  _RouterOutlet_3_5:import12.Wrapper_RouterOutlet;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_EventsAppComponent0,renderType_EventsAppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'nav-bar',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_1 = new import10.View_NavBarComponent0(this.viewUtils,this,1,this._el_1);
    this._NavBarComponent_1_3 = new import10.Wrapper_NavBarComponent(this.parentView.injectorGet(import8.AuthService,this.parentIndex),this.parentView.injectorGet(import13.EventService,this.parentIndex));
    this.compView_1.create(this._NavBarComponent_1_3.context);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_3 = new import11.ViewContainer(3,(null as any),this,this._el_3);
    this._RouterOutlet_3_5 = new import12.Wrapper_RouterOutlet(this.parentView.injectorGet(import14.RouterOutletMap,this.parentIndex),this._vc_3.vcRef,this.parentView.injectorGet(import15.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.NavBarComponent) && (1 === requestNodeIndex))) { return this._NavBarComponent_1_3.context; }
    if (((token === import16.RouterOutlet) && (3 === requestNodeIndex))) { return this._RouterOutlet_3_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NavBarComponent_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this._RouterOutlet_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this.compView_1.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this.compView_1.destroy();
    this._RouterOutlet_3_5.ngOnDestroy();
  }
}