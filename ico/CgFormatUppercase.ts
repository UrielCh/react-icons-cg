import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FormatUppercase icon from css.gg
 * @module
 */
export function CgFormatUppercase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M13 9H10V17H8V9H5V7H13V9ZM18 13H16V17H14V13H12V11H18V13Z",fill:"currentColor"}}]})(props);
}
export default CgFormatUppercase;
