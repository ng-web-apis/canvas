import {ContentChildren, Directive, Inject, Input, QueryList} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {DrawService} from '../services/draw.service';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: '[waCanvasPath]',
    providers: [DrawService],
})
export class PathDirective {
    @Input()
    waCanvasPath? = false;

    @ContentChildren(CANVAS_METHOD as any)
    private readonly pathSteps: QueryList<CanvasMethod> = new QueryList();

    constructor(@Inject(DrawService) drawService: DrawService) {
        drawService.draw = context => {
            context.beginPath();

            this.pathSteps.forEach(step => {
                step.draw(context);
            });

            if (this.waCanvasPath) {
                context.closePath();
            }

            context.stroke();
            context.fill();
        };
    }
}
