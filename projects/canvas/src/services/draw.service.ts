import {Inject, Injectable, OnDestroy} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {Observable, Subscription} from 'rxjs';
import {CanvasProperty} from '../interfaces/canvas-property';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';
import {Context2dProcessor} from '../types/context-processor';

// @dynamic
@Injectable()
export class DrawService implements OnDestroy {
    private draw: Context2dProcessor = () => {};

    private readonly subscription: Subscription;

    constructor(
        @Inject(CANVAS_PROPERTIES) steps: CanvasProperty[],
        @Inject(CANVAS_2D_CONTEXT) context: CanvasRenderingContext2D,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        this.subscription = animationFrame$.subscribe(() => {
            steps.forEach(step => step.beforeHook(context));
            this.draw(context);
            steps.forEach(step => step.afterHook(context));
        });
    }

    init(draw: Context2dProcessor) {
        this.draw = draw;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
