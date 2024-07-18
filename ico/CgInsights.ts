import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Insights icon from css.gg
 * @module
 */
export function CgInsights(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M15 8H19V20H5V10H9V4H15V8ZM13 6H11V18H13V6ZM15 10V18H17V10H15ZM9 12V18H7V12H9Z",fill:"currentColor"}}]})(props);
}
export default CgInsights;
