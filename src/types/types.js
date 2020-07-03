import PropTypes from "prop-types";

import constants from "../constants";

const baseTypes = {
  placement: PropTypes.oneOf(Object.values(constants.PLACEMENT)),
  modifiers: PropTypes.array,
  content: PropTypes.func,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

const popoverTypes = {
  ...baseTypes,
  isOpen: PropTypes.bool,
  onClickOutside: PropTypes.func,
  onEsc: PropTypes.func,
};

const statefulPopoverTypes = {
  ...baseTypes,
  triggerType: PropTypes.oneOf(Object.values(constants.TRIGGER_TYPE)),
  dismissOnClickOutside: PropTypes.bool,
  dismissOnEsc: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export { popoverTypes, statefulPopoverTypes };

export default { popoverTypes, statefulPopoverTypes };
