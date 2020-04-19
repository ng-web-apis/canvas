import {NgModule} from '@angular/core';
import {Canvas2dDirective} from './directives/canvas-2d';
import {DrawImageDirective} from './directives/draw-image';
import {FillRectDirective} from './directives/fill-rect';
import {FillStyleDirective} from './steps/fill-style';
import {FilterDirective} from './steps/filter';

@NgModule({
    declarations: [
        Canvas2dDirective,
        DrawImageDirective,
        FillRectDirective,
        FillStyleDirective,
        FilterDirective,
    ],
    exports: [
        Canvas2dDirective,
        DrawImageDirective,
        FillRectDirective,
        FillStyleDirective,
        FilterDirective,
    ],
})
export class CanvasModule {}
