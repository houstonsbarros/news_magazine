import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/home";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import i18n from "./i18n";
import routes from "./app/routes";

i18n.init();

export interface ComponentRoute {
  path: string;
  component: React.ComponentType;
}

function App() {
  function generateRoutes(routes: ComponentRoute[]) {
    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={<route.component />} />
    ));
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {generateRoutes(routes)}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
