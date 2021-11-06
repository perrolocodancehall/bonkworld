import React from "react";
import { Image, Center, Wrap, WrapItem } from "@chakra-ui/react";

import Section from "./Section";
import sampleWork from "../content/sample-work.json";

const SampleWork = () => {
  return (
    <Section
      id="sampleWork"
      subtitle={sampleWork.subtitle}
      justify="center"
      maxW="100%"
      py={20}
      sx={{ backgroundColor: "gray", marginTop: 0 }}
    >
      <Center position="relative" w="100%" py={16}>
        <Wrap
          spacing={8}
          position="relative"
          maxW="1200px"
          justify="center"
          m="0 !imporant"
        >
          <WrapItem>
            <Image
              src="/static/charmander.jpeg"
              w="100%"
              h="100%"
              borderRadius="1rem"
            />
          </WrapItem>
          <WrapItem>
            <Image
              src="/static/charmander.jpeg"
              w="100%"
              h="100%"
              borderRadius="1rem"
            />
          </WrapItem>
          <WrapItem>
            <Image
              src="/static/charmander.jpeg"
              w="100%"
              h="100%"
              borderRadius="1rem"
            />
          </WrapItem>
        </Wrap>
      </Center>
    </Section>
  );
};

export default SampleWork;
