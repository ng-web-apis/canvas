import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';

@Directive({
    selector: '[waCanvasDrawImage]',
    providers: [DrawService],
})
export class DrawImageDirective {
    @Input()
    waCanvasDrawImage?: CanvasImageSource;

    @Input()
    dX = 0;

    @Input()
    dY = 0;

    @Input()
    dWidth?: number;

    @Input()
    dHeight?: number;

    @Input()
    sX?: number;

    @Input()
    sY?: number;

    @Input()
    sWidth?: number;

    @Input()
    sHeight?: number;

    constructor(@Inject(DrawService) drawService: DrawService) {
        drawService.draw = context => {
            if (!this.waCanvasDrawImage) {
                return;
            }

            if (
                this.sWidth !== undefined &&
                this.sHeight !== undefined &&
                this.sX !== undefined &&
                this.sY !== undefined &&
                this.dWidth !== undefined &&
                this.dHeight !== undefined
            ) {
                context.drawImage(
                    this.waCanvasDrawImage,
                    this.sX,
                    this.sY,
                    this.sWidth,
                    this.sHeight,
                    this.dX,
                    this.dY,
                    this.dWidth,
                    this.dHeight,
                );
            } else if (this.dWidth !== undefined && this.dHeight !== undefined) {
                context.drawImage(
                    this.waCanvasDrawImage,
                    this.dX,
                    this.dY,
                    this.dWidth,
                    this.dHeight,
                );
            } else {
                context.drawImage(this.waCanvasDrawImage, this.dX, this.dY);
            }
        };
    }
}
