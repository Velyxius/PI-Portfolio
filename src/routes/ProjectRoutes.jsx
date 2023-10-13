import Main from "../pages/main/Main";
import Shapes from "../pages/shapes/Shapes";
import { Route, Routes } from "react-router-dom";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="shapes" element={<Shapes />} />
      </Route>
    </Routes>
  );
};

export default ProjectRoutes;
