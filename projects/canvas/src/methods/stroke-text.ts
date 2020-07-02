import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';

@Directive({
    selector: '[waCanvasStrokeText]',
    providers: [DrawService],
})
export class StrokeTextDirective {
    @Input()
    text = '';

    @Input()
    x = 0;

    @Input()
    y = 0;

    @Input()
    maxWidth?: number;

    constructor(@Inject(DrawService) drawService: DrawService) {
        drawService.draw = context => {
            context.strokeText(this.text, this.x, this.y, this.maxWidth);
        };
    }
}
