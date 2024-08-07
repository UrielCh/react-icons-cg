import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Swap icon from css.gg
 * @module
 */
export function CgSwap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z",fill:"currentColor"}},{tag:"path",attr:{d:"M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgSwap;
