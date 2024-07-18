import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignCenter icon from css.gg
 * @module
 */
export function CgAlignCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M9 13H15V17H9V13Z",fill:"currentColor","fillOpacity":"0.5"}},{tag:"path",attr:{d:"M6 7H18V11H6V7Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgAlignCenter;
