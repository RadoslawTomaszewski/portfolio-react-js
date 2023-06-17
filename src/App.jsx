import "./App.css";
import {
  HomePage,
  EducationPage,
  ExperiencePage,
  ProjectsPage,
  MVCPage,
} from "./pages";
import { Route, Routes } from "react-router";
import { Layout } from "./Layout";

// import AddTodo from "./pages/MVCPage/pages/AddTodo";
// import EditTodo from "./pages/MVCPage/pages/EditTodo";

export default function App() {
  return (
    <>
      <Routes>
        <Route basename={process.env.PUBLIC_URL} path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="mvc" element={<MVCPage />} />
        </Route>
      </Routes>
    </>
  );
}
