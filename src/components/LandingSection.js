import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Anas!";
const bio1 = "A Web developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center" color="white">
      {/* Avatar component */}

      <Avatar size="xl" name="Anas" src="https://i.pravatar.cc/150?img=26" />

    <Heading>
      {greeting}
    </Heading>

    <VStack spacing={2} textAlign="center" color="white">
      <h2> {bio1} </h2>
      <p> {bio2}</p>
    </VStack>


    </VStack>
  </FullScreenSection>
);

export default LandingSection;
