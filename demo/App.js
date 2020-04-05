import React from "React";

import { StatefulPopover, PLACEMENT } from "../src/index";

function App() {
  function content() {
    return <div>PopoverContent</div>;
  }

  return (
    <div>
      <h1>Demo</h1>
      <StatefulPopover placement={PLACEMENT.RIGHT} content={content}>
        <button>Trigger Popover</button>
      </StatefulPopover>
    </div>
  );
}

export default App;
