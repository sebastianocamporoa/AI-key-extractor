import { Box, Text, Image, Flex } from "@chakra-ui/react";
import logo from "../assets/openai.png";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex justifyContent="center" alignItems="center">
            <Image src={logo} marginRight={1} />
            <Text>Powered By Open AI</Text>
          </Flex>
          <Text>Created by Sebastian Ocampo Roa</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Footer;
