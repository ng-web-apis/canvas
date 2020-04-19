import {TestBed} from '@angular/core/testing';
import {CANVAS_DRAW_STEPS} from '../canvas-draw-steps';

describe('CANVAS_DRAW_STEPS', () => {
    it('is empty by default', () => {
        expect(TestBed.get(CANVAS_DRAW_STEPS)).toEqual([]);
    });
});
