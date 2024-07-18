import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayList icon from css.gg
 * @module
 */
export function CgPlayList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M16 5H4V7H16V5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M16 9H4V11H16V9Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M4 13H12V15H4V13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M20 16L14 13V19L20 16Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgPlayList;
