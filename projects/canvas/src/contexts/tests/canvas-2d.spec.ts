import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CanvasModule} from '../../module';
import {CANVAS_2D_CONTEXT} from '../../tokens/canvas-2d-context';
import {canvasContextFactory} from '../canvas-2d';

describe('Canvas2dDirective', () => {
    @Component({
        template: `
            <canvas #canvas waCanvas2d width="100" height="100">
                <ng-container
                    waCanvasFillRect
                    waCanvasFillStyle="red"
                    waCanvasFilter="hue-rotate(180deg)"
                    [x]="10"
                    [y]="10"
                    [height]="20"
                    [width]="20"
                ></ng-container>
            </canvas>
        `,
    })
    class TestComponent {
        @ViewChild('canvas', {read: CANVAS_2D_CONTEXT})
        readonly context!: CanvasRenderingContext2D;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CanvasModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterAll(() => {
        fixture.destroy();
    });

    it('factory throws if different context was already requested', () => {
        const canvas = document.createElement('canvas');
        // @ts-ignore
        const context = canvas.getContext('webgl');

        expect(() => canvasContextFactory(new ElementRef(canvas), null, null)).toThrow();
    });

    it('creates context', () => {
        expect(testComponent.context instanceof CanvasRenderingContext2D).toBe(true);
    });

    it('draws a rectangle at given coordinates of given color with applied filter', done => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(5, 5, 1, 1).data]).toEqual([
                0,
                0,
                0,
                0,
            ]);
            expect([...testComponent.context.getImageData(25, 25, 1, 1).data]).toEqual([
                0,
                109,
                109,
                255,
            ]);
            done();
        }, 50);
    });
});
