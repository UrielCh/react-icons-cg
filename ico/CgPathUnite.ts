import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathUnite icon from css.gg
 * @module
 */
export function CgPathUnite(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M15 5H5V15H9V19H19V9H15V5Z",fill:"currentColor"}}]})(props);
}
export default CgPathUnite;
