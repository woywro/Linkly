const size = {
  sm: "500px",
  lg: "1000px",
  xl: "1280px",
};
const device = {
  sm: `(min-width: 0) and (max-width: ${size.sm})`,
  lg: `(min-width: ${size.sm}) and (max-width: ${size.lg})`,
  xl: `(min-width: ${size.lg}) and (max-width: ${size.xl})`,
};
export default { size, device };
