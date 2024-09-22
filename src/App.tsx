import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shop from "./pages/Shop";

function App() {
  return (
    <Container>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </Container>
  );
}

export default App;
