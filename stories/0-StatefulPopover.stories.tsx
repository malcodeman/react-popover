import React from "react";
import styled from "styled-components";
import { withKnobs, select } from "@storybook/addon-knobs";

import { StatefulPopover } from "../src";
import { PLACEMENT, TRIGGER_TYPE } from "../src/constants";

const UserIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  object-fit: cover;
  object-position: top;
`;

const StyledPopover = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
`;

const Menu = styled.ul`
  padding: 0.25rem 1rem;
  margin: 0;
`;

const MenuItem = styled.li`
  font-family: "Roboto", sans-serif;
  list-style: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  color: #333;
  border-radius: 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 512px;
  width: 512px;
  border-radius: 10px;
  border: 2px dashed #ff6b81;
`;

export default {
  title: "StatefulPopover",
  component: StatefulPopover,
  decorators: [withKnobs],
};

export function Default() {
  const placement = select(
    "Placement",
    Object.values(PLACEMENT),
    PLACEMENT.BOTTOM_START
  );
  const triggerType = select(
    "Trigger type",
    Object.values(TRIGGER_TYPE),
    TRIGGER_TYPE.click
  );

  return (
    <Main>
      <StatefulPopover
        placement={placement}
        triggerType={triggerType}
        content={() => <div>PopoverContent</div>}
      >
        <button>Trigger Popover</button>
      </StatefulPopover>
    </Main>
  );
}

export function Styling() {
  const placement = select(
    "Placement",
    Object.values(PLACEMENT),
    PLACEMENT.BOTTOM_START
  );
  const triggerType = select(
    "Trigger type",
    Object.values(TRIGGER_TYPE),
    TRIGGER_TYPE.click
  );

  return (
    <Main>
      <StatefulPopover
        placement={placement}
        triggerType={triggerType}
        content={() => (
          <StyledPopover>
            <Menu>
              <MenuItem>Notifications</MenuItem>
              <MenuItem>Messages</MenuItem>
              <MenuItem>Bookmarks</MenuItem>
            </Menu>
          </StyledPopover>
        )}
      >
        <UserIcon src="https://source.unsplash.com/random"></UserIcon>
      </StatefulPopover>
    </Main>
  );
}

export function CloseFromContent() {
  const placement = select(
    "Placement",
    Object.values(PLACEMENT),
    PLACEMENT.BOTTOM_START
  );
  const triggerType = select(
    "Trigger type",
    Object.values(TRIGGER_TYPE),
    TRIGGER_TYPE.click
  );

  return (
    <Main>
      <StatefulPopover
        placement={placement}
        triggerType={triggerType}
        content={({ close }) => (
          <div>
            <button onClick={close}>Close</button>
          </div>
        )}
      >
        <button>Trigger Popover</button>
      </StatefulPopover>
    </Main>
  );
}
