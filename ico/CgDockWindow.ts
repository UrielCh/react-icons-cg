import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DockWindow icon from css.gg
 * @module
 */
export function CgDockWindow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 20V4H22V20H2ZM20 6H6V16L20 16V6Z",fill:"currentColor"}}]})(props);
}
export default CgDockWindow;
