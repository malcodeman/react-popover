function mergeRefs(...refs) {
  return (ref) => {
    refs.forEach((resolvableRef) => {
      if (typeof resolvableRef === "function") {
        resolvableRef(ref);
      }

      if (resolvableRef) {
        resolvableRef.current = ref;
      }
    });
  };
}

export { mergeRefs };

export default {
  mergeRefs,
};
