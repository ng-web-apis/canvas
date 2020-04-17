import {Directive, Inject, Input} from '@angular/core';
import {CanvasDrawStep} from '../interfaces/canvas-draw-step';
import {CANVAS_DRAW_STEPS} from '../tokens/canvas-draw-steps';
import {CANVAS_RENDERING_CONTEXT} from '../tokens/canvas-rendering-context';

const DEFAULT = '#000';

@Directive({
    selector: '[waFillStyle]',
    providers: [
        {
            provide: CANVAS_DRAW_STEPS,
            useExisting: FillStyleDirective,
            multi: true,
        },
    ],
})
export class FillStyleDirective implements CanvasDrawStep {
    @Input()
    waFillStyle: string | CanvasGradient | CanvasPattern = DEFAULT;

    constructor(
        @Inject(CANVAS_RENDERING_CONTEXT)
        private readonly context: CanvasRenderingContext2D,
    ) {}

    beforeHook() {
        this.context.fillStyle = this.waFillStyle;
    }

    afterHook() {
        this.context.fillStyle = DEFAULT;
    }
}
