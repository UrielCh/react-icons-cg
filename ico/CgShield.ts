import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shield icon from css.gg
 * @module
 */
export function CgShield(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M7 8V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V8H7ZM5 4H19V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V4Z",fill:"currentColor"}}]})(props);
}
export default CgShield;
