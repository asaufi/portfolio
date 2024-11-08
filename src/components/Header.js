import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton, Link, useBreakpointValue } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";



const socials = [
  {
    icon: faEnvelope,
    url: "mailto: saufianas03@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/asaufi",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/anas-saufi/",
  },
  
];

const Header = () => {
  const navDisplay = useBreakpointValue({ base: "none", md: "flex" });

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    console.log(element , anchor)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        top: section.offsetTop - 100, // Adjust offset as needed
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="999" // Ensure header is above other content
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={4}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {
              socials.map((social,index)=>
            (<Link key={index} href={social.url} 
            isExternal={!social.url.startsWith("#")}
            >
              <IconButton
                aria-label={social.icon}
                icon={<FontAwesomeIcon icon={social.icon}/>}
                variant="ghost"
                size="sm"
                color="white"
                />
            </Link>)
            )
            }
          </nav>
          <nav>
            <HStack spacing={8}>
            <a href="/#projects-section" onClick={()=>handleClick("projects")}>Projets</a>
            <a href="/#contactme-section" onClick={()=>handleClick("contactme")}>Contactez moi</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
