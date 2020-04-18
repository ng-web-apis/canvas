import {InjectionToken} from '@angular/core';
import {CanvasDrawStep} from '../interfaces/canvas-draw-step';

export const CANVAS_DRAW_STEPS = new InjectionToken<CanvasDrawStep[]>(
    'A directive performing processing before and after drawing to canvas',
);
