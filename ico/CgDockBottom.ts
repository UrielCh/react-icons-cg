import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DockBottom icon from css.gg
 * @module
 */
export function CgDockBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 20V4H22V20H2ZM4 6H20V14H4V6Z",fill:"currentColor"}}]})(props);
}
export default CgDockBottom;
