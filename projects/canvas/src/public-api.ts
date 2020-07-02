/**
 * Public API Surface of @ng-web-apis/canvas
 */

/* Contexts */
export * from './contexts/canvas-2d';

/* Interfaces */
export * from './interfaces/canvas-method';
export * from './interfaces/canvas-property';

/* Methods */
export * from './methods/draw-image';
export * from './methods/fill-rect';
export * from './methods/fill-text';
export * from './methods/stroke-rect';
export * from './methods/stroke-text';

/* Path */
export * from './path/arc';
export * from './path/arc-to';
export * from './path/bezier-curve-to';
export * from './path/ellipse';
export * from './path/line-to';
export * from './path/move-to';
export * from './path/path';
export * from './path/path-2d';
export * from './path/quadratic-curve-to';

/* Pipe */
export * from './pipes/gradient.pipe';
export * from './pipes/path.pipe';
export * from './pipes/pattern.pipe';

/* Properties */
export * from './properties/compositing';
export * from './properties/fill-stroke-styles';
export * from './properties/filter';
export * from './properties/image-smoothing';
export * from './properties/path-drawing-styles';
export * from './properties/scale';
export * from './properties/shadow-styles';
export * from './properties/text-drawing-styles';

/* Services */
export * from './services/draw.service';

/* Tokens */
export * from './tokens/canvas-2d-context';
export * from './tokens/canvas-method';
export * from './tokens/canvas-properties';

/* Types */
export * from './types/context-processor';

/* Modules */
export * from './module';
