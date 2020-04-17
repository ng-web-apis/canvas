import {NgModule} from '@angular/core';
import {Canvas2dDirective} from './directives/canvas-2d';
import {FillRectDirective} from './directives/fill-rect';
import {FillStyleDirective} from './steps/fill-style';

@NgModule({
    declarations: [Canvas2dDirective, FillRectDirective, FillStyleDirective],
    exports: [Canvas2dDirective, FillRectDirective, FillStyleDirective],
})
export class CanvasModule {}
