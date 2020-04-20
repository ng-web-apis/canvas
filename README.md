# ![ng-web-apis logo](projects/demo/src/assets/logo.svg) [WIP] Canvas API for Angular

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
<canvas waCanvas2d class="canvas">
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

There are 3 types of directives you can use:

1. **Context** directives
2. **Method** directives
3. **Properties** directives:

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

-   [`waCanvasFillRect`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
-   [`waCanvasDrawImage`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)

### Properties

These directives set properties of [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D).
They must be added to a method directive and they change context property before calling the method.
They also restore default value after drawing is performed so it will not interfere with the rest of picture.

-   [`waCanvasFillStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
-   [`waCanvasFilter`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)
-   [`waCanvasGlobalCompositeOperation`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

#### Example

Combining properties and method directive can be examine on the following example.
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

And it will give you this:

[![canvas.png](https://i.postimg.cc/MZf2XV83/canvas.png)](https://postimg.cc/7b4QWChS)

## See also

Other [Web APIs for Angular](https://ng-web-apis.github.io/) by [@ng-web-apis](https://github.com/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work?
Check out this [Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter)
we’ve created for our projects. It got you covered on continuous integration,
pre-commit checks, linting, versioning + changelog, code coverage and all that jazz.
