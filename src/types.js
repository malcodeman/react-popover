import PropTypes from "prop-types";

import constants from "./constants";

const propTypes = {
  placement: PropTypes.oneOf(Object.values(constants.PLACEMENT)),
  content: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  shouldCloseOnExternalClick: PropTypes.bool,
  onClose: PropTypes.func,
};

const defaultProps = {
  placement: constants.PLACEMENT.BOTTOM_START,
  shouldCloseOnExternalClick: true,
};

export default { propTypes, defaultProps };
