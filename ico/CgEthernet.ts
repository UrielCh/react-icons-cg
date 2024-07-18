import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ethernet icon from css.gg
 * @module
 */
export function CgEthernet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M4 0.5V20.5H11V23.5H13V20.5H20V0.5H4ZM18 2.5H6V8.5H10V14.5H14V8.5H18V2.5ZM6 18.5V10.5H8V16.5H16V10.5H18V18.5H6Z",fill:"currentColor"}}]})(props);
}
export default CgEthernet;
