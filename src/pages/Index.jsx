import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} align="start">
        {/* Blog Posts Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <VStack spacing={8} align="start">
            <Box>
              <Heading as="h3" size="lg">Post Title 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis...</Text>
              <Link color="teal.500" mt={2} display="block">Read more</Link>
            </Box>
            <Box>
              <Heading as="h3" size="lg">Post Title 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis...</Text>
              <Link color="teal.500" mt={2} display="block">Read more</Link>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" ml={{ md: 4 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="start">
            <Link href="#">Recent Post 1</Link>
            <Link href="#">Recent Post 2</Link>
            <Link href="#">Recent Post 3</Link>
          </VStack>
          <Divider my={8} />
          <Heading as="h3" size="lg" mb={4}>Categories</Heading>
          <VStack spacing={4} align="start">
            <Link href="#">Category 1</Link>
            <Link href="#">Category 2</Link>
            <Link href="#">Category 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.100" p={4} mt={8}>
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={4}>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;