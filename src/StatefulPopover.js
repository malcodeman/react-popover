import React from "react";
import { usePopper } from "react-popper";

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

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
  });
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
        ref: setReferenceElement,
        onClick: internalOnClick,
      })}
      {isOpen &&
        React.cloneElement(content({ close }), {
          ...otherProps,
          ...attributes.popper,
          ref: utils.mergeRefs(ref, setPopperElement),
          style: styles.popper,
        })}
    </>
  );
}

StatefulPopover.propTypes = types.propTypes;

StatefulPopover.defaultProps = types.defaultProps;

export default StatefulPopover;
