import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Annonces Immobilières",
    description: [
      {
        text: "Création d'un site Web en Express.js et MongoDB avec fonctionnalités CRUD. ('MongoDb + ExpressJs')",
        logo: require("../images/express-mongoDb-logo.png"), // Replace with actual path to your logo
      },
      {
        text: "Gestion des rôles utilisateurs et agents pour la création, modification et suppression d'annonces.",
        logo: require("../images/express-logo.png"), // Replace with actual path to your logo

      },
      {
        text: "Implémentation de l'authentification, gestion des sessions et sécurisation des routes. ('PassportJs')",
        logo: require("../images/passport-logo.png"), // Replace with actual path to your logo
      },
      {
        text: "Tests unitaires et fonctionnels pour garantir la stabilité du site.",
        logo: require("../images/jest-logo.png"), // Replace with actual path to your logo
      },
    ],
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualization support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A one-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event Planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={Array.isArray(project.description) ? project.description : [project.description]} // Ensure description is always an array
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
