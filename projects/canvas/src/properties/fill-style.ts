import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT = '#000';

@Directive({
    selector: '[waCanvasFillStyle]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: FillStyleDirective,
            multi: true,
        },
    ],
})
export class FillStyleDirective implements CanvasProperty {
    @Input()
    waCanvasFillStyle: string | CanvasGradient | CanvasPattern = DEFAULT;

    beforeHook(context: CanvasRenderingContext2D) {
        context.fillStyle = this.waCanvasFillStyle;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.fillStyle = DEFAULT;
    }
}
