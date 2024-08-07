import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignBottom icon from css.gg
 * @module
 */
export function CgAlignBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M13 10H17V16H13V10Z",fill:"currentColor","fillOpacity":"0.5"}},{tag:"path",attr:{d:"M11 4H7V16H11V4Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M18 18H6V20H18V18Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgAlignBottom;
