import React from "react";

function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: Event) => void
) {
  React.useEffect(() => {
    function listener(event: any) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      if (typeof handler === "function") {
        handler(event);
      }
    }

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

export { useOnClickOutside };

export default useOnClickOutside;
