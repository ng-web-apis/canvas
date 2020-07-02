# ![ng-web-apis logo](projects/demo/src/assets/logo.svg) Canvas API for Angular

> Part of <img src="projects/demo/src/assets/web-api.svg" align="top"> [Web APIs for Angular](https://ng-web-apis.github.io/)

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/canvas.svg)](https://npmjs.com/package/@ng-web-apis/canvas)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/canvas)](https://bundlephobia.com/result?p=@ng-web-apis/canvas)
[![Travis (.com)](https://img.shields.io/travis/com/ng-web-apis/canvas)](https://travis-ci.com/ng-web-apis/canvas)
[![Coveralls github](https://img.shields.io/coveralls/github/ng-web-apis/canvas)](https://coveralls.io/github/ng-web-apis/canvas?branch=master)
[![angular-open-source-starter](https://img.shields.io/badge/made%20with-angular--open--source--starter-d81676?logo=angular)](https://github.com/TinkoffCreditSystems/angular-open-source-starter)

This is a library for declarative use of
[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/ng-web-apis/common):

```
npm i @ng-web-apis/common
```

Now install the package:

```
npm i @ng-web-apis/canvas
```

## Usage

Add `CanvasModule` to your module declaration and use `waCanvas2d` directive
on a [`canvas`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
element to declare 2D context scope. Then use other directives to draw inside
[`canvas`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas):

```html
<canvas waCanvas2d>
    <ng-container
        waCanvasFillRect
        [x]="0"
        [y]="0"
        [width]="100"
        [height]="50"
    ></ng-container>
</canvas>
```

## Directives

There are 4 types of directives you can use:

1. **Context** directives
2. **Method** directives
3. **Properties** directives
4. **Path** directives

### Context

These are applied to an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
and are used to defined scope of a particular context:

-   [`waCanvas2d`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D). Supports following attributes
    (see [contextAttributes](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) for 2D context):
    -   **`opaque`** — `boolean` attribute to set `alpha` to `false`
    -   **`desynchronized`** — `boolean` attribute to set `desynchronized` to `true`

### Method

These are your typical directives to draw things on `canvas`. They are
declarative counterparts of methods existing on
[`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D):

-   [`waCanvasDrawImage`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
-   [`waCanvasFillRect`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
-   [`waCanvasFillText`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText)
-   [`waCanvasStrokeRect`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect)
-   [`waCanvasStrokeText`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText)

### Properties

These directives set properties of [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D).
They must be added to a method directive and they change context property before calling the method.
They also restore default value after drawing is performed so it will not interfere with the rest of picture.

-   [`waCanvasDirection`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction)
-   [`waCanvasFillStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
-   [`waCanvasFilter`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)
-   [`waCanvasImageSmoothingEnabled`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
-   [`waCanvasUmageSmoothingQuality`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
-   [`waCanvasFont`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font)
-   [`waCanvasGlobalAlpha`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
-   [`waCanvasGlobalCompositeOperation`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
-   [`waCanvasLineCap`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap)
-   [`waCanvasLineDashOffset`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
-   [`waCanvasLineJoin`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)
-   [`waCanvasLineWidth`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth)
-   [`waCanvasLineDash`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
-   [`waCanvasMiterLimit`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit)
-   [`waCanvasStrokeStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
-   [`waCanvasTextAlign`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign)
-   [`waCanvasTextBaseline`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline)
-   [`waCanvasShadowBlur`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
-   [`waCanvasShadowColor`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor)
-   [`waCanvasShadowOffsetX`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
-   [`waCanvasShadowOffsetY`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
-   [`waCanvasScaleX` / `waCanvasScaleY`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale)

#### Example

Combining properties and method directive can be examined on the following case.
Consider drawing two rectangles with native commands:

```javascript
function drawTwoRectangles(context) {
    context.fillStyle = 'red';
    context.fillRect(0, 0, 100, 50);
    context.fillStyle = 'green';
    context.globalCompositeOperation = 'screen';
    context.fillRect(25, 25, 100, 50);
    context.fillStyle = '#000';
    context.globalCompositeOperation = 'source-over';
}
```

This is equivalent to the following HTML

```html
<canvas waCanvas2d>
    <ng-container
        waCanvasFillRect
        waCanvasFillStyle="red"
        [x]="0"
        [y]="0"
        [width]="100"
        [height]="50"
    ></ng-container>
    <ng-container
        waCanvasFillRect
        waCanvasFillStyle="green"
        waCanvasGlobalCompositeOperation="screen"
        [x]="25"
        [y]="25"
        [width]="100"
        [height]="50"
    ></ng-container>
</canvas>
```

And both will give you this result:

[![canvas.png](https://i.postimg.cc/MZf2XV83/canvas.png)](https://postimg.cc/7b4QWChS)

### Path

You can use following directives to draw path on Canvas:

-   [`waCanvasPath2d`](https://developer.mozilla.org/en-US/docs/Web/API/Path2D)
-   [`waCanvasPath`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)
-   [`waCanvasClip`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip)

#### Nested path drawing methods

> These go inside `waCanvasPath`/`waCanvasClip` directives. They are declarative
> counterparts of [`CanvasPath`](https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts#L3360) methods

-   [`waCanvasArc`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)
-   [`waCanvasArcTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo)
-   [`waCanvasBezierCurveTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
-   [`waCanvasEllipse`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse)
-   [`waCanvasLineTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
-   [`waCanvasMoveTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)
-   [`waCanvasQuadraticCurveTo`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
-   [`waCanvasRect`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect)

## Pipes

You can use [Pipes](https://angular.io/guide/pipes) to create some of the
classes, required for particular Canvas operations:

-   `gradient` to create [CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)
-   `path` to create [Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D)
-   `pattern` to create [CanvasPattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern)

## See also

Other [Web APIs for Angular](https://ng-web-apis.github.io/) by [@ng-web-apis](https://github.com/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work?
Check out this [Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter)
we’ve created for our projects. It got you covered on continuous integration,
pre-commit checks, linting, versioning + changelog, code coverage and all that jazz.
