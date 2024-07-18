import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FormatStrike icon from css.gg
 * @module
 */
export function CgFormatStrike(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M13 7H17V5H7V7H11V10H13V7Z",fill:"currentColor"}},{tag:"path",attr:{d:"M11 19V14H13V19H11Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M5 13H19V11H5V13Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgFormatStrike;
