import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutGrid icon from css.gg
 * @module
 */
export function CgLayoutGrid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M11 7H7V11H11V7Z",fill:"currentColor"}},{tag:"path",attr:{d:"M11 13H7V17H11V13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M13 13H17V17H13V13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M17 7H13V11H17V7Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgLayoutGrid;
