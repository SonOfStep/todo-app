import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      bgColor={colorMode === "light" ? "purple.500" : "purple.200"}
      color={colorMode === "light" ? "#fff" : "black"}
      alignItems={"center"}
      boxShadow={"2xl"}
      mb={6}
    >
      <Box flex="1">
        <IconButton
          aria-label="Menu"
          borderRadius={"0"}
          icon={<HamburgerIcon />}
          variant={"solid"}
        />
      </Box>
      <Box flex="2" textAlign={"center"}>
        <Text fontWeight={"bold"}>Сайт задач</Text>
      </Box>
      <Flex flex="1" justify={"flex-end"}>
        <IconButton
          borderRadius={"0"}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
