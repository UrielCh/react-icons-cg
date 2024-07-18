import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Framer icon from css.gg
 * @module
 */
export function CgFramer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 21L12 9L6 9L6 15L12 21Z",fill:"currentColor","fillOpacity":"0.5"}},{tag:"path",attr:{d:"M18 9V3H6L12 9H6V15H18L12 9H18Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgFramer;
