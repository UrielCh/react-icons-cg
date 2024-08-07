import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Copy icon from css.gg
 * @module
 */
export function CgCopy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M13 7H7V5H13V7Z",fill:"currentColor"}},{tag:"path",attr:{d:"M13 11H7V9H13V11Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M7 15H13V13H7V15Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgCopy;
