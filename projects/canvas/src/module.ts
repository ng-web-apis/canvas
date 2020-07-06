import {NgModule} from '@angular/core';
import {Canvas2dDirective} from './contexts/canvas-2d';
import {ClipPathComponent} from './methods/clip-path';
import {DrawImageDirective} from './methods/draw-image';
import {PathDirective} from './methods/path';
import {Path2dDirective} from './methods/path-2d';
import {TextDirective} from './methods/text';
import {ArcDirective} from './path/arc';
import {ArcToDirective} from './path/arc-to';
import {BezierCurveToDirective} from './path/bezier-curve-to';
import {EllipseDirective} from './path/ellipse';
import {LineToDirective} from './path/line-to';
import {MoveToDirective} from './path/move-to';
import {QuadraticCurveToDirective} from './path/quadratic-curve-to';
import {RectDirective} from './path/rect';
import {GradientPipe} from './pipes/gradient.pipe';
import {PathPipe} from './pipes/path.pipe';
import {PatternPipe} from './pipes/pattern.pipe';
import {RadPipe} from './pipes/rad.pipe';
import {ClipDirective} from './properties/clip';
import {CompositingDirective} from './properties/compositing';
import {FillStrokeStylesDirective} from './properties/fill-stroke-styles';
import {FilterDirective} from './properties/filter';
import {ImageSmoothingDirective} from './properties/image-smoothing';
import {PathDrawingStylesDirective} from './properties/path-drawing-styles';
import {ShadowStylesDirective} from './properties/shadow-styles';
import {TextDrawingStylesDirective} from './properties/text-drawing-styles';

@NgModule({
    declarations: [
        Canvas2dDirective,

        ClipPathComponent,
        DrawImageDirective,
        PathDirective,
        Path2dDirective,
        TextDirective,

        ArcDirective,
        ArcToDirective,
        BezierCurveToDirective,
        EllipseDirective,
        LineToDirective,
        MoveToDirective,
        QuadraticCurveToDirective,
        RectDirective,

        ClipDirective,
        CompositingDirective,
        FillStrokeStylesDirective,
        FilterDirective,
        ImageSmoothingDirective,
        PathDrawingStylesDirective,
        ShadowStylesDirective,
        TextDrawingStylesDirective,

        GradientPipe,
        PathPipe,
        PatternPipe,
        RadPipe,
    ],
    exports: [
        Canvas2dDirective,

        ClipPathComponent,
        DrawImageDirective,
        PathDirective,
        Path2dDirective,
        TextDirective,

        ArcDirective,
        ArcToDirective,
        BezierCurveToDirective,
        EllipseDirective,
        LineToDirective,
        MoveToDirective,
        QuadraticCurveToDirective,
        RectDirective,

        ClipDirective,
        CompositingDirective,
        FillStrokeStylesDirective,
        FilterDirective,
        ImageSmoothingDirective,
        PathDrawingStylesDirective,
        ShadowStylesDirective,
        TextDrawingStylesDirective,

        GradientPipe,
        PathPipe,
        PatternPipe,
        RadPipe,
    ],
})
export class CanvasModule {}
