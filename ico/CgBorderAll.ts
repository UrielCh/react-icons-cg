import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderAll icon from css.gg
 * @module
 */
export function CgBorderAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.5 6.5H17.5V17.5H6.5V6.5Z",stroke:"currentColor",strokeWidth:"3"}}]})(props);
}
export default CgBorderAll;
