import {NgModule} from '@angular/core';
import {Canvas2dDirective} from './contexts/canvas-2d';
import {DrawImageDirective} from './methods/draw-image';
import {FillRectDirective} from './methods/fill-rect';
import {FillStyleDirective} from './properties/fill-style';
import {FilterDirective} from './properties/filter';
import {GlobalCompositeOperationDirective} from './properties/global-composite-operation';

@NgModule({
    declarations: [
        Canvas2dDirective,
        DrawImageDirective,
        FillRectDirective,
        FillStyleDirective,
        FilterDirective,
        GlobalCompositeOperationDirective,
    ],
    exports: [
        Canvas2dDirective,
        DrawImageDirective,
        FillRectDirective,
        FillStyleDirective,
        FilterDirective,
        GlobalCompositeOperationDirective,
    ],
})
export class CanvasModule {}
