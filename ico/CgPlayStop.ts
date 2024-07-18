import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayStop icon from css.gg
 * @module
 */
export function CgPlayStop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M7 7H17V17H7V7Z",fill:"currentColor"}}]})(props);
}
export default CgPlayStop;
