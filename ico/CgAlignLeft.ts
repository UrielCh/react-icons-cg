import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignLeft icon from css.gg
 * @module
 */
export function CgAlignLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8 13H14V17H8V13Z",fill:"currentColor","fillOpacity":"0.5"}},{tag:"path",attr:{d:"M6 6H4V18H6V6Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M20 7H8V11H20V7Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgAlignLeft;
