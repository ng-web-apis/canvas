import {InjectionToken} from '@angular/core';
import {CanvasProperty} from '../interfaces/canvas-property';

export const CANVAS_PROPERTIES = new InjectionToken<CanvasProperty[]>(
    'A directive performing processing before and after drawing to canvas',
    {
        factory: () => [],
    },
);
