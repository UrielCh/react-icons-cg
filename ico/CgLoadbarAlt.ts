import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LoadbarAlt icon from css.gg
 * @module
 */
export function CgLoadbarAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"rect",attr:{"opacity":"0.3",x:"3",y:"10","width":"18","height":"4","rx":"2",fill:"currentColor"}},{tag:"rect",attr:{x:"7",y:"10","width":"10","height":"4","rx":"2",fill:"currentColor"},child:[]}]})(props);
}
export default CgLoadbarAlt;
