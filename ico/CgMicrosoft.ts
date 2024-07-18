import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Microsoft icon from css.gg
 * @module
 */
export function CgMicrosoft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M3 3H11V11H3V3Z",fill:"currentColor"}},{tag:"path",attr:{d:"M3 13H11V21H3V13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M13 3H21V11H13V3Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M13 13H21V21H13V13Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgMicrosoft;
