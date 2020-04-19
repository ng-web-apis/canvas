import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CanvasModule} from '../../module';
import {CANVAS_RENDERING_CONTEXT} from '../../tokens/canvas-rendering-context';

describe('Canvas2dDirective', () => {
    @Component({
        template: `
            <canvas #canvas waCanvas2d width="100" height="100">
                <ng-container [waCanvasDrawImage]="image"></ng-container>
                <ng-container
                    [waCanvasDrawImage]="image"
                    [dX]="10"
                    [dY]="10"
                    [dWidth]="10"
                    [dHeight]="10"
                ></ng-container>
            </canvas>
        `,
    })
    class TestComponent {
        @ViewChild('canvas', {read: CANVAS_RENDERING_CONTEXT})
        readonly context!: CanvasRenderingContext2D;

        readonly image = new Image();

        constructor() {
            this.image.src =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';
        }
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

    it('draws an image', done => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(1, 1, 1, 1).data]).toEqual([
                0,
                0,
                0,
                0,
            ]);
            expect([...testComponent.context.getImageData(0, 0, 1, 1).data]).toEqual([
                255,
                0,
                0,
                255,
            ]);
            done();
        }, 50);
    });

    it('draws an image with offset and scale', done => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(10, 10, 1, 1).data]).toEqual([
                255,
                0,
                0,
                255,
            ]);
            expect([...testComponent.context.getImageData(19, 19, 1, 1).data]).toEqual([
                255,
                0,
                0,
                255,
            ]);
            expect([...testComponent.context.getImageData(20, 20, 1, 1).data]).toEqual([
                0,
                0,
                0,
                0,
            ]);
            done();
        }, 50);
    });
});
