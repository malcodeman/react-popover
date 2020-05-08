import React from "react";

import { Popover } from "../src";

export default {
  title: "Popover",
  component: Popover,
};

export const Default = () => {
  const [isOpen, setisOpen] = React.useState(false);

  function onClick() {
    setisOpen(!isOpen);
  }

  return (
    <>
      <button onClick={() => setisOpen(true)}>Open</button>
      <button onClick={() => setisOpen(false)}>Close</button>
      <Popover isOpen={isOpen} content={() => <div>PopoverContent</div>}>
        <button onClick={onClick}>Trigger Popover</button>
      </Popover>
    </>
  );
};

export const MultipleOnClicks = () => {
  const [isOpen, setisOpen] = React.useState(false);

  function onClick() {
    console.log("Secondary onClick event");
    setisOpen(!isOpen);
  }

  return (
    <Popover
      onClick={() => console.log("Primary onClick event")}
      isOpen={isOpen}
      content={() => <div>PopoverContent</div>}
    >
      <button onClick={onClick}>Trigger Popover</button>
    </Popover>
  );
};

export const CloseFromContent = () => {
  const [isOpen, setisOpen] = React.useState(false);

  function close() {
    setisOpen(false);
  }

  return (
    <Popover
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
};
