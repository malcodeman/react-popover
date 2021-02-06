import React from "react";

import { triggerType, placement } from "./constants";

import Popper from "./Popover";

type props = {
  placement?: placement;
  modifiers?: any;
  content: any;
  children: any;
  triggerType?: triggerType;
  dismissOnClickOutside?: boolean;
  dismissOnEsc?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function StatefulPopover(props: props) {
  const {
    placement,
    modifiers,
    content,
    children,
    triggerType = "click",
    dismissOnClickOutside = true,
    dismissOnEsc = true,
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

  function onClick() {
    props.onClick && props.onClick();

    if (isOpen) {
      triggerType === "click" && close();
    } else {
      triggerType === "click" && open();
    }
  }

  function onMouseEnter() {
    props.onMouseEnter && props.onMouseEnter();
    triggerType === "hover" && open();
  }

  function onMouseLeave() {
    props.onMouseLeave && props.onMouseLeave();
    triggerType === "hover" && close();
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

export default StatefulPopover;
