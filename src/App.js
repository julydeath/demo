import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomePage from './components/home';
import CoursePage from './components/courses';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import MyCourses from './components/courses/MyCourses';
import Chapter from './components/courses/Chapter';
import CourseDetails from './components/courses/CourseDetails';
import Login from './components/Authuntication/Login';
import SignUp from './components/Authuntication/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserAuthContextProvider>
        <Router>
          <ChakraProvider theme={theme}>
            <Box
              px={{
                base: '2',
                md: '4',
              }}
            >
              <Navbar />

              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>

                <Route path="/courses" exact>
                  <CoursePage />
                </Route>
                <Route path="/my-courses" exact>
                  <MyCourses />
                </Route>

                <Route path="/my-courses/read/:id" exact>
                  <CourseDetails />
                </Route>

                <Route path="/my-courses/read/:id/:section/:chapter">
                  <Chapter />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
              </Switch>

              <Footer />
            </Box>
          </ChakraProvider>
        </Router>
      </UserAuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
