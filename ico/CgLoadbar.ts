import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Loadbar icon from css.gg
 * @module
 */
export function CgLoadbar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"rect",attr:{x:"3",y:"10","width":"18","height":"4","rx":"2",fill:"currentColor"}}]})(props);
}
export default CgLoadbar;
