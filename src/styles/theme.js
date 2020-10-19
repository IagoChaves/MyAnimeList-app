import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      300: "#e1e1e6",
      600: "#29292e",
      700: "#202024",
      800: "#121214",
    },
  },
};
export default customTheme;
