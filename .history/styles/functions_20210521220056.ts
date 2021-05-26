export const centerText = (height: number) => {
  return `text-align: center;
  line-height: ${height}px`
}

export const setFlex = (type: "row" | "column" ) => {
  return `display: flex; flex-direction: ${type}`
}