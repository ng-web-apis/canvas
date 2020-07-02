import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';

@Directive({
    selector: '[waCanvasFillText]',
    providers: [DrawService],
})
export class FillTextDirective {
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
            context.fillText(this.text, this.x, this.y, this.maxWidth);
        };
    }
}
