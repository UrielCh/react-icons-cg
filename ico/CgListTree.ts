import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListTree icon from css.gg
 * @module
 */
export function CgListTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M9 1H1V9H9V6H11V20H15V23H23V15H15V18H13V6H15V9H23V1H15V4H9V1ZM21 3H17V7H21V3ZM17 17H21V21H17V17Z",fill:"currentColor"}}]})(props);
}
export default CgListTree;
