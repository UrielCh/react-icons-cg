import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayTrackPrev icon from css.gg
 * @module
 */
export function CgPlayTrackPrev(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M18 17L10 12L18 7V17Z",fill:"currentColor"}},{tag:"path",attr:{d:"M6 7H9V17H6V7Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgPlayTrackPrev;
