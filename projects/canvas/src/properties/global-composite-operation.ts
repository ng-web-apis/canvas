import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT = 'source-over';

@Directive({
    selector: '[waCanvasGlobalCompositeOperation]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: GlobalCompositeOperationDirective,
            multi: true,
        },
    ],
})
export class GlobalCompositeOperationDirective implements CanvasProperty {
    @Input()
    waCanvasGlobalCompositeOperation = DEFAULT;

    beforeHook(context: CanvasRenderingContext2D) {
        context.globalCompositeOperation = this.waCanvasGlobalCompositeOperation;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.globalCompositeOperation = DEFAULT;
    }
}
