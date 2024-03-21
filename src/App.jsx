import { Suspense, lazy } from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routes';
import ProtectedRoute from './components/ProtectedRoute';
import Spinner from './components/Spinner';

const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <Suspense fallback={<Spinner />}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {ROUTES.map((route, index) => {
              const {
                path,
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
                isProtected && (
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

                !isProtected && (
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
