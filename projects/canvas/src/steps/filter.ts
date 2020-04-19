import {Directive, Input} from '@angular/core';
import {CanvasDrawStep} from '../interfaces/canvas-draw-step';
import {CANVAS_DRAW_STEPS} from '../tokens/canvas-draw-steps';

const DEFAULT = 'none';

@Directive({
    selector: '[waCanvasFilter]',
    providers: [
        {
            provide: CANVAS_DRAW_STEPS,
            useExisting: FilterDirective,
            multi: true,
        },
    ],
})
export class FilterDirective implements CanvasDrawStep {
    @Input()
    waCanvasFilter = DEFAULT;

    beforeHook(context: CanvasRenderingContext2D) {
        context.filter = this.waCanvasFilter;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.filter = DEFAULT;
    }
}
