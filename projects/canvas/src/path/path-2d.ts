import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';

@Directive({
    selector: '[waCanvasPath2d]',
    providers: [DrawService],
})
export class Path2dDirective {
    @Input()
    waCanvasPath2d = new Path2D();

    @Input()
    fillRule?: CanvasFillRule;

    constructor(@Inject(DrawService) drawService: DrawService) {
        drawService.draw = context => {
            context.fill(this.waCanvasPath2d, this.fillRule);
            context.stroke(this.waCanvasPath2d);
        };
    }
}
