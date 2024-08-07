import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SpaceBetween icon from css.gg
 * @module
 */
export function CgSpaceBetween(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M19 5L15 5L15 19H19V17H17L17 7L19 7V5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M5 5L9 5L9 19H5L5 17H7L7 7H5L5 5Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M13 7V17H11L11 7H13Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgSpaceBetween;
