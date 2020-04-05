import React from "react";
import usePopper from "use-popper";

import hooks from "./hooks";
import utils from "./utils";
import types from "./types";

function StatefulPopover(props) {
  const {
    placement,
    content,
    shouldCloseOnExternalClick,
    children,
    onClose,
    ...otherProps
  } = props;

  const { reference, popper } = usePopper({ placement });
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef();

  function close() {
    setIsOpen(false);

    if (typeof onClose === "function") {
      onClose();
    }
  }

  function internalOnClick() {
    setIsOpen(!isOpen);
  }

  hooks.useKeyPress("Escape", close);
  hooks.useOnClickOutside(ref, shouldCloseOnExternalClick && close);

  return (
    <>
      {React.cloneElement(children, {
        ref: reference.ref,
        onClick: internalOnClick,
      })}
      {isOpen &&
        React.cloneElement(content({ close }), {
          ...otherProps,
          ref: utils.mergeRefs(ref, popper.ref),
          style: popper.styles,
        })}
    </>
  );
}

StatefulPopover.propTypes = types.propTypes;

StatefulPopover.defaultProps = types.defaultProps;

export default StatefulPopover;
