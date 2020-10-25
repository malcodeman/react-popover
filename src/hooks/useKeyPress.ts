import React from "react";

function useKeyPress(
  targetKey: string,
  onPressDown = () => {},
  onPressUp = () => {}
) {
  const [keyPressed, setKeyPressed] = React.useState(false);

  React.useEffect(() => {
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
        if (typeof onPressDown === "function") {
          onPressDown();
        }
      }
    }

    function upHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(false);
        if (typeof onPressUp === "function") {
          onPressUp();
        }
      }
    }

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey, onPressDown, onPressUp]);

  return keyPressed;
}

export { useKeyPress };

export default useKeyPress;
