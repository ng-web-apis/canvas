import {Context2dProcessor} from '../types/context-processor';

export interface CanvasProperty {
    readonly beforeHook: Context2dProcessor;
    readonly afterHook: Context2dProcessor;
}
