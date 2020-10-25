import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";

import { Popover } from "../src";
import { PLACEMENT } from "../src/constants";

const Content = styled.div`
  background-color: #c83b50;
  color: #fff;
`;

export default {
  title: "Popover",
  component: Popover,
  decorators: [withKnobs],
};

export function Default() {
  const [isOpen, setisOpen] = React.useState(false);
  const placement = select(
    "Placement",
    Object.values(PLACEMENT),
    PLACEMENT.BOTTOM_START
  );

  function onClick() {
    setisOpen(!isOpen);
  }

  return (
    <>
      <button onClick={() => setisOpen(true)}>Open</button>
      <button onClick={() => setisOpen(false)}>Close</button>
      <Popover
        placement={placement}
        isOpen={isOpen}
        content={() => <div>PopoverContent</div>}
      >
        <button onClick={onClick}>Trigger Popover</button>
      </Popover>
    </>
  );
}

export function MultipleOnClicks() {
  const [isOpen, setisOpen] = React.useState(false);
  const placement = select(
    "Placement",
    Object.values(PLACEMENT),
    PLACEMENT.BOTTOM_START
  );

  function onClick() {
    action("Secondary onClick event")();
    setisOpen(!isOpen);
  }

  return (
    <Popover
      placement={placement}
      onClick={action("Primary onClick event")}
      isOpen={isOpen}
      content={() => <div>PopoverContent</div>}
    >
      <button onClick={onClick}>Trigger Popover</button>
    </Popover>
  );
}

export function CloseFromContent() {
  const [isOpen, setisOpen] = React.useState(false);
  const placement = select(
    "Placement",
    Object.values(PLACEMENT),
    PLACEMENT.BOTTOM_START
  );

  function close() {
    setisOpen(false);
  }

  return (
    <Popover
      placement={placement}
      isOpen={isOpen}
      onClickOutside={close}
      onEsc={close}
      content={() => (
        <div>
          <button onClick={close}>Close</button>
        </div>
      )}
    >
      <button onClick={() => setisOpen(true)}>Trigger Popover</button>
    </Popover>
  );
}

export function SameWidth() {
  const [isOpen, setisOpen] = React.useState(false);
  const placement = select(
    "Placement",
    Object.values(PLACEMENT),
    PLACEMENT.BOTTOM_START
  );
  const modifiers = React.useMemo(
    () => [
      {
        name: "sameWidth",
        enabled: true,
        fn: ({ state }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        phase: "beforeWrite",
        requires: ["computeStyles"],
        effect({ state }) {
          state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
        },
      },
    ],
    []
  );

  function close() {
    setisOpen(false);
  }

  return (
    <Popover
      placement={placement}
      modifiers={modifiers}
      isOpen={isOpen}
      onClickOutside={close}
      onEsc={close}
      content={() => <Content>Content</Content>}
    >
      <button onClick={() => setisOpen(true)}>Trigger Popover</button>
    </Popover>
  );
}
