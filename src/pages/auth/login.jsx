/* eslint-disable array-callback-return */
import React from "react";
import {
  Box,
  Flex,
  Center,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import authRequest from "../../services/api";
import "./index.scss";
import { useForm } from "react-hook-form";

function Login() {
  let history = useHistory();
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});
  const { register, handleSubmit, errors } = useForm();

  const loginHandler = async (data) => {
    setLoading(true);
    setError({});
    authRequest
      .login(data)
      .then((res) => {
        setError({});
        localStorage.setItem("token", res.token);
        setLoading(false);
        history.push("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const checkStatus = React.useCallback(() => {
    if (localStorage.getItem("token")) {
      history.push("/dashboard");
    } else {
      history.push("/login");
    }
  }, [history]);

  React.useEffect(() => {
    checkStatus();
  }, [checkStatus]);

  return (
    <Flex height="100vh">
      <Center width="50%" px="20px" bg="blue.100" display={{ base: "none", lg: "flex" }}>
        <Image src={`${process.env.PUBLIC_URL}/assets/logo.png`} height="15rem" objectFit="cover" />
      </Center>
      <Center width={{ base: "full", lg: "50%" }} display="flex" flexDirection="column">
        <Box marginTop="40px" width={{ base: "full", lg: "50%" }} padding={7} py={10} borderRadius={3}>
          <Heading as="h5" size="lg" color="grey.500" mb={8}>
            Login
          </Heading>
          <form onSubmit={handleSubmit(loginHandler)}>
            <FormControl id="email" mb={5} isInvalid={errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="text"
                name="email"
                placeholder="Email "
                onChange={(e) => setData({ ...data, email: e.target.value })}
                ref={register({ required: "Harap masukan email anda." })}
              />
              {errors.email && <FormErrorMessage>{errors.email?.message}</FormErrorMessage>}
            </FormControl>
            <FormControl id="password" mb={5} isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                ref={register({ required: "Harap masukan password anda." })}
              />
              {errors.password && <FormErrorMessage>{errors.password?.message}</FormErrorMessage>}
            </FormControl>
            <FormControl mb={5}>
              <Link to="/forgot-password" className="form__link">
                Lupa password?
              </Link>
            </FormControl>
            <Button isLoading={loading} variant="solid" colorScheme="green" w="full" height={12} mb={5} type="submit">
              Login
            </Button>
            <Text>
              Belum punya akun?{" "}
              <Link to="/register" className="form__link">
                Daftar Sekarang
              </Link>
            </Text>
          </form>
        </Box>
      </Center>
    </Flex>
  );
}

export default Login;
