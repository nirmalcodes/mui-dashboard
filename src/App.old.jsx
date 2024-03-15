import React, { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import { ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routes';

const Home = lazy(() => import('./pages/Home'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <Suspense fallback={'Loading...'}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/settings' element={<Settings />} />

              {ROUTES.map((route, index) => {
                const routeComponent = (child, childIndex) => (
                  <Route
                    key={childIndex}
                    path={route.path + child.path}
                    element={
                      route.protected ? (
                        <ProtectedRoute>
                          {child.component && <child.component />}
                        </ProtectedRoute>
                      ) : (
                        child.component && <child.component />
                      )
                    }
                  />
                );

                return [
                  route.main && route.protected && (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <ProtectedRoute>
                          {route.component && <route.component />}
                        </ProtectedRoute>
                      }
                    />
                  ),
                  route.main && !route.protected && (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.component && <route.component />}
                    />
                  ),
                  ...route.children.map((child, childIndex) =>
                    routeComponent(child, childIndex)
                  ),
                ];
              })}

              <Route path='*' element={<div>404 Page Not Found</div>} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Suspense>
  );
};

export default App;
