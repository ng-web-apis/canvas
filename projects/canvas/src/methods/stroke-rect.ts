import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';

@Directive({
    selector: '[waCanvasStrokeRect]',
    providers: [DrawService],
})
export class StrokeRectDirective {
    @Input()
    x = 0;

    @Input()
    y = 0;

    @Input()
    width = 0;

    @Input()
    height = 0;

    constructor(@Inject(DrawService) drawService: DrawService) {
        drawService.draw = context => {
            context.strokeRect(this.x, this.y, this.width, this.height);
        };
    }
}
