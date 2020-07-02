import {Directive, forwardRef, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: '[waCanvasQuadraticCurveTo]',
    providers: [
        {
            provide: CANVAS_METHOD,
            useExisting: forwardRef(() => QuadraticCurveToDirective),
        },
    ],
})
export class QuadraticCurveToDirective implements CanvasMethod {
    @Input()
    cpx = 0;

    @Input()
    cpy = 0;

    @Input()
    x = 0;

    @Input()
    y = 0;

    draw(context: CanvasRenderingContext2D) {
        context.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
    }
}
