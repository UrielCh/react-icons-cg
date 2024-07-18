import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hashtag icon from css.gg
 * @module
 */
export function CgHashtag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z",fill:"currentColor"}}]})(props);
}
export default CgHashtag;
