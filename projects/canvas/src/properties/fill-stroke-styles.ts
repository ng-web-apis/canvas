import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT = '#000';

@Directive({
    selector: '[waCanvasFillStyle],[waCanvasStrokeStyle]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: FillStrokeStylesDirective,
            multi: true,
        },
    ],
})
export class FillStrokeStylesDirective implements CanvasProperty {
    @Input('waCanvasFillStyle')
    fillStyle = DEFAULT;

    @Input('waCanvasStrokeStyle')
    strokeStyle = DEFAULT;

    beforeHook(context: CanvasRenderingContext2D) {
        context.fillStyle = this.fillStyle;
        context.strokeStyle = this.strokeStyle;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.fillStyle = DEFAULT;
        context.strokeStyle = DEFAULT;
    }
}
