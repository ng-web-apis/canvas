import {ContentChildren, Directive, Inject, Input, QueryList} from '@angular/core';
import {CanvasMethod} from '../interfaces/canvas-method';
import {DrawService} from '../services/draw.service';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Directive({
    selector: '[waCanvasClip]',
    providers: [DrawService],
})
export class ClipDirective {
    @Input()
    fillRule?: CanvasFillRule;

    @Input()
    path?: Path2D;

    @ContentChildren(CANVAS_METHOD as any)
    private readonly pathSteps: QueryList<CanvasMethod> = new QueryList();

    constructor(@Inject(DrawService) drawService: DrawService) {
        drawService.draw = context => {
            if (this.path) {
                context.clip(this.path, this.fillRule);

                return;
            }

            context.beginPath();

            this.pathSteps.forEach(step => {
                step.draw(context);
            });

            context.clip(this.fillRule);
        };
    }
}
