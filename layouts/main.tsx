import { Container } from "@chakra-ui/react";
import { Navbar, Footer } from "views";

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.lg'}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
