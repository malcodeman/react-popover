import constants from "../constants";

const baseDefaults = {
  placement: constants.PLACEMENT.BOTTOM_START,
};

const popoverDefaults = {
  ...baseDefaults,
  isOpen: false,
};

const statefulPopoverDefaults = {
  ...baseDefaults,
  triggerType: constants.TRIGGER_TYPE.click,
  dismissOnClickOutside: true,
  dismissOnEsc: true,
};

export { popoverDefaults, statefulPopoverDefaults };

export default { popoverDefaults, statefulPopoverDefaults };
