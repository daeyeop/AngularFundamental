/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/common/simpleModal.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/common/jQuery.service';
import * as import9 from '@angular/core/src/linker/query_list';
import * as import10 from '@angular/core/src/linker/element_ref';
export var Wrapper_SimpleModalComponent = (function () {
    function Wrapper_SimpleModalComponent(p0) {
        this._changed = false;
        this.context = new import0.SimpleModalComponent(p0);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
    }
    Wrapper_SimpleModalComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SimpleModalComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_SimpleModalComponent.prototype.check_title = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.title = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_SimpleModalComponent.prototype.check_elementId = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.elementId = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_SimpleModalComponent.prototype.check_closeOnBodyClick = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.closeOnBodyClick = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_SimpleModalComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_SimpleModalComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SimpleModalComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SimpleModalComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SimpleModalComponent;
}());
var renderType_SimpleModalComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_SimpleModalComponent_Host0 = (function (_super) {
    __extends(View_SimpleModalComponent_Host0, _super);
    function View_SimpleModalComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SimpleModalComponent_Host0, renderType_SimpleModalComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_SimpleModalComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'simple-modal', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_SimpleModalComponent0(this.viewUtils, this, 0, this._el_0);
        this._SimpleModalComponent_0_3 = new Wrapper_SimpleModalComponent(this.injectorGet(import8.JQ_TOKEN, this.parentIndex));
        this.compView_0.create(this._SimpleModalComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._SimpleModalComponent_0_3.context);
    };
    View_SimpleModalComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SimpleModalComponent) && (0 === requestNodeIndex))) {
            return this._SimpleModalComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_SimpleModalComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SimpleModalComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_SimpleModalComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_SimpleModalComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SimpleModalComponent_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    return View_SimpleModalComponent_Host0;
}(import2.AppView));
export var SimpleModalComponentNgFactory = new import7.ComponentFactory('simple-modal', View_SimpleModalComponent_Host0, import0.SimpleModalComponent);
var styles_SimpleModalComponent = ['.modal-body[_ngcontent-%COMP%] { height: 250px; overflow-y: scroll; }'];
var renderType_SimpleModalComponent = import3.createRenderComponentType('', 1, import5.ViewEncapsulation.Emulated, styles_SimpleModalComponent, {});
export var View_SimpleModalComponent0 = (function (_super) {
    __extends(View_SimpleModalComponent0, _super);
    function View_SimpleModalComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SimpleModalComponent0, renderType_SimpleModalComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_25 = import1.UNINITIALIZED;
        this._expr_26 = import1.UNINITIALIZED;
    }
    View_SimpleModalComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_modalcontainer_0 = new import9.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal fade', 'tabindex', '-1'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-dialog'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n      ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'modal-content'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'modal-header'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n          ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'button', new import3.InlineArray8(6, 'class', 'close', 'data-dismiss', 'modal', 'type', 'button'), null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_9, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '×', null);
        this._text_12 = this.renderer.createText(this._el_7, '\n          ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_7, 'h4', new import3.InlineArray2(2, 'class', 'modal-title'), null);
        this._text_14 = this.renderer.createText(this._el_13, '', null);
        this._text_15 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_16 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'modal-body'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n          ', null);
        this.projectNodes(this._el_17, 0);
        this._text_19 = this.renderer.createText(this._el_17, '\n        ', null);
        this._text_20 = this.renderer.createText(this._el_5, '\n      ', null);
        this._text_21 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_22 = this.renderer.createText(this._el_1, '\n  ', null);
        this._text_23 = this.renderer.createText(parentRenderNode, '\n  ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_17));
        this._viewQuery_modalcontainer_0.reset([new import10.ElementRef(this._el_1)]);
        this.context.containerEl = this._viewQuery_modalcontainer_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._text_23
        ]), [disposable_0]);
        return null;
    };
    View_SimpleModalComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_25 = import3.inlineInterpolate(1, '', this.context.elementId, '');
        if (import3.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementProperty(this._el_1, 'id', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = import3.inlineInterpolate(1, '', this.context.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setText(this._text_14, currVal_26);
            this._expr_26 = currVal_26;
        }
    };
    View_SimpleModalComponent0.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.closeModal() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_SimpleModalComponent0;
}(import2.AppView));
//# sourceMappingURL=simpleModal.component.ngfactory.js.map