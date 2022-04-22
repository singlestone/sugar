export const overrideNestedProperty = (
  styles: any,
  topPropertyKey: string,
  nestedValues: any
) => {
  const newNestedStyles = {
    ...styles[topPropertyKey],
    ...nestedValues,
  };
  return {
    ...styles,
    [topPropertyKey]: newNestedStyles,
  };
};
