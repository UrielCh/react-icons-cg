import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathFront icon from css.gg
 * @module
 */
export function CgPathFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M5 5H15V9H19V19H9V15H5V5ZM11 11V17H17V11H11Z",fill:"currentColor"}}]})(props);
}
export default CgPathFront;
