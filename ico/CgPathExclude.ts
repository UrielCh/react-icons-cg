import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathExclude icon from css.gg
 * @module
 */
export function CgPathExclude(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M5 5H15V9H9V15H5V5ZM9 15V19H19V9H15V15H9Z",fill:"currentColor"}}]})(props);
}
export default CgPathExclude;
