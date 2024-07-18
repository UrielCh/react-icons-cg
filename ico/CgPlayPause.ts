import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayPause icon from css.gg
 * @module
 */
export function CgPlayPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M11 7H8V17H11V7Z",fill:"currentColor"}},{tag:"path",attr:{d:"M13 17H16V7H13V17Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgPlayPause;
