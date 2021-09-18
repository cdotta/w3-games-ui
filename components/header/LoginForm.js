import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import userAPI from '../../lib/api/userAPI';
import { STATUSES } from '../../lib/store/helpers';
import { selectUser } from '../../lib/store/selectors';
import { login, register } from '../../lib/store/user.reducer';
import { useWeb3 } from '../../lib/web3-hooks';

export default function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
  const { web3, loading } = useWeb3();
  const toast = useToast();
  const dispatch = useDispatch();
  const { loginAndRegisterStatus, loginAndRegisterError } =
    useSelector(selectUser);

  useEffect(() => {
    if (loginAndRegisterError) {
      const title = loginAndRegisterError.message;
      toast({
        title,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [loginAndRegisterError, toast]);

  useEffect(() => {
    if (loginAndRegisterStatus === STATUSES.SUCCEEDED) {
      toast({
        title: 'Welcome to w3 games',
        status: 'success',
        duration: 5000,
      });
      onClose();
    }
  }, [loginAndRegisterStatus, toast, onClose]);

  const handleRegister = useCallback(
    async (event) => {
      try {
        event.preventDefault();
        const selectedAccount = await web3.eth.getCoinbase();
        const message = `Please sign your register with ${selectedAccount}`;
        const signature = await web3.eth.personal.sign(
          message,
          selectedAccount,
        );
        dispatch(
          register({
            signature,
            publicAddress: selectedAccount,
            username,
          }),
        );
      } catch {
        toast({
          title: 'Register signature attempt failed',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    },
    [dispatch, toast, username, web3],
  );

  const handleLogin = useCallback(async () => {
    let nonce;
    try {
      const selectedAccount = await web3.eth.getCoinbase();
      nonce = (await userAPI.fetchNonce(selectedAccount)).nonce;
      const message = `Welcome aboard, please sign your login with this nonce: ${nonce}`;
      const signature = await web3.eth.personal.sign(message, selectedAccount);
      dispatch(
        login({
          signature,
          publicAddress: selectedAccount,
        }),
      );
    } catch {
      toast({
        title: nonce
          ? 'Login signature attempt failed'
          : 'Please make sure that you are registred first',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [dispatch, toast, web3]);

  return (
    <Modal isOpen isCentered onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody paddingBottom="10">
          {loading && (
            <Flex alignItems="center" flexDirection="column">
              <Heading size="lg">Waiting for MetaMask</Heading>
              <Spinner size="xl" />
            </Flex>
          )}
          {!loading && (
            <Box>
              <Button
                onClick={handleLogin}
                mt={4}
                colorScheme="customOrange"
                type="submit"
                w="100%"
                disabled={loginAndRegisterStatus === STATUSES.LOADING}
              >
                Login with MetaMask
              </Button>
              <HStack my="5">
                <Divider />
                <Text>or</Text>
                <Divider />
              </HStack>
              <Box as="form" onSubmit={handleRegister}>
                <Heading size="lg">Create account</Heading>
                <FormControl id="username" marginY="5" isRequired>
                  <Input
                    type="text"
                    placeholder="Choose a username"
                    value={username}
                    minLength="4"
                    onChange={({ target }) => setUsername(target.value)}
                  />
                </FormControl>
                <Button
                  mt={4}
                  colorScheme="customOrange"
                  type="submit"
                  w="100%"
                  disabled={loginAndRegisterStatus === STATUSES.LOADING}
                >
                  Sign up with MetaMask
                </Button>
              </Box>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
