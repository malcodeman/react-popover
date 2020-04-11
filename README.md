# [react-popover](http://react-popover-storybook.surge.sh)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/react-popover/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@malcodeman/react-popover)](https://www.npmjs.com/package/@malcodeman/react-popover)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

The Popover component displays floating content in relation to a target. Popovers appear either at the top, bottom, left or right of their target. The preferred and default side is the bottom. Popovers use smart positioning if there is not enough space.

## Getting started

```sh
yarn add @malcodeman/react-popover
# or
npm install --save @malcodeman/react-popover
```

```jsx
import React from "react";
import { StatefulPopover } from "@malcodeman/react-popover";

function App() {
  return (
    <StatefulPopover content={() => <div>PopoverContent</div>}>
      <button>Trigger Popover</button>
    </StatefulPopover>
  );
}

export default App;
```

## License

[MIT](./LICENSE)
