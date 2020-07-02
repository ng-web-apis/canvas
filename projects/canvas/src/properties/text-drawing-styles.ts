import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT_DIRECTION: CanvasDirection = 'inherit';
const DEFAULT_FONT = 'butt';
const DEFAULT_ALIGN: CanvasTextAlign = 'start';
const DEFAULT_BASELINE: CanvasTextBaseline = 'alphabetic';

@Directive({
    selector:
        '[waCanvasDirection],[waCanvasFont],[waCanvasTextAlign],[waCanvasTextBaseline]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: TextDrawingStylesDirective,
            multi: true,
        },
    ],
})
export class TextDrawingStylesDirective
    implements CanvasProperty, CanvasTextDrawingStyles {
    @Input('waCanvasDirection')
    direction = DEFAULT_DIRECTION;

    @Input('waCanvasFont')
    font = DEFAULT_FONT;

    @Input('waCanvasTextAlign')
    textAlign = DEFAULT_ALIGN;

    @Input('waCanvasTextBaseline')
    textBaseline = DEFAULT_BASELINE;

    beforeHook(context: CanvasRenderingContext2D) {
        context.direction = this.direction;
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.direction = DEFAULT_DIRECTION;
        context.font = DEFAULT_FONT;
        context.textAlign = DEFAULT_ALIGN;
        context.textBaseline = DEFAULT_BASELINE;
    }
}
