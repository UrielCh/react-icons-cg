import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Crop icon from css.gg
 * @module
 */
export function CgCrop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M7.93164 9.00891V16H15V20.0089H17V16H20.9316V14H17V7.00891H9.93164V3H7.93164V7.00891H4V9.00891H7.93164ZM9.93164 9.00891V14H15V9.00891H9.93164Z",fill:"currentColor"}}]})(props);
}
export default CgCrop;
