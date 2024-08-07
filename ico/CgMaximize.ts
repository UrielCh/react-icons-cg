import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Maximize icon from css.gg
 * @module
 */
export function CgMaximize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M3 3H9V5H5V9H3V3Z",fill:"currentColor"}},{tag:"path",attr:{d:"M3 21H9V19H5V15H3V21Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M15 21H21V15H19V19H15V21Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M21 3H15V5H19V9H21V3Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgMaximize;
