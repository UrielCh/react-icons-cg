import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Quote icon from css.gg
 * @module
 */
export function CgQuote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z",fill:"currentColor"}},{tag:"path",attr:{d:"M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgQuote;
