import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CanvasModule} from '../../module';
import {CANVAS_RENDERING_CONTEXT} from '../../tokens/canvas-rendering-context';

describe('Canvas2dDirective', () => {
    @Component({
        template: `
            <canvas #canvas waCanvas2d></canvas>
        `,
    })
    class TestComponent {
        @ViewChild('canvas', {read: CANVAS_RENDERING_CONTEXT})
        context!: CanvasRenderingContext2D;
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

    it('creates context', () => {
        expect(testComponent.context instanceof CanvasRenderingContext2D).toBe(true);
    });
});
