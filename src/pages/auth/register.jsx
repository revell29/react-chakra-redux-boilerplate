import React from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Button,
  Center,
  Input,
  Flex,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Stack maxWidth="40rem" width="100%" margin="0 auto" py={20}>
      <Flex>
        <Center w="full" flexDirection="column">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            height="8rem"
            objectFit="cover"
            mb={8}
          />
          <Box w="full" boxShadow="lg" py={8} px={8} rounded={8}>
            <form>
              <FormControl id="fullname" mb={5}>
                <FormLabel>Nama Lengkap</FormLabel>
                <Input type="text" name="fullname" placeholder="Nama Lengkap" />
              </FormControl>
              <FormControl id="email" mb={5}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Email" name="email" />
              </FormControl>
              <FormControl id="no_hp" mb={5}>
                <FormLabel>No HP</FormLabel>
                <Input type="text" placeholder="No HP" name="no_hp" />
              </FormControl>
              <FormControl id="password" mb={5}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Password" name="password" />
              </FormControl>
              <FormControl id="password_confirmation" mb={8}>
                <FormLabel>Password Konfirmasi</FormLabel>
                <Input
                  type="password"
                  placeholder="Password Konfirmasi"
                  name="password_confirmation"
                />
              </FormControl>
              <Button variant="solid" colorScheme="blue" w="full" height={12} mb={5}>
                Daftar
              </Button>
              <Text textAlign="center">
                Sudah punya akun?{" "}
                <Link to="/login" className="form__link">
                  Login
                </Link>
              </Text>
            </form>
          </Box>
        </Center>
      </Flex>
    </Stack>
  );
}

export default Register;
