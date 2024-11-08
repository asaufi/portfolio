import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
                    firstName: "",
                    email: "",
                    type:"",
                    comment:""
    },
    onSubmit: (values, { resetForm }) => {
         submit(values);
      resetForm();
      
    },
    onSuccess: () => {
      formik.resetForm(); // Réinitialiser le formulaire après une soumission réussie
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    type: Yup.string().required("Type of enquiry is required"),
    comment: Yup.string().required("Message is required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contactez moi
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}> 
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Nom & Prénom</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Adresse mail</FormLabel>
                <Input
                 id="email"
                 name="email"
                 type="email"
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                />
                <FormErrorMessage> {formik.errors.comment} </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of demande</FormLabel>
                <Select 
                      id="type"
                      name="type"
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                >
                  <option value="hireMe">Proposition de projet freelance</option>
                  <option value="openSource">
                  Session de consultation sur l'open source
                  </option>
                  <option value="other">Autre</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Votre message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full"  isLoading={isLoading} >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
