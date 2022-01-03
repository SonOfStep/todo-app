import { Box, Text, useColorMode, VStack } from "@chakra-ui/react";
import ItemTodo from "../ItemTodo";
import { useSelector } from "react-redux";
import { WarningTwoIcon } from "@chakra-ui/icons";
import MotionBox from "../MotionBox";
import { useEffect, useState } from "react";

const ListTodo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const { colorMode } = useColorMode();
  const [coefficient, setCoefficient] = useState(1);

  useEffect(() => {
    setCoefficient(0);
  }, [setCoefficient]);

  if (!todos.length) {
    return (
      <VStack>
        <Box mx={"auto"}>
          <MotionBox
            animate={{
              scale: [1, 0.75, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <WarningTwoIcon
              boxSize={"20"}
              mx={"auto"}
              color={colorMode === "light" ? "gray.500" : "gray.200"}
              transitionDuration={".5s"}
              _hover={{ color: "yellow.400" }}
            />
          </MotionBox>
        </Box>
        <Text
          fontWeight={700}
          color={colorMode === "light" ? "gray.500" : "gray.200"}
          textAlign={"center"}
        >
          Список задач пуст!
        </Text>
      </VStack>
    );
  }

  return (
    <VStack spacing={"3"} w="100%" overflow={"hidden"}>
      {todos.map((todo, index) => (
        <ItemTodo
          key={todo.created}
          created={todo.created}
          completed={todo.completed}
          text={todo.text}
          index={index * coefficient}
        />
      ))}
    </VStack>
  );
};
export default ListTodo;
