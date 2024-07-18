import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Unsplash icon from css.gg
 * @module
 */
export function CgUnsplash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M15 4.5H9V8.5H15V4.5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M4 10.5H9V14.5H15V10.5H20V19.5H4V10.5Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgUnsplash;
