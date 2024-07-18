import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderStyleSolid icon from css.gg
 * @module
 */
export function CgBorderStyleSolid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 11H22V13H2V11Z",fill:"currentColor"}}]})(props);
}
export default CgBorderStyleSolid;
