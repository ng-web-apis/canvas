import {Component, Input, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CanvasModule} from '../../module';
import {CANVAS_2D_CONTEXT} from '../../tokens/canvas-2d-context';

@Component({
    selector: 'canvas',
    template: `
        <canvas-path
            [fillStyle]="grad | gradient: 0:0:1:1"
            [strokeStyle]="img | pattern"
            [closed]="true"
        >
            <canvas-arc [endAngle]="360 | rad"></canvas-arc>
            <canvas-rect [x]="0" [y]="0" [height]="100" [width]="100"></canvas-rect>
        </canvas-path>
        <canvas-path [path]="'L 1 1' | path"></canvas-path>
    `,
})
export class CanvasComponent {
    @Input()
    img!: HTMLImageElement;

    grad = new Map([
        [0, 'red'],
        [1, 'blue'],
    ]);
}

describe('Pipes', () => {
    @Component({
        template: `
            <img
                #img
                src="data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0j
vb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAA
Re8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0Cc
guWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7"
                width="16"
                height="14"
                alt="test"
            />
            <canvas #canvas waCanvas2d width="100" height="100" [img]="img"></canvas>
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
            declarations: [TestComponent, CanvasComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('gradient works', done => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(0, 0, 1, 1).data]).toEqual([
                127,
                0,
                127,
                255,
            ]);
            done();
        }, 50);
    });
});
