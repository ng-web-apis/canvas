import {NgModule} from '@angular/core';
import {Canvas2dDirective} from './directives/canvas-2d';

@NgModule({
    declarations: [Canvas2dDirective],
    exports: [Canvas2dDirective],
})
export class CanvasModule {}
