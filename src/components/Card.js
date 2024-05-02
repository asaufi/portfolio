import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, imageSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      alignItems="flex-start"
    >
      {/* Image */}
      <Image src={imageSrc} alt={title} width="100%" maxHeight="200px" objectFit="cover" />

      {/* Title */}
      <Heading as="h3" size="md" mt={2}>
        {title}
      </Heading>

      {/* Description */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden", width: "100%" }}
      >
        <Text mt={2}>{description}</Text>
      </motion.div>

      {/* Arrow Icon */}
      <HStack mt={4} spacing={2}>
        <FontAwesomeIcon icon={faArrowRight} />
        <Button onClick={handleClick}  
                backgroundColor={isExpanded ? "green.500" : "blue.500"} 
                color="white" >
                  {isExpanded ? "Show Less" : "Learn More"}
        </Button>
      </HStack>
    </VStack>
  );
};

export default Card;
