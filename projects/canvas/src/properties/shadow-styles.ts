import {Directive, Input} from '@angular/core';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT_BLUR = 0;
const DEFAULT_COLOR = 'rgba(0, 0, 0, 0)';
const DEFAULT_X = 0;
const DEFAULT_Y = 0;

@Directive({
    selector:
        '[waCanvasShadowBlur],[waCanvasShadowColor],[waCanvasShadowOffsetX],[waCanvasShadowOffsetY]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: ShadowStylesDirective,
            multi: true,
        },
    ],
})
export class ShadowStylesDirective implements CanvasShadowStyles {
    @Input('waCanvasShadowBlur')
    shadowBlur = DEFAULT_BLUR;

    @Input('waCanvasShadowColor')
    shadowColor = DEFAULT_COLOR;

    @Input('waCanvasShadowOffsetX')
    shadowOffsetX = DEFAULT_X;

    @Input('waCanvasShadowOffsetY')
    shadowOffsetY = DEFAULT_Y;

    beforeHook(context: CanvasRenderingContext2D) {
        context.shadowBlur = this.shadowBlur;
        context.shadowColor = this.shadowColor;
        context.shadowOffsetX = this.shadowOffsetX;
        context.shadowOffsetY = this.shadowOffsetY;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.shadowBlur = DEFAULT_BLUR;
        context.shadowColor = DEFAULT_COLOR;
        context.shadowOffsetX = DEFAULT_X;
        context.shadowOffsetY = DEFAULT_Y;
    }
}
