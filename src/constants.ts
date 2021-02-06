const PLACEMENT = {
  TOP_START: "top-start",
  TOP: "top",
  TOP_END: "top-end",
  RIGHT_START: "right-start",
  RIGHT: "right",
  RIGHT_END: "right-end",
  BOTTOM_END: "bottom-end",
  BOTTOM: "bottom",
  BOTTOM_START: "bottom-start",
  LEFT_END: "left-end",
  LEFT: "left",
  LEFT_START: "left-start",
} as const;

const TRIGGER_TYPE = {
  click: "click",
  hover: "hover",
} as const;

export declare type placement =
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-end"
  | "bottom"
  | "bottom-start"
  | "left-end"
  | "left"
  | "left-start";

export declare type triggerType = "click" | "hover";

export { PLACEMENT, TRIGGER_TYPE };

export default {
  PLACEMENT,
  TRIGGER_TYPE,
};
