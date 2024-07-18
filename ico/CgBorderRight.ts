import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderRight icon from css.gg
 * @module
 */
export function CgBorderRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8 16V8H15V5L5 5L5 19H15L15 16H8Z",fill:"currentColor","fillOpacity":"0.3"}},{tag:"path",attr:{d:"M17 19L17 5L20 5L20 19H17Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgBorderRight;
