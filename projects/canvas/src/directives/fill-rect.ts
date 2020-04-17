import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';
import {CANVAS_RENDERING_CONTEXT} from '../tokens/canvas-rendering-context';

@Directive({
    selector: '[waFillRect]',
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

    constructor(
        @Inject(CANVAS_RENDERING_CONTEXT) context: CanvasRenderingContext2D,
        @Inject(DrawService) drawService: DrawService,
    ) {
        drawService.init(() => {
            context.fillRect(this.x, this.y, this.width, this.height);
        });
    }
}
