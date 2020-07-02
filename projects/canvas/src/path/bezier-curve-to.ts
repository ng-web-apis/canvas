import {Directive, forwardRef, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: '[waCanvasBezierCurveTo]',
    providers: [
        {
            provide: CANVAS_METHOD,
            useExisting: forwardRef(() => BezierCurveToDirective),
        },
    ],
})
export class BezierCurveToDirective implements CanvasMethod {
    @Input()
    cp1x = 0;

    @Input()
    cp1y = 0;

    @Input()
    cp2x = 0;

    @Input()
    cp2y = 0;

    @Input()
    x = 0;

    @Input()
    y = 0;

    draw(context: CanvasRenderingContext2D) {
        context.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
    }
}
