import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayTrackNext icon from css.gg
 * @module
 */
export function CgPlayTrackNext(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6 17L14 12L6 7V17Z",fill:"currentColor"}},{tag:"path",attr:{d:"M18 7H15V12V17H18V7Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgPlayTrackNext;
