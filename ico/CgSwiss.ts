import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Swiss icon from css.gg
 * @module
 */
export function CgSwiss(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 3V21H21V3H3ZM14 7H10V10H7V14H10V17H14V14H17V10H14V7Z",fill:"currentColor"}}]})(props);
}
export default CgSwiss;
