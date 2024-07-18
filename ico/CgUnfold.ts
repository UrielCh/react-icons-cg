import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Unfold icon from css.gg
 * @module
 */
export function CgUnfold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12H2Z",fill:"currentColor"}}]})(props);
}
export default CgUnfold;
