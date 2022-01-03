import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Flex,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoComplete } from "../../store/todoSlice";
import MotionBox from "../MotionBox";

const ItemTodo = ({ created, completed, text, index }) => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  const handleDelete = () => {
    dispatch(deleteTodo({ created }));
  };
  const handleToggleCompleted = () => {
    dispatch(toggleTodoComplete({ created }));
  };

  return (
    <MotionBox
      w="100%"
      animate={{
        opacity: [0, 1],
        x: [100, 0],
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.3 * index,
      }}
    >
      <Flex
        fontWeight={"semibold"}
        color={colorMode === "light" ? "gray.500" : "gray.200"}
        key={created}
        py={"2"}
        px={"4"}
        borderRadius={"base"}
        flex={1}
        gap={"2"}
        align={"flex-end"}
        justify={"space-between"}
        _hover={{ bg: colorMode === "light" ? "gray.50" : "whiteAlpha.100" }}
      >
        <Flex flex="0" align="center" h="40px">
          <Checkbox
            colorScheme={"purple"}
            isChecked={completed}
            onChange={handleToggleCompleted}
          />
        </Flex>
        <Flex flex="1" minH={"40px"} align={"center"}>
          <Text as="span" textDecoration={completed ? "line-through" : "none"}>
            {text}
          </Text>
        </Flex>
        <Box flex="0">
          <IconButton
            icon={<DeleteIcon />}
            onClick={handleDelete}
            variant={"ghost"}
            colorScheme={colorMode === "light" ? "blackAlpha" : "white"}
          />
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default ItemTodo;
