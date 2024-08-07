import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShapeTriangle icon from css.gg
 * @module
 */
export function CgShapeTriangle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M11.6603 5L3 20H20.3205L11.6603 5ZM11.6603 11L8.19615 17H15.1244L11.6603 11Z",fill:"currentColor"}}]})(props);
}
export default CgShapeTriangle;
