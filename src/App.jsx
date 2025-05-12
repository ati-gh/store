import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./pages/Products";
import SinglePageProduct from "./pages/SinglePageProduct";
import QCProvider from "./providers/QueryProvider";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import CartContext from "./contexts/Cartcontext";
import { useState } from "react";
import Layout from "./Layout";

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
  const [numberCart, setnumberCart] = useState([]);
  return (
    <div className="md:flex md:flex-col md:justify-center md:items-center">
      <div className="md:max-w-[1360px] w-full">
        <CartContext.Provider value={{ numberCart, setnumberCart }}>
          <Layout>
            <QCProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />

                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Products />} />
                    <Route
                      path="/product/:id"
                      element={<SinglePageProduct />}
                    />
                  </Routes>
                </BrowserRouter>
              </ThemeProvider>
            </QCProvider>
          </Layout>
        </CartContext.Provider>
      </div>
    </div>
  );
}

export default App;
