import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrangeFront icon from css.gg
 * @module
 */
export function CgArrangeFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 3H11V7H17V13H21V21H13V17H7V11H3V3ZM15 9H9V15H15V9Z",fill:"currentColor"}}]})(props);
}
export default CgArrangeFront;
