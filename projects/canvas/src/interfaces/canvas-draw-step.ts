import {Context2dProcessor} from '../types/context-processor';

export interface CanvasDrawStep {
    readonly beforeHook: Context2dProcessor;
    readonly afterHook: Context2dProcessor;
}
