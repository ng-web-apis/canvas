import {Attribute, Directive, ElementRef, Inject, OnDestroy} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {Observable, Subscription} from 'rxjs';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';

// TODO remove default values once https://github.com/angular/angular/issues/36479 is fixed
export function canvasContextFactory(
    {nativeElement}: ElementRef<HTMLCanvasElement>,
    opaque: string | null = nativeElement.getAttribute('waOpaque'),
    desynchronized: string | null = nativeElement.getAttribute('waDesynchronized'),
): CanvasRenderingContext2D {
    const context = nativeElement.getContext('2d', {
        alpha: opaque === null,
        desynchronized: desynchronized !== null,
    });

    if (!context) {
        throw new Error('Context of different type was already requested');
    }

    return context as CanvasRenderingContext2D;
}

// @dynamic
@Directive({
    selector: 'canvas[waCanvas2d]',
    providers: [
        {
            provide: CANVAS_2D_CONTEXT,
            deps: [
                ElementRef,
                // [new Attribute('waOpaque')],
                // [new Attribute('waDesynchronized')],
            ],
            useFactory: canvasContextFactory,
        },
    ],
})
export class Canvas2dDirective implements OnDestroy {
    private readonly subscription: Subscription;

    constructor(
        @Inject(CANVAS_2D_CONTEXT) context: CanvasRenderingContext2D,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        @Attribute('opaque') _opaque: string | null,
        @Attribute('desynchronized') _desynchronized: string | null,
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
