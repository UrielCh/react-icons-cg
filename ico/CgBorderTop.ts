import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderTop icon from css.gg
 * @module
 */
export function CgBorderTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8 16H16V9L19 9L19 19L5 19L5 9L8 9V16Z",fill:"currentColor","fillOpacity":"0.3"}},{tag:"path",attr:{d:"M5 7L19 7V4L5 4L5 7Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgBorderTop;
