import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT = 1;

@Directive({
    selector: '[waCanvasScaleX],[waCanvasScaleY]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: ScaleDirective,
            multi: true,
        },
    ],
})
export class ScaleDirective implements CanvasProperty {
    @Input('waCanvasScaleX')
    x = DEFAULT;

    @Input('waCanvasScaleY')
    y = DEFAULT;

    beforeHook(context: CanvasRenderingContext2D) {
        context.scale(this.x, this.y);
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.scale(DEFAULT, DEFAULT);
    }
}
