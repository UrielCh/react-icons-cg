import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bolt icon from css.gg
 * @module
 */
export function CgBolt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z",fill:"currentColor"}}]})(props);
}
export default CgBolt;
