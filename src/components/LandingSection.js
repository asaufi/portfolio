import React from "react";
import { Heading, VStack, HStack, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Bonjour, je suis Anas!";
const bio1 = "Étudiant en Master Informatique, spécialisé en développement Java et technologies web modernes (React, Express, Node.js, MongoDB, Docker), avec un fort intérêt pour les projets innovants et la gestion de projet technique.";
const bio2 = "EN RECHERCHE D’UN STAGE (4 À 6 MOIS) POUR DÉVELOPPER MES COMPÉTENCES PROFESSIONNELLES.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Image, Heading, HStack, and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    p={8}
  >
    <HStack spacing={8} alignItems="center" justify="center">
      {/* Left side: Image */}
      <Image 
        boxSize="550px" // Adjust the size of the image here
        objectFit="cover"
        src={require('../images/profile.jpg')} // Ensure this is the correct path
        alt="Anas' profile"
        borderRadius="full"
        borderWidth={10}
        borderColor="white"
      />

      {/* Right side: Introduction text */}
      <VStack spacing={4} textAlign="left" color="white">
        <Heading>{greeting}</Heading>
        <Text fontSize="lg">{bio1}</Text>
        <Text fontSize="md">{bio2}</Text>
      </VStack>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
