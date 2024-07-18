import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flag icon from css.gg
 * @module
 */
export function CgFlag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M4 21H6V11H12V13H20V5H13V3H4V21ZM12 5H6V9H13V11H18V7H12V5Z",fill:"currentColor"}}]})(props);
}
export default CgFlag;
