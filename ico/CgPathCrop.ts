import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathCrop icon from css.gg
 * @module
 */
export function CgPathCrop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"rect",attr:{"opacity":"0.5",x:"6",y:"6","width":"8","height":"8",stroke:"currentColor",strokeWidth:"2"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M9 9H19V19H9V9ZM15 11H17V17H11V15H15V11Z",fill:"currentColor"},child:[]}]})(props);
}
export default CgPathCrop;
