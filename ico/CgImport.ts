import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Import icon from css.gg
 * @module
 */
export function CgImport(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M5 9.98193V19.9819H19V9.98193H15V7.98193H21V21.9819H3V7.98193H9V9.98193H5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M13.0001 2H11.0001V14.0531L8.46451 11.5175L7.05029 12.9317L12 17.8815L16.9498 12.9317L15.5356 11.5175L13.0001 14.053V2Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgImport;
