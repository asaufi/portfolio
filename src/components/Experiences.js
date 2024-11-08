import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "STAGE: Développeur Web - Application Web Annonces Immobilières",
    duration: "Juillet 2024-Septembre 2024",
    description: [
      " Création d'un site Web en Express.js et MongoDB avec fonctionnalités CRUD.",
      " Gestion des rôles utilisateurs et agents pour la création, modification et suppression d'annonces.",
      " Implémentation de l'authentification, gestion des sessions et sécurisation des routes.",
      " Tests unitaires et fonctionnels pour garantir la stabilité du site.",
      " Technologies : MongoDb, ExpressJs, PassportJs "

    ],
    getImageSrc: () => require("../images/app_annonces.png"),
  },
  {
    title: "STAGE : Système autonome de détection d'incendie",
    duration: "Avril 2023-Juin 2023",
    description: [
      " Conception et mise en œuvre des mécanismes d'intervention du système.",
      " Collection des données de détection dans une base de données.",
      " Développement d’une application web pour afficher les détection en temps réel.",
      " Technologies : HTML, CSS, JavaScript, SQL, Arduino  "
    ],
    getImageSrc: () => require("../images/pendule.JPG"),
  },
  {
    title: "STAGE : Application web de gestion des courriers",
    duration: "Avril 2022 -Mai 2022",
    description: [
      " Analyser les besoins, rédiger et valider les spécifications générales et détaillés",
      " Concevoir et analyser le projet(Merise, UML).",
      "Elaborer et mettre en place une application web de gestion des courriers au sein de la province de Rehamna",
      " Technologies : HTML, CSS, PHP, LARAVEL, Bootstrap"
    ],
    getImageSrc: () => require("../images/mis.jpg"),
  },
  
];

const Experience = () => {
  return (
    <FullScreenSection
      backgroundColor="#111827"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Expériences
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
            duration={project.duration}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Experience;
