import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Template icon from css.gg
 * @module
 */
export function CgTemplate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 3V9H21V3H3ZM19 5H5V7H19V5Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 11V21H11V11H3ZM9 13H5V19H9V13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M21 11H13V13H21V11Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M13 15H21V17H13V15Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M21 19H13V21H21V19Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgTemplate;
