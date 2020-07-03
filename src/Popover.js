import React from "react";
import { usePopper } from "react-popper";

import hooks from "./hooks";
import utils from "./utils";
import types from "./types";

function Popover(props) {
  const {
    placement,
    modifiers,
    content,
    children,
    isOpen,
    onEsc,
    onClickOutside,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...otherProps
  } = props;

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const ref = React.useRef(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers,
  });
  const childArray = React.Children.toArray(children);

  function internalOnClick() {
    onClick && onClick();
    children.props.onClick && children.props.onClick();
  }

  function internalOnMouseEnter() {
    onMouseEnter && onMouseEnter();
    children.props.onMouseEnter && children.props.onMouseEnter();
  }

  function internalOnMouseLeave() {
    onMouseLeave && onMouseLeave();
    children.props.onMouseLeave && children.props.onMouseLeave();
  }

  function internalOnEsc() {
    onEsc && onEsc();
  }

  function internalOnClickOutside(event) {
    const target = event.target;

    if (referenceElement === target || referenceElement.contains(target)) {
      return;
    }

    onClickOutside && onClickOutside();
  }

  hooks.useKeyPress("Escape", internalOnEsc);
  hooks.useOnClickOutside(ref, internalOnClickOutside);

  if (childArray.length !== 1) {
    console.error(
      `[react-popover] Exactly 1 child must be passed to Popover, found ${childArray.length} children`
    );
    return null;
  }

  return (
    <>
      {children &&
        React.cloneElement(children, {
          ...children.props,
          onClick: internalOnClick,
          onMouseEnter: internalOnMouseEnter,
          onMouseLeave: internalOnMouseLeave,
          ref: setReferenceElement,
        })}
      {isOpen &&
        content &&
        typeof content === "function" &&
        React.cloneElement(content(), {
          ...otherProps,
          ...attributes.popper,
          style: styles.popper,
          ref: utils.mergeRefs(ref, setPopperElement),
        })}
    </>
  );
}

Popover.propTypes = types.popoverTypes;

Popover.defaultProps = types.popoverDefaults;

export default Popover;
