import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderLeft icon from css.gg
 * @module
 */
export function CgBorderLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M16 8V16H9L9 19H19L19 5L9 5V8H16Z",fill:"currentColor","fillOpacity":"0.3"}},{tag:"path",attr:{d:"M7 5L7 19H4L4 5L7 5Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgBorderLeft;
