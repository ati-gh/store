import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./pages/Products";
import SinglePageProduct from "./pages/SinglePageProduct";
import QCProvider from "./providers/QueryProvider";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5521B4",
    },
    secondary: {
      main: "#F1E8FC",
    },
  },
});
function App() {
  return (
    <section>
      <QCProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id" element={<SinglePageProduct />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QCProvider>
    </section>
  );
}

export default App;
