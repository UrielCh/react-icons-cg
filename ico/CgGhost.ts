import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ghost icon from css.gg
 * @module
 */
export function CgGhost(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M3 4H15V8H3V4Z",fill:"currentColor"}},{tag:"path",attr:{d:"M21 8H17V4H21V8Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M3 10H21V14H3V10Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M11 16H3V20H11V16Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M13 16V20H21V16H13Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgGhost;
