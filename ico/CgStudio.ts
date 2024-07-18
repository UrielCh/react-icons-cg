import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Studio icon from css.gg
 * @module
 */
export function CgStudio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M17 13H13V17H17V13Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 3H21V21H3V3ZM5 5H19V19H5V5Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgStudio;
