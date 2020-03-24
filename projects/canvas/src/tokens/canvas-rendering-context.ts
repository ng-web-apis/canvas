import {InjectionToken} from '@angular/core';

export const CANVAS_RENDERING_CONTEXT = new InjectionToken<CanvasRenderingContext2D>(
    'Canvas 2D rendering context',
);
