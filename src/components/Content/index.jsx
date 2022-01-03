import { Box, useColorMode } from "@chakra-ui/react";

const Content = ({ children, ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      pos="relative"
      boxShadow={"2xl"}
      p={"8"}
      bgColor={colorMode === "light" ? "white" : "whiteAlpha.200"}
    >
      {children}
    </Box>
  );
};

export default Content;
