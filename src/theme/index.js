import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import Button from "./Button.style";

const theme = extendTheme(withDefaultColorScheme({ colorScheme: "purple" }), {
  components: {
    Button,
  },
});
export default theme;
