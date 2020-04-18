import {Inject, Injectable, OnDestroy, Optional, Self} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {Observable, Subscription} from 'rxjs';
import {CanvasDrawStep} from '../interfaces/canvas-draw-step';
import {CANVAS_DRAW_STEPS} from '../tokens/canvas-draw-steps';
import {CANVAS_RENDERING_CONTEXT} from '../tokens/canvas-rendering-context';
import {Context2dProcessor} from '../types/context-processor';

// @dynamic
@Injectable()
export class DrawService implements OnDestroy {
    private draw: Context2dProcessor = () => {};

    private readonly subscription: Subscription;

    constructor(
        @Optional() @Self() @Inject(CANVAS_DRAW_STEPS) drawSteps: CanvasDrawStep[] | null,
        @Inject(CANVAS_RENDERING_CONTEXT) context: CanvasRenderingContext2D,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        const steps = drawSteps || [];

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
