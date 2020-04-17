import {Directive, ElementRef, Inject, OnDestroy} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {Observable, Subscription} from 'rxjs';
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
export class Canvas2dDirective implements OnDestroy {
    private readonly subscription: Subscription;

    constructor(
        @Inject(CANVAS_RENDERING_CONTEXT) context: CanvasRenderingContext2D,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        this.subscription = animationFrame$.subscribe(() => {
            context.save();
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.restore();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
