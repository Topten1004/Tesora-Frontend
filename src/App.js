
import React from 'react';

// Suspense
import { Fragment, Suspense, lazy } from 'react';

// Theme
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './utils/theme';

// Global Style
// import GlobalStyles from "./utils/globalstyles";

// Pace
// import Pace from "./utils/Pace";

// Store
import { Provider } from 'react-redux';
import store from './redux';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainComponent = lazy(() => import('./components/Main'));


const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<Fragment />} >
            <Routes>
              <Route path="*" element={<MainComponent />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
