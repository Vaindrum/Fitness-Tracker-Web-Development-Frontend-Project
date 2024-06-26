import { ThemeProvider,styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Plans from "./pages/Plans";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

// Container is basically a styled component
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [user, setuser] = useState(false);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      {user ? (
        <Container>
          <Navbar setuser={setuser}/>
          <Routes>
              <Route path="/" exact element={<Dashboard/>}/>
              <Route path="/workouts" exact element={<Workouts/>}/>
              <Route path="/plans" exact element={<Plans/>}/>
              <Route path="/forum" exact element={<Forum/>}/>
              <Route path="/products" exact element={<Products/>}/>
              <Route path="/contact" exact element={<Contact/>}/>
          </Routes>
        </Container>
      ) : (
      <Container>
        <Authentication setuser={setuser}/>
      </Container>
      )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
