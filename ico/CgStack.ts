import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stack icon from css.gg
 * @module
 */
export function CgStack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M20 4V16H22V2H8V4H20Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 8V22H16V8H2ZM14 10H4V20H14V10Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M17 7H5V5H19V19H17V7Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgStack;
