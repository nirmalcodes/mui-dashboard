import React, { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import { ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routes';
import ProtectedRoute from './components/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <Suspense fallback={'Loading...'}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* <Layout> */}
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/settings' element={<Settings />} /> */}

            {ROUTES.map((route, index) => {
              const {
                path,
                component: Component,
                main,
                protected: isProtected,
                children,
              } = route;

              const routeComponent = (child, childIndex) => {
                const { component: ChildComponent, path: childPath } = child;

                return (
                  <Route
                    key={childIndex}
                    path={path + childPath}
                    element={
                      isProtected ? (
                        <ProtectedRoute>
                          {ChildComponent && <ChildComponent />}
                        </ProtectedRoute>
                      ) : (
                        ChildComponent && <ChildComponent />
                      )
                    }
                  />
                );
              };

              return [
                main && isProtected && (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <ProtectedRoute>
                        {Component && <Component />}
                      </ProtectedRoute>
                    }
                  />
                ),

                main && !isProtected && (
                  <Route
                    key={index}
                    path={path}
                    element={Component && <Component />}
                  />
                ),
                ...children.map((child, childIndex) =>
                  routeComponent(child, childIndex)
                ),
              ];
            })}

            <Route path='*' element={<div>404 Page Not Found</div>} />
          </Routes>
          {/* </Layout> */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Suspense>
  );
};

export default App;
