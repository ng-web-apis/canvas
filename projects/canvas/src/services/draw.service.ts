import {Inject, Injectable, OnDestroy} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {Observable, Subscription} from 'rxjs';
import {CanvasDrawStep} from '../interfaces/canvas-draw-step';
import {CANVAS_DRAW_STEPS} from '../tokens/canvas-draw-steps';

@Injectable()
export class DrawService implements OnDestroy {
    private draw: Function = () => {};

    private readonly subscription: Subscription;

    constructor(
        @Inject(CANVAS_DRAW_STEPS) steps: CanvasDrawStep[],
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        this.subscription = animationFrame$.subscribe(() => {
            steps.forEach(step => step.beforeHook());
            this.draw();
            steps.forEach(step => step.afterHook());
        });
    }

    init(draw: Function) {
        this.draw = draw;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
