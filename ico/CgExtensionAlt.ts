import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ExtensionAlt icon from css.gg
 * @module
 */
export function CgExtensionAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M5 5V19H13V13H19V5H5ZM11 7H7V11H11V7ZM11 13H7V17H11V13ZM13 11H17V7H13V11Z",fill:"currentColor"}}]})(props);
}
export default CgExtensionAlt;
