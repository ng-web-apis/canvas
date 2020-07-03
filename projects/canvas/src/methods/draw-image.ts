import {Directive, Inject, Input} from '@angular/core';
import {DrawService} from '../services/draw.service';

@Directive({
    selector: 'canvas-draw-image',
    providers: [DrawService],
})
export class DrawImageDirective {
    @Input()
    image?: CanvasImageSource;

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
        drawService.call = context => {
            if (!this.image) {
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
                    this.image,
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
                    this.image,
                    this.dX,
                    this.dY,
                    this.dWidth,
                    this.dHeight,
                );
            } else {
                context.drawImage(this.image, this.dX, this.dY);
            }
        };
    }
}
