import Main from "./pages/main/Main";
import Shapes from "./pages/shapes/Shapes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="shapes">
            <Route index element={<Shapes />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
