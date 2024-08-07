import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Minimize icon from css.gg
 * @module
 */
export function CgMinimize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M9 9H3V7H7V3H9V9Z",fill:"currentColor"}},{tag:"path",attr:{d:"M9 15H3V17H7V21H9V15Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M21 15H15V21H17V17H21V15Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M15 9.00012H21V7.00012H17V3.00012H15V9.00012Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgMinimize;
