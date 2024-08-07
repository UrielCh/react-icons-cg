import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayButton icon from css.gg
 * @module
 */
export function CgPlayButton(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M15 12.3301L9 16.6603L9 8L15 12.3301Z",fill:"currentColor"}}]})(props);
}
export default CgPlayButton;
