import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';

@Directive({
    selector: '[waCanvasFillRect]',
    providers: [DrawService],
})
export class FillRectDirective {
    @Input()
    x = 0;

    @Input()
    y = 0;

    @Input()
    width = 0;

    @Input()
    height = 0;

    constructor(@Inject(DrawService) drawService: DrawService) {
        drawService.init(context => {
            context.fillRect(this.x, this.y, this.width, this.height);
        });
    }
}
