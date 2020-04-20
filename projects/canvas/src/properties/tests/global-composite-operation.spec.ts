import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CanvasModule} from '../../module';
import {CANVAS_2D_CONTEXT} from '../../tokens/canvas-2d-context';

describe('GlobalCompositeOperationDirective', () => {
    @Component({
        template: `
            <canvas #canvas waCanvas2d width="100" height="100">
                <ng-container
                    waCanvasFillRect
                    waCanvasFillStyle="red"
                    [x]="0"
                    [y]="0"
                    [height]="20"
                    [width]="20"
                ></ng-container>
                <ng-container
                    waCanvasFillRect
                    waCanvasFillStyle="green"
                    waCanvasGlobalCompositeOperation="screen"
                    [x]="0"
                    [y]="0"
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

    it('overlays layers with given mode', done => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(0, 0, 1, 1).data]).toEqual([
                255,
                128,
                0,
                255,
            ]);
            done();
        }, 50);
    });
});
