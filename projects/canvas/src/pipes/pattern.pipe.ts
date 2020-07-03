import {Inject, Pipe, PipeTransform} from '@angular/core';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

// @dynamic
@Pipe({
    name: 'pattern',
})
export class PatternPipe implements PipeTransform {
    constructor(
        @Inject(CANVAS_2D_CONTEXT) private readonly context: CanvasRenderingContext2D,
    ) {}

    transform(image: CanvasImageSource, repetition: string = 'repeat'): CanvasPattern {
        return this.context.createPattern(image, repetition)!;
    }
}
