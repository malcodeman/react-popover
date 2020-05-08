import React from "react";
import styled from "styled-components";

import { StatefulPopover } from "../src";
import { PLACEMENT, TRIGGER_TYPE } from "../src/constants";
import imageFile from "./static/image.jpg";

const image = {
  src: imageFile,
  alt: "image",
};

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

export default {
  title: "StatefulPopover",
  component: StatefulPopover,
};

export const Default = () => (
  <StatefulPopover content={() => <div>PopoverContent</div>}>
    <button>Trigger Popover</button>
  </StatefulPopover>
);

export const PlacementRight = () => (
  <StatefulPopover
    content={() => <div>PopoverContent</div>}
    placement={PLACEMENT.RIGHT}
  >
    <button>Trigger Popover</button>
  </StatefulPopover>
);

export const Styling = () => (
  <StatefulPopover
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
    <UserIcon src={image.src}></UserIcon>
  </StatefulPopover>
);

export const Hover = () => (
  <StatefulPopover
    content={() => <div>PopoverContent</div>}
    triggerType={TRIGGER_TYPE.hover}
  >
    <button>Trigger Popover</button>
  </StatefulPopover>
);

export const CloseFromContent = () => (
  <StatefulPopover
    content={({ close }) => (
      <div>
        <button onClick={close}>Close</button>
      </div>
    )}
  >
    <button>Trigger Popover</button>
  </StatefulPopover>
);
