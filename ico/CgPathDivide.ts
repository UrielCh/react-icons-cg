import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathDivide icon from css.gg
 * @module
 */
export function CgPathDivide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M5 5H15V9H9V15H5V5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M9 15V19H19V9H15V15H9Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M10 10H14V14H10V10Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgPathDivide;
