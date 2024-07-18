import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DockLeft icon from css.gg
 * @module
 */
export function CgDockLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 4H22V20H2V4ZM8 6H20V18H8V6Z",fill:"currentColor"}}]})(props);
}
export default CgDockLeft;
