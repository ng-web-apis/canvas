import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT = 'none';

@Directive({
    selector: '[waCanvasFilter]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: FilterDirective,
            multi: true,
        },
    ],
})
export class FilterDirective implements CanvasProperty, CanvasFilters {
    @Input('waCanvasFilter')
    filter = DEFAULT;

    beforeHook(context: CanvasRenderingContext2D) {
        context.filter = this.filter;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.filter = DEFAULT;
    }
}
