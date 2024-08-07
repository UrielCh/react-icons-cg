import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DisplayGrid icon from css.gg
 * @module
 */
export function CgDisplayGrid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M7 7V11H11V7H7Z",fill:"currentColor"}},{tag:"path",attr:{d:"M13 7H17V11H13V7Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M13 13V17H17V13H13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M7 13H11V17H7V13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 3H21V21H3V3ZM5 5V19H19V5H5Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgDisplayGrid;
