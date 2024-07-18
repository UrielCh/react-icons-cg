import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DockRight icon from css.gg
 * @module
 */
export function CgDockRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 4H22V20H2V4ZM16 18V6H4V18H16Z",fill:"currentColor"}}]})(props);
}
export default CgDockRight;
