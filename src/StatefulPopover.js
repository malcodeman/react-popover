import React from "react";

import types from "./types";
import constants from "./constants";

import Popper from "./Popover";

function StatefulPopover(props) {
  const {
    placement,
    modifiers,
    content,
    children,
    triggerType,
    dismissOnClickOutside,
    dismissOnEsc,
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  function open() {
    props.onOpen && props.onOpen();
    setIsOpen(true);
  }

  function close() {
    props.onClose && props.onClose();
    setIsOpen(false);
  }

  function onClick(e) {
    props.onClick && props.onClick(e);

    if (isOpen) {
      triggerType === constants.TRIGGER_TYPE.click && close();
    } else {
      triggerType === constants.TRIGGER_TYPE.click && open();
    }
  }

  function onMouseEnter(e) {
    props.onMouseEnter && props.onMouseEnter(e);
    triggerType === constants.TRIGGER_TYPE.hover && open();
  }

  function onMouseLeave(e) {
    props.onMouseLeave && props.onMouseLeave(e);
    triggerType === constants.TRIGGER_TYPE.hover && close();
  }

  function onClickOutside() {
    dismissOnClickOutside && close();
  }

  function onEsc() {
    dismissOnEsc && close();
  }

  function renderContent() {
    return content({ close });
  }

  return (
    <Popper
      placement={placement}
      modifiers={modifiers}
      isOpen={isOpen}
      content={renderContent}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClickOutside={onClickOutside}
      onEsc={onEsc}
    >
      {children}
    </Popper>
  );
}

StatefulPopover.propTypes = types.statefulPopoverTypes;

StatefulPopover.defaultProps = types.statefulPopoverDefaults;

export default StatefulPopover;
