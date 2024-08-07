import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderBottom icon from css.gg
 * @module
 */
export function CgBorderBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8 8H16V15H19V5H5V15H8V8Z",fill:"currentColor","fillOpacity":"0.3"}},{tag:"path",attr:{d:"M5 17H19V20H5V17Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgBorderBottom;
