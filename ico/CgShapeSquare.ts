import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShapeSquare icon from css.gg
 * @module
 */
export function CgShapeSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M17 7H7V17H17V7ZM4 4V20H20V4H4Z",fill:"currentColor"}}]})(props);
}
export default CgShapeSquare;
