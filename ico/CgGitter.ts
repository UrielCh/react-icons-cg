import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gitter icon from css.gg
 * @module
 */
export function CgGitter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M5 1.5H7V14.5H5V1.5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M9 4.5H11V22.5H9V4.5Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M15 4.5H13V22.5H15V4.5Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M17 4.5H19V14.5H17V4.5Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgGitter;
