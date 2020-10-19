import React from "react";
import { Container } from "./styles";
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/core";
function SearchInput() {
  return (
    <Container>
      <InputGroup flex="1" maxW={400} size="md">
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          variant="filled"
          focusBorderColor="lime"
          placeholder="Search for an anime"
        />
      </InputGroup>
    </Container>
  );
}

export default SearchInput;
