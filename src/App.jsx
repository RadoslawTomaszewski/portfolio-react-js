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

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="mvc" element={<MVCPage />} />
          <Route path="mvc/addtodo" element={<AddTodo />} />
          <Route path="mvc/edittodo/:id" element={<EditTodo />} />
        </Route>
      </Routes>
    </>
  );
}
