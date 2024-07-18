import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sidebar icon from css.gg
 * @module
 */
export function CgSidebar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M21 20H7V4H21V20ZM19 18H9V6H19V18Z",fill:"currentColor"}},{tag:"path",attr:{d:"M3 20H5V4H3V20Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgSidebar;
