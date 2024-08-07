import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ScreenShot icon from css.gg
 * @module
 */
export function CgScreenShot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 8V6H8V10H10V8H12Z",fill:"currentColor"}},{tag:"path",attr:{d:"M14 14H16V18H12V16H14V14Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3ZM6 20V4H18V20H6Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgScreenShot;
