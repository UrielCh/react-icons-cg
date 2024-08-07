import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Nametag icon from css.gg
 * @module
 */
export function CgNametag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M4 14V20H10V18H6V14H4Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M9 9V15H15V9H9ZM13 11H11V13H13V11Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M4 10V4H10V6H6V10H4Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M20 10V4H14V6H18V10H20Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M20 14V20H14V18H18V14H20Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgNametag;
