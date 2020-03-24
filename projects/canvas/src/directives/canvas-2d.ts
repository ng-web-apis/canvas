import {Directive, ElementRef} from '@angular/core';
import {CANVAS_RENDERING_CONTEXT} from '../tokens/canvas-rendering-context';

export function canvasContextFactory({
    nativeElement,
}: ElementRef<HTMLCanvasElement>): CanvasRenderingContext2D {
    const context = nativeElement.getContext('2d');

    if (!context) {
        throw new Error('Context was already requested');
    }

    return context;
}

@Directive({
    selector: 'canvas[waCanvas2d]',
    providers: [
        {
            provide: CANVAS_RENDERING_CONTEXT,
            deps: [ElementRef],
            useFactory: canvasContextFactory,
        },
    ],
})
export class Canvas2dDirective {}
