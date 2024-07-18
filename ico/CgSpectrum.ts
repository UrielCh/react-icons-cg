import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Spectrum icon from css.gg
 * @module
 */
export function CgSpectrum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 16H16C16 11.5817 12.4183 8 8 8V12C10.2091 12 12 13.7909 12 16Z",fill:"currentColor"}}]})(props);
}
export default CgSpectrum;
