import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignMiddle icon from css.gg
 * @module
 */
export function CgAlignMiddle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M13 9H17V15H13V9Z",fill:"currentColor","fillOpacity":"0.5"}},{tag:"path",attr:{d:"M7 6H11V18H7V6Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgAlignMiddle;
