import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathTrim icon from css.gg
 * @module
 */
export function CgPathTrim(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M5 5H15V8H8V15H5V5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M19 9H9V19H19V9Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgPathTrim;
