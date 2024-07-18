import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathBack icon from css.gg
 * @module
 */
export function CgPathBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M9 14H4V4H14V9H19V19H9V14ZM6 6H12V12H6V6Z",fill:"currentColor"}}]})(props);
}
export default CgPathBack;
