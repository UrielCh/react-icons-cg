import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SidebarOpen icon from css.gg
 * @module
 */
export function CgSidebarOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 4H21V20H3V4ZM9 6H19V18H9V6Z",fill:"currentColor"}}]})(props);
}
export default CgSidebarOpen;
