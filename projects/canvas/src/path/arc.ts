import {Directive, forwardRef, Input} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: '[waCanvasArc]',
    providers: [
        {
            provide: CANVAS_METHOD,
            useExisting: forwardRef(() => ArcDirective),
        },
    ],
})
export class ArcDirective implements CanvasMethod {
    @Input()
    x = 0;

    @Input()
    y = 0;

    @Input()
    radius = 0;

    @Input()
    startAngle = 0;

    @Input()
    endAngle = 0;

    @Input()
    anticlockwise = false;

    draw(context: CanvasRenderingContext2D) {
        context.arc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.anticlockwise,
        );
    }
}
