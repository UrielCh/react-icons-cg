import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * IndieHackers icon from css.gg
 * @module
 */
export function CgIndieHackers(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M4 6H7V18H4V6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M10 6H13V10.5H17V6H20V18H17V13.5H13V18H10V6Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgIndieHackers;
