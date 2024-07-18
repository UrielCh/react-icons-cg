import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Extension icon from css.gg
 * @module
 */
export function CgExtension(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M13 3H21V11H13V3ZM15 5H19V9H15V5Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M17 21V13H11V7H3V21H17ZM9 9H5V13H9V9ZM5 19L5 15H9V19H5ZM11 19V15H15V19H11Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgExtension;
