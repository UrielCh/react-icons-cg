import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Duplicate icon from css.gg
 * @module
 */
export function CgDuplicate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M19 5H7V3H21V17H19V5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M9 13V11H11V13H13V15H11V17H9V15H7V13H9Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 7H17V21H3V7ZM5 9H15V19H5V9Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgDuplicate;
