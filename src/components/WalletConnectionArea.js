import React from "react";
import { Link, Heading, Center, VStack } from "@chakra-ui/react";

import Home from "./Home";

const WalletConnectionArea = ({
  title,
  cta,
  backgroundImage,
  candyMachineId,
  config,
  connection,
  startDate,
  treasury,
  txTimeout,
  ...rest
}) => {
  return (
    <Center
      id="cta"
      p={[8, 8, 20, 20]}
      w="100%"
      minH="70vh"
      position="relative"
      overflowX="hidden"
      sx={{ backgroundImage: `url(${"/static/bonk-world.svg"})` }}
    >
      <VStack
        p={[8, 8, 20, 20]}
        w="100%"
        maxW="900px"
        borderRadius="1rem"
        borderColor="gray.200"
        borderWidth=".25rem"
        bg="red"
        color="white"
        textAlign="center"
        _hover={{ transform: "scale(1.005)" }}
        transition="transform 0.5s ease-out"
        spacing={8}
        position="relative"
        backgroundSize="20px 20px"
      >
        <VStack>
          <Heading
            as="h2"
            size="lg"
            fontWeight={800}
            maxW="500px"
            lineHeight="tall"
          >
            {title}
          </Heading>
        </VStack>

        <VStack spacing={4}>
          <Link href={cta.href}>
            <Home
              candyMachineId={candyMachineId}
              config={config}
              connection={connection}
              startDate={startDate}
              treasury={treasury}
              txTimeout={txTimeout}
            />
          </Link>
        </VStack>
      </VStack>
    </Center>
  );
};

export default WalletConnectionArea;
