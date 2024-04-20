import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/home";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from "./i18n";

i18n.init();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
