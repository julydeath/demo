import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  VStack,
  Text,
} from '@chakra-ui/react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const history = useHistory();
  const handleLogo = () => history.push('/');
  const { user, logOut } = useUserAuth();

  const MenuClicked = () => {
    setMenu(!menu);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      window.localStorage.removeItem('accessToken');
    } catch (error) {
      console.log(error);
    }
  };

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="nav"
      bg="bg-surface"
      boxShadow="sm"
      alignItems="center"
      justify="space-between"
      p={2}
    >
      <ButtonGroup>
        <Button onClick={handleLogo} color="purple.500">
          inAcademy
        </Button>
      </ButtonGroup>

      <HStack spacing="4">
        {isDesktop && (
          <ButtonGroup variant="ghost" spacing="1">
            <Link to={'/'}>
              <Button>Home</Button>
            </Link>
            <Link to={'/courses'}>
              <Button aria-current="page">Courses</Button>
            </Link>
            {user && (
              <Link to={'/my-courses'}>
                <Button aria-current="page">My Courses</Button>
              </Link>
            )}

            {user ? (
              <Button onClick={() => handleLogOut()}>Logout</Button>
            ) : (
              <Link to={'/login'}>
                <Button>Login</Button>
              </Link>
            )}
          </ButtonGroup>
        )}
      </HStack>

      {isDesktop ? (
        <HStack spacing="4">
          <ButtonGroup variant="ghost" spacing="1">
            {/* <IconButton
              icon={<FiSearch fontSize="1.25rem" />}
              aria-label="Search"
            /> */}
          </ButtonGroup>

          {user && (
            <Text fontSize="md" color="purple.500">
              {user.email}
            </Text>
          )}

          {/* <ColorModeSwitcher /> */}
        </HStack>
      ) : (
        <IconButton
          variant="ghost"
          icon={
            <FiMenu
              onClick={() => {
                MenuClicked();
              }}
              fontSize="1.25rem"
            />
          }
          aria-label="Open Menu"
        />
      )}
      {menu && (
        <ButtonGroup variant="ghost">
          <div>
            <Link to={'/'}>
              <Button>Home</Button>
            </Link>
            <div>
              <Link to={'/courses'}>
                <Button aria-current="page">Courses</Button>
              </Link>
            </div>
            {user && (
              <div>
                <Link to={'/my-courses'}>
                  <Button aria-current="page">My Courses</Button>
                </Link>
              </div>
            )}
            <div>
              <Link to={'/login'}>
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </ButtonGroup>
      )}
    </Flex>
    //   </Container>
    // </Box>
  );
};

export default Navbar;
