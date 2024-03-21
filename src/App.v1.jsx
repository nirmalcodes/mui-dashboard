import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import { ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routes';
import ProtectedRoute from './components/ProtectedRoute';

const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <Suspense fallback={'Loading...'}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Routes>
            {ROUTES.map((route, index) => {
              const {
                path,
                main,
                protected: isProtected,
                component: Component,
                children,
              } = route;

              const routeComponent = (child, childIndex) => {
                const { path: childPath, component: ChildComponent } = child;

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

            <Route path='*' element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Suspense>
  );
};

export default App;
