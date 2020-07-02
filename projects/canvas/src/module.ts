import {NgModule} from '@angular/core';
import {Canvas2dDirective} from './contexts/canvas-2d';
import {DrawImageDirective} from './methods/draw-image';
import {FillRectDirective} from './methods/fill-rect';
import {FillTextDirective} from './methods/fill-text';
import {StrokeRectDirective} from './methods/stroke-rect';
import {StrokeTextDirective} from './methods/stroke-text';
import {ArcDirective} from './path/arc';
import {ArcToDirective} from './path/arc-to';
import {BezierCurveToDirective} from './path/bezier-curve-to';
import {ClipDirective} from './path/clip';
import {EllipseDirective} from './path/ellipse';
import {LineToDirective} from './path/line-to';
import {MoveToDirective} from './path/move-to';
import {PathDirective} from './path/path';
import {Path2dDirective} from './path/path-2d';
import {QuadraticCurveToDirective} from './path/quadratic-curve-to';
import {RectDirective} from './path/rect';
import {GradientPipe} from './pipes/gradient.pipe';
import {PathPipe} from './pipes/path.pipe';
import {PatternPipe} from './pipes/pattern.pipe';
import {CompositingDirective} from './properties/compositing';
import {FillStrokeStylesDirective} from './properties/fill-stroke-styles';
import {FilterDirective} from './properties/filter';
import {ImageSmoothingDirective} from './properties/image-smoothing';
import {PathDrawingStylesDirective} from './properties/path-drawing-styles';
import {ScaleDirective} from './properties/scale';
import {ShadowStylesDirective} from './properties/shadow-styles';
import {TextDrawingStylesDirective} from './properties/text-drawing-styles';

@NgModule({
    declarations: [
        Canvas2dDirective,

        DrawImageDirective,
        FillRectDirective,
        FillTextDirective,
        StrokeRectDirective,
        StrokeTextDirective,

        ArcDirective,
        ArcToDirective,
        BezierCurveToDirective,
        EllipseDirective,
        LineToDirective,
        MoveToDirective,
        QuadraticCurveToDirective,
        RectDirective,
        PathDirective,
        Path2dDirective,
        ClipDirective,

        CompositingDirective,
        FillStrokeStylesDirective,
        FilterDirective,
        ImageSmoothingDirective,
        PathDrawingStylesDirective,
        ScaleDirective,
        ShadowStylesDirective,
        TextDrawingStylesDirective,

        GradientPipe,
        PathPipe,
        PatternPipe,
    ],
    exports: [
        Canvas2dDirective,

        DrawImageDirective,
        FillRectDirective,
        FillTextDirective,
        StrokeRectDirective,
        StrokeTextDirective,

        ArcDirective,
        ArcToDirective,
        BezierCurveToDirective,
        EllipseDirective,
        LineToDirective,
        MoveToDirective,
        QuadraticCurveToDirective,
        RectDirective,
        PathDirective,
        Path2dDirective,
        ClipDirective,

        CompositingDirective,
        FillStrokeStylesDirective,
        FilterDirective,
        ImageSmoothingDirective,
        PathDrawingStylesDirective,
        ScaleDirective,
        ShadowStylesDirective,
        TextDrawingStylesDirective,

        GradientPipe,
        PathPipe,
        PatternPipe,
    ],
})
export class CanvasModule {}
