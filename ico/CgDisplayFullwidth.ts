import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DisplayFullwidth icon from css.gg
 * @module
 */
export function CgDisplayFullwidth(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 5H22V3H2V5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 21H22V19H2V21Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 7V17H22V7H2ZM4 9H20V15H4V9Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgDisplayFullwidth;
