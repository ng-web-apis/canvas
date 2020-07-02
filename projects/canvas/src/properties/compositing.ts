import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT_ALPHA = 1;
const DEFAULT_COMPOSITE = 'source-over';

@Directive({
    selector: '[waCanvasGlobalAlpha],[waCanvasGlobalCompositeOperation]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: CompositingDirective,
            multi: true,
        },
    ],
})
export class CompositingDirective implements CanvasProperty, CanvasCompositing {
    @Input('waCanvasGlobalAlpha')
    globalAlpha = DEFAULT_ALPHA;

    @Input('waCanvasGlobalCompositeOperation')
    globalCompositeOperation = DEFAULT_COMPOSITE;

    beforeHook(context: CanvasRenderingContext2D) {
        context.globalAlpha = this.globalAlpha;
        context.globalCompositeOperation = this.globalCompositeOperation;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.globalAlpha = DEFAULT_ALPHA;
        context.globalCompositeOperation = DEFAULT_COMPOSITE;
    }
}
