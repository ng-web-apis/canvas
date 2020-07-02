import {Directive, Input} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';

const DEFAULT_ENABLED = true;
const DEFAULT_QUALITY: ImageSmoothingQuality = 'low';

@Directive({
    selector: '[waCanvasImageSmoothingEnabled],[waCanvasUmageSmoothingQuality]',
    providers: [
        {
            provide: CANVAS_PROPERTIES,
            useExisting: ImageSmoothingDirective,
            multi: true,
        },
    ],
})
export class ImageSmoothingDirective implements CanvasProperty, CanvasImageSmoothing {
    @Input('waCanvasImageSmoothingEnabled')
    imageSmoothingEnabled = DEFAULT_ENABLED;

    @Input('waCanvasUmageSmoothingQuality')
    imageSmoothingQuality = DEFAULT_QUALITY;

    beforeHook(context: CanvasRenderingContext2D) {
        context.imageSmoothingEnabled = this.imageSmoothingEnabled;
        context.imageSmoothingQuality = this.imageSmoothingQuality;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.imageSmoothingEnabled = DEFAULT_ENABLED;
        context.imageSmoothingQuality = DEFAULT_QUALITY;
    }
}
