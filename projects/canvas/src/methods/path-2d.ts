import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';

@Directive({
    selector: 'canvas-path[path]',
    providers: [DrawService],
})
export class Path2dDirective {
    @Input()
    path = new Path2D();

    @Input()
    fillRule?: CanvasFillRule;

    constructor(@Inject(DrawService) drawService: DrawService) {
        drawService.call = context => {
            context.fill(this.path, this.fillRule);
            context.stroke(this.path);
        };
    }
}
