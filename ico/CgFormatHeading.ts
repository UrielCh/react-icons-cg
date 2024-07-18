import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FormatHeading icon from css.gg
 * @module
 */
export function CgFormatHeading(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6 19V5H8V11H16V5H18V19H16V13H8V19H6Z",fill:"currentColor"}}]})(props);
}
export default CgFormatHeading;
