export const centerText = (height: number) => {
  return `text-align: center;
  line-height: ${height}px`
}

export const setFlex = (type: "row" | "column") => {
  const f = "display: flex;"
  switch (type) {
    case "row":
      return `${flex}`
      break;
  
    default:
      break;
  }
}