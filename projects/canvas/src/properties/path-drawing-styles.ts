import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT_CAP: CanvasLineCap = 'butt';
const DEFAULT_DASH_OFFSET = 0;
const DEFAULT_JOIN: CanvasLineJoin = 'miter';
const DEFAULT_WIDTH = 1;
const DEFAULT_DASH: number[] = [];
const DEFAULT_METER = 10;

// TODO: Replace Pick with Omit
@Directive({
    selector:
        '[waCanvasLineCap],[waCanvasLineDashOffset],[waCanvasLineJoin],[waCanvasLineWidth],[waCanvasLineDash],[waCanvasMiterLimit]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: PathDrawingStylesDirective,
            multi: true,
        },
    ],
})
export class PathDrawingStylesDirective
    implements
        CanvasProperty,
        Pick<
            CanvasPathDrawingStyles,
            Exclude<keyof CanvasPathDrawingStyles, 'getLineDash' | 'setLineDash'>
        > {
    @Input('waCanvasLineCap')
    lineCap = DEFAULT_CAP;

    @Input('waCanvasLineDashOffset')
    lineDashOffset = DEFAULT_DASH_OFFSET;

    @Input('waCanvasLineJoin')
    lineJoin = DEFAULT_JOIN;

    @Input('waCanvasLineWidth')
    lineWidth = DEFAULT_WIDTH;

    @Input('waCanvasLineDash')
    lineDash = DEFAULT_DASH;

    @Input('waCanvasMiterLimit')
    miterLimit = DEFAULT_METER;

    beforeHook(context: CanvasRenderingContext2D) {
        context.lineCap = this.lineCap;
        context.lineDashOffset = this.lineDashOffset;
        context.lineJoin = this.lineJoin;
        context.lineWidth = this.lineWidth;
        context.miterLimit = this.miterLimit;
        context.setLineDash(this.lineDash);
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.lineCap = DEFAULT_CAP;
        context.lineDashOffset = DEFAULT_DASH_OFFSET;
        context.lineJoin = DEFAULT_JOIN;
        context.lineWidth = DEFAULT_WIDTH;
        context.miterLimit = DEFAULT_METER;
        context.setLineDash(DEFAULT_DASH);
    }
}
