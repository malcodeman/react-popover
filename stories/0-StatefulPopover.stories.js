import React from "react";

import { StatefulPopover } from "../src";
import { PLACEMENT } from "../src/constants";

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
