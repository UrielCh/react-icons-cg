import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Vercel icon from css.gg
 * @module
 */
export function CgVercel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M17.9923 17.0225L11.9806 6.97729L6.00775 17.0225H17.9923Z",fill:"currentColor"}}]})(props);
}
export default CgVercel;
