import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Terrain icon from css.gg
 * @module
 */
export function CgTerrain(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8 10L3 18H13L8 10Z",fill:"currentColor"}},{tag:"path",attr:{d:"M10.5286 10.7543L13.5 6L21 18H15.0572L10.5286 10.7543Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgTerrain;
