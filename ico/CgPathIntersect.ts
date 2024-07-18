import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathIntersect icon from css.gg
 * @module
 */
export function CgPathIntersect(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M15 5H5V15H9V19H19V9H15V5ZM13 7H7V13H9V9H13V7ZM17 17H11V15H15V11H17V17Z",fill:"currentColor"}}]})(props);
}
export default CgPathIntersect;
