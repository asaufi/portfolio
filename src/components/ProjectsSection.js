import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  
  {
    title: "PROJET : Suivi en temps réel du pendule de Foucault",
    description: [
      " Projet de suivi en temps réel du pendule de Foucault à l’Université Le Havre Normandie (février à juin 2024) avec trois caméras pour analyser les oscillations.",
      " Installation équipée d'accéléromètres et de LEDs, mesurant l'angle, la vitesse, et l'amplitude du pendule.",
      " Technologies : OpenCV pour le traitement vidéo, Matplotlib pour les graphiques en temps réel, Arduino pour la gestion des LEDs.",
      " Objectif : démontrer la rotation de la Terre de façon visuelle et interactive."
    ],
    getImageSrc: () => require("../images/pendule.JPG"),
  },
  {
    title: "PROJET : Système de Simulation de Base de Données",
    description: [
      " Développement d'un système de simulation de base de données distribuée avec réseau de files d'attente.",
      " Gestion des requêtes utilisateurs via un coordinateur pour une répartition efficace sur les serveurs avec traitement probabilistique.",
      " Technologies : JavaFX."
    ],
    getImageSrc: () => require("../images/mis.jpg"),
  },
  {
    title: "PROJET : Virus Compagnon",
    description: [
      " Développement d’un logiciel malveillant attaché à des fichiers exécutables légitimes pour exécuter du code viral lors du lancement.",
      " Technologies : Langage C pour la création du code malveillant et l'injection dans des exécutables.",
      " Objectif : Concevoir un virus capable de se propager automatiquement en s'exécutant lors du lancement du fichier hôte."
    ],
    getImageSrc: () => require("../images/virus.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#3730A3"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Projets
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
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
